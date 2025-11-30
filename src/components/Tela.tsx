import { StyleSheet, View } from "react-native";
import { Cores } from "../styles/Cores";

interface TelaProps {
    children: React.ReactNode;
    centralizar?: boolean;
    background?: string;
}

export const Tela = ({ children, centralizar, background }:TelaProps) => {
    return (
        <View 
            style={[
                styles.tela,
                {
                    justifyContent: centralizar ? 'space-evenly' : 'flex-start',
                    backgroundColor: background ?? Cores.cinza
                }
            ]}
        >
            {children}
        </View>      
    )
}

export const TelaContainer = ({ children } :{children: React.ReactNode }) => {
    return(
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        minHeight: 200,
        height: 'auto',
        // borderWidth: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})