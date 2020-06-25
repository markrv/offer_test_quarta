from rest_framework.viewsets import ModelViewSet

from .serializer import TaskSerializer
from .models import Task


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    search_fields = ('description',)
    # permission_classes = (permissions.IsAuthenticated,)
