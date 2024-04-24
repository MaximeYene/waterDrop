import ConnForm from "../components/connectionFormular";
import ImageConn from "../components/imgConnection";
import Navbar from "../components/navbar";
import '../styles/connection.css'

const Connection = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="ConnectionContainer" >
                    <ImageConn />
                    <ConnForm />
                </div>
            </div>
        </div>
    )
}

export default Connection;