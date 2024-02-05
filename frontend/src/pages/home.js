import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeBody from "../components/homebody";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <HomeBody/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;