import React,{useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Context} from '../context/blogContext'
import BlogPostForm from '../components/blogPostForm'

const CreateScreens = ({navigation}) => {
  const {addBlogPost} = useContext(Context);
    return <BlogPostForm
               onSubmit={(title,content)=>{
                   addBlogPost(title,content,()=> navigation.navigate('Index'))
            }}
            />
}
const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderColor:'black',
        borderWidth:1,
        marginBottom:15,
        margin:5,
        padding:5

    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
   

})
export default CreateScreens