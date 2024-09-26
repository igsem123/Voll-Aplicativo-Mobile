import {Input, FormControl, Icon} from "native-base";

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    keyboardType: any,
    rightIcon?: React.ReactNode;
}

export function EntradaTexto({
    label,
    placeholder,
    secureTextEntry = false,
    keyboardType,
    rightIcon,
} : InputProps) : JSX.Element {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                placeholderTextColor={'gray.500'}
                size={"lg"}
                w={"full"}
                borderRadius={'lg'}
                bgColor={'gray.100'}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                shadow={"3"}
                fontWeight={'semibold'}
                InputRightElement={rightIcon && (
                    <Icon as={rightIcon} size={5} ml="2" color="muted.400" m={3} />
                )}
            />
        </FormControl>
    );
}