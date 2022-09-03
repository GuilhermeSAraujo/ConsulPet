import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <h1>ConsulPet</h1>
            <nav style={{
                 borderBottom: "solid 1px",
                 paddingBottom: "1rem",
            }}>
                <Link to="/consulpet/agenda">Agenda</Link> |{" "}
            </nav>
        </div>
    );
  }
  
  export default Home;
  