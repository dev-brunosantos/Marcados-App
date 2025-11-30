import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { BtnIcone } from "../Buttons/BtnIcon";
import { useState } from "react";
import { Cores } from "@/src/styles/Cores";

interface InputProps extends TextInputProps {
    senha?: boolean;
    semBorda?: boolean;
    corBorda?: string;
    corTxt?: string;
    background?: string;
}

export const InputComponent = ({ senha, semBorda, corBorda, corTxt, background, ...rest }: InputProps) => {

    const { container, input, btnIcone } = styles;
    const [seguranca, setSeguranca] = useState(true)
    const [icone, setIcone] = useState('eye-with-line')

    const verSenha = () => {
        setSeguranca(!seguranca)
        setIcone(icone == 'eye' ? 'eye-with-line' : 'eye')
    }

    if (senha) {
        return (
            <View style={[
                container,
                {
                    borderWidth: semBorda ? 0 : 1,
                    borderColor: corBorda ?? Cores.preto,
                    backgroundColor: background ?? 'transparent',
                }
            ]}>
                <TextInput
                    style={input}
                    {...rest}
                    secureTextEntry={seguranca}
                />

                <BtnIcone 
                    style={btnIcone} 
                    onPress={verSenha}    
                >
                    <Entypo name={icone} size={35} color={Cores.vermelho}/>
                </BtnIcone>
            </View>
        )
    }

    return (
        <View style={[
            container,
            {
                borderWidth: semBorda ? 0 : 1,
                borderColor: corBorda ?? Cores.preto,
                backgroundColor: background ?? 'transparent',
            }
        ]}>
            <TextInput
                style={input}
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 54,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    input: {
        width: '100%',
        // height: '100%',
        // borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16,
        outlineWidth: 0
    },
    btnIcone: {
        // height: '100%',
        // borderWidth: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0
    }
})