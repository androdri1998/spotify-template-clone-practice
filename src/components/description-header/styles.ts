import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const MainDescription = styled.Text`
  flex: 1;
  color: #fff;

  font-size: 22px;
  font-weight: bold;
`;

export const RightContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 70px;
`;
