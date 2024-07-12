from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('contents/', views.getContents, name="contents"),
    path('contents/<str:pk>', views.getSingleContent, name="content"),

]