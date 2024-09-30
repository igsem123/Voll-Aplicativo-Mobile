import {Text, ITextProps} from "native-base";
import {ReactNode} from "react";

interface TextoProps extends ITextProps {
    children: ReactNode;
}

export function Texto( {children, ...rest }: TextoProps) {
    return(
        <Text
            fontSize={"sm"}
            color={'gray.500'}
            textAlign={'justify'}
            alignSelf={'center'}
            marginTop={2}
            {...rest}
        >
            {children}
        </Text>
    )
}