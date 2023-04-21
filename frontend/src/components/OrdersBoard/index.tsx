import * as S from './styles';
import type * as T from './types';

export const OrdersBoard = ({
  icon,
  title,
  orders,
}: T.OrdersBoardProps) => {

  console.log(orders);

  return (
    <S.Board>
      <header>
        <p>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </p>
      </header>

      {orders.length > 0 && (
        <S.OrderItem>
          {orders.map((order, index) => (
            <button type="button" key={index}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length}</span>
            </button>
          ))}
        </S.OrderItem>
      )}
    </S.Board>
  );
};
