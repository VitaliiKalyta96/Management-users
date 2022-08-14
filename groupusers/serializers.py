from rest_framework import serializers
from .models import User


class GroupUsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'name', 'description')
