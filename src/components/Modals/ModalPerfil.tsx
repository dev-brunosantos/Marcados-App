import { Image, ImageProps, Modal, StyleSheet, Text, View, ImageBackground, ImageBackgroundProps } from "react-native"
import { BtnIcone } from "../Buttons/BtnIcon"
import { AntDesign } from "@expo/vector-icons"
import { Cores } from "@/src/styles/Cores";

interface ModalPerfilProps extends ImageBackgroundProps {
    status: boolean;
    imagem?: string;
    close: () => void;
}

export const ModalPerfil = ({ status, imagem, close, ...rest }: ModalPerfilProps) => {
    return (
        <Modal
            visible={status}
            onRequestClose={close}
            animationType="fade"
            style={{ width: '100%', height: 400 }}
            transparent={true}
        >
            <View style={styles.container}>
                {/* <View style={styles.content}>
                    <Image 
                        {...rest}
                        style={{
                            width: 300, height: 400
                        }}
                    />

                    <BtnIcone onPress={close} style={styles.btnClose}>
                        <AntDesign
                            name="close-circle"
                            size={35}
                            color="black"
                        />
                    </BtnIcone>
                </View> */}

                <ImageBackground
                    {...rest}
                    style={{
                        minWidth: 350, minHeight: 450,
                        maxHeight: 1000,
                    }}
                >
                    <BtnIcone onPress={close} style={styles.btnClose}>
                        <AntDesign
                            name="close-circle"
                            size={40}
                            color={Cores.branco}
                        />
                    </BtnIcone>
                </ImageBackground>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', paddingVertical: 65
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