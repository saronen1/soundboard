import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SoundButton } from '../components/SoundButton';
import styles from '../styles';
import content from '../content';

const MainView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Äänilauta
      </Text>
      {content.map((item) => {
        return (
          <SoundButton
            key={item.text}
            color={item.color}
            pressedColor={item.pressedColor}
            buttonText={item.text}
            source={item.source}/>
        )
      })}
      <Text style={styles.footer}>
        Made by Solsku
      </Text>
      <StatusBar style="auto" />
    </View>
    )
}

export default MainView;