import React from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';


export const HomeScreen = () => {

    const renderIcon = (name, backgroundColor, eventName) => {
        return (
        <TouchableOpacity style={[styles.iconContainer, {backgroundColor: backgroundColor}]}>
            <FontAwesome5 name={name} size={30} color="black"/>
            <Text style={styles.iconText}>{eventName}</Text>
        </TouchableOpacity>
    )}


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Image
                style={styles.tinyLogo}
                source={
                require('../assets/wedding.png')
                }
            />
                    <Text style={styles.heading}>WeddingApp</Text>
                </View>
                <View style={styles.bellIcon}>
                    <FontAwesome name="bell" size={24} color="lightblue" />
                </View>
            </View>
            <View style={styles.gallery}>
                <Text>Gallery</Text>
            </View>
            <View style={styles.card_container}>
                <View style={styles.cardTextRow}>
                    <Text style={styles.heading}>Categories</Text>
                </View>
                <View style={styles.row}>
                    {renderIcon("pencil-ruler","#39ABAA", "req")}
                    {renderIcon("tshirt", "#4B9DCB", 'theme')}
                    {renderIcon("calendar", "#A187D9", "Events")}
                </View>
                <View style={styles.row}>
                    {renderIcon("hotel", "#39ABAA", 'rooms')}
                    {renderIcon("child", "#4B9DCB", 'kids')}
                    {renderIcon("book", "#A187D9", 'book')}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    width: "100%",
    height: '10%',
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
    bellIcon: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 10,
    },
  gallery: {
    height: '40%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  card_container: {
    padding: 40,
    height: '40%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginRight: 5,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    width: 90,
    padding: 5,
    borderRadius: 20,
  },
  cardTextRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 40,
  },
    iconText: {
        fontSize: 16,
        marginTop: 5,
    },
});
