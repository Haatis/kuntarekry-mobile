import React from 'react';
import { Appbar } from 'react-native-paper';
import { colors } from '../styles/colors';

export default function AppBar ({ navigation, back }) {
  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }} mode='center-aligned'>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title='kuntarekry' />
      <Appbar.Action icon='dots-vertical' onPress={() => {}} />
    </Appbar.Header>
  );
}
