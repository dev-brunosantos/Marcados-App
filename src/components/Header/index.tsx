import { Cores } from "@/src/styles/Cores";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
    nomeUsuario: string;
    perfilUsuario: string;
}

export const Header = ({ nomeUsuario, perfilUsuario }: HeaderProps) => {
    return (
        <View style={styles.header}>
            
            <View style={{ paddingHorizontal: 5}}>
                <Text style={styles.txtSaudacao}>
                    Seja bem vindo
                </Text>

                <Text style={styles.txtNome}>
                    {nomeUsuario}
                </Text>
            </View>

            <View>
                <TouchableOpacity onPress={() => router.push('/(drawer)/Configuracoes')} style={styles.btnPerfil}>
                    <Image
                        source={require('@/assets/perfil.jpg')}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 180,
        // borderBottomWidth: 1,
        // borderStyle: 'dashed',
        // marginTop: 20,
        marginBottom: 50,
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Cores.vermelho
    },
    // containerTxt: {
    //     width: 
    // },
    txtSaudacao: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: Cores.cinza
    },
    txtNome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Cores.branco
    },
    btnPerfil: {
        width: 80,
        height: 80,
        borderWidth: 0,
        borderRadius: '50%',
        marginRight: 10,
        position: 'relative',
        overflow: 'hidden'
    }
})