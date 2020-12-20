import React , {useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Alert,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(){
     const [msg,setMsg] = useState('');
     const [rlt,setrslt] = useState('');
     const [rlts,setrslts] = useState('');
  
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
        setrslt(result);
       
       Alert.alert(result);
       this.textInput.clear();
       //rlt=result;
         
        // return rlt;
      
     }
   
   
     const Decrypt= () =>{
       var tos = msg.text2;
       //var tos=rlt;
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
         
         
         
   
         result = tos.replace(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, m => chars[m]);  
        //return result;
        setrslts(result);
       
       Alert.alert(result);
        this.textInputs.clear();
        
       
         //abc=result;
         //return abc;
      
     }
 return (

<ImageBackground source={require('../assets/bbgn.png')} style={styles.container}>
      <View style={styles.content} >
     
      <View style={styles.body} keyboardShouldPersistTaps={'handled'}>
      
      <TextInput selectTextOnFocus={true} ref={input => { this.textInput = input }} placeholder="Message to Crypt"  style={styles.input} 
    onChangeText={(text1) => setMsg({text1})} multiline
       />
 
     
         <TouchableOpacity  onPress={Crypt}>
      <View style={styles.btn}>
        <Text style={styles.btntxt}> Crypt</Text>
      </View>

       </TouchableOpacity>
 <Text selectable style={styles.txt}>{rlt}</Text>
 <View style={styles.brd}></View>

 <TextInput selectTextOnFocus={true} ref={inputs => { this.textInputs = inputs }} placeholder="Message to Decrypt"   style={styles.input} 
    onChangeText={(text2) => setMsg({text2})} multiline
       />
 
    

       <TouchableOpacity  onPress={Decrypt}>
      <View style={styles.btn}>
        <Text style={styles.btntxt}> Decrypt</Text>
      </View>

       </TouchableOpacity>
       <Text selectable style={styles.txt}>{rlts}</Text>
      </View>
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
     txt:{
      margin:5,
      fontSize:20
     },
     brd:{
          borderWidth: 1,
          borderColor:'black',
          margin:17,
          width:200,
          borderStyle:'dashed'
     },
     header: {
          top:40,
       paddingTop:0,
       fontWeight:'bold',
       fontSize:30,
       padding:20,
       alignItems:'center',
       textAlign:'center',
       backgroundColor:'#d3a663'
     },
     content : {
       top:40
     },
     body: {
          
       alignItems: 'center',
       margin:10,
       top:70
     },
     input: {
       borderWidth:1,
       padding:8,
       width:300,
       backgroundColor:'#fff',
       margin:10
       
       
     },
     
     btn:{
      elevation: 8,
          backgroundColor:'red',
          borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor:'#46240c'
     },
     btntxt:{
       color:'white',
       fontWeight:'bold',
       textTransform:'uppercase',
       fontSize:16,
       textAlign:'center'
     }
   });