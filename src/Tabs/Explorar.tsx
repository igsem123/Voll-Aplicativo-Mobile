import {VStack, Text, ScrollView, Box} from "native-base";
import {EntradaTexto} from "../componentes/EntradaTexto";
import {Botao} from "../componentes/Botao";
import {Titulo} from "../componentes/Titulo";
import {CardConsulta} from "../componentes/CardConsulta";

export default function Explorar() {
    return(
        <ScrollView flex={1} bg={"white"}>
            <VStack flex={1} p={5} justifyContent={"flex-start"}>
                <Box w={"full"} borderRadius={"lg"} p={4} shadow={1}
                     borderRightRadius={"sm"} mt={3}>
                    <EntradaTexto placeholder={'Digite a especialidade'}/>
                    <EntradaTexto placeholder={'Digite sua localização'}/>

                    <Botao bg={"blue.700"} shadow={1} mt={4} mb={2}> Buscar </Botao>
                </Box>

                <Titulo color={'blue.500'} fontSize={'2xl'} mb={2}>Resultado da Busca</Titulo>

                <CardConsulta
                    nome={'Dr. Raphael Moreira'}
                    especialidade={'Cardiologista'}
                    foto='https://github.com/igsem123.png'
                />
                <CardConsulta
                    nome={'Dr. João Henrique Lamounier'}
                    especialidade={'Infectologista'}
                    foto='https://github.com/Lamouniers.png'
                />
                <CardConsulta
                    nome={'Dra. Ana Clara'}
                    especialidade={'Clínica General'}
                    foto='https://github.com/littlehopw.png'
                />
                <CardConsulta
                    nome={'Dr. Rogério Júnior'}
                    especialidade={'Proctologista'}
                    foto='https://github.com/Kitotsui.png'
                />
                <CardConsulta
                    nome={'Dr. Ruan Emanuell'}
                    especialidade={'Ortopedia'}
                    foto='https://github.com/RuanEmanuell.png'
                />
            </VStack>
        </ScrollView>

    )
}