export const ordemStatusIcon = (status: string) => {
  switch (status) {
  case 'WAITING':
    return '🕐';
  case 'IN_PRODUCTION':
    return '👩‍🍳';
  case 'DONE':
    return '✅';
  default:
    return '🕐';
  }
};


export const ordemStatusInfo = (status: string) => {
  switch (status) {
  case 'WAITING':
    return 'Fila de espera';
  case 'IN_PRODUCTION':
    return 'Em preparação';
  case 'DONE':
    return 'Pronto';
  default:
    return 'Fila de espera';
  }
};
