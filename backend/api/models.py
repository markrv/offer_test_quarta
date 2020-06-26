from django.db import models


class Task(models.Model):
    """
    Пользовательские задачи
    """
    description = models.TextField()

    assign_at = models.DateField()

    completed = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.description}'
