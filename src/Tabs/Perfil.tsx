import {VStack, Text, ScrollView, Avatar, Divider, List} from "native-base";
import {Titulo} from "../componentes/Titulo";

export default function Perfil() {
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={6}>
                <Titulo color={"blue.500"}>Meu Perfil</Titulo>
                <Avatar size={"2xl"}
                        source={{ uri: "https://avatars.githubusercontent.com/u/136397682?v=4" }}
                        mt={5}
                        borderColor={"gray.600"}
                        borderWidth={2}
                        shadow={5}
                />
                <Titulo color={"blue.500"}>Informações Pessoais</Titulo>
                <Titulo fontSize={"lg"} mb={1} color={"gray.600"}>Raphael Moreira</Titulo>
                <Text color={"gray.600"} fontSize={15}>04/05/1999</Text>
                <Text color={"gray.600"} fontSize={15}>Uberaba</Text>

                <Divider mt={5} bgColor={"gray.400"} />
                <Titulo color={"blue.500"} mb={1}>Histórico Médico</Titulo>
                <Text color={"gray.600"} fontSize={15}>Bronquite</Text>
            </VStack>
        </ScrollView>

    )
}