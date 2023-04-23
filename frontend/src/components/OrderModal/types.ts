import { Order } from '../../types/Order';

export type OrderModalProps = {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}
