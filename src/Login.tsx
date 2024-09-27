import {Image, Text, VStack, Box, FormControl, Input, Button, Link} from 'native-base'
import {TouchableOpacity} from "react-native";
import Logo from './assets/Logo.png'
import {Titulo} from "./componentes/Titulo";
import {EntradaTexto} from "./componentes/EntradaTexto";
import {Botao} from "./componentes/Botao";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login({ navigation }) {
    return (
        <VStack flex={1} alignItems='center' p={5}
                justifyContent={'center'}>
            <Image source={Logo} alt={'Logo Voll'} />

            <Titulo color={"gray.500"}>
                Faça login em sua conta
            </Titulo>

            <Box>
                <EntradaTexto
                    label={'Email'}
                    placeholder={'Insira seu e-mail'}
                    keyboardType={'email-address'}
                    rightIcon={<Ionicons name="mail-outline"/>}
                />

                <EntradaTexto
                    label={'Senha'}
                    placeholder={'Insira sua senha'}
                    rightIcon={<Ionicons name={"key-outline"}/>}
                    secureTextEntry={true}
                />
            </Box>
            <Botao onPress={() => navigation.navigate('Tabs')}> Entrar </Botao>

            <Link href={'https://alura.com.br'} mt={'3'}>
                Esqueceu sua senha?
            </Link>

            <Box w={'full'}
                 flexDirection={'row'}
                 justifyContent={'center'}
                 mt={8}>

                <Text> Ainda não possui cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color={'blue.500'}>
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>

        </VStack>
    );
}