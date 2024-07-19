from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('shows/', views.getAllShows, name="shows"),
    path('shows/<str:pk>', views.getOneShow, name="show"),

]