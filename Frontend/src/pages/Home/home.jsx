import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/card";
import Servicios from "../../components/Servicios/servicios";
import Footer from "../../components/Footer/footer.jsx";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Card />
        <Servicios />
        <Footer />
    </div>
  );
};

export default Home;
