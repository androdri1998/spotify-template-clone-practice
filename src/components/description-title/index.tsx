import React from 'react';

import {Container, MainDescription} from './styles';

interface IDescriptionTitleProps {
  title: string;
}

const DescriptionTitle: React.FC<IDescriptionTitleProps> = ({title}) => {
  return (
    <Container>
      <MainDescription>{title}</MainDescription>
    </Container>
  );
};

export default DescriptionTitle;
