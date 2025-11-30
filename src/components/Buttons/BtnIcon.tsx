import { TouchableOpacity, TouchableOpacityProps } from "react-native"

interface BtnIconeProps extends TouchableOpacityProps {
    children?: React.ReactNode;
    borda?: boolean;
    corBorda?: string;
    corTxt?: string;
}

export const BtnIcone = ({ children, borda, corBorda, corTxt, ...rest }:BtnIconeProps) => {
    return(
        <TouchableOpacity {...rest}>
            {children}
        </TouchableOpacity>
    )
}