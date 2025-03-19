import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
   const [input, setInput] = useState('');
   const [result, setResult] = useState('');

   const handlePress = (value: string) => {
      if (value === '=') {
         try {
            setResult(eval(input).toString());
         } catch (e) {
            setResult('Error');
         }
      } else if (value === 'C') {
         setInput('');
         setResult('');
      } else {
         setInput(input + value);
      }
   };

   return (
      <View style={styles.container}>
         <Text style={styles.input}>{input}</Text>
         <Text style={styles.result}>{result}</Text>
         <View style={styles.row}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('1')}
            >
               <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('2')}
            >
               <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('3')}
            >
               <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('+')}
            >
               <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('4')}
            >
               <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('5')}
            >
               <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('6')}
            >
               <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('-')}
            >
               <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('7')}
            >
               <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('8')}
            >
               <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('9')}
            >
               <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('*')}
            >
               <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('C')}
            >
               <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('0')}
            >
               <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('=')}
            >
               <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => handlePress('/')}
            >
               <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
         </View>
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
   input: {
      fontSize: 30,
      marginBottom: 10,
   },
   result: {
      fontSize: 40,
      marginBottom: 20,
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
   },
   button: {
      backgroundColor: '#3880ff',
      padding: 20,
      margin: 5,
      borderRadius: 5,
   },
   buttonText: {
      color: 'white',
      fontSize: 20,
   },
});
