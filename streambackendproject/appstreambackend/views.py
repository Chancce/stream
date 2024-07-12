from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
from .movies_shows import movies_shows

@api_view(['GET', 'POST'])
def getRoutes(request):
    return JsonResponse('Food is good', safe=False)
@api_view(['GET', 'POST'])
def getContents(request):
    return Response(movies_shows)

@api_view(['GET', 'POST'])
def getSingleContent(request, pk):
    content = None

    for i in movies_shows:
        if i['uid'] == pk:
            content = i
            break
    return Response(content)



