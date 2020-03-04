import React, {Component} from 'react';
import StyleSheet from 'react-native';
import {
  Container,
  Navbar,
  Body,
  Input,
  Text,
  Text2,
  Text3,
  Result,
  Hour,
  Form,
} from './styles';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  state = {
    min: '',
    max: '',
    sorted: '',
    date: '',
  };

  handleSubmit = () => {
    const {min, max} = this.state;

    let start = min;
    let end = max;

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const minutes = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds

    start = Math.ceil(start);
    end = Math.floor(end);

    const sorted = Math.floor(Math.random() * (end - start + 1)) + start;

    this.setState({
      date:
        date +
        '/' +
        month +
        '/' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        sec,
      sorted: sorted,
      min: '',
      max: '',
    });
  };

  render() {
    const {min, max, sorted, date} = this.state;

    return (
      <LinearGradient
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 3, y: 2}}
        colors={['#12c2e9', '#c471ed', '#f64f59']}>
        <Container>
          <Navbar>
            <Text3>Vegas IPTV</Text3>
            <Icon name="live-tv" size={20} color="#eee" />
          </Navbar>
          <Form>
            <Body>
              <Text>De: </Text>
              <Input
                keyboardType="numeric"
                placeholder="Min"
                value={min}
                onChangeText={min => this.setState({min: min})}
                returnKeyType="send"
              />

              <Text>Até: </Text>
              <Input
                keyboardType="numeric"
                value={max}
                placeholder="Max"
                onChangeText={max => this.setState({max: max})}
                returnKeyType="send"
                onSubmitEditing={this.handleSubmit}
              />
            </Body>
          </Form>

          <Result>
            <Text>Ganhardor é</Text>
            {sorted ? <Text2>Nº: {sorted}</Text2> : <Text></Text>}
            <Hour>{date}</Hour>
          </Result>
        </Container>
      </LinearGradient>
    );
  }
}
