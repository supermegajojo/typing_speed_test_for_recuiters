# game/urls.py
from django.urls import path
from . import views
from .views import PrivacyPolicyView, TermsOfServiceView
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView



urlpatterns = [
    path('', views.home, name='home'),
    path('submit_score/', views.submit_score, name='submit_score'),
    path('register/', views.register, name='register'),
    path('save_score/', views.save_score, name='save_score'),
    path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),  # Django's built-in logout view
    path('login/', auth_views.LoginView.as_view(template_name='game/templates/login.html'), name='login'),
    path('favicon.ico', RedirectView.as_view(url='/static/images/favicon.ico', permanent=True)),
    path('store_pending_score/', views.store_pending_score, name='store_pending_score'),
    path('get_leaderboard/', views.get_leaderboard, name='get_leaderboard'),
    path('privacy-policy/', PrivacyPolicyView.as_view(), name='privacy_policy'),
    path('terms-of-service/', TermsOfServiceView.as_view(), name='terms_of_service'),
]