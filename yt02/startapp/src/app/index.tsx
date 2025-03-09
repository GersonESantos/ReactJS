import { View, Text, StyleSheet, Alert, Button } from "react-native";

export default function Index() {
    const handleMessage = () => {
        Alert.alert(
            "Teste",
            "Hello GersonES!",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ola GersonES!</Text>
            {/* console.log("Botão clicado");  */}
            <Button title="Mensagem" onPress={handleMessage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32    
    },
    title: { 
        color: "red",
        fontSize: 24,
        fontWeight: "bold"
    }
});