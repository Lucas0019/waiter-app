import Logo from '../../../assets/images/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={Logo} alt="Waiter Logo" />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
