import {Image, Text, VStack, Box, FormControl, Input, Button, Link, useToast} from 'native-base'
import {TouchableOpacity} from "react-native";
import Logo from './assets/Logo.png'
import {Titulo} from "./componentes/Titulo";
import {EntradaTexto} from "./componentes/EntradaTexto";
import {Botao} from "./componentes/Botao";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useState} from "react";
import {fazerLogin} from "./servicos/AutenticacaoServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {jwtDecode} from "jwt-decode";

export default function Login({ navigation } : any) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const toast = useToast()

    useEffect(() => {
        async function verificarLogin() {
            const token = await AsyncStorage.getItem('token')
            if(token) {
                navigation.replace('Tabs')
            }
        }

        verificarLogin()
    }, [])

    async function login() {
        const resposta = await fazerLogin(email, senha)
        if(resposta) {
            const { token } = resposta
            await AsyncStorage.setItem('token', token)

            const tokenDecodificado = jwtDecode(token) as any
            const pacienteId = tokenDecodificado.id
            AsyncStorage.setItem('pacienteId', pacienteId)
            navigation.replace('Tabs')
        } else {
            toast.show({
                title: 'Erro ao fazer login',
                description: 'Verifique suas credenciais e tente novamente',
                backgroundColor: 'red.500',
                duration: 5000
            })
        }
    }

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
                    value={email}
                    onChangeText={setEmail}
                    keyboardType={'email-address'}
                    rightIcon={<Ionicons name="mail-outline"/>}
                />

                <EntradaTexto
                    label={'Senha'}
                    placeholder={'Insira sua senha'}
                    value={senha}
                    onChangeText={setSenha}
                    rightIcon={<Ionicons name={"key-outline"}/>}
                    secureTextEntry={true}
                />
            </Box>
            <Botao onPress={login}> Entrar </Botao>

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
