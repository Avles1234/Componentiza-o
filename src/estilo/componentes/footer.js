import styles from '../estilo.js';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';

export default function footer(){
    return(

<View>
<View style= {{flexDirection:'row', marginTop:30}}>
<Text style= {styles.textLink}>  Esqueceu sua senha ?     </Text>
<Text style= {styles.textLink}>  Cadastra-se já !    </Text>
</View>
       
      
    </View>


    );
}   
