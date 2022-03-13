import { useEffect, useState } from "react";
import "./ProductContainer.css";

export const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [req, setReq] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async() => {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setProducts(data);
    }
    const findMatch = (e) => {
        let {value} = e.target;
        let arr = products.filter(p => {
            return p.title.trim().includes(value) || p.category.trim().includes(value);
        })
        setReq(arr);
    }
    return (
        <div id="Container">
            <div id="filters">
                <div id="cat">
                    <h2>Categories</h2>
                    {["All","Babies & Kids","Clothing & Apparel","Computers & Accessories","Consumer Electronics","Education","Gifts","Health & Beauty","Holidays & Occasions","Household"].map(e => {
                        return <span>{e}</span>
                    })}
                </div>
                <hr/>
                <div id="filterType">
                    <h2>Filter</h2>
                    <h3>Type</h3>
                    {["Only Coupons", "Exclusive", "BOGO and more"].map(e => {
                        return (<div><input type="checkbox" id={e} name={e} value={e}/>
                        <label htmlFor={e}>{e}</label><br/></div>)
                    })}
                </div>
                <hr/>
                <div id="discount">
                    <h2>Discount</h2>
                    {["0-49% off", "50-80% off"].map(e => {
                        return (<div><input type="checkbox" id={e} name={e} value={e}/>
                        <label htmlFor={e}>{e}</label><br/></div>)
                    })}
                </div>
                <hr/>
            </div>
            <div id="products">
                <input placeholder="Search" name="searchedProduct" onChange={findMatch}/>
                <div id="sortbox">
                    <span><strong>{req.length === 0 ? products.length : req.length}</strong></span>
                    <select>
                    <option value="F">Featured</option>
                    <option value="A">A-Z</option>
                    <option value="N">Newest</option>
                    </select>
                </div>
                <div id="con">
                {req.length === 0 && products.map(p => {
                    return <div className="details">
                        <img src={p.image}/>
                        <p>{p.title}</p>
                        <p>{p.category}</p>
                    </div>
                })}
                {req.length !== 0 && req.map(p => {
                    return <div className="details">
                        <img src={p.image}/>
                        <p>{p.title}</p>
                        <p>{p.category}</p>
                    </div>
                })}
                </div>
            </div>
        </div>
    )
}