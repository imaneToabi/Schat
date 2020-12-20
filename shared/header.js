import React , {useState} from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}){

const openMenu =()=>{
     navigation.openDrawer();
}

return (

    <View style={styles.header}>
        <MaterialIcons name="menu" size={30} onPress={openMenu} style={styles.icons} />
        <View>
          
             <Text style={styles.headerText}> <Image style={styles.logo} source={require('../assets/key.png')} /> {title} <Image style={styles.logo} source={require('../assets/key2.png')} /> </Text>
        </View>

    </View>
)
}

const styles = StyleSheet.create({
  header: {
      width: '100%',
      height:'100%',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent:'center',
      //backgroundColor:'coral'
  },
  headerText : {
      fontWeight:'bold',
      fontSize : 20,
      color:'#333',

  },
  icons:{
      position:'absolute',
      left:20
  },
  logo:{
      width:50,
      height:20,
      
  }
  

})