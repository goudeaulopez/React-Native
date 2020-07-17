import React,{useReducer} from 'react'
import {View,StyleSheet} from 'react-native'
import ColorCounter from '../components/colorCounter'

const COLOR_INCRIMENT = 15

const reducer = ( state, action ) => {
    switch(action.type){
        case 'RED':
           return state.red + action.payload > 255  || state.red + action.payload <0 
           ? state
           : {...state, red: state.red + action.payload}
        case 'BLUE':
            return state.blue + action.payload > 255  || state.blue + action.payload <0 
           ? state
           : {...state, blue: state.blue+ action.payload}
        case 'GREEN':
            return state.green + action.payload > 255  || state.green + action.payload <0 
            ? state
            : {...state, green: state.green + action.payload}        
        default:
            return state
    }
}

const SquareScreenReducer = () => {

    const [ state, dispatch ] = useReducer( reducer, { red: 0 , blue: 0 , green: 0 })
    const {red,blue,green} = state;
    return(
        <View>
            <ColorCounter 
                onIncrease={()=> dispatch({ type: 'RED', payload: COLOR_INCRIMENT})}
                onDecrease={()=> dispatch({ type: 'RED', payload: -1 * COLOR_INCRIMENT})}
                color="Red"
            />
            <ColorCounter 
                onIncrease={()=> dispatch({ type: 'BLUE', payload: COLOR_INCRIMENT})}
                onDecrease={()=> dispatch({ type: 'BLUE', payload: -1 * COLOR_INCRIMENT})} 
                color="Blue"
            />
            <ColorCounter
                onIncrease={()=> dispatch({ type: 'GREEN', payload: COLOR_INCRIMENT})}
                onDecrease={()=> dispatch({ type: 'GREEN', payload: -1 * COLOR_INCRIMENT})} 
                color="Green"
             />
            <View
                style={{height:150,width:150, backgroundColor:`rgb(${red},${blue},${green})`}}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
export default SquareScreenReducer