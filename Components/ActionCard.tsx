import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink);
    }
    function openSetting(){
        Linking.openSettings();
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new on JS - 23
            </Text>
        </View>
        <Image height={290} source={{uri:'https://media.licdn.com/dms/image/D4E12AQGQ2Ix3AopJIg/article-inline_image-shrink_1000_1488/0/1708947622938?e=1721865600&v=beta&t=w-skdFmyBETAdaReOm4Vhl-PApi8iMok_P6uGQZXtVM'}}  />
        <View style={styles.cardBody}>
            <Text numberOfLines={3}>
            One of the key enhancements in JDK 23 is the introduction of primitive types in patterns. This upgrade aims to streamline pattern matching by using primitive type patterns in all pattern contexts. The proposal also aligns type patterns with instanceof and facilitates safer casting, making Java code more uniform and expressive.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
               onPress={()=>{
                // openWebsite('https://www.linkedin.com/pulse/explore-jdk-23-thedevelopway-fdixe?trk=public_post_main-feed-card_feed-article-content');
                // openSetting();
                openWebsite("twitter://timeline");
               }}
            >
                <Text style={styles.socialLinks}>
                Read More

                </Text>
            </TouchableOpacity>
            <TouchableOpacity
               nextFocusDown={10}
               onPress={()=>{
                // openWebsite('https://www.linkedin.com/pulse/explore-jdk-23-thedevelopway-fdixe?trk=public_post_main-feed-card_feed-article-content');
                // openSetting();
                openWebsite("twitter://timeline");
               }}
            >
                <Text style={styles.socialLinks}>
                Follow me

                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{
        fontFamily:"800",
        fontSize : 22,
        marginLeft: 15,
    },
    card:{
        width: 360,
        height: 470,
        marginHorizontal: 17,
        marginVertical: 17,
        backgroundColor: "#E07C24",
        paddingHorizontal: 10
    },
    headingContainer:{
        height:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        backgroundColor:"#E07C24",
        color: "black",
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardBody:{
        padding: 10
    },
    footerContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    socialLinks:{
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: "white",
        color:"black"
    }
})