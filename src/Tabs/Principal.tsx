import {VStack, Text, ScrollView, Image, Box} from "native-base";
import {Titulo} from "../componentes/Titulo";
import Logo from '../assets/Logo.png'
import {EntradaTexto} from "../componentes/EntradaTexto";
import {Botao} from "../componentes/Botao";

export default function Principal() {
    return(
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt={'Logo Voll'} />
            <VStack>
                <Titulo color={"blue.500"} textAlign={'left'} fontSize={'xl1'}>
                    Boas-vindas!
                </Titulo>
            </VStack>

            <VStack borderRadius={'lg'} p={4} mt={7} color={'white'} shadow="1" style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 3.90,
            }}>
                <Box>
                    <EntradaTexto placeholder={'Digite a especialidade'}/>
                    <EntradaTexto placeholder={'Digite sua localização'}/>
                </Box>
                <Botao bgColor={'blue.700'}>
                    Buscar
                </Botao>
            </VStack>

            <VStack justifyContent={'center'}>
                <Titulo color={'blue.800'} fontSize={'xl1'}>
                    Depoimentos
                </Titulo>
            </VStack>
        </ScrollView>

    )
}