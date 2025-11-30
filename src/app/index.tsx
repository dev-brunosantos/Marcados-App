import { Image, StyleSheet, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Tela, TelaContainer } from "../components/Tela";
import { BtnComponent } from "../components/Buttons";
import { useRouter } from "expo-router";
import { MarcadosTitulo } from "../components/Titulo";

import { Cores } from '../styles/Cores'
const { branco, preto, cinza, vermelho } = Cores;

export default function App() {

    const router = useRouter();

    const irParaLogin = () => {
        router.push('/Login')
    }

    return (
        <Tela centralizar={true} background={branco}>
            <Animatable.View
                animation={'fadeIn'} duration={1500} delay={500}
            >
                <View style={styles.containerImage}>
                    <Image
                        source={require("@/assets/logo.jpg")}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
            </Animatable.View>

            <Animatable.View
                style={styles.containerBtn}
                animation={'fadeInUp'}
                duration={1500}
                delay={1500}
            >
                <BtnComponent
                    titulo="Ir para Login"
                    background={branco}
                    semBorda={true}
                    corTxt={vermelho}
                    onPress={irParaLogin}
                />
            </Animatable.View>
        </Tela>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        width: 300,
        height: 300,
        borderWidth: 4,
        borderColor: vermelho,
        borderRadius: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    containerBtn: {
        width: '110%',
        height: 150,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: vermelho
    },
    titulo: {
        fontSize: 75,
        fontWeight: 'bold',
        marginTop: -150,
        fontStyle: 'italic'
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})