import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
        <section className="product-home">
            <Container>
                <Row>
                    {products.map((product) => (
                    <Col lg={3} md={4} sm={6} key={product.id} className="d-flex">
                        <div className="mb-4 product-detail card">
                            <div className="card-body">
                                <Link to={`/product/${product.id}`}>
                                    <figure>
                                        <img src={product.image} alt={product.image} className="img-fluid" />
                                    </figure>
                                    <h2 className="product-ttl">{product.title}</h2>
                                    <p className="rice">Price: <strong>${product.price}</strong></p>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </>
  );
};

export default ProductGrid;
