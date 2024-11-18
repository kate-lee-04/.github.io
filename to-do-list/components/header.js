import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#303030",
        height: 100,
        width: 412,
    },
    text: {
        fontSize: 30,
        textAlign: "center",
        color: "#ffffff",
        marginTop: 30,
    },
});