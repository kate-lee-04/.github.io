
import React, { useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

export default function Form({addHandler }) {
    const [text, setValue] = useState("");
      


    const onChange = (text) => {
        setValue(text);
    };

    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впиши задачу.."
            />

            <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => addHandler(text)}>
                <Text style={styles.customBtnText}>ДОБАВИТЬ ЗАДАЧУ</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: "#BDC1FF",
        height: 70,
        borderRadius: 15,
        fontSize: 18,
        textAlign: "center",
    },
    customBtnBG: {
        alignSelf: "center",
        marginTop: 20,
        width: 300,
        height: 40,
        backgroundColor: "#9DA4FF",
        borderRadius: 8,
    },
    
    customBtnText: {
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10,
        color: "#ffffff",
        textAlign: "center",
    },
});