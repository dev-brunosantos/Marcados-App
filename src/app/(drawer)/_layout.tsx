import { Header } from '@/src/components/Header';
import { DrawerContent } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

// CustomDrawer.js
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View } from 'react-native';
import { BtnComponent } from '@/src/components/Buttons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Cores } from '@/src/styles/Cores';

export default function DrawerLayout() {

    const [lider, setLider] = useState(true);

    return (
        <Drawer
            screenOptions={{
                headerTitleContainerStyle: {
                    // borderWidth: 1,
                    paddingHorizontal: 20,
                },
                headerLeftContainerStyle: {
                    position: 'absolute',
                    right: 8,
                    top: 16
                },
                drawerActiveTintColor: Cores.vermelho,
                
            }}
            drawerContent={(props) => (
                <>
                    <Header
                        nomeUsuario='Bruno Santos'
                        perfilUsuario=''
                    />

                    <View style={{ flex: 1, paddingHorizontal: 20 }} >
                        <DrawerItemList {...props} />

                        {/* <View style={{ position: 'absolute', bottom: 100, width: '100%', padding: 0 }}></View> */}
                        <View style={{ width: '100%', marginTop: 180, padding: 0 }}>
                            <BtnComponent 
                                titulo='Sair' 
                                onPress={() => router.replace('/')} 
                                semBorda={true}
                                background={Cores.vermelho}
                                corTxt={Cores.branco}
                            />
                        </View>

                    </View>
                </>
            )}
        >
            <Drawer.Screen name='Home' />

            {/* Tela de cadastros destinada para os Administradores */}
            <Drawer.Screen name='Cadastros' options={{
                drawerItemStyle: { display: lider ? 'flex' : 'none' }
            }} />

            <Drawer.Screen name='Escalas' options={{
                drawerItemStyle: { display: lider ? 'flex' : 'none' }
            }} />
            <Drawer.Screen name='Louvores' options={{
                drawerItemStyle: { display: lider ? 'flex' : 'none' }
            }} />

            <Drawer.Screen name='Membros' />
            <Drawer.Screen
                name='Configuracoes'
                options={{
                    title: "Configurações"
                }}
            />
        </Drawer>
    )
}