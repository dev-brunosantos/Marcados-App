import { Cores } from "@/src/styles/Cores";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface BtnComponentProps extends TouchableOpacityProps {
    titulo: string;
    semBorda?: boolean;
    corBorda?: string;
    corTxt?: string;
    background?: string;
}

export const BtnComponent = ({ titulo, semBorda, corBorda, corTxt, background, ...rest }:BtnComponentProps) => {
    return(
        <TouchableOpacity 
            {...rest} 
            style={[
                styles.btn,
                {
                    borderWidth: semBorda ? 0 : 1,
                    borderColor: corBorda ?? Cores.preto,
                    backgroundColor: background ?? 'transparent',
                }
            ]}
        >
            <Text style={[
                styles.txt, 
                {
                    color: corTxt ?? Cores.preto
                }
            ]}>
                { titulo }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 54,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center'
    }
})