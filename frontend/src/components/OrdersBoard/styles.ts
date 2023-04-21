import styled from 'styled-components';


export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  width: 100%;

  header {
    display: flex;
    justify-content: center;

    p {
      padding: 8px;
      font-size: .875rem;

      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    cursor: pointer;
    background: var(--white);
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
      font-size: 1.125rem;
    }

    span {
      font-size: .875rem;
      color: #666;
    }
  }
`;
