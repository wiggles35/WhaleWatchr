from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
        fields = ('pk', 'student_id', 'parent', 'teacher_email', 'grade', 'age', 'activity_id', 'advisor')

