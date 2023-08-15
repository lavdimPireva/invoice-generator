export function generateInvoice(cartItems) {
  let invoices = [];
  let currentInvoice = [];
  let currentSubTotal = 0;

  for (const item of cartItems) {
    const { price, VAT, discount = 0, quantity } = item;
    let remainingQuantity = quantity;

    while (remainingQuantity > 0) {
      const invoiceQty = Math.min(50, remainingQuantity);
      const invoicePrice = (price - discount) * invoiceQty;
      const invoiceVAT = (invoicePrice * VAT) / 100;

      if (currentSubTotal + invoicePrice + invoiceVAT > 500) {
        invoices.push(currentInvoice);
        currentInvoice = [];
        currentSubTotal = 0;
      }

      currentInvoice.push({
        ...item,
        quantity: invoiceQty,
        total: invoicePrice + invoiceVAT,
      });

      currentSubTotal += invoicePrice + invoiceVAT;
      remainingQuantity -= invoiceQty;
    }
  }

  if (currentInvoice.length) {
    invoices.push(currentInvoice);
  }

  return invoices;
}
