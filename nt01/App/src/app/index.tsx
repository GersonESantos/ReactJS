import { View, Text, StyleSheet } from "react-native";
export default function Index() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ola GersonES!</Text>
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