import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrency } from '../../utils/formatCurrency';
import { ordemStatusIcon, ordemStatusInfo } from '../../utils/statusOrder';

import * as S from './styles';
import type * as T from './types';

export const OrderModal = ({
  visible,
  order,
  onClose,
}: T.OrderModalProps) => {

  if (!visible || !order) return null;

  const totalOrder = order.products.reduce((acc, product) => {
    return acc + (product.product.price * product.quantity);
  }, 0);

  return (
    <S.Overlay>
      <S.ModalBody>
        <S.HeaderModal>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </S.HeaderModal>

        <S.StatusContainer>
          <small>Status do Pedido</small>
          <div>
            <span>
              {ordemStatusIcon(order.status)}
            </span>
            <strong>
              {ordemStatusInfo(order.status)}
            </strong>
          </div>
        </S.StatusContainer>

        <S.OrderDetails>
          <strong>itens</strong>

          <div className="order-items">
            {order.products.map(({product, quantity}, index) => (
              <div key={index} className="item">
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width={72}
                  height={38}
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

        </S.OrderDetails>

        <S.OrderTotal>
          <span>Total</span>
          <strong>{formatCurrency(totalOrder)}</strong>
        </S.OrderTotal>

        <S.ActionsOrder>
          <button
            type="button"
            className='action-primary'
            onClick={() => console.log('Prepare Order')}
          >
            <span>👩‍🍳</span>
            <span>Iniciar Produção</span>
          </button>

          <button
            type="button"
            className='action-secondary'
            onClick={() => console.log('Cancel Order')}
          >
            Cancelar Pedido
          </button>
        </S.ActionsOrder>
      </S.ModalBody>
    </S.Overlay>
  );
};
