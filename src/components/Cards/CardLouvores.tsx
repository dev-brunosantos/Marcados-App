import { StyleSheet, Text, View } from "react-native"
import { BtnIcone } from "../Buttons/BtnIcon"
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { Cores } from "@/src/styles/Cores";

export const CardLouvores = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTxt}>
                <Text style={styles.txt}>
                    Nome do louvor
                </Text>
            </View>

            <BtnIcone>
                <Entypo
                    name="youtube"
                    size={40}
                    color={Cores.branco}
                />
            </BtnIcone>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 54,
        borderRadius: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Cores.vermelho
    },
    containerTxt: {
        width: '80%',
        height: '100%',
        //paddingHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: Cores.branco
    }
})