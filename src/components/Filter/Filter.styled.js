import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FilterInput = styled.input`
  width: ${p => p.theme.space[8]}px;
  height: 24px;
  border-radius: ${p => p.theme.radii.sm};
  borders: ${p => p.theme.borders.normal};
`;
