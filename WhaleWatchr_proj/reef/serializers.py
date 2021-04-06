from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
        fields = ('student_id', 'first_name', 'last_name', 'parent_id', 'advisor_id', 'grade', 'birthday', 'activity_id', 'route_no')

