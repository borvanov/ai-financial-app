import React from 'react';
import {Button as ReactNativeButton, ButtonProps} from 'react-native';

export const Button: React.FC<ButtonProps> = props => (
  <ReactNativeButton {...props} />
);
