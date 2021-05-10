import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ActivityChange from './ActivityChange'
import { fontSize } from '../constants/whaleStyle'

const AdminActivitiesPanel = ({ actList, setActList }) => {

    return (
        <View style={styles.container}>
            <View  style={styles.headerContainer}>
                <Text style={{padding: 10, fontSize: fontSize.h3}}>Incoming Activity Changes</Text>
            </View>
            <ScrollView>
                {actList.map((item) => {
                    
                    return (
                        <ActivityChange 
                            studentName={item.student_name}
                            date={item.start_date}
                            permanent={item.permanent}
                            actStr={item.act_str}
                            key={item.id}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'center',
        flex: 1,
        width: "80%",
    },
    headerContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        textAlign: 'center',
    },
});

export default AdminActivitiesPanel;