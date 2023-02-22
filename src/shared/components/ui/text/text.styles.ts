import styled from 'styled-components/native';

export const Regular = styled.Text<{themeStyle?: 'normal' | 'light'}>`
  font-family: ${({theme}) => theme.typography.fontFamily.primary};
  color: ${({theme, themeStyle}) =>
    themeStyle === 'light' ? theme.palette.common.light : 'black'};
`;

export const Header1 = styled(Regular)`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;
