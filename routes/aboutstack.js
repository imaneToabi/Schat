import { createPortal } from 'react-dom';
import{ createStackNavigator} from 'react-navigation-stack';

import About from '../screens/about'
import Header from '../shared/header';
import React from 'react'

const screens ={
 About : {
    screen : About,
    navigationOptions:({navigation}) =>{
        return {
            headerTitle:()=> <Header  navigation={navigation} title='Schat'/>
        }
       
    }
 }
}

const AboutStack = createStackNavigator(screens,{
 defaultNavigationOptions:{
    headerTintColor: 'black',
    headerStyle:{
        backgroundColor : '#d3a663',height:80
    }
 }

});

export default AboutStack;


