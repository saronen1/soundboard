import { Animated, Pressable, Text, View } from "react-native"
import styles from "../styles"
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";

export const SoundButton = ({ 
  color, 
  pressedColor, 
  source, 
  buttonText 
  }) => {
  const [sound, setSound] = useState(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));

  const playSound = async () => {
    console.log('Loading sound');
    const { sound } = await Audio.Sound.createAsync(source, null, onPlaySoundFinished);
    setSound(sound);
    const status = await sound.getStatusAsync();
    const duration = status.durationMillis;

    console.log('Playing sound');
    setIsPlaying(true);
    Animated.timing(progress, {
      toValue: 100,
      duration: duration,
      useNativeDriver: true,
    }).start();

    await sound.playAsync();
  }

  const stopSound = async () => {
    console.log('Stop playing');
    await sound.stopAsync();
    setIsPlaying(false);
    setProgress(new Animated.Value(0));
  }

  const onPlaySoundFinished = (playbackStatus) => {
    if(playbackStatus.didJustFinish)
    {
      setIsPlaying(false);
      setProgress(new Animated.Value(0));
    }
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
      title="SoundButton"
      style={({ pressed }) => [{
        backgroundColor: pressed ? pressedColor : color
        }, styles.soundButton]
      }
      onPress={isPlaying ? () => stopSound() : () => playSound()}>
      <Animated.View
        title="ProgressBar"
        style={ isPlaying 
          ? [styles.progressBar, { 
            backgroundColor : pressedColor,
            transform: [{scaleX: progress}]},] 
          : []}>
      </Animated.View>
      <View
        title="TextContainer"
        style={styles.textContainer}>
        <Text style={styles.buttonText}>
          {isPlaying ? "⏹️" : buttonText}
        </Text>
      </View>
    </Pressable>
  )
}

export default SoundButton;