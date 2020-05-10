import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Form, Picker} from 'native-base';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {
  percentage,
  SCREEN_HEIGHT,
  SplashTopHeight,
  SCREEN_WIDTH,
} from '../../Variables';

const Selector = props => {
  const SelectorHeight = percentage(SCREEN_HEIGHT, 7);
  const SelectorWidth = percentage(SCREEN_WIDTH, 7);
  const [selected, setSelected] = useState(undefined);
  const onValueChange = value => {
    setSelected(value);
  };
  return (
    <LinearGradient
      colors={['#F29758', '#F29758', '#F29758', '#F8D8C9']}
      style={{
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
      }}>
      <Form>
        <Picker
          mode="dropdown"
          style={{
            color: '#fff',
            fontWeight: '300',
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
            width: 300,
            alignItems: 'center',
          }}
          selectedValue={selected}
          onValueChange={onValueChange}>
          <Picker.Item label="Platform" value="" />
          <Picker.Item label="PSN" value="key0" />
          <Picker.Item label="Xbox" value="key1" />
          <Picker.Item label="Origin" value="key2" />
        </Picker>
      </Form>
    </LinearGradient>
  );
};

Selector.propTypes = {};

export default Selector;
