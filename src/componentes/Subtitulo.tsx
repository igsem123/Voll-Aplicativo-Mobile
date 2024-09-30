import {Text, ITextProps} from "native-base";
import {ReactNode} from "react";

interface SubtituloProps extends ITextProps {
    children: ReactNode;
}

export function Subtitulo( {children, ...rest }: SubtituloProps) {
    return(
        <Text
            fontSize={"md"}
            fontWeight={'bold'}
            color={'gray.600'}
            alignSelf={'center'}
            textAlign={'center'}
            p={1}
            mt={2}
            {...rest}
        >
            {children}
        </Text>
    )
}