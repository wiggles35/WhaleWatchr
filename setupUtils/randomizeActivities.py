#!/usr/bin/env python

import requests
import json
from random import seed
from random import randint

def main():

    studentsURL = 'http://db.cse.nd.edu:5004/api/students/'
    seed(1)

    studData = requests.get(studentsURL).json()['students']

    print(studData)
    for studId, student in studData.items():
        newStudent = student
        for i in range(0,5):
            newStudent['activity_curr'][str(i)] = randint(1, 10)
            newStudent['activity_base'][str(i)] = randint(1, 10)
        
        jsonString = json.dumps(newStudent)
        headers = {
            'content-type': 'application/json',
            'content-length': str(len(jsonString))
        }

        requests.put(studentsURL + str(studId), data=jsonString, headers=headers)


if __name__ == '__main__':
    main()