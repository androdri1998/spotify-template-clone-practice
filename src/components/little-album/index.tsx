import React from 'react';

import CoverImage from '../../assets/img/image1.jpeg';

import {Container, CoverPhoto, Title, ContainerPadding} from './styles';

interface ILittleAlbumProps {
  title: string;
}

const LittleAlbum: React.FC<ILittleAlbumProps> = ({title}) => {
  return (
    <ContainerPadding>
      <Container>
        <CoverPhoto source={CoverImage} />
        <Title>{title}</Title>
      </Container>
    </ContainerPadding>
  );
};

export default LittleAlbum;
