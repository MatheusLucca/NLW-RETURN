import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import {theme} from '../../theme'
import { styles } from './styles';

interface Props extends TouchableOpacityProps{
    isLoading: boolean;
    isFeedbackEmpty: boolean;
}

export function Button({isLoading,isFeedbackEmpty, ...rest}: Props) {
  return (
    <TouchableOpacity 
      style={isFeedbackEmpty ? {...styles.container, opacity: 0.5} :styles.container}
      disabled={isFeedbackEmpty}
      
      {...rest}
    >
        {
            isLoading ? <ActivityIndicator color={theme.colors.text_on_brand_color} /> 
            : <Text style={styles.title}> Enviar Feedback </Text>
        }
    </TouchableOpacity>
  );
}