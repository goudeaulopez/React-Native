import React from 'react'
import {Text,StyleSheet,View} from 'react-native'

const ComponentsScreens = ()=>{
    const greetings = 'Leo Goudeau'
    return(
        <View>
            <Text style={styles.textStyle}>Hello this is my new app</Text>
            <Text style={styles.textStyle1}>My name {greetings}</Text>
            
           
            
       </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45,
        color:'blue',
    },
    textStyle1:{
        fontSize:30,
        color:'red',
    },
    textStyle2:{
        fontSize:50,
        color:'green',
        textAlign:'center',
        paddingTop: 45
    },

})
export default ComponentsScreens