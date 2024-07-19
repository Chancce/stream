from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import ShowSerializer

from .movies_shows import movies_shows
from .models import Show
# Create your views here.


@api_view(['GET', 'POST'])
def getRoutes(request):
    return JsonResponse('Food is good', safe=False)


@api_view(['GET', 'POST'])
def getAllShows(request):
    shows=Show.objects.all()
    serializer = ShowSerializer(shows, many=True)
    return Response(serializer.data)



@api_view(['GET', 'POST'])
def getOneShow(request, pk):
    show = None

    for i in movies_shows:
        if i['uuid'] == pk:
            show = i
            break
    return Response(show)



