import react from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return(
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={style.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});
//6 слайд