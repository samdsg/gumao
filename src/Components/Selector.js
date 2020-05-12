import React, {useState} from 'react';
import {Form, Picker} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {percentage, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Variables';
import {EventEmitter} from '../Helpers/events';

const Selector = props => {
  const SelectorHeight = percentage(SCREEN_HEIGHT, 7);
  const SelectorWidth = percentage(SCREEN_WIDTH, 7);
  const [selected, setSelected] = useState(undefined);

  const onValueChange = value => {
    setSelected(value);
    EventEmitter.dispatch('platform', value);
  };

  return (
    <LinearGradient
      colors={['#202943', '#202943']}
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
          <Picker.Item label="PSN" value="psn" />
          <Picker.Item label="XBOX" value="xbl" />
          <Picker.Item label="ORIGIN" value="orgin" />
        </Picker>
      </Form>
    </LinearGradient>
  );
};

Selector.propTypes = {};

export default Selector;
