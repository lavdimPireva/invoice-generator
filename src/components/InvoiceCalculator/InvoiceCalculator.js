export function generateInvoice(cartItems) {
  let invoices = [];
  let currentInvoice = [];
  let currentSubTotal = 0;
  let newInvoiceForProduct = false;

  if (cartItems.length === 0) {
    return "No items in cart to generate invoice";
  }

  for (const item of cartItems) {
    console.log("item ", item);
    newInvoiceForProduct = false;

    const { price, VAT, discount = 0, quantity } = item;
    let remainingQuantity = quantity;

    while (remainingQuantity > 0) {
      const invoiceQty = price >= 500 ? 1 : Math.min(50, remainingQuantity);

      const invoicePrice = (price - discount) * invoiceQty;
      const invoiceVAT = (invoicePrice * VAT) / 100;

      if (
        currentSubTotal + invoicePrice + invoiceVAT > 500 ||
        newInvoiceForProduct
      ) {
        if (currentInvoice.length > 0) {
          invoices.push(currentInvoice);
        }
        currentInvoice = [];
        currentSubTotal = 0;
        newInvoiceForProduct = false;
      }

      currentInvoice.push({
        ...item,
        quantity: invoiceQty,
        subtotal: invoicePrice,
        vat: invoiceVAT,
        total: invoicePrice + invoiceVAT,
      });

      currentSubTotal += invoicePrice + invoiceVAT;
      remainingQuantity -= invoiceQty;

      if (invoiceQty === 50) {
        newInvoiceForProduct = true;
      }
    }
  }

  if (currentInvoice.length) {
    invoices.push(currentInvoice);
  }

  return invoices;
}
