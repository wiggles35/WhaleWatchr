import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import FormInput from '../components/FormInput'

const SignInView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Networking here, determine what type of user they are and take them to the correct screen
        if (email.toLowerCase() === "admin") {
            navigation.navigate('AdminRosterView');
        } else if (email.toLowerCase() === "parent") {
            navigation.navigate('ParentView');
        } else {
            navigation.navigate('AdminRosterView');
        }
        
    }

    const handleCreateAccount = () => {
        navigation.navigate('CreateAccountView');
    }
    return (
        <View style={styles.container} >
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

export default SignInView;