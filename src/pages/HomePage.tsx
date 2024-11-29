import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products and update the state
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(() => setLoading(false)); // Handle errors (optional)
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center my-4">Products</h1>
      <ProductCard products={products} />
    </div>
  );
};

export default HomePage;
