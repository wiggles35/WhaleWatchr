import React from 'react';
import { Text, View, TextInput } from 'react-native'
import BusDriver from '../components/BusDriver'

const BusDriverView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [studentsObj, setStudentsObj] = useState([]);

    const busDriverURL = 'http://db.cse.nd.edu:5004/api/students'

    useEffect(() => {
        fetch(busDriverURL)
            .then((response) => response.json())
            .then((json) => {
                setStudentsObj(json);
                console.log(json);
                setIsLoading(false);
            })
            .catch((error) => alert(error))
    }, []);

    return (
        <View style={styles.container}>
            { isLoading ? (
                <ActivityIndicator style = {{justifyContent: "center", alignItems: "center", flex:1}} />

            ) : (
                <View style = {{flex:1}}>
                    <ScrollView style = {{flex: 1}} contentContainerStyle = {{flexGrow: 1, flex: 1}}>
                        {studentsObj.map(item => {
                            return (
                                <BusDriver
                                    studentName = {item.first_name + ' ' + item.last_name}
                                    key={item.student_id}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,

    },
    studName: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

    },
    activityWeek: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    activityContainer: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "white",
        lineHeight: 1.1
    },
    /* innerActivityContainer: {
        width: "50%",
        height: "50%",
    } */
});

export default BusDriverView;