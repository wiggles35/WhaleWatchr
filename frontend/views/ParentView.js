import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'

const ParentView = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [studentsObj, setStudentsObj] = useState([]);

    // useEffect(() => {
    //     fetch(studentsURL)
    //         .then((response) => response.json())
    //         .then((json) => {
                
    //             setIsLoading(false);
    //         })
    //         .catch((error) => alert(error))
    // }, []);

    return (
        <View style={styles.container}>
            <View style={styles.studName}>
                <Text style={{padding: 10, fontSize: 40}}>Parent View</Text>
            </View>
            <View style={styles.activityWeek}>
                <View style={styles.activityContainer}>
                    <View style={styles.innerActivityContainer}>
                        <ActivityIcon
                            actType="Walk"
                        />
                    </View>
                </View>
                <View style={styles.activityContainer}>
                    <View style={styles.innerActivityContainer}>
                        <ActivityIcon
                            actType="Walk"
                        />
                    </View>
                </View>
                <View style={styles.activityContainer}>
                    <View style={styles.innerActivityContainer}>
                        <ActivityIcon
                            actType="Walk"
                        />
                    </View>
                </View>
                <View style={styles.activityContainer}>
                    <View style={styles.innerActivityContainer}>
                        <ActivityIcon
                            actType="Walk"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: "column",

    },
    studName: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

    },
    activityWeek: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    activityContainer: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "white",
    },
    innerActivityContainer: {
        width: "50%",
        height: "50%",
    }
});

export default ParentView;