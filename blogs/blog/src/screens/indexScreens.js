import React,{useContext, useEffect } from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {Context} from '../context/blogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPost,getBlogPost} = useContext(Context);

   useEffect(()=>{
      getBlogPost()
      const listener = navigation.addListener('didFocus', ()=> {
        getBlogPost();
      });
      return () =>{
        listener.remove();
      };
    },[]);
    
    return(<View>
        <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({item})=>{
          return(
              <TouchableOpacity onPress={()=> navigation.navigate("Show",{id: item.id})}>
                  <View style={styles.row}>
                    <Text style={styles.text}>{item.title}-{item.id}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                      <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
              </TouchableOpacity>
          );
          }}
        />
        
    </View>);
};
IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight:()=> (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}







const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'gray'
  },
  text:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }

})
export default IndexScreen