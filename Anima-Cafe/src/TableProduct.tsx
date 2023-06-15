import './TableProduct.css';

const producto = [
  {categoria: "Cafetería", precio: "$90", stock: 10, nombre: "Espresso"},
  {categoria: "Cafetería", precio: "$120", stock: 15, nombre: "Cortado"},
  {categoria: "Cafetería", precio: "$160", stock: 0, nombre: "Capucchino"},
  {categoria: "Panadería", precio: "$190", stock: 5, nombre: "Pan de Nuez"},
  {categoria: "Panadería", precio: "$160", stock: 1, nombre: "Pan de Campo"},
  {categoria: "Dulces", precio: "$180", stock: 0, nombre: "Carrot Cake"},
  {categoria: "Dulces", precio: "$60", stock: 50, nombre: "Cookie"},
  {categoria: "Dulces", precio: "$120", stock: 50, nombre: "Chocotorta"}
];

function TableProduct() {
  const sortedProducts = [...producto].sort((a, b) => a.categoria.localeCompare(b.categoria));
  const categories = [...new Set(sortedProducts.map(product => product.categoria))];

  return (
    <div className="tableProduct">
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category}</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.filter(product => product.categoria === category).map((product, index) => (
                <tr key={index}>
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default TableProduct;
