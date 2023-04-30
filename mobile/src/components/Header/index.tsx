import React from 'react';

import * as S from './styles';
import { TextLayout } from '../TextLayout';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <TextLayout size={14} opacity={0.9}>Bem-vindo(a) ao</TextLayout>
      <TextLayout size={24} weight='600'>
        WAITER
        <TextLayout size={24}>APP</TextLayout>
      </TextLayout>
    </S.HeaderContainer>
  );
};
