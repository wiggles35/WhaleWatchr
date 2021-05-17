import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { colors } from '../constants/whaleStyle'

const FormInput = ({ data, setData, title, placeholder, fontSize }) => {
    return (
        <View styles={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={{...styles.descText, fontSize: fontSize ? (fontSize) : (40)}}>{title}</Text>
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
        width:  "100%",
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    inputWrapper: {
        backgroundColor: colors.textInput,
        marginTop: 10,
    },
    inputText: {
        height: 40,
    },
    descText: {
        padding: 10,
    },
    textWrapper: {
        display: "flex",
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.formAccent,
    }
});

export default FormInput;