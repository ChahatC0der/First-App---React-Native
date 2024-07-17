import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
        <View>
          <Text style={styles.headingText}>Elevated Cards</Text>
          <View style={styles.container}>
            <ScrollView horizontal={true}>
    
            <View style={[styles.card]}><Text>One</Text></View>
            <View style={[styles.card]}><Text>Two</Text></View>
            <View style={[styles.card]}><Text>Three</Text></View>
            <View style={[styles.card]}><Text>Four</Text></View>
            <View style={[styles.card]}><Text>Five</Text></View>
    
            </ScrollView>
          </View>
        </View>
  )
}

export default ElevatedCards

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
        borderRadius: 0,
        margin:8,
        backgroundColor:"lightblue",
        elevation: 10,

    },
})