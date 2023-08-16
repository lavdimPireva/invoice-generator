import React from "react";
import NavBar from "../NavBar/NavBar";

const Checkout = ({ invoices }) => {
  console.log("invoicesSSS:", invoices);

  return (
    <>
      <NavBar />
      <div style={{ margin: "120px" }}>
        <h2>Invoice Generator</h2>

        <div>
          <h1>Checkout</h1>
          {invoices.map((invoice, index) => (
            <div key={index}>
              <h3>Invoice {index + 1}</h3>
              <table border="1">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>VAT</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.discount || 0}</td>
                      <td>{item.VAT}%</td>
                      <td>
                        {item.total.toFixed(2)} ({item.quantity * item.price} +{" "}
                        {((item.total - item.price * item.quantity) * 100) /
                          item.VAT}{" "}
                        = {item.total.toFixed(2)})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                Subtotal: $
                {invoice.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
              </div>
              <div>
                VAT: $
                {invoice
                  .reduce(
                    (acc, item) =>
                      acc + (item.total - item.price * item.quantity),
                    0
                  )
                  .toFixed(2)}
              </div>
              <div>
                Total: $
                {invoice.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
