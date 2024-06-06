




from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from .models import Score
from django.http import JsonResponse

def home(request):
    scores = Score.objects.all().order_by('-score')[:10]
    return render(request, 'index.html', {'scores': scores})

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            password = form.cleaned_data.get('password1')
            email = form.cleaned_data.get('email')
            company = form.cleaned_data.get('company')
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})


@login_required
def submit_score(request):
    if request.method == 'POST':
        score = request.POST['score']
        Score.objects.create(user=request.user, score=score)
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'fail'})