import React , {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Card from "../shared/card";

export default function About(){

 return (
<ImageBackground source={require('../assets/bbgn.png')} style={styles.container}>
    
<Text style={styles.texts}>About Schat</Text>
     <View style={styles.about}>

     

<Text style={styles.aboutText} > This application will help you to  
     Encrypt or Decrypt messages, sensitive information, notes, passwords etc to keep them safe from all unwanted readers.
     Hope you like it 
</Text>

         
     </View>
</ImageBackground>



 )


}

const styles = StyleSheet.create({
     container: {
          
          flex: 1,
          backgroundColor: '#fff',
          
          //alignItems: 'center',
          //justifyContent: 'center',
        },
     about:{
          top:80,
          borderRadius:6,
          elevation: 3,
          backgroundColor: '#fff',
          shadowOffset : {
              width:1,
              height:1
          },
          shadowColor: '#333',
          shadowOpacity:0.3,
          shadowRadius : 2,
          marginVertical:6,
          marginHorizontal:4,
          
     },
     texts :{
          
          fontWeight:'bold',
          fontSize:30,
          padding:10,
          alignItems:'center',
          textAlign:'center',
          top:60,
          color:'#7a3d0e',
          backgroundColor:'#e8c686'
     },
     aboutText:{
          marginHorizontal : 18,
          marginVertical:10,
          textAlign:'center',
          fontSize:20,
          alignItems:'center',
          padding:15
     },

     
   
   })