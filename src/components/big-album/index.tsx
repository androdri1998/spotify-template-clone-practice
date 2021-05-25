import React from 'react';

import CoverImage from '../../assets/img/image1.jpeg';

import {
  ContainerPadding,
  Container,
  Subtitle,
  Title,
  CoverPhoto,
} from './styles';

interface IBigAlbumProps {
  title: string;
  subtitle: string;
}

const BigAlbum: React.FC<IBigAlbumProps> = ({subtitle, title}) => {
  return (
    <ContainerPadding>
      <Container>
        <CoverPhoto source={CoverImage} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </ContainerPadding>
  );
};

export default BigAlbum;
