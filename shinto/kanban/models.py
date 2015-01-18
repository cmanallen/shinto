from django.conf import settings
from django.db import models

from django_extensions.db.models import TimeStampedModel


class FieldMixin(models.Model):

	name = models.CharField(max_length=255)
	position = models.IntegerField()

	class Meta:
		abstract = True


class Board(FieldMixin, TimeStampedModel):
	
	def __str__(self):
		return "%s" % self.name


class Card(FieldMixin, TimeStampedModel):

	board = models.ForeignKey(Board, related_name="cards")

	def __str__(self):
		return "%s" % self.name


class Activity(FieldMixin, TimeStampedModel):

	card = models.ForeignKey(Card, related_name="activities")
	user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="user")
	creator = models.ForeignKey(
		settings.AUTH_USER_MODEL, related_name="creator"
	)

	def __str__(self):
		return "%s" % self.name


class Comment(TimeStampedModel):

	activity = models.ForeignKey(Activity, related_name="comments")
	user = models.ForeignKey(settings.AUTH_USER_MODEL)

	body = models.TextField()

	def __str__(self):
		return "%s's comment on %s" % (
			self.user.username, self.activity.name
		)
