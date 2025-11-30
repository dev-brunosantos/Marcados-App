import { CardLouvores } from "@/src/components/Cards/CardLouvores";
import { Tela, TelaContainer } from "@/src/components/Tela";
import { Text } from "react-native";

export default function Louvores() {
    return(
        <Tela>
            <TelaContainer>
                <Text>
                    Tela Louvores
                </Text>
            </TelaContainer>

            <TelaContainer>
                <CardLouvores />
            </TelaContainer>
        </Tela>
    )
}