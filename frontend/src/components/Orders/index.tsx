import * as S from './styles';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';


const orders: Order[] = [
  {
    '_id': '640e9af3494c24bf65046f0c',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza',
          'imagePath': '1678676384509-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '640e9af3494c24bf65046f0d'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1678678661529-banner-promo-50.png',
          'price': 5,
        },
        'quantity': 3,
        '_id': '640e9af3494c24bf65046f0e'
      }
    ],
  },
  {
    '_id': '640e9af3494c24bf65046f0c',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza',
          'imagePath': '1678676384509-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '640e9af3494c24bf65046f0d'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1678678661529-banner-promo-50.png',
          'price': 5,
        },
        'quantity': 3,
        '_id': '640e9af3494c24bf65046f0e'
      }
    ],
  }
];

export const Orders = () => {
  return (
    <S.OrdersContainer>
      <S.OrdersContent>
        <OrdersBoard
          icon="🕐"
          title="Fila de espera"
          orders={orders}
        />
        <OrdersBoard
          icon="👩‍🍳"
          title="Em produção"
          orders={[]}
        />
        <OrdersBoard
          icon="✅"
          title="Pronto"
          orders={[]}
        />
      </S.OrdersContent>
    </S.OrdersContainer>
  );
};
