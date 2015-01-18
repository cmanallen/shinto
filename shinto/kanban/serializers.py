from django.conf import settings

from rest_framework.serializers import (
	ModelSerializer, HyperlinkedModelSerializer, Field
)

from .models import Board, Card, Activity, Comment


class UserSerializer(ModelSerializer):

	class Meta:
		model = settings.AUTH_USER_MODEL
		fields = ('id', 'first_name', 'last_name')


class CommentSerializer(ModelSerializer):

	class Meta:
		model = Comment
		fields = ('id', 'body')


class ActivitySerializer(ModelSerializer):
	
	comments = CommentSerializer(many=True, read_only=True)

	class Meta:
		model = Activity
		fields = ('id', 'name', 'position', 'card', 'comments')


class CardSerializer(ModelSerializer):
	
	activities = ActivitySerializer(many=True, read_only=True)

	class Meta:
		model = Card
		fields = ('id', 'name', 'position', 'activities')


class BoardSerializer(HyperlinkedModelSerializer):

	cards = CardSerializer(many=True, read_only=True)

	class Meta:
		model = Board
		fields = ('url', 'id', 'name', 'position', 'cards')
