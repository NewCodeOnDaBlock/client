import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Edit = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const [productdisplay, setProductdisplay] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect((e) => {

        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => { setProductdisplay(response.data.product) })
            .catch(err => console.log(err))
    }, [])

    const editProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(response => console.log("Product Edited", response))
            .catch(err => console.log("Error Submitting", err))
        setTitle("");
        setPrice("");
        setDescription("");

        history.push(`/results/${id}`)

    }


    const editTitleInput = (e) => {
        setTitle(e.target.value)
    }
    const editPriceInput = (e) => {
        setPrice(e.target.value)
    }
    const editDescriptionInput = (e) => {
        setDescription(e.target.value)

    }


    return (
        <div id="edit-body">
            <h2>Edit Product</h2>
            <form onSubmit={editProduct}>
                <label>Title</label>
                <input type="text" onChange={editTitleInput} value={title} placeholder={productdisplay.title} />
                <label>Price</label>
                <input type="number" onChange={editPriceInput} value={price} placeholder={productdisplay.price} />
                <label>Description</label>
                <input type="text" onChange={editDescriptionInput} value={description} placeholder={productdisplay.description} />
                <button>Edit</button>
            </form>

            <a href={`/results/${id}`}>Go Back</a>
        </div>
    )
}

export default Edit;