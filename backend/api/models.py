from django.db import models


class Task(models.Model):
    """
    Пользовательские задачи
    """
    description = models.TextField()

    assign_at = models.DateTimeField()

    completed = models.BooleanField(default=False)

    # user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='tasks')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.description}'
