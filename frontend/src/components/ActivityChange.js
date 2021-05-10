import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { radius, colors } from '../constants/whaleStyle'
import ActivityIcon from './ActivityIcon'

const ActivityChange = ({ studentName, date, permanent, actStr }) => {

    const handleAccept = () => {
        console.log('Accepted');
    };

    const handleReject = () => {
        console.log('Rejected');
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftText}>
                <View>
                    <Text>{studentName}</Text>
                </View>
                <View>
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text>{permanent ? 'Permanent' : 'Single-Day'}</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <View style={{height: "70%", width: "70%"}}>
                    <ActivityIcon 
                        actType={
                                (actStr === 'Walk' || actStr === 'Parent Pickup') ? 
                                (actStr) : ('Bus')
                            } 
                            busNum={
                                (actStr === 'Walk' || actStr === 'Parent Pickup') ? 
                                (null) : (actStr.split(' ')[1])
                            }
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Accept"
                    onPress={handleAccept}
                    color={colors.formAccent}
                />
                <Button 
                    title="Reject"
                    onPress={handleReject}
                    color="red"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        width: '99%',
        justifyContent: "center",
        radius: radius.m,
        borderBottomWidth: 2,
        borderBottomColor: colors.formAccent,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: .4,
        shadowRadius: radius.m,
        flex: 1,
        height: 40,
    },
    leftText: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: "center",
    },
    iconContainer: {
        flex: 1,
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonAccept: {
        flex: 1,

    },
    buttonReject: {
        flex: 1,
        backgroundColor: 'red',
    }
});

export default ActivityChange;