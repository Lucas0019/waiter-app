import styled from 'styled-components';

export const Overlay = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  position: fixed;


  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;


export const ModalBody = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: var(--white);
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  strong {
    font-size: 1.5rem;
  }


  button {
    line-height: 0;
    background: transparent;
    border: 0;
    font-size: 0;
    cursor: pointer;
    border: 1px solid #eee;
    border-radius: 50%;
    transition: border-color 0.2s;

    &:hover {
      border: 1px solid tomato;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 32px;

  small {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  div {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: .875rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
        height: inherit;
      }

      .quantity {
        font-size: .875rem;
        color: #666;
        margin-left: 12px;
        display: block;
        min-width: 20px;
      }

      .product-details {

        margin-left: 8px;

        strong {
          display: block;
        }

        span {
          font-size: .875rem;
          color: #666;
        }
      }
    }
  }
`;

export const OrderTotal = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #eee;
  padding-top: 16px;

  span {
    font-size: .875rem;
    font-weight: 500;
    opacity: 0.8 ;
  }

  strong {
    font-size: .875rem;
    color: var(--primary);
  }
`;

export const ActionsOrder = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    justify-content: center;
  }


  .action-primary {
    background-color: #333333;
    color: var(--white);
    font-weight: 500;
    border: 0;
    border-radius: 8px;
    padding: 12px 24px;
    cursor: pointer;
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .action-secondary {
    background-color: var(--white);
    color: #D73035;
    font-weight: 500;
    border: 0;
    margin-top: 12px;
  }
`;
