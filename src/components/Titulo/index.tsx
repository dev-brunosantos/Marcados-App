import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface MarcadosTituloProps {
    temContainer?: boolean;
}

export const MarcadosTitulo = ({ temContainer }:MarcadosTituloProps) => {
    return (
        <Animatable.Text
            animation={'fadeIn'}
            duration={1000}
            style={[
                styles.titulo, 
                { marginTop: temContainer ? -150 : 0 }
            ]}
        >
            Marcados
        </Animatable.Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 75,
        fontWeight: 'bold',
        // marginTop: -150,
        fontStyle: 'italic'
    },
})