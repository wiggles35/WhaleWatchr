import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TableStudent from '../components/TableStudent';
import { radius, colors } from '../constants/whaleStyle';
import RosterHeader from './RosterHeader';

const AdminRosterPanel = (isLoading, studentsObj) => {

    return (
        <View style={styles.mainContainer}>
            <Text style={{padding: 10, fontSize: 40}}>Admin Roster View</Text>
            <RosterHeader/>
            <View styles={styles.scrollContainer} >
                { isLoading ? (
                    <View styles={{justifyContent: "center", alignItems: "center", padding: 40, margin: 40, backgroundColor: "#000", flex:1}}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    <View style={{flex:1}}>
                    <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
                        {studentsObj.map(item => {
                            return (
                                <TableStudent 
                                    studentName={item.first_name + " " + item.last_name} 
                                    advisorName={item.advisorName} 
                                    parentName={item.parentName} 
                                    parentEmail={item.parentEmail}
                                    parentPhone={item.parentPhone}
                                    key={item.student_id}
                                /> 
                            )
                        })}
                    </ScrollView>
                    </View>
                )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: "column"
    },
    scrollContainer: {
        paddingTop: 10,
        flex: 1
    },
});

export default AdminRosterPanel;