export function generateInvoice(cartItems) {
  let invoices = [];
  let currentInvoice = [];
  let currentSubTotal = 0;

  if (cartItems.length === 0) {
    return "No items in cart to generate invoice";
  }

  for (const item of cartItems) {
    const { price, VAT, discount = 0, quantity } = item;
    let remainingQuantity = quantity;

    while (remainingQuantity > 0) {
      const invoiceQty = price >= 500 ? 1 : Math.min(50, remainingQuantity);
      const invoicePrice = (price - discount) * invoiceQty;
      const invoiceVAT = (invoicePrice * VAT) / 100;

      if (currentSubTotal + invoicePrice + invoiceVAT > 500) {
        if (currentInvoice.length > 0) {
          invoices.push(currentInvoice);
        }
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
