from django.conf.urls import patterns, include, url
from django.contrib import admin

from rest_framework.routers import DefaultRouter

from kanban.views import (
	BoardViewSet, CardViewSet, ActivityViewSet, CommentViewSet, UserViewSet
)


router = DefaultRouter()
router.register(r'board', BoardViewSet)
router.register(r'card', CardViewSet)
router.register(r'activity', ActivityViewSet)
router.register(r'comment', CommentViewSet)
router.register(r'user', UserViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'shinto.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/', include(router.urls)),
	url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
)
