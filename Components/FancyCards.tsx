import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Fancy Cards</Text>
      <View style={styles.FancyCards}>
        <Image height={280} resizeMode={'stretch'}  source={{uri:"https://lh5.googleusercontent.com/p/AF1QipMDN4Ca8TsfkHYi0M2VzDK7YASsxloXD5SxpWqh=w540-h312-n-k-no"}} />
        <View style={{paddingHorizontal: 8}}>

        <Text style={styles.title}>Tawang</Text>
        <Text style={styles.description}>Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh. It lies on NH-13 section</Text>
        <Text style={styles.footer}>Very beautiful</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    heading:{
        fontFamily:"800",
        fontSize : 22,
        marginLeft: 15,
        
    },
    FancyCards:{
        // paddingHorizontal: 15,
        marginHorizontal:10,
        // borderColor:'lightblue',
        backgroundColor:'white',
        borderWidth: 5,
        height:460,
        width:373,
        
    },
    title:{
        fontSize : 25,
        marginVertical : 8,
        color: "black"
    },
    description:{
        fontSize:16,
        marginVertical : 8,
        color: "black"
    },
    footer:{
        marginVertical : 8,
        fontSize: 20,
        fontWeight:"800",
        color: "black"
    }
})