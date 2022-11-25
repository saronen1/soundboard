import { Alert, Pressable, Text } from "react-native"
import styles from "../styles"
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";

export const SoundButton = ({ 
  color, 
  pressedColor, 
  source, 
  buttonText 
  }) => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log('Loading sound');
    const { sound } = await Audio.Sound.createAsync(source);
    setSound(sound);

    console.log('Playing sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <Pressable
      title="Foo"
      style={({ pressed }) => [{
        backgroundColor: pressed ? pressedColor : color
        }, styles.soundButton]
      }
      onPress={() => playSound()}>
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </Pressable>
  )
}

export default SoundButton;