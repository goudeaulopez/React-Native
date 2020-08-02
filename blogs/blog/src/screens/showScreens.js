import React,{useContext} from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {Context} from '../context/blogContext'
import {EvilIcons} from '@expo/vector-icons'

const ShowScreens = ({navigation}) => {
     console.log(navigation.getParam('id'))
     const {state} = useContext(Context)

     const blogPost = state.find( blogPost => blogPost.id === navigation.getParam('id'))

    return<View>
        <Text>{blogPost.title}-{blogPost.id}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}
ShowScreens.navigationOptions = ({navigation}) =>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}
const styles = StyleSheet.create({})
export default ShowScreens