import { View, Text, StyleSheet, Image } from "react-native";
const img = require("../../assets/images/favicon.png");
export default function Index() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ola GersonES!</Text>
        <Image source={img}/>
        
        </View>
    );
    }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         padding: 32,
    
        },
    title :{ 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    },
    });