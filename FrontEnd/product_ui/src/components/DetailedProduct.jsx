
import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailedProducts = ()=>{


    const {id}= useParams()
    const [ product, setProduct]=useState("")

    const getProductByID =async()=>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }

    const navigate = useNavigate()

    useEffect(()=>{
        getProductByID()

    },[])

    const deleteProduct = async(id)=>{
        await axios.delete(`http://127.0.0.1:8000/api/${id}`)
        navigate("/")

    }
    return(
        <div>
            <h1>Show All the Products Detailed</h1>

            <div className="single-product-info">
                <img src={product.product_image} height = "250" width= "250"alt="" />
                <p>{product.name}</p>
                <p className="product-desc">{product.description}</p>
                <p >{product.category}</p>
                <p>{product.price}</p>
            <Link className="btn btn-primary m-2" to={`/update/${product.id}/`}>Update</Link>
            <Link className="btn btn-danger m-2" onClick={()=> deleteProduct(product.id)}>Delete</Link>

            </div>
        </div>
    )
}

export default DetailedProducts