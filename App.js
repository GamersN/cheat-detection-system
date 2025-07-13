import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { detectSnapBehavior } from './components/Detector';

export default function App() {
  const [status, setStatus] = useState("Upload a screen recording");

  const uploadAndAnalyze = async () => {
    const file = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    if (!file.canceled) {
      setStatus("Analyzing...");
      // Simulated analysis
      setTimeout(() => {
        const simulated = detectSnapBehavior([
          { crosshairX: 100 }, { crosshairX: 400 }
        ]);
        setStatus(simulated ? "Cheat Detected: YES" : "Clean Gameplay");
      }, 2000);
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <Button title="Upload Gameplay Video" onPress={uploadAndAnalyze} />
      <Text style={{ marginTop: 20 }}>{status}</Text>
    </View>
  );
}