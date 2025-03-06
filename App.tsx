import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.MainText}>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
