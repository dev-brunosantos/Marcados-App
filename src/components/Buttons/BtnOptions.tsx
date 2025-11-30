import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface BtnOptionProps extends TouchableOpacityProps {
    titulo: string;
    corTxt?: string;
}

export const BtnOption = ({ titulo, corTxt, ...rest }: BtnOptionProps) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            {...rest}
        >
            <Text style={[styles.txt, { color: corTxt }]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginVertical: 16
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})