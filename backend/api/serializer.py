# from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    # user_id = serializers.PrimaryKeyRelatedField(source='user', queryset=User.objects.all(), required=False)

    class Meta:
        model = Task
        fields = (
            'id',
            'description',
            'assign_at',
            'completed',
            # 'user',
            'created_at',
            'updated_at'
        )