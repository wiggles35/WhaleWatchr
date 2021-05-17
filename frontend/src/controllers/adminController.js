import axios from 'axios'

export const getAllStudents = (setStudentsObj, setFullDict, setActList) => {
    const studentsURL = "http://db.cse.nd.edu:5004/api/students/"
    const activitiesURL = "http://db.cse.nd.edu:5004/api/updateRequest/"

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
                            'act_str': activities[actReq.activityDetail],
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

export const postActivityChange = (actObj) => {

    const actUrl = "http://db.cse.nd.edu:5004/api/activityChange/";

    console.log(actObj);
    const sendObj = {
        "id": actObj.id,
        "start_date": actObj.start_date,
        "permanent": actObj.permanent,
        "student": actObj.student,
        "activity_type": actObj.activityDetail
    }

    axios.post(actUrl, sendObj,{headers:{'Content-Type': 'application/json'}})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(JSON.stringify(error.response.data))
        })
};

export const deleteUpdateRequest = (actId) => {
    const urUrl = "http://db.cse.nd.edu:5004/api/updateRequest/" + actId.toString();

    axios.delete(urUrl).then((response) => {
        console.log(response);
    }).catch((error) => {
        alert(JSON.stringify(error.response.data))
    })
};

export const activities = {
    1: 'Bus 24',
    2: 'Walk',
    3: 'Parent Pickup',
    4: 'Bus 44',
    5: 'Bus 32',
    6: 'Bus 35',
    7: 'Bus 41',
    8: 'Bus 27',
    9: 'Bus 40',
    10: 'Bus 33'
};