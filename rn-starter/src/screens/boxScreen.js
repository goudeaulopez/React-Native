import React from 'react'
import {Text,StyleSheet, View} from 'react-native'

const BoxScreen = () => {
    return(
        <View style={styles.viewmain}>
            <View style={styles.view1}/>
            <View style={styles.view2}/>
            <View style={styles.view3}/>
        </View>
    )
}
const styles = StyleSheet.create({
  viewmain:{
    flexDirection:'row',
    flex: 1,
    justifyContent: 'space-between',
     
  },
  view1:{
    width:100,
    height:100,
    backgroundColor:'red'
  },
  view2:{
    width:100,
    height:100,
     backgroundColor:'yellow',
     marginTop:100
   
  },
  view3:{
    width:100,
    height:100,
     backgroundColor:'green'
  }
})
export default BoxScreen
 

/*

flexDirection: row, column
alignItem: center
justifyContent: flex-start, center,flex-end, space-around

flex-> alignItems,justifyContext,
alignSelf
flex:1

...StyleSheet.absoluteFillObject


*/