from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import User


# Create your models here.

class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # industry = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username