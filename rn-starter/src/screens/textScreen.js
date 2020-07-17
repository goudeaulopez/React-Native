import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name,setName] = useState('')
    const test = name.length;
    const message = test < 5 ? <Text>password must contain 5 characters at least</Text> : null
    return(
        <View>
            <Text>Enter Your PAssword:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue=>setName(newValue)}
                />
            { message }
        </View>
    )
}
const styles = StyleSheet.create({
   input:{
       margin:15,
       borderColor:'black',
       borderWidth:1
   }
})
export default TextScreen