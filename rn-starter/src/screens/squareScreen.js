import React,{useState} from 'react'
import {View,StyleSheet} from 'react-native'
import ColorCounter from '../components/colorCounter'

const COLOR_INCRIMENT = 15

const SquareScreen = () => {
    const [red,setRed] = useState(0)
    const [blue,setBlue] = useState(0)
    const [green,setGreen] = useState(0)

    const setColor = (color,change) => {
         switch(color){
             case 'red':
               red + change > 255  || red + change <0 ? null : setRed( red + change )
               return
                case 'blue':
                 blue + change > 255  || blue + change <0 ? null : setBlue( blue + change )
                    return
                    case 'green':
                         green + change > 255  || green + change <0 ? null : setGreen( green + change )
                        return
         }
    }

    return(
        <View>
            <ColorCounter onIncrease={()=>setColor('red',COLOR_INCRIMENT)} onDecrease={()=>setColor('red',-1*COLOR_INCRIMENT)} color="Red"/>
            <ColorCounter onIncrease={()=>setColor('blue',COLOR_INCRIMENT)} onDecrease={()=>setColor('blue',-1*COLOR_INCRIMENT)} color="Blue"/>
            <ColorCounter onIncrease={()=>setColor('green',COLOR_INCRIMENT)} onDecrease={()=>setColor('green',-1*COLOR_INCRIMENT)} color="Green"/>
            <View
                style={{height:150,width:150, backgroundColor:`rgb(${red},${blue},${green})`}}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
export default SquareScreen