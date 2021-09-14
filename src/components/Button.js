import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 50,
    display: 'flex',
    backgroundColor: '#2962FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 10
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Button;
