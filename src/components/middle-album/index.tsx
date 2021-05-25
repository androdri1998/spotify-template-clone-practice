import React from 'react';

import CoverImage from '../../assets/img/image1.jpeg';

import {ContainerPadding, Container, Title, CoverPhoto} from './styles';

interface IMiddleAlbumProps {
  title: string;
}

const MiddleAlbum: React.FC<IMiddleAlbumProps> = ({title}) => {
  return (
    <ContainerPadding>
      <Container>
        <CoverPhoto source={CoverImage} />
        <Title>{title}</Title>
      </Container>
    </ContainerPadding>
  );
};

export default MiddleAlbum;
