import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function TextInverterApp() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const invertText = () => {
    const invertedText = inputText.split('').reverse().join('');
    setOutputText(invertedText);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Texto a Invertir:</Text>
      <TextInput
        value={inputText}
        onChangeText={text => setInputText(text)}
        style={{ borderWidth: 1, width: 200, padding: 5, margin: 10 }}
      />
      <Button
        title="Invertir Texto"
        onPress={invertText}
      />
      <Text style={{ marginTop: 20 }}>Texto Invertido:</Text>
      <Text>{outputText}</Text>
    </View>
  );
}