import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { Auth0Provider } from "@auth0/auth0-react"

const SignInView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    const handleSignIn = () => {
        // Networking here, determine what type of user they are and take them to the correct screen
	<Auth0Provider
	    domain={domain}
	    clientId={clientId}>
	    navigation.navigate('AdminRosterView');
	</Auth0Provider>
    }
    return (
	<View style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                defaultValue={email}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
            />
            <Button
                title="Sign in"
                onPress={handleSignIn}
	    />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SignInView;
