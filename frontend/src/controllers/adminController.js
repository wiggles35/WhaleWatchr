

export const getAllStudents = (setStudentsObj) => {
    const studentsURL = "http://db.cse.nd.edu:5004/api/students/"

    fetch(studentsURL)
            .then((response) => response.json())
            .then((json) => {
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