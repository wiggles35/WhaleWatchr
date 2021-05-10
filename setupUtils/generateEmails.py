#!/usr/bin/env python

import requests
import json

def main():

    studentsURL = 'http://db.cse.nd.edu:5004/api/students/'
    parentsURL = 'http://db.cse.nd.edu:5004/api/parents/'

    parData = requests.get(studentsURL).json()['parents']

    print(parData)
    for parId, parent in parData.items():
        parent['email'] = parent['first_name'][0].lower() + parent['last_name'][0:4].lower() + '@gmail.com'
        
        jsonString = json.dumps(parent)
        headers = {
            'content-type': 'application/json',
            'content-length': str(len(jsonString))
        }

        print(parent)
        requests.put(parentsURL + str(parId), data=jsonString, headers=headers)

if __name__ == '__main__':
    main()