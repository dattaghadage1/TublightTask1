import axios from 'axios'
import './product.css'
import React, { useEffect, useState } from 'react'

function Product() {
    const [data, setData] = useState([])
    const[cart,setCart]=useState(true)
    const[product,setProduct]=useState({
        image:"",
        title:"",
        price:""
    })
    const ProductsList = async () => {
        await axios.get('https://fakestoreapi.com/products/').then((P_Data) => {
            setData(P_Data.data)
        }).catch((error) => {
            console.log("erooor")
        })
    }
    useEffect(() => {
        ProductsList();
    }, [])
    const FilterProduct = (e) => {
        const value = e.target.value
        if (value == 'high') {
            const SortPrice = data.sort((a, b) => a.price - b.price).reverse()
            setData([...SortPrice])
        } else if (value == 'low') {
            const SortPrice = data.sort((a, b) => a.price - b.price)
            setData([...SortPrice])
        }
    }
    const ADD=()=>{
        setCart(false)
    }
    // ....................................Add Product page code.................
    const getData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setProduct({...product,[name]:value})
    }
    const AddProduct=()=>{
        axios.post('https://fakestoreapi.com/products',product)
        setCart(true)
    }
    const Delete=(e)=>{
        axios.delete(`https://fakestoreapi.com/products/1`)
    }
    return (
        <div>
            <nav className='nav'>
                <select name="Price" id="filter" onChange={FilterProduct}>
                    <option disabled selected>Filter</option>
                    <option value="high">Hight To Low Price</option>
                    <option value="low">Low To High Price</option>
                </select>
                <button className='add' onClick={ADD}>ADD PRODUCT</button>
            </nav>
            { cart?
                data.map((ele, index) => (
                    <div key={index} className="cart">
                        <span>
                            <img className='images' src={ele.image} alt="images" />
                            <p>{ele.category}</p>
                            <h4>{ele.price}</h4>
                            <button onClick={Delete}>Delete</button>
                        </span>
                    </div>
                )):
                <>
                <input type="url"  placeholder='enter image url' value={product.image} name="image" onChange={getData}/>
                <input type="text" placeholder='enter image title' value={product.title} name="title" onChange={getData} />
                <input type="number" placeholder='enter price' value={product.price} name="price" onChange={getData} />
                <button onClick={AddProduct}>ADD Product</button>
                </>
            }
        </div>
    )
}

export default Product