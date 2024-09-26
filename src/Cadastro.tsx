import {Image, Text, VStack, Box, FormControl, Input, Button, Link, Checkbox} from 'native-base'
import Logo from './assets/Logo.png'
import {Titulo} from "./componentes/Titulo";
import {EntradaTexto} from "./componentes/EntradaTexto";
import {Botao} from "./componentes/Botao";
import {useState} from "react";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Cadastro() {
    const [numSecao, setNumSecao] = useState(0);
    const secoes = [
        {
            id: 1,
            titulo: 'Insira alguns dados básicos:',
            entradaTexto: [
                {
                    id: 1,
                    label: 'Nome',
                    placeholder: 'Digite seu nome completo',
                    rightIcon: <MaterialIcons name="person"/>
                },
                {
                    id: 2,
                    label: 'Email',
                    placeholder: 'Digite seu e-mail',
                    keyboardType: 'email-address',
                    rightIcon: <MaterialIcons name="email"/>
                },{
                    id: 3,
                    label: 'Crie uma senha',
                    placeholder: 'Insira sua senha',
                    secureTextEntry: true,
                    rightIcon: <MaterialIcons name="lock-outline"/>
                },
                {
                    id: 4,
                    label: 'Repita a senha',
                    placeholder: 'Insira sua senha novamente',
                    secureTextEntry: true,
                    rightIcon: <MaterialIcons name="lock"/>
                }
            ],
            checkbox: []
        },
        {
            id: 2,
            titulo: 'Agora, mais alguns dados sobre você:',
            entradaTexto: [
                {
                    id: 1,
                    label: 'CEP',
                    placeholder: 'Digite seu CEP',
                    keyboardType: 'numeric',
                    rightIcon: <MaterialIcons name={"map"}/>
                },
                {
                    id: 2,
                    label: 'Endereço',
                    placeholder: 'Insira seu endereço',
                    rightIcon: <MaterialIcons name={"home"}/>
                },
                {
                    id: 3,
                    label: 'Número',
                    placeholder: 'Insira seu número',
                    keyboardType: 'number-pad',
                    rightIcon: <MaterialIcons name="pin-drop"/>
                },
                {
                    id: 4,
                    label: 'Complemento',
                    placeholder: 'Insira seu complemento',
                },
                {
                    id: 5,
                    label: 'Telefone',
                    placeholder: '+55 (00) 0 0000-0000',
                    keyboardType: 'phone-pad',
                    rightIcon: <MaterialIcons name="phone"/>
                }
            ],
            checkbox: []
        },
        {
            id: 3,
            titulo: 'Para finalizar, quais são os seus planos de saúdes?',
            entradaTexto: [],
            checkbox: [
                {
                    id: 1,
                    value: 'SulAmerica'
                },
                {
                    id: 2,
                    value: 'Unimed'
                }
            ]
        }
    ]

    function avancarSecao(){
        if(numSecao < secoes.length - 1){
            setNumSecao(numSecao + 1)
        }
    }

    function voltarSecao(){
        if(numSecao > 0){
            setNumSecao(numSecao - 1)
        }
    }

    return (
        <VStack flex={1} alignItems='center' p={5}
                justifyContent={'center'}>
            <Image source={Logo} alt={'Logo Voll'} />

            <Titulo>
                {secoes[numSecao].titulo}
            </Titulo>

            <Box>
                {
                    secoes[numSecao]?.entradaTexto?.map(entrada => {
                        return <EntradaTexto label={entrada.label}
                        placeholder={entrada.placeholder} secureTextEntry={entrada.secureTextEntry}
                        keyboardType={entrada.keyboardType} rightIcon={entrada.rightIcon} key={entrada.id} />
                    })
                }
            </Box>

            <Box>
                {
                    secoes[numSecao].checkbox.map(checkbox =>
                    {
                        return <Checkbox key={checkbox.id}
                                         value={checkbox.value} />
                    })
                }
            </Box>

            {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor={'gray.400'}> Voltar </Botao>}
            <Botao onPress={() => avancarSecao()} mt={4}> Avançar </Botao>

        </VStack>
    );
}