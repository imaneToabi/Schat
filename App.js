import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Alert } from 'react-native';
import Navigator from './routes/drawer';

export default function App() {

  const [msg,setMsg] = useState('');
  
  
  const clickHandler = () =>{
    setMsg('piw');
    
  }
   var abc='';
  
   const Crypt= () =>{
    var t = msg.text1;
     var chars = {'a':'x',
        'b':'y',
        'c':'z',
        'd':'w',
        'e':'v',
        'f':'u',
        'g':'t',
        'h':'s',
        'i':'q',
        'j':'k',
        'k':'c',
        'l':'b',
        'm':'a',
        'n':'d',
        'o':'e',
        'p':'f',
        'q':'g',
        'r':'h',
        's':'i',
        't':'j',
        'u':'k',
        'v':'l',
        'w':'m',
        'x':'n',
        'y':'o',
        'z':'p',
        'A':'X',
        'B':'Y',
        'C':'Z',
        'D':'W',
        'E':'V',
        'F':'U',
        'G':'T',
        'H':'S',
        'I':'Q',
        'J':'K',
        'K':'C',
        'L':'B',
        'M':'A',
        'N':'D',
        'O':'E',
        'P':'F',
        'Q':'G',
        'R':'H',
        'S':'I',
        'T':'J',
        'U':'K',
        'V':'L',
        'W':'M',
        'X':'N',
        'Y':'O',
        'Z':'P',

        };
      

     result = t.replace(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, m => chars[m]);  
     //return result;
    
    
    Alert.alert(result);
    this.textInput.clear();
      abc=result;
      return abc;
   
  }


  const Decrypt= () =>{
    var to = msg.text2;
    var chars = {'x':'a',
    'y':'b',
    'z':'c',
    'w':'d',
    'v':'e',
    'u':'f',
    't':'g',
    's':'h',
    'q':'i',
    'k':'j',
    'c':'k',
    'b':'l',
    'a':'m',
    'd':'n',
    'e':'o',
    'f':'p',
    'g':'q',
    'h':'r',
    'i':'s',
    'j':'t',
    'k':'u',
    'l':'v',
    'm':'w',
    'n':'x',
    'o':'y',
    'p':'z',

    'X':'A',
    'Y':'B',
    'Z':'C',
    'W':'D',
    'V':'E',
    'U':'F',
    'T':'G',
    'S':'H',
    'Q':'I',
    'K':'J',
    'C':'K',
    'B':'L',
    'A':'M',
    'D':'N',
    'E':'O',
    'F':'P',
    'G':'Q',
    'H':'R',
    'I':'S',
    'J':'T',
    'K':'U',
    'L':'V',
    'M':'W',
    'N':'X',
    'O':'Y',
    'P':'Z',

        };
      

     result = to.replace(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, m => chars[m]);  
     //return result;
    
     this.textInputs.clear();
    Alert.alert(result);
      abc=result;
      return abc;
   
  }
  
  return (
    
   <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
  
    paddingTop:0,
    fontWeight:'bold',
    fontSize:30,
    padding:20
  },
  body: {
    alignItems: 'center',
    margin:10
  },
  input: {
    borderWidth:1,
    padding:8,
    width:300,
    backgroundColor:'#fff',
    margin:10
    
  },
});
