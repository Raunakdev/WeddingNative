import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export const BookMarkScreen = () => {
    const dummyData = {
      theme : [
      {
        themeId: 1,
        dress: "white",
        tux: "black",
      },
      {
        themeId: 2,
        dress: "blue",
        tux: "black",
      },
    ]}

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.heading}>BookMarks</Text>
            <FontAwesome5 name="greater-than" size={24} color="black" marginLeft="auto" />
          </View>
          { dummyData.theme.map((theme) => {
            return (
              <View style={styles.theme}>
                <Text style={styles.bookmarkText}>{theme.dress}</Text>
              </View>
            )
          })}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "left",
    marginLeft: 10,
  },
  theme: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#e6eaf0',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginBottom: 5,
  },
  bookmarkText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  }
});