import { Container, Table, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, totalItems } = useCart();

  return (
    <>
      <div className="cart-table">
        <Container className="mt-4">
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        {item.id}
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
          <h3>Total Items: {totalItems}</h3>
        </Container>
      </div>
    </>
  );
};

export default CartPage;
