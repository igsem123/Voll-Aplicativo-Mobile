import {VStack, Text, Divider, ScrollView} from "native-base";
import {CardConsulta} from "../componentes/CardConsulta";
import {Titulo} from "../componentes/Titulo";
import {Botao} from "../componentes/Botao";
import {Subtitulo} from "../componentes/Subtitulo";

export default function Consultas() {
    return(
        <ScrollView>
            <VStack p={5} flex={1}>
                <Titulo color={"blue.500"} fontWeight={"extrabold"}>Minhas Consultas</Titulo>
                <Botao mt={5} mb={2} h={50} _text={
                    {
                        fontWeight: "semibold",
                        fontSize: "md",
                    }
                }>Agendar outra consulta</Botao>

                <VStack>
                    <Subtitulo fontSize={18} color={"blue.500"} alignSelf={"flex-start"}>
                        Próximas Consultas
                    </Subtitulo>
                    <CardConsulta
                        nome={'Dr. Raphael Moreira'}
                        especialidade={'Cardiologista'}
                        foto='https://github.com/igsem123.png'
                        data={'20/04/2024'}
                        foiAgendado
                    />
                    <CardConsulta
                        nome={'Dr. João Henrique Lamounier'}
                        especialidade={'Infectologista'}
                        foto='https://github.com/Lamouniers.png'
                        data={'18/02/2024'}
                        foiAgendado
                    />
                </VStack>
                <Divider mt={6} mb={3} bgColor={"gray.400"} />
                <VStack>
                    <Subtitulo fontSize={18} mt={0} color={"blue.500"} alignSelf={"flex-start"}>
                        Consultas Passadas
                    </Subtitulo>
                    <CardConsulta
                        nome={'Dra. Ana Clara'}
                        especialidade={'Clínica General'}
                        foto='https://github.com/littlehopw.png'
                        data={'30/05/2023'}
                        foiAtendido
                    />
                    <CardConsulta
                        nome={'Dr. Rogério Júnior'}
                        especialidade={'Proctologista'}
                        foto='https://github.com/Kitotsui.png'
                        data={'13/05/2024'}
                        foiAtendido
                    />
                    <CardConsulta
                        nome={'Dr. Ruan Emanuell'}
                        especialidade={'Ortopedia'}
                        foto='https://github.com/RuanEmanuell.png'
                        data={'13/05/2024'}
                        foiAtendido
                    />
                </VStack>
            </VStack>
        </ScrollView>
    )
}