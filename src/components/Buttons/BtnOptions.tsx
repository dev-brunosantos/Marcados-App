import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface BtnOptionProps extends TouchableOpacityProps {
    titulo: string;
}

export const BtnOption = ({ titulo, ...rest }: BtnOptionProps) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            {...rest}
        >
            <Text style={styles.txt}>
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
        fontWeight: 'semibold',
        fontStyle: 'italic'
    }
})