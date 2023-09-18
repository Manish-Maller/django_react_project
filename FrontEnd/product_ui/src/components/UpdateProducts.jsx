import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProducts = () => {
  const [product_image, setProduct_Image] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const loadProducts = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
    console.log(data);
    setProduct_Image(data.product_image);
    setName(data.name);
    setDescription(data.description);
    setCategory(data.category);
    setPrice(data.price);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const UpdateProductInfo = async()=>{
    let formField = new FormData();
    formField.append("name", name);
    formField.append("description", description);
    formField.append("price", price);
    formField.append("category", category);
    if (product_image != null) {
      formField.append("product_image", product_image);
    }

    await axios({
        method:'put',
        url:`http://127.0.0.1:8000/api/${id}/`,
        data:formField
    }).then(response =>{
        console.log(response.data)
        navigate("/")
    })

  }
  return (
    <div>
      <h1>Update the Products</h1>
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="1"
            rows="5"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
        <img src={product_image} height={150} width={150} />
          <input
            type="file"
            className="form-control form-control-lg"
            placeholder="Enter Product image"
            name="product_image"
            onChange={(e) => setProduct_Image(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-success" onClick={UpdateProductInfo}>
            Update Product Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
