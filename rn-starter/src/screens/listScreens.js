import React from 'react'
import {Text,FlatList,StyleSheet, View, Button} from 'react-native'

const ListScreens = () =>{
   const freinds = [
       {name:'friend1', age:'32'},
       {name:'friend2', age:'23'},
       {name:'friend3', age:'33'},
       {name:'friend4', age:'78'},
       {name:'friend5', age:'24'},
       {name:'friend6', age:'12'},
       {name:'friend7', age:'39'},
       {name:'friend8', age:'42'},
       {name:'friend9', age:'52'},
       {name:'friend10', age:'37'},
       {name:'friend11', age:'22'},
       {name:'friend12', age:'12'},
       {name:'friend13', age:'62'},
       {name:'friend14', age:'72'}
   ]
    return (
        <FlatList
             keyExtractor={friend => friend.name}
            data={freinds}
            renderItem={({item})=>{
            return <Text 
                       style={styles.textStyle}>{item.name} - Age:{item.age}
                  </Text>
        }}>
        </FlatList>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 5,
        fontSize:24,
        padding:5
    }
})
export default ListScreens


  // horizontal
// showsHorizontalScrollIndicator={false}