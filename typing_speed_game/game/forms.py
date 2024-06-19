"""
Defines a custom user creation form that extends the Django UserCreationForm. The form includes additional fields for email, industry, and company name.

The `CustomUserCreationForm` class inherits from `UserCreationForm` and adds the following fields:
- `email`: An email field that is required.
- `industry`: A choice field that allows the user to select their industry from a predefined list of options.
- `company_name`: A character field that allows the user to enter their company name.

The `save()` method overrides the parent class's `save()` method to save the additional user profile information (industry and company name) after creating the user instance.
"""
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import Profile

class CustomUserCreationForm(UserCreationForm):
    industry_choices = [
        ('tech', 'Tech'),
        ('finance', 'Finance'),
        ('healthcare', 'Healthcare'),
        # Add more industries as needed
    ]
    
    email = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=30, required=True)
    last_name = forms.CharField(max_length=30, required=True)
    # industry = forms.ChoiceField(choices=industry_choices)
    company_name = forms.CharField(max_length=100)

    class Meta:
        model = User
        fields = ['username','first_name','last_name', 'email', 'password1', 'password2', 'company_name']



    def save(self, commit=True):
        #Saves the user instance without committing it to the database. This allows further modifications to the user instance before it is finally saved.
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        if commit:
            user.save()
            profile = Profile(user=user)
            # profile.industry = self.cleaned_data['industry']
            profile.company_name = self.cleaned_data['company_name']
            profile.save()
        return user