import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View``;

export const Input = styled.TextInput.attrs({
  placeHolderTextColor: '#999',
})`
  flex: 1;
  height: 48px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Navbar = styled.View`
  flex-direction: row;

  padding-bottom: 20px;
  justify-content: center;
`;

export const Body = styled.View`
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-evenly;
`;

export const Result = styled.View`
  margin-top: 50px;
  justify-content: space-evenly;
`;

export const Text = styled.Text`
  font-size: 20px;

  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  color: #eee;
`;

export const Text2 = styled.Text`
  font-size: 40px;
  color: #eee;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
`;

export const Text3 = styled.Text`
  font-size: 30px;
  color: #eee;

  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
`;

export const Hour = styled.Text`
  font-size: 12px;
  color: #333;
  font-weight: bold;
  margin-top: 200px;
  margin-left: 10px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 5px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
