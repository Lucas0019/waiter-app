import styled from 'styled-components';

export const OrdersContainer = styled.section`
  width: 100%;
  max-width: 1260px;
  margin: 40px auto;
  padding: 0 60px;

  @media screen and (min-width: 1260px) {
    padding: 0 10px;
  }
`;

export const OrdersContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;

`;


