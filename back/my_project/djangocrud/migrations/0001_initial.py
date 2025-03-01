# Generated by Django 5.0.6 on 2024-07-08 03:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Horarios',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('jornada', models.CharField(choices=[('AM', 'Mañana'), ('PM', 'Tarde')], default='AM', max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Materias',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Registros',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombres', models.CharField(max_length=80)),
                ('apellidos', models.CharField(max_length=80)),
                ('correo', models.CharField(max_length=40)),
                ('horario', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='djangocrud.horarios')),
                ('materia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='djangocrud.materias')),
            ],
        ),
    ]
