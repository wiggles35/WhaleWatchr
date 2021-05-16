import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import { radius, colors } from '../constants/whaleStyle';
import { getAllStudents } from '../controllers/adminController';
import AdminRosterPanel from '../components/adminRosterPanel';
import AdminActivitiesPanel from '../components/adminActivitiesPanel'

const AdminRosterView = () => {
    //states to wait for and hold data from api
    const [isLoading, setIsLoading] = useState(true);
    const [studentsObj, setStudentsObj] = useState([]);
    const [fullDict, setFullDict] = useState({});
    const [actList, setActList] = useState([]);
    const [resetData, setResetData] = useState(true);

    useEffect(() => {
        getAllStudents(setStudentsObj, setFullDict, setActList);
        setIsLoading(false);
    }, [resetData]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
                { isLoading ? (
                    <View styles={{justifyContent: "center", alignItems: "center", padding: 40, margin: 40, backgroundColor: "#000", flex:1}}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    <AdminRosterPanel 
                        studentsObj={studentsObj}
                    />
                )}
            </View>
            <View style={styles.rightContainer}>
                { isLoading ? (
                    <View styles={{justifyContent: "center", alignItems: "center", padding: 40, margin: 40, backgroundColor: "#000", flex:1}}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                        <AdminActivitiesPanel 
                            actList={actList}
                            setActList={setActList}
                            resetData={resetData}
                            setResetData={setResetData}
                        />
                    </View>
                )}
            </View>
        </View>
    );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: "row"
    },
    leftContainer: {
        paddingTop: 10,
        height: windowHeight,
        flexDirection: "column",
        flex: 7,
    },
    rightContainer: {
        paddingTop: 10,
        height: windowHeight,
        flexDirection: "column",
        flex: 3,
    },
    scrollContainer: {
        paddingTop: 10,
        flex: 1
    },
    container: {
        padding: 10,
        backgroundColor: "skyblue",
        borderTopLeftRadius: radius.m,
        borderTopRightRadius: radius.m,
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    headerText: {
        padding: 10, 
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    infoWrapper: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default AdminRosterView;