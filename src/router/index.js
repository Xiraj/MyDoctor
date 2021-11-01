import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Login, Register, SplashScreen, UploadPhoto } from '../screens'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
             name="SplashScreen" 
             component={SplashScreen} 
             options={{headerShown: false}} 
            />
            <Stack.Screen
             name="GetStarted"
             component={GetStarted}
             options={{headerShown: false}} 
            />
            <Stack.Screen
             name="Register"
             component={Register}
             options={{headerShown: false}} 
            />
            <Stack.Screen
             name="Login"
             component={Login}
             options={{headerShown: false}} 
            />
            <Stack.Screen
             name="UploadPhoto"
             component={UploadPhoto}
             options={{headerShown: false}} 
            />
        </Stack.Navigator>
    )
}


export default Router;