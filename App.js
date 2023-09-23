import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';


export default function App() {
  const backgroundImage = require('./assets/SafetyAlerts.png'); // Replace with your image path
  const [fontsLoaded] = useFonts({
    DMSans: DMSans_400Regular,
   });

  // Function to handle button press
  const handleButtonPress = () => {
    // Add your button click logic here
    alert('Button clicked!');
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 88,
    width: '100%',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#5FC0DE',
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontFamily: 'DMSans', // Set the fontFamily to the loaded font
    color: 'white', // Text color
    fontSize: 24, // Text font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});