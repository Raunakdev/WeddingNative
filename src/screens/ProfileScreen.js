import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export const ProfileScreen = () => {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    // const [room, setRoom] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Profile</Text>
            </View>
            <View style={styles.profile}>
                <Image style={styles.profilepic} source={require('../assets/profile.jpg')} />
            </View>
            <View style={styles.info}>
                <View style={styles.edit}>
                    <Button
                        title="Edit"
                        onPress={() => {}} />
                </View>
                <View style={styles.infoTextDiv}>
                    <View style={styles.infoTextRow}>
                    <Text style={styles.infoText}>Name: </Text>
                    <TextInput
                        style={[styles.input, {height: 40}]}
                        placeholder="Enter your name!"
                        onChangeText={newText => setName(newText)}
                        defaultValue={name}
                    />
                    </View>
                    <View style={styles.infoTextRow}>
                    <Text style={styles.infoText}>Phone: </Text>
                    <TextInput
                        style={[styles.input, {height: 40}]}
                        keyboardType="numeric"
                        placeholder="Enter your Phone!"
                        onChangeText={newText => setPhone(newText)}
                        defaultValue={phone}
                    />
                    </View>
                    <View style={styles.infoTextRow}>
                    <Text style={styles.infoText}>Room: </Text>
                    <TextInput
                        style={[styles.input, {height: 40}]}
                        placeholder="Type here to translate!"
                        // onChangeText={newText => setText(newText)}
                        // defaultValue={text}
                    />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 70,
    // marginLeft: 10,
  },
  header: {
    backgroundColor: 'grey',
    width: '100%',
    height: 200,
  },
  profile: {
    top: -75,
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
  },
  profilepic: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 100,
  },
  info: {
    top: -70,
    height: '100%',
    width: '100%',
    // backgroundColor: 'grey'
  },
  edit: {
    alignSelf: 'center',
    width: 100,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  infoTextDiv: {
    marginTop: 40,
    marginLeft: 20,
  },
    infoTextRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
        marginRight: 20,
    },
  infoText: {
    fontSize: 16,
    fontWeight: "semi-bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  }
});
