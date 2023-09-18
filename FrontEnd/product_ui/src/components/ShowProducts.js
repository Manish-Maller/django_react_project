import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-card-info">
      {products.map((product, index) => (
        <div>
          <Card className="m-2 rounded shadow-lg" style={{ width: "22rem" }}>
            <Card.Img variant="top" src={product.product_image} />
            <Card.Body>
            <Link to={`/${product.id}/`}><Card.Title>{product.name}</Card.Title></Link>
              <Card.Text>{product.category}</Card.Text>
              <Card.Text className="product-price">${product.price}</Card.Text>
            </Card.Body>
          </Card>
          
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;