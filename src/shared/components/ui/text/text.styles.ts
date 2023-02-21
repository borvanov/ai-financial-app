import styled from 'styled-components/native';

export const Regular = styled.Text`
  font-family: ${({theme}) => theme.typography.fontFamily.primary};
`;

export const Header1 = styled(Regular)`
  font-size: 40px;
  font-weight: 700;
`;
