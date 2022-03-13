import "./HomePage.css";
import { ProductContainer } from "./ProductContainer";

export const Home = () => {
    return (
        <div id="mainBox">
        <h1>All deals and coupons.</h1>
        <p id="headPara">The best online deals and coupons, including Klarna exclusives, updated daily.</p>
        <ProductContainer/>
        </div>
    )
}