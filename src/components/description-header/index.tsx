import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Container, MainDescription, RightContent} from './styles';

const DescriptionHeader: React.FC = () => {
  return (
    <Container>
      <MainDescription>Good evening</MainDescription>
      <RightContent>
        <MaterialIcon name="access-time" size={32} color="#FFF" />
        <MaterialIcon name="settings" size={32} color="#FFF" />
      </RightContent>
    </Container>
  );
};

export default DescriptionHeader;
