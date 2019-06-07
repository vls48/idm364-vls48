export function formatPrice(cents) {
    return (cents / 1).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }