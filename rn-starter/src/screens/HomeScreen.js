import React from "react";
import { Text, StyleSheet, View,Button,TouchableOpacity } from "react-native";


const HomeScreen = props => {
  //console.log(props.navigation)
  return(
    <View>
      <Text style={styles.text}>Hello there!</Text>
          <Button 
         onPress={()=> props.navigation.navigate('Components')}
          title="go to home scrren"
        />
         <Button 
          onPress={()=> props.navigation.navigate('List')}
          title="go to list scrren"
        />
         <Button 
          onPress={()=> props.navigation.navigate('Image')}
          title="go to image scrren"
        />
         <Button 
          onPress={()=> props.navigation.navigate('Counter')}
          title="go to counter screen"
        />
        <Button 
          onPress={()=> props.navigation.navigate('Color')}
          title="go to color screen"
        />
        <Button 
          onPress={()=> props.navigation.navigate('Square')}
          title="go to square screen"
        />
        <Button 
          onPress={()=> props.navigation.navigate('SquareReducer')}
          title="go to square reducer screen"
        />
        <Button 
          onPress={()=> props.navigation.navigate('CounterReducer')}
          title="go to counter reducer screen"
        />
        <Button 
          onPress={()=> props.navigation.navigate('TextS')}
          title="go to text screen"
        />
        <Button 
          onPress={()=> props.navigation.navigate('Box')}
          title="go to box screen"
        />
        
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

/*
<TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
          <Text>Go to list demo</Text>
        </TouchableOpacity>



*/