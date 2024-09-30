import { Text, Avatar, VStack } from 'native-base'
import {Botao} from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    foiAtendido,
    foiAgendado}: CardProps){
    return(
        <VStack w={"100%"} bgColor={foiAtendido ? 'blue.200' : 'white'} p={5} borderRadius={"lg"} shadow={2} mt={3}>
            <VStack flexDir={"row"}>
                <Avatar size={"lg"}
                        source={{ uri: foto}}
                        shadow={1}
                />
                <VStack paddingLeft={4}>
                    <Text fontSize={"md"} fontWeight={"bold"} color={"gray.600"}>{nome}</Text>
                    <Text color={"gray.600"}>{especialidade}</Text>
                    <Text color={"gray.600"}>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4} color={"blue.700"}>
                {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
            </Botao>
        </VStack>
    )
}