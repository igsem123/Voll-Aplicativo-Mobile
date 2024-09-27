import {Image, Text, VStack, Box, FormControl, Input, Button, Link, Checkbox, ScrollView} from 'native-base'
import Logo from './assets/Logo.png'
import {Titulo} from "./componentes/Titulo";
import {EntradaTexto} from "./componentes/EntradaTexto";
import {Botao} from "./componentes/Botao";
import {useState} from "react";
import {secoes} from "./utils/CadastroEntradaTexto";

export default function Cadastro({ navigation }) {
    const [numSecao, setNumSecao] = useState(0);

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
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt={'Logo Voll'} alignSelf={'center'} mt={2}/>

            <Titulo>
                {secoes[numSecao].titulo}
            </Titulo>

            <Box>
                {
                    secoes[numSecao]?.entradaTexto?.map(entrada => {
                        return (
                            <EntradaTexto
                                label={entrada.label}
                                placeholder={entrada.placeholder}
                                secureTextEntry={entrada.secureTextEntry}
                                keyboardType={entrada.keyboardType}
                                rightIcon={entrada.rightIcon}
                                key={entrada.id}
                            />
                        );
                    })}
            </Box>

            <Box mt={4}>
                {numSecao == 2 &&
                    <Text color={"blue.800"} fontWeight={"bold"} fontSize={"md"} mt={2} mb={2}>
                        Selecione os planos:
                    </Text>
                }

                {
                    secoes[numSecao].checkbox.map(checkbox => (
                        <Checkbox
                            key={checkbox.id}
                            value={checkbox.value}
                            colorScheme={'blue'}
                            _checked={{
                                bg: "blue.800",  // Cor de fundo quando marcado
                                borderColor: "blue.800"  // Cor da borda quando marcado
                            }}
                        >
                            {checkbox.value}
                        </Checkbox>
                    ))}
            </Box>

            {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor={'gray.400'}> Voltar </Botao>}
            {numSecao < secoes.length - 1 ? (
                    <Botao onPress={() => avancarSecao()} mt={4} mb={20}> Avançar </Botao>
            ) : (
                    <Botao onPress={() => navigation.navigate('Login')} mt={4} mb={20}> Cadastrar! </Botao>
                )
            }

        </ScrollView>
    );
}