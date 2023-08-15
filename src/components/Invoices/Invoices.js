export function Invoices({ invoices }) {
  return (
    <div>
      {invoices.map((invoice, index) => (
        <div key={index}>
          <h3>Invoice {index + 1}</h3>
          {/* Render invoice details */}
        </div>
      ))}
    </div>
  );
}
