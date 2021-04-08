from django.db import models
from django_mysql.models import ListTextField


class Advisor(models.Model):
    advisor_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=20, blank=True, null=True)
    last_name = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=30, blank=True, null=True)
    password = models.CharField(max_length=30, blank=True, null=True)
    grade = models.CharField(max_length=3, blank=True, null=True)
    room_number = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        db_table = 'advisor'



class Parent(models.Model):
    parent_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=20, blank=True, null=True)
    last_name = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=30, blank=True, null=True)
    password = models.CharField(max_length=30, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        db_table = 'parent'


class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=20, blank=True, null=True)
    last_name = models.CharField(max_length=20, blank=True, null=True)
    parent = models.ForeignKey(Parent, models.CASCADE, blank=True, null=True)
    advisor = models.ForeignKey(Advisor, models.CASCADE, blank=True, null=True)
    grade = models.CharField(max_length=3, blank=True, null=True)
    birthday = models.DateField(blank=True, null=True)
    activity_curr = models.JSONField(default=list, blank=True, null=True)
    activity_base = models.JSONField(default=list, blank=True, null=True)
    route_no = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'student'

class UpdateRequest(models.Model):
    student_id = models.IntegerField(blank=False, null=False)
    activity_curr = models.JSONField(default=list, blank=True, null=True)
    activity_base = models.JSONField(default=list, blank=True, null=True)
