from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import User


# Create your models here.

class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

# game/models.py

# class TypingText(models.Model):
#     title = models.CharField(max_length=255)
#     content = models.TextField()
#     is_default = models.BooleanField(default=False, unique=True)

#     def save(self, *args, **kwargs):
#         if self.is_default:
#             TypingText.objects.update(is_default=False)
#         super().save(*args, **kwargs)

#     def __str__(self):
#         return self.title

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # industry = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username