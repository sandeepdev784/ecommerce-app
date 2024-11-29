import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api";
import { useCart } from "../context/CartContext";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

// Define the Product type
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Ensure id exists before making API calls
    if (id) {
      fetchProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <section className="single-detail">
        <Container>
          <Row>
            <Col md={12}>
              <Card className="card-box">
                <Card.Body>
                  <figure className="img-wrap">
                    <Card.Img variant="top" src={product.image} alt={product.title} className="img-fluid" />
                  </figure>
                  <div className="card-detail">
                    <h2 dangerouslySetInnerHTML={{ __html: product.title }}></h2>
                    <Card.Text dangerouslySetInnerHTML={{ __html: product.description }}></Card.Text>
                    <p className="price">Price: <strong>${product.price}</strong></p>
                    <Button
                        variant="primary"
                        onClick={() => addToCart({ ...product, quantity: 1 })} // Add a default quantity
                      >
                        Add to Cart
                      </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailPage;
