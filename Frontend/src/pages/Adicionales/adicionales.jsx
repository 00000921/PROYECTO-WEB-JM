import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer.jsx";
import Adicionales from "../../components/Adicional/adicional.jsx";
import Adicionales2 from "../../components/Adicional/adicionales2.jsx";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Adicionales/>
        <Adicionales2/>
        <Footer />
    </div>
  );
};

export default Home;
