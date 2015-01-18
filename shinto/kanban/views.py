from django.conf import settings
from django.contrib.auth.models import User

from rest_framework.viewsets import ModelViewSet

from .models import Board, Card, Activity, Comment
from .serializers import (
	UserSerializer, CommentSerializer, ActivitySerializer, CardSerializer, 
	BoardSerializer
)


class BoardViewSet(ModelViewSet):
	
	queryset = Board.objects.all()
	serializer_class = BoardSerializer


class CardViewSet(ModelViewSet):
	
	queryset = Card.objects.all()
	serializer_class = CardSerializer


class ActivityViewSet(ModelViewSet):
	
	queryset = Activity.objects.all()
	serializer_class = ActivitySerializer


class CommentViewSet(ModelViewSet):
	
	queryset = Comment.objects.all()
	serializer_class = CommentSerializer


class UserViewSet(ModelViewSet):

	queryset = User.objects.all()
	serializer_class = UserSerializer