import { View, Text, Button } from "react-native";


export default function CadastroScreen({ navigation }) {
  return (
    <View>
      <Text> Página de cadastro </Text>
      <Button title="Pagina Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}