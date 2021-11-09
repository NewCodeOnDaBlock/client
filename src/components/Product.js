import React, { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = () => {
    // const {history} = useHistory();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [productlist, setProductlist] = useState([]);


    //submit product function

    const submitProduct = (e) => {

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(response => console.log("New Product Submitted", response))
            .catch(err => console.log("Error Submitting", err))
        setTitle("");
        setPrice("");
        setDescription("");
    }

    // get all products submitted 

    useEffect((e) => {

        axios.get('http://localhost:8000/api/products')
            .then(response => { setProductlist(response.data.products) })
            .catch(err => { console.log(err) });
    }, [productlist])


    const productTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const productPriceInput = (e) => {
        setPrice(e.target.value)
    }

    const productDescriptionInput = (e) => {
        setDescription(e.target.value)
    }


    return (
        <div>
            <form onSubmit={submitProduct}>
                <label>Title</label>
                <input type="text" onChange={productTitleInput} value={title} placeholder="Title..." />
                <label>Price</label>
                <input type="number" onChange={productPriceInput} value={price} placeholder="Price..." />
                <label>Description</label>
                <input type="text" onChange={productDescriptionInput} value={description} placeholder="Description..." />
                <button>Create</button>
            </form>

            <div id="list-box">
                {
                    productlist.map((product, i) => {
                        return  <p key={i}>
                            <Link to={`/results/${product._id}`}>{product.title}</Link>
                                </p>
                    })
                }
            </div>
        </div>
    )
}
export default Product;