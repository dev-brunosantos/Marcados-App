import { BtnIcone } from "@/src/components/Buttons/BtnIcon";
import { BtnOption } from "@/src/components/Buttons/BtnOptions";
import { Tela, TelaContainer } from "@/src/components/Tela";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import { ModalPerfil } from "@/src/components/Modals/ModalPerfil";
import { BtnComponent } from "@/src/components/Buttons";
import { router } from "expo-router";

interface ConfiguracoesProps {
    image?: string
}

// import perfil from 'images/perfil.jpg';

export default function Configuracoes({ image }: ConfiguracoesProps) {

    const [modalStatus, setModalStatus] = useState(false)

    const abrirModal = () => {
        setModalStatus(true)
    }

    const fecharModal = () => {
        setModalStatus(false)
    }

    return (
        <Tela>
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

                {/* <Modal
                    visible={modalStatus}
                    onRequestClose={fecharModal}
                    animationType="slide"
                    style={{ width: '100%', height: 400 }}
                    transparent={true}
                >
                    <View style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 500, borderRadius: 10, backgroundColor: '#dadada', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>Modal Aberto</Text>

                            <BtnIcone onPress={fecharModal} style={{ position: 'absolute', top: 8, right: 16 }}>
                                <AntDesign
                                    name="close-circle"
                                    size={35}
                                    color="black"
                                />
                            </BtnIcone>
                        </View>
                    </View>
                </Modal> */}

                <ModalPerfil status={modalStatus} close={fecharModal} />


                <BtnOption titulo="Alterar Imagem do perfil" />

                <BtnOption titulo="Alterar senha" />

                <BtnOption titulo="Alterar cor tema" />

                <BtnOption titulo="Excluir conta" />

                <View style={{ width: '100%', marginVertical: 150}}>
                    <BtnComponent titulo="Sair" onPress={() => router.replace('/')} />
                </View>

            </TelaContainer>
        </Tela>
    )
}