import {VStack, Text, ScrollView, Image, Box, Divider} from "native-base";
import {Titulo} from "../componentes/Titulo";
import Logo from '../assets/Logo.png'
import {EntradaTexto} from "../componentes/EntradaTexto";
import {Botao} from "../componentes/Botao";
import {Subtitulo} from "../componentes/Subtitulo";
import { Texto } from "../componentes/Texto";
import {useState} from "react";
import {depoimentos} from "../utils/mock";

export default function Principal() {
    const [numSecao] = useState(0);
    return(
        <ScrollView flex={1} p={5} bgColor={"white"}>
            <VStack flex={1} alignItems={"flex-start"} p={5}>
                <Image source={Logo} alt={'Logo Voll'} />
                <Titulo color={"blue.500"} fontSize={'xl1'} mt={10}>
                    Boas-vindas!
                </Titulo>
            </VStack>

            <Box w={"full"} borderRadius={"lg"} p={3} shadow={1}
            borderRightRadius={"md"} mt={5}>
                <EntradaTexto placeholder={'Digite a especialidade'}/>
                <EntradaTexto placeholder={'Digite sua localização'}/>

                <Botao bgColor={'blue.700'} shadow={1} mt={4} mb={2}>
                    Buscar
                </Botao>
            </Box>


            <Titulo color={'blue.800'} fontSize={'xl'}>
                Depoimentos
            </Titulo>
            <VStack justifyContent={'center'} space={3} divider={<Divider/>} w={"full"} mb={10}>
                {
                    depoimentos.map(depoimentos =>(
                        <Box key={depoimentos.id} w={"full"} borderRadius={"lg"} p={3}>
                            <Text textAlign={"justify"} color={"gray.600"} fontSize={"md"}>
                                {depoimentos.texto}
                            </Text>
                            <Subtitulo>
                                {depoimentos.subtitulo}
                            </Subtitulo>
                        </Box>
                        ))
                }
            </VStack>
        </ScrollView>

    )
}