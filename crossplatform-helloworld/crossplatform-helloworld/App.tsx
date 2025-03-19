import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
   const [message, setMessage] = useState('');

   const handleGreet = () => {
      setMessage('Hello World, how is your day?');
   };

   return (
      <View style={styles.container}>
         <Button title="Greet" onPress={handleGreet} />
         {message ? <Text>{message}</Text> : null}
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
