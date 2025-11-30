import { Stack } from 'expo-router';

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false,
                    headerShadowVisible: false
                }}
            />
            <Stack.Screen
                name='Login'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='NovoUsuario'
                options={{
                    headerShown: false,
                    headerShadowVisible: false
                }}
            />
            <Stack.Screen
                name='(drawer)'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}