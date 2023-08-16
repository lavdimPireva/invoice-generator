import React from "react";
import NavBar from "../NavBar/NavBar";

const Checkout = ({ invoices }) => {
  if (!Array.isArray(invoices) || invoices.length === 0) {
    return (
      <>
        <NavBar />
        <div style={{ marginTop: "100px", marginLeft: "20px" }}>
          <p>No items in cart to generate invoice</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div style={{ margin: "120px" }}>
        <div className="card">
          <div className="card-body">
            {Array.isArray(invoices) &&
              invoices.map((invoice, index) => {
                let subtotal = 0;
                let vat = 0;
                let total = 0;

                const flattenedInvoiceItems = invoice.flatMap((item) => item);

                flattenedInvoiceItems.forEach((invoice) => {
                  subtotal += invoice.subtotal;
                  vat += invoice.vat;
                  total += invoice.total;
                });

                return (
                  <div className="container mb-5 mt-3" key={index}>
                    <div className="row d-flex align-items-baseline">
                      <div className="col-xl-9">
                        <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                          Invoice &gt;&gt; <strong>ID: #{index + 1}</strong>
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="container">
                      <div className="row my-2 mx-1 justify-content-center">
                        <table className="table table-striped table-borderless">
                          <thead
                            style={{ backgroundColor: "#84B0CA" }}
                            className="text-white"
                          >
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Description</th>
                              <th scope="col">Qty</th>
                              <th scope="col">Price</th>
                              <th scope="col">Discount</th>
                              <th scope="col">VAT</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {invoice.map((item, i) => (
                              <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.discount.toFixed(2)}</td>
                                <td>{item.VAT}%</td>
                                <td>${item.total?.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="row">
                        <div className="col-xl-3">
                          <ul className="list-unstyled">
                            <li className="text-muted ms-3">
                              <span className="text-black me-4">Subtotal</span>$
                              {subtotal?.toFixed(2)}
                            </li>
                            <li className="text-muted ms-3 mt-2">
                              <span className="text-black me-4">VAT </span>
                              <span style={{ marginLeft: "30px" }}>
                                ${vat?.toFixed(2)}
                              </span>
                            </li>
                          </ul>
                          <p className="text-black float-start">
                            <span className="text-black me-3">
                              Total Amount
                            </span>
                            <span style={{ fontSize: "25px" }}>
                              ${total?.toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-xl-10">
                          <p>Thank you for your purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
