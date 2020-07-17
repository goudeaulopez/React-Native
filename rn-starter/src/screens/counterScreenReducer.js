import React,{useReducer} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

const NUMBER = 1;

const reducer = (state, action) => {
    if(action.type === 'INCREMENT'){
       return {...state, number: state.number + action.payload}
    }
    else if(action.type === 'DECREMENT'){
        return {...state, number: state.number + action.payload}
    }
    return state
}


const CounteScreenReducer = () =>{
    const [state, dispatch] = useReducer(reducer,{number:0})
    const {number} = state;
    return(
        <View>
            <Text>Counter: {number}</Text>
            <Button title="increment" onPress={()=> dispatch({type:'INCREMENT',payload:  NUMBER})}/>
            <Button title="decrement" onPress={()=> dispatch({type:'DECREMENT',payload: -1*NUMBER})}/>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default CounteScreenReducer