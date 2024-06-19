"""
The `home` function renders the index.html template and passes a list of the top 10 scores from the `Score` model, ordered by descending score.
"""

"""
The `register` function handles user registration. If the request method is POST, it creates a `CustomUserCreationForm` instance with the request POST data, and if the form is valid, it saves the user, logs them in, and creates a new `Score` object with the latest score submitted in the POST data. If the form is invalid, it prints the form errors to the console for debugging. If the request method is GET, it creates a new `CustomUserCreationForm` instance and renders the register.html template with the form.
"""

"""
The `submit_score` function handles the submission of a new score. If the request method is POST, it creates a new `Score` object with the user and the score submitted in the POST data, and returns a JSON response with a 'success' status. If the request method is not POST, it returns a JSON response with a 'fail' status.
"""

"""
The `save_score` function handles the saving of a new score. If the request method is POST, it loads the score data from the request body, stores the latest score in the session, and returns a JSON response with a 'success' status. If the request method is not POST, it returns a JSON response with a 'failed' status and a 400 HTTP status code.
"""
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Score
from .forms import CustomUserCreationForm
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Max
import json
from django.contrib.auth.models import User 
from django.urls import reverse
from django.http import HttpResponse, JsonResponse
from django.template.loader import render_to_string
from django.views.generic import TemplateView


def home(request):
    top_scores = (Score.objects.values('user')
                  .annotate(max_score=Max('score'))
                  .order_by('-max_score')[:10])
    user_ids = [score['user'] for score in top_scores]
    users = User.objects.in_bulk(user_ids)
    
    for score in top_scores:
        score['user'] = users[score['user']]

    best_score = None
    latest_score = None
    if request.user.is_authenticated:
        user_scores = Score.objects.filter(user=request.user).order_by('-id')
        if user_scores.exists():
            best_score = user_scores.aggregate(Max('score'))['score__max']
            latest_score = user_scores.first().score
    
    register_url = reverse('register')
    return render(request, 'index.html', {
        'scores': top_scores,
        'register_url': register_url,
        'is_authenticated': request.user.is_authenticated,
        'best_score': best_score,
        'latest_score': latest_score,
    })

def get_leaderboard(request):
    top_scores = (Score.objects.values('user')
                  .annotate(max_score=Max('score'))
                  .order_by('-max_score')[:10])
    user_ids = [score['user'] for score in top_scores]
    users = User.objects.in_bulk(user_ids)

    leaderboard_data = [
        {'username': users[score['user']].username, 'score': score['max_score']}
        for score in top_scores
    ]
    return JsonResponse({'leaderboard': leaderboard_data})


def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)

            # Check if there is a pending score in the session and submit it
            pending_score = request.session.pop('pending_score', None)
            if pending_score is not None:
                Score.objects.create(user=user, score=pending_score)

            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})




@login_required
def submit_score(request):
    if request.method == 'POST':
        try:
            json_data = json.loads(request.body.decode('utf-8'))
            score = json_data['score']
            user_score = Score.objects.create(user=request.user, score=score)

            # Calculate best score and latest score
            best_score = Score.objects.filter(user=request.user).order_by('-score').first().score
            latest_score = user_score.score

            return JsonResponse({'status': 'success', 'best_score': best_score, 'latest_score': latest_score})
        except KeyError:
            return JsonResponse({'status': 'fail', 'message': 'Missing score data'})
        


@csrf_exempt
def store_pending_score(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            pending_score = data.get('pending_score')
            if pending_score is not None:
                request.session['pending_score'] = pending_score
                return JsonResponse({'status': 'success'})
            else:
                return JsonResponse({'status': 'fail', 'message': 'No pending score provided'})
        except Exception as e:
            return JsonResponse({'status': 'fail', 'message': str(e)})
    return JsonResponse({'status': 'fail', 'message': 'Invalid request method'})


@csrf_exempt
def save_score(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        request.session['latest_score'] = data['score']
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'failed'}, status=400)


class PrivacyPolicyView(TemplateView):
    template_name = 'privacy_policy.html'

class TermsOfServiceView(TemplateView):
    template_name = 'terms_of_service.html'