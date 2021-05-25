import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Container, MainDescription, RightContent} from './styles';

interface IDescriptionHeaderProps {
  title: string;
}

const DescriptionHeader: React.FC<IDescriptionHeaderProps> = ({title}) => {
  return (
    <Container>
      <MainDescription>{title}</MainDescription>
      <RightContent>
        <MaterialIcon name="access-time" size={32} color="#FFF" />
        <MaterialIcon name="settings" size={32} color="#FFF" />
      </RightContent>
    </Container>
  );
};

export default DescriptionHeader;
