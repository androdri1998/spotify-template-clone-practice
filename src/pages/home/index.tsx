import React from 'react';

import DescriptionHeader from '../../components/description-header';
import LittleAlbum from '../../components/little-album';
import DescriptionTitle from '../../components/description-title';
import BigAlbum from '../../components/big-album';
import MiddleAlbum from '../../components/middle-album';

import {
  Container,
  ContainerScroll,
  ContainerLittleAlbums,
  ContainerBigAlbums,
  ContainerMiddleAlbums,
} from './styles';

const Router: React.FC = () => {
  return (
    <Container>
      <ContainerScroll>
        <DescriptionHeader title="Title 1" />
        <ContainerLittleAlbums>
          <LittleAlbum title="Title album" />
          <LittleAlbum title="Title album" />
          <LittleAlbum title="Title album" />
          <LittleAlbum title="Title album" />
          <LittleAlbum title="Title album" />
          <LittleAlbum title="Title album" />
        </ContainerLittleAlbums>
        <DescriptionTitle title="Title 2" />
        <ContainerBigAlbums horizontal={true}>
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
        </ContainerBigAlbums>
        <DescriptionTitle title="Title 3" />
        <ContainerMiddleAlbums horizontal={true}>
          <MiddleAlbum title="Title album" />
          <MiddleAlbum title="Title album" />
          <MiddleAlbum title="Title album" />
          <MiddleAlbum title="Title album" />
          <MiddleAlbum title="Title album" />
        </ContainerMiddleAlbums>
        <DescriptionTitle title="Title 4" />
        <ContainerBigAlbums horizontal={true}>
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
          <BigAlbum title="Title album" subtitle="tip 1 - tip 2" />
        </ContainerBigAlbums>
      </ContainerScroll>
    </Container>
  );
};

export default Router;
