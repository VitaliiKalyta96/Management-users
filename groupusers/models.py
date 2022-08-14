from django.db import models


class User(models.Model):
    name = models.CharField("User name", max_length=255)
    description = models.CharField("Description", max_length=255)

    def __str__(self):
        return self.name
