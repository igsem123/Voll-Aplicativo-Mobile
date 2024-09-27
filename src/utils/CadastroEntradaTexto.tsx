import {MaterialIcons} from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

const secoes = [
    {
        id: 1,
        titulo: 'Insira alguns dados básicos:',
        entradaTexto: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo',
                rightIcon: <Ionicons name="person-outline"/>
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu e-mail',
                keyboardType: 'email-address',
                rightIcon: <Ionicons name="mail-outline"/>
            },{
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha',
                secureTextEntry: true,
                rightIcon: <Ionicons name="lock-closed-outline"/>
            },
            {
                id: 4,
                label: 'Repita a senha',
                placeholder: 'Insira sua senha novamente',
                secureTextEntry: true,
                rightIcon: <Ionicons name="lock-closed"/>
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
                rightIcon: <Ionicons name={"map-outline"}/>
            },
            {
                id: 2,
                label: 'Endereço',
                placeholder: 'Insira seu endereço',
                rightIcon: <Ionicons name={"home-outline"}/>
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Insira seu número',
                keyboardType: 'number-pad',
                rightIcon: <Ionicons name="pin-outline"/>
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Insira seu complemento',
                rightIcon: <Ionicons name="ellipsis-horizontal-outline"/>
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: '+55 (00) 0 0000-0000',
                keyboardType: 'phone-pad',
                rightIcon: <Ionicons name="call-outline"/>
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
                value: 'SulAmerica',
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            }
        ]
    }
]

export { secoes }