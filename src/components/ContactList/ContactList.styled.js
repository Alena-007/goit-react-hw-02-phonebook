import styled from 'styled-components';

export const ContactItems = styled.li`
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
`;

export const ListButton = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
