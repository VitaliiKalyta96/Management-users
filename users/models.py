from django.db import models


class User(models.Model):
    username = models.CharField("User name", max_length=255)
    group = models.CharField("Group", max_length=30)
    created = models.DateField("Created At", auto_now_add=True)

    def __str__(self):
        return self.username