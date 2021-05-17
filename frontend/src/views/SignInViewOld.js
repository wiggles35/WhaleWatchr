import axios from 'axios';
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import FormInput from '../components/FormInput'

const SignInViewOld = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    //const [userType, setUserType] = useState('');
    //const [userId, setUserId] = useState(0);

    const handleSignIn = () => {
        const signInURL = 'http://db.cse.nd.edu:5004/api/login/';

        const sendObj = {
            'first_name': firstName,
            'last_name': lastName,
            'password': password
        }
        // Networking here, determine what type of user they are and take them to the correct screen
        axios.post(signInURL, sendObj, {headers:{'Content-Type': 'application/json'}})
            .then((response) => {
                console.log(response);
                //setUserType(response.data.user_type);
                //setUserId(response.data.user_id);

                console.log(response.data.user_type);
                console.log(response.data.user_id);

                if (response.data.user_type.toLowerCase() === "admin") {
                    navigation.navigate('AdminRosterView');
                } else if (response.data.user_type.toLowerCase() === "parent") {
                    navigation.navigate('ParentView', {parentId: response.data.user_id.toString()});
                } else if (response.data.user_type.toLowerCase() === "advisor") {
                    navigation.navigate('AdvisorView', {advisorId: response.data.user_id.toString()});
                } else {
                    navigation.navigate('ParentView', {parentId: response.data.user_id.toString()});
                }
            })
            .catch((error) => {
                alert(error);
            });
        
    }

    const handleCreateAccount = () => {
        navigation.navigate('CreateAccountView');
    }
    return (
        <View style={styles.container} >
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
                    data={password}
                    setData={setPassword} 
                    title="Password"
                    placeholder="Password"
                />
            </View>
            <Button
                title="Sign in"
                onPress={handleSignIn}
                style={styles.button}
            />
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
        justifyContent: 'space-evenly',
        flexDirection: "column",
        padding: 30,
    },
    inputWidth: {
        width: "60%",
    },
    button: {
        padding: 10,
        margin: 10,
        flex: 1,
    }
});

export default SignInViewOld;