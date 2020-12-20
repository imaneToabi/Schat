import { createPortal } from 'react-dom';
import{ createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react'


const screens ={
 Home : {
    screen : Home,
    navigationOptions:({navigation}) =>{
        return {
            headerTitle:()=> <Header  navigation={navigation} title='Schat'/>
        }
       
    }
 }
}

const HomeStack = createStackNavigator(screens,{
 defaultNavigationOptions:{
        headerTintColor: 'black',
        headerStyle:{
            backgroundColor : '#d3a663',height:80
        }
 }

});

export default HomeStack;


