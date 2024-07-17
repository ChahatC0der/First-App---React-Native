import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <ScrollView horizontal={true}>

        <View style={[styles.card,styles.cardOne]}><Text>Red</Text></View>
        <View style={[styles.card,styles.cardTwo]}><Text>Blue</Text></View>
        <View style={[styles.card,styles.cardThree]}><Text>Yellow</Text></View>
        <View style={[styles.card,styles.cardThree]}><Text>Yellow</Text></View>
        <View style={[styles.card,styles.cardThree]}><Text>Yellow</Text></View>

        </ScrollView>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight: "900",
        paddingHorizontal: 10
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding: 5
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        borderRadius: 10,
        margin:8
    },
    cardOne:{
        backgroundColor:"red"
    },
    cardTwo:{
        backgroundColor:"blue"
    },
    cardThree:{
        backgroundColor:"yellow"
    }
})