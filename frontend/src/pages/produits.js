import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import ProductList from "../components/productList";

const Produits = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Menu/>
            </div>
            <div>
                <ProductList/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Produits;
