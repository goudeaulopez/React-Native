import createDataContext from './createDataContext'
import jsonServer from '../apis/jsonServer'

const blogReducer = (state, action) => {
   switch(action.type){
       case 'GETBLOGPOST':
           return action.payload;
       case 'EDITBLOGPOST':
           return state.map( blogpost => {
               return blogpost.id === action.payload.id
                      ? action.payload
                      : blogpost
           })
       case 'DELETE_BLOG_POST':
           return state.filter(blogpost => blogpost.id !== action.payload)
      
        default:
            return state
    }
}
const getBlogPost =  dispatch =>{
     return async () =>{
            const response = await jsonServer.get('/BlogPosts')
            console.log(response.data)
            dispatch({type: 'GETBLOGPOST', payload: response.data})
        }   

   
}
const addBlogPost = () =>{ 
    return async (title, content,callback) =>{
          await jsonServer.post('/BlogPosts',{title,content})
       // dispatch({type:'BLOG_POST',payload:{title,content}})
       if(callback()){
           callback()
        }
       
    }
   
}
const deleteBlogPost = dispatch =>{
    return async (id) =>{
        await jsonServer.delete(`/BlogPosts/${id}`)
        dispatch({type:'DELETE_BLOG_POST',payload:id})
    }
   
}
const editBlogPost = dispatch =>{
    return async (id,title,content,callback) =>{
        await jsonServer.put(`/BlogPosts/${id}`,{title,content})
        dispatch({type:'EDITBLOGPOST',payload:{id,title,content}});
        if(callback()){
            callback()
        }
    }
}

export const {Context, Provider} = 
createDataContext(blogReducer,
    {addBlogPost,deleteBlogPost,editBlogPost,getBlogPost},
    []);


// github.expo/vector-icons


/*
 case 'BLOG_POST':
           return [...state,
                     {
                         id: Math.floor(Math.random()*99999),
                         title:action.payload.title,
                         content:action.payload.content
                     }
                   ]



*/
