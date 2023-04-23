import { useState } from 'react';
import { OrderModal } from '../OrderModal';
import * as S from './styles';
import type * as T from './types';
import { Order } from '../../types/Order';

export const OrdersBoard = ({
  icon,
  title,
  orders,
}: T.OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ selectedOrder, setSelectedOrder ] = useState<null | Order>(null);

  const handleOpenOrderModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseOrderModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <S.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseOrderModal}
      />

      <header className='header-board'>
        <p>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </p>
      </header>

      {orders.length > 0 && (
        <S.OrderItem>
          {orders.map((order, index) => (
            <button type="button" key={index} onClick={() => handleOpenOrderModal(order )}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length}</span>
            </button>
          ))}
        </S.OrderItem>
      )}
    </S.Board>
  );
};
