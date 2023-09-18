import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [product_image, setProduct_Image] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const AddProductInfo = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("description", description);
    formField.append("price", price);
    formField.append("category", category);
    if (product_image != null) {
      formField.append("product_image", product_image);
    }
    // console.log(name,description,price,category,product_image)
    // console.log(formField)
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Add the Products</h1>

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
          <label htmlFor="">Select an Image</label>
          <input
            type="file"
            className="form-control form-control-lg"
            placeholder="Enter Product image"
            name="product_image"
            onChange={(e) => setProduct_Image(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-success" onClick={AddProductInfo}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
