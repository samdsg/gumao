import React, {useState} from 'react';
import {Form, Picker, Button, Text, View} from 'native-base';
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
    <View
      style={{
        alignSelf: 'center',
        height: 50,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
      }}>
      <Form
        style={{
          width: 150,
          overflow: 'hidden',
          marginRight: 20,
        }}>
        <Picker
          mode="dropdown"
          style={{
            color: '#fff',
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

      <Button
        dark
        style={{borderRadius: 5}}
        onPress={() => EventEmitter.dispatch('submit')}>
        <Text
          style={{
            fontWeight: '300',
            fontFamily: 'Poppins-Bold',
            fontSize: 12,
          }}>
          Search
        </Text>
      </Button>
    </View>
  );
};

Selector.propTypes = {};

export default Selector;
