from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from moviepy.editor import VideoFileClip
import random
# Create your models here.

import uuid

SHOW_TYPE =(('Movie','Movie'),('Series','Series'))
GENRES = (
    ('Action', 'Action'),
    ('Comedy', 'Comedy'),
    ('Crime', 'Crime'),
    ('Drama', 'Drama'),
    ('Horror', 'Horror'),
    ('Romance', 'Romance'),
    ('Thriller', 'Thriller'),
)
class Show(models.Model):
    title = models.CharField(max_length=1000, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    #release_date = models.DateTimeField(blank=True, null=True)
    #length = models.DurationField(blank=True, null=True)
    video_file = models.FileField(upload_to='videos/')
    poster = models.ImageField(upload_to='posters/')
    show_type = models.CharField(choices=SHOW_TYPE, max_length=20)
    genre = models.CharField(choices=GENRES, max_length=100, blank=True)
    IMDB_rating=models.IntegerField(blank=True, null=True)
    uuid = models.UUIDField(default=uuid.uuid4)
    
    def __str__(self):
        return self.title


    if IMDB_rating is None:
        IMDB_rating = round(random.uniform(1.0, 5.0), 1)
        

    





