import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'

const FormInput = ({ data, setData, title, placeholder }) => {
    return (
        <View styles={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.descText}>{title}</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    onChangeText={text => setData(text)}
                    defaultValue={data}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    inputWrapper: {
        backgroundColor: '#b8e6f5',
        marginTop: 10,
    },
    inputText: {
        height: 40,
    },
    descText: {
        fontSize: 40,
        padding: 10,
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: "#3893b0"
    }
});

export default FormInput;