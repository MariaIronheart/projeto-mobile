import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Lista from "../views/Lista";
import Cadastro from "../views/Cadastro";

const Stack = createNativeStackNavigator();

const AppRoute = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown : false }}
                    />
                    <Stack.Screen
                    name="Lista Produtos"
                    component={Lista}
                    options={{ title: 'Produtos' }}
                    />
                    <Stack.Screen name="Lista" component={Lista} />

                    <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: 'Cadastro' }}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoute;