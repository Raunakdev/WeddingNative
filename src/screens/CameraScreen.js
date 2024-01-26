import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const CameraScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CameraScreen</Text>
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
});