import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

function Home() {
  return <Icon name="android" size={50} color="#333" />;
}

Home.navigationOptions = () => ({
  title: 'Home',
});

export default Home;
