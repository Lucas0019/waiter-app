import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--color-primary);
`;


export const HeaderContent = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 60px;
  height: 198px;

  .page-details {

    h1, h2 {
      color: var(--white)
    }

    h1 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 120%;
    }

    h2 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
