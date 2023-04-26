import styled from 'styled-components/native';

interface TextLayoutProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number | string;
  opacity?: number;
}

export const TextLayout = styled.Text<TextLayoutProps>`
  font-family: ${({ weight }) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;
