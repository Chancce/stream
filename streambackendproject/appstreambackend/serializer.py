from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = '__all__'