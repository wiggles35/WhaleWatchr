

export const getAllStudents = (setStudentsObj, setFullDict) => {
    const studentsURL = "http://db.cse.nd.edu:5004/api/students/"

    fetch(studentsURL)
            .then((response) => response.json())
            .then((json) => {
                setFullDict(json)
                const studList = Object.values(json["students"]);
                const fullStudList = studList.map((student) => {
                    // for each student, add a new object to a list with all props of student plus advisor name
                    let newStud = {
                        ...student,
                        'advisorName': (
                            json["advisors"][student.advisor.toString()]["first_name"]
                            + " " + json["advisors"][student.advisor.toString()]["last_name"]
                        ),
                        'parentName' : (
                            json["parents"][student.parent.toString()]["first_name"] + " " + 
                            json["parents"][student.parent.toString()]["last_name"]
                        ),
                        'parentEmail' : (
                            json["parents"][student.parent.toString()]["email"]
                        ),
                        'parentPhone' : (
                            json["parents"][student.parent.toString()]["phone_number"]
                        )
                    };
                    return newStud;
                });
                console.log(fullStudList);
                setStudentsObj(fullStudList);
            })
            .catch((error) => alert(error));
};

export const getActiviyChanges = ( setActList, fullDict ) => {

    const activitiesURL = "http://db.cse.nd.edu:5004/api/activityChange/"

    fetch(activitiesURL)
        .then((response) => response.json())
        .then((json) => {
            const newActList = json.map((actReq) => {
                return {
                    ...actReq,
                    'student_name': (
                        fullDict['students'][actReq['student']]['first_name']
                        + ' ' + fullDict['students'][actReq['student']]['last_name']
                    )
                };
            });
            console.log(newActList);
            setActList(newActList);
        })
        .catch((error) => alert(error));
};