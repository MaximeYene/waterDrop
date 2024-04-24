import ConnForm from "../components/connectionFormular";
import ImageConn from "../components/imgConnection";
// import Navbar from "../components/navbar";
import '../styles/connection.css'

const Connection = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="connection-container">
                <div className="connection-form" >
                    <ImageConn/>
                   <div className="connForm" >
                   <ConnForm/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Connection;