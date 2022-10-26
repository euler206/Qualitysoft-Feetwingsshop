import "../App.css";
import ventas from "../data/ventas.json";

function CargarVentas() {
  ventas &&
    ventas.map((record) => {
      return (
        <tbody>
          <tr >
            <td>{record.fecha}</td>
            <div key={record.idVenta}> 
              <td>{record.idVenta}</td>
            </div>
            <td>{record.valor}</td>
          </tr>{" "}
        </tbody>     
      );
    });
}

const total = ventas.reduce(
  (acumulador, record) => acumulador + record.valor,
  0
);
function Total() {
  return (
    <tbody>
      <tr>
        <td>Funciona !!!!! 🤩</td>
        <td>
          <strong>Total </strong>
        </td>
        <td>
          <strong>{total}</strong>
        </td>
      </tr>
    </tbody>
  );
}

export { CargarVentas, Total };
