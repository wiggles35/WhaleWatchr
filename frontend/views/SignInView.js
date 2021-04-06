import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

const SignInView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Networking here, determine what type of user they are and take them to the correct screen
        navigation.navigate('AdminRosterView');
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