import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import FormInput from '../components/FormInput'

const CreateAccountView = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleCreateAccount = () => {
        // Networking here, determine what type of user they are and take them to the correct screen
        navigation.navigate('AdminRosterView');
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputWidth}>
                <FormInput 
                    data={firstName}
                    setData={setFirstName}
                    title="First Name"
                    placeholder="First Name"
                />
            </View>
            <View style={styles.inputWidth}>
                <FormInput 
                    data={lastName}
                    setData={setLastName}
                    title="Last Name"
                    placeholder="Last Name"
                />
            </View>
            <View style={styles.inputWidth}>
                <FormInput 
                    data={email}
                    setData={setEmail}
                    title="Email"
                    placeholder="Email"
                />
            </View>
            <View style={styles.inputWidth}>
                <FormInput 
                    data={password}
                    setData={setPassword}
                    title="Password"
                    placeholder="Password"
                />
            </View>
            <Button
                title="Create Account"
                onPress={handleCreateAccount}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputWidth: {
        width: "40%",
    },
    button: {
        padding: 10,
        margin: 10,
        flex: 1,
    }
});

export default CreateAccountView;