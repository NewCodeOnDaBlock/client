import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Detail = (props) => {

    const history = useHistory();
    const { id } = useParams();
    const [productdisplay, setProductdisplay] = useState([]);



    useEffect((e) => {

        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => { setProductdisplay(response.data.product) })
            .catch(err => console.log(err))
    }, [id])


    const deleteProduct = (e) => {
        e.preventDefault();

        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => console.log("Product Deleted", response))
            .catch(err => console.log("Error Submitting", err))
        
        history.push("/")
    }

    return (
        <div id="display-box">


            <p>{productdisplay.title}</p>
            <p>{productdisplay.price}</p>
            <p>{productdisplay.description}</p>

            <Link to={`/edit/${productdisplay._id}`}>Edit</Link>
            <button onClick={ deleteProduct }>Delete</button>


        </div>
    )
}
export default Detail;