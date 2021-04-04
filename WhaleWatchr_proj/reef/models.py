from django.db import models

class Parent(models.Model):
    email = models.EmailField('email')
    first_name = models.CharField('first_name', max_length=100)
    last_name = models.CharField('last_name', max_length=100)
    address = models.CharField('address', max_length=240)
    phone_number = models.CharField('phone_number', max_length=15)


class Advisor(models.Model):
    email = models.EmailField('email')
    first_name = models.CharField('first_name', max_length=100)
    last_name = models.CharField('last_name', max_length=100)
    grade = models.CharField('grade', max_length=5)
    room_num = models.IntegerField('room_num')


class Student(models.Model):
    student_id = models.IntegerField('student_id')
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE)
    teacher_email = models.EmailField('teacher_email')
    grade = models.CharField('grade', max_length=5)
    age = models.IntegerField('age')
    activity_id = models.IntegerField('activity_id')
    advisor = models.ForeignKey(Advisor, on_delete=models.CASCADE)


class Transport_logs(models.Model):
    log_num = models.IntegerField('log_num')
    route_num = models.IntegerField('route_num')
    date = models.DateField('date')
    time_to_arrive = models.TimeField('time_to_arrive')
    
    
