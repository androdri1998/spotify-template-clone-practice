import styled from 'styled-components/native';

export const ContainerPadding = styled.View`
  height: 70px;
  width: 50%;

  padding: 5px;

  background-color: transparent;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  border-radius: 5px;

  background-color: rgba(255, 255, 255, 0.1);
`;

export const CoverPhoto = styled.Image`
  width: 60px;
  height: 60px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;
