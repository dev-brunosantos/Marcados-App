import { BtnIcone } from "@/src/components/Buttons/BtnIcon";
import { BtnOption } from "@/src/components/Buttons/BtnOptions";
import { Tela, TelaContainer } from "@/src/components/Tela";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import { ModalPerfil } from "@/src/components/Modals/ModalPerfil";
import { BtnComponent } from "@/src/components/Buttons";
import { router } from "expo-router";
import { Cores } from "@/src/styles/Cores";

interface ConfiguracoesProps {
    image?: string
}

// import perfil from '@assets/perfil.png';

export default function Configuracoes({ image }: ConfiguracoesProps) {

    const [modalStatus, setModalStatus] = useState(false)

    const abrirModal = () => {
        setModalStatus(true)
    }

    const fecharModal = () => {
        setModalStatus(false)
    }

    return (
        <Tela background={Cores.branco}>
            <TelaContainer>

                <View>
                    <TouchableOpacity
                        style={{
                            width: 200,
                            height: 200,
                            borderWidth: 0,
                            borderRadius: '50%',
                            marginTop: 20,
                            marginBottom: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}

                        onPress={abrirModal}
                    >
                        <Image
                            source={require('@/assets/perfil.jpg')}
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <ModalPerfil 
                    status={modalStatus} 
                    close={fecharModal} 
                    source={require('@/assets/perfil.jpg')}
                />


                <BtnOption corTxt={Cores.vermelho} titulo="Alterar Imagem do perfil" />

                <BtnOption corTxt={Cores.vermelho}  titulo="Alterar senha" />

                <BtnOption corTxt={Cores.vermelho}  titulo="Alterar cor tema" />

                <BtnOption corTxt={Cores.vermelho} titulo="Excluir conta" />

                <View style={{ width: '90%', marginTop: 20}}>
                    <BtnComponent 
                        titulo="Sair" 
                        semBorda
                        background={Cores.vermelho}
                        corTxt={Cores.branco}
                        onPress={() => router.replace('/')} />
                </View>

            </TelaContainer>
        </Tela>
    )
}