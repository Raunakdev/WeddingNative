import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./homeScreen";
import { BookMarkScreen } from "./BookMarkScreen";
import { SearchScreen } from "./SearchScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CameraScreen } from "./CameraScreen";
import { FontAwesome } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -35, // Adjust this value to your preference
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#26CBFF',
        borderColor: '#fff',
        borderWidth: 5,
        padding: 10,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );

export const AppScreens = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
        ...screenOptions,
      }}>
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }} />
                <Tab.Screen 
                    name="BookMark" 
                    component={BookMarkScreen}
                    options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" color={color} size={size} />
          ),
        }} />
                <Tab.Screen
                    name="Camera"
                    component={CameraScreen}
                    options={({ navigation }) => ({
                tabBarIcon: ({ color, size }) => (
                <FontAwesome name="camera" size={size} color={color} />
                ),
                tabBarButton: (props) => (
                <CustomTabBarButton
                    {...props}
                    onPress={() => navigation.navigate('Camera')}
                >
                    <FontAwesome name="camera" size={24} color="#fff" />
                </CustomTabBarButton>
                ),
            })}
        />  
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen}
                    options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }} />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen}
                    options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerShown: false, // This hides the navigation header
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle:{
        backgroundColor:'#0D0B26',
        height:100,
        borderRadius:10,
    },
    tabBarItemStyle:{
        backgroundColor:'#0D0B26',
        margin:5,
        borderRadius:10,
    }
  };