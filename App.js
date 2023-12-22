import React, { useState, useRef } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity } from 'react-native';
//import { AppRegistry } from 'react-native';

export default function App() {
  const webUrl = 'https://brucasblog.com/';
  const [error, setError] = useState(false);
  const webViewRef = useRef(null);

  const handleGoBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Your other components */}
      {error ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
          <Text>
            Oops! Something went wrong. Please check your internet connection.
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1, marginTop: 38 }}>
          <WebView
            ref={webViewRef}
            source={{ uri: webUrl }}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            onShouldStartLoadWithRequest={(event) => {
              console.log('Should Start Load:', event);
              return true;
            }}
          />
          {/* Custom-styled Back button */}
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}
            onPress={handleGoBack}
          >
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 25 }}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// Register your component with AppRegistry
//AppRegistry.registerComponent('BrucasBlog', () => App);