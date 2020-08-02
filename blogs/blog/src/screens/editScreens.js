import React,{useContext} from 'react'
import { StyleSheet} from 'react-native'
import {Context} from '../context/blogContext'
import BlogPostForm from '../components/blogPostForm'

const EditScreens = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context)
    const blogpost = state.find( blogpost => blogpost.id === navigation.getParam('id'))
    return <BlogPostForm
                initialValues={{title:blogpost.title,content:blogpost.content}}
                onSubmit={(title,content)=>{ editBlogPost(navigation.getParam('id'),title,content,()=>
                    navigation.pop())}}
            />
}
const styles = StyleSheet.create({})
export default EditScreens