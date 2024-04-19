import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home.js/Home";

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
                </Stack.Navigator>
            
                <Stack.Screen
                name="Home"
                component={Home}
                />
            
        </NavigationContainer>
    );
}

export default AppRoute;