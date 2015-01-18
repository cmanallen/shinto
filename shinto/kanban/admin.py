from django.contrib import admin

from .models import Board, Card, Activity, Comment


admin.site.register(Board)
admin.site.register(Card)
admin.site.register(Activity)
admin.site.register(Comment)
