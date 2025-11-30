import { Modal, StyleSheet, Text, View } from "react-native"
import { BtnIcone } from "../Buttons/BtnIcon"
import { AntDesign } from "@expo/vector-icons"

interface ModalPerfilProps {
    status: boolean;
    opnen?: () => void;
    close: () => void;
}

export const ModalPerfil = ({ status, opnen, close }: ModalPerfilProps) => {
    return (
        <Modal
            visible={status}
            onRequestClose={close}
            animationType="fade"
            style={{ width: '100%', height: 400 }}
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.txt}>Modal Aberto</Text>

                    <BtnIcone onPress={close} style={styles.btnClose}>
                        <AntDesign
                            name="close-circle"
                            size={35}
                            color="black"
                        />
                    </BtnIcone>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', paddingVertical: 100
    },
    content: {
        width: '90%',
        height: 500,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dadada',
    },
    txt: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnClose: {
        position: 'absolute',
        top: 8,
        right: 16
    }
})