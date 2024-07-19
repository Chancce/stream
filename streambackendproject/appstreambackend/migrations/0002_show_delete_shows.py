# Generated by Django 5.0.7 on 2024-07-18 11:09

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appstreambackend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Show',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000)),
                ('description', models.TextField()),
                ('release_date', models.DateTimeField(blank=True, null=True)),
                ('length', models.DurationField(blank=True, null=True)),
                ('video_file', models.FileField(upload_to='video_media/')),
                ('poster', models.ImageField(upload_to='posters/')),
                ('show_type', models.CharField(choices=[('Movie', 'Movie'), ('Series', 'Series')], max_length=20)),
                ('uuid', models.UUIDField(default=uuid.uuid4)),
            ],
        ),
        migrations.DeleteModel(
            name='Shows',
        ),
    ]
