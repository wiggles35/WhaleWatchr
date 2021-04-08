from rest_framework import serializers
from .models import Student, Advisor, Parent

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
        fields = '__all__'

class AdvisorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advisor
        fields = '__all__'

class ParentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parent
        fields = '__all__'