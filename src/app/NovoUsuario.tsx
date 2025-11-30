import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Tela, TelaContainer } from "../components/Tela";
import { InputComponent } from "../components/Inputs";
import { BtnComponent } from "../components/Buttons";
import { useState } from "react";
import { MarcadosTitulo } from "../components/Titulo";
import { router } from "expo-router";
import { Cores } from "../styles/Cores";

export default function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    return (
        <Tela centralizar={true} background={Cores.branco}>
            {/* <TelaContainer>
                <MarcadosTitulo />
            </TelaContainer> */}

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
                    placeholder="Digite seu Nome"
                    onChangeText={setNome}
                    corBorda={Cores.vermelho}
                    senha={false}
                />

                <InputComponent
                    placeholder="Digite seu e-mail"
                    onChangeText={setEmail}
                    corBorda={Cores.vermelho}
                    senha={false}
                />

                <InputComponent
                    senha={true}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                    corBorda={Cores.vermelho}
                />

                <InputComponent
                    senha={true}
                    placeholder="Confirme sua senha"
                    onChangeText={setConfirmarSenha}
                    corBorda={Cores.vermelho}
                />

                <BtnComponent
                    titulo="Cadastrar"
                    onPress={() => router.back()}
                    corBorda={Cores.vermelho}
                    corTxt={Cores.vermelho}
                />
            </TelaContainer>

            {/* <TelaContainer>
                <BtnComponent
                    titulo="Cadastrar"
                    onPress={() => router.back()}
                    corBorda={Cores.vermelho}
                    corTxt={Cores.vermelho}
                />
            </TelaContainer> */}
        </Tela >
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