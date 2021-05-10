

export const getAllStudents = (setStudentsObj, setFullDict, setActList) => {
    const studentsURL = "http://db.cse.nd.edu:5004/api/students/"
    const activitiesURL = "http://db.cse.nd.edu:5004/api/activityChange/"

    const currDate = new Date();
    const currDay = currDate.getDay() - 1;

    let fullDict = {};

    fetch(studentsURL)
            .then((response) => response.json())
            .then((json) => {
                setFullDict(json);
                fullDict = json;
                console.log(fullDict);
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
                        ),
                        'actToday': ( currDay >= 0 && currDay <= 4 ? (activities[student['activity_curr'][currDay.toString()]]) : ('None'))
                    };
                    return newStud;
                });
                console.log(fullStudList);
                setStudentsObj(fullStudList);
                return fullDict;
            })
            .then((fullDict) => {
                //nested request to activities, need all data first
                fetch(activitiesURL)
                .then((response) => response.json())
                .then((json) => {
                    const newActList = json.map((actReq) => {
                        return ({
                            ...actReq,
                            'act_str': activities[actReq.activity_type],
                            'student_name': (
                                fullDict['students'][actReq['student'].toString()]['first_name']
                                + ' ' + fullDict['students'][actReq['student'].toString()]['last_name']
                            )
                        });
                    });
                    console.log(newActList);
                    setActList(newActList);
                })
                .catch((error) => alert(error));
            })
            .catch((error) => alert(error));
};

export const activities = {
    1: 'Walk',
    2: 'Parent Pickup',
    3: 'Bus 24',
    4: 'Bus 27',
    5: 'Bus 22',
    6: 'Bus 35',
    7: 'Bus 32',
    8: 'Bus 44',
    9: 'Bus 41',
    10: 'Bus 21'
};