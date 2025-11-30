import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Tela, TelaContainer } from "../components/Tela";
import { InputComponent } from "../components/Inputs";
import { BtnComponent } from "../components/Buttons";
import { router, useRouter } from "expo-router";
import { useState } from "react";
import { MarcadosTitulo } from "../components/Titulo";
import { Cores } from "../styles/Cores";

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = () => {
        router.push('/(drawer)/Home')
    }

    return (
        <Tela centralizar={true} background={Cores.branco}>
            {/* <View style={{
                width: '100%',
                height: 300,
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
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
            </View> */}

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

            <TelaContainer>
                <InputComponent
                    placeholder="Digite seu e-mail"
                    corBorda={Cores.vermelho}
                    senha={false}
                />

                <InputComponent
                    senha={true}
                    placeholder="Digite sua senha"
                    corBorda={Cores.vermelho}
                />
            </TelaContainer>

            <TelaContainer>
                <BtnComponent
                    titulo="Entrar"
                    corBorda={Cores.vermelho}
                    corTxt={Cores.vermelho}
                    onPress={login}
                />

                <TouchableOpacity onPress={() => router.push('/NovoUsuario')}>
                    <Text style={{ color: Cores.vermelho }}>
                        Não possui conta? Cadastre-se aqui.
                    </Text>
                </TouchableOpacity>
            </TelaContainer>
        </Tela>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        width: 250,
        height: 250,
        borderWidth: 4,
        borderColor: Cores.vermelho,
        borderRadius: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
})