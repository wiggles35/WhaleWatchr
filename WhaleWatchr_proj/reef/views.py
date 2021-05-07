from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Student, Advisor, Parent, UpdateRequest, ActivityChange
from .serializers import *


@api_view(['GET', 'POST'])
def students_list(request):
    if request.method == 'GET':
        ''' This is for getting all students, parents, and advisors '''
        student_data = Student.objects.all()
        advisor_data = Advisor.objects.all()
        parent_data  = Parent.objects.all()

        students_serializer = StudentSerializer(student_data, context={'request': request}, many=True)
        advisors_serializer = AdvisorSerializer(advisor_data, context={'request': request}, many=True)
        parents_serializer  = ParentSerializer(parent_data, context={'request': request}, many=True)
        response = {'students': {student['student_id']:student for student in students_serializer.data}, 
                    'parents': {parent['parent_id']:parent for parent in parents_serializer.data},
                    'advisors': {advisor['advisor_id']:advisor for advisor in advisors_serializer.data}
        }
        return Response(response)

    elif request.method == 'POST':
        ''' This creates a student'''
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def students_detail(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StudentSerializer(student, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = StudentSerializer(student, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def advisors_list(request):
    ''' This is to create a new advisor '''
    if request.method == 'POST':
        serializer = AdvisorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def advisors_detail(request, pk):
    ''' this is to get all the students in an advisors classroom '''
    try:
        # check to make sure the user entered a valid advisor_id
        advisor = Advisor.objects.get(pk=pk)
    except Advisor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        data = Student.objects.filter(advisor_id=pk)
        serializer = StudentSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AdvisorSerializer(advisor, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    


@api_view(['GET'])
def buses_list(request, route_num):
    ''' this is to get all the students on a particular bus route 4/6 UPDATE: this couldn't be tested since bus routes weren't live '''
    if request.method == 'GET': # this statement is redundant rn but will probably add more to this endpoint in the future
        data = Student.objects.filter(route_no=route_num)
        serializer = StudentSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def parents_list(request):
    ''' This endpoint handles creating parents '''
    if request.method == 'POST':
        serializer = ParentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def parents_detail(request, pk):
    ''' This endpoint allows for getting or modifying or deleting specific parents '''
    try:
        parent = Parent.objects.get(pk=pk)
    except Parent.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ParentSerializer(parent, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == 'DELETE':
        parent.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'GET':
        data = Student.objects.filter(parent=pk)
        serializer = StudentSerializer(data, context={'request': request}, many=True)
        return Response({"students": serializer.data})


@api_view(['GET', 'POST'])
def updateRequest_list(request):
    ''' this is the endpoint for Creating and viewing activity requests '''
    if request.method == 'GET':
        data = UpdateRequest.objects.all()
        serializer = UpdateRequestSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UpdateRequestSerializer(data=request.data)
        if serializer.is_valid() and Student.objects.get(pk=serializer.validated_data['student']):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        if serializer.is_valid():
            print('valid')
        else:
            print('not valid')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def activityChange_list(request):
    ''' this is the endpoint for Creating and viewing activity requests '''
    if request.method == 'GET':
        data = ActivityChange.objects.all()
        serializer = ActivityChangeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ActivityChangeSerializer(data=request.data)
        if serializer.is_valid() and Student.objects.get(pk=serializer.validated_data['student'].student_id):
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
