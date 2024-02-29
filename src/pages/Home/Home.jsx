import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";
import data from '../../data/logements.json';
import banner from "../../assets/images/banner.png";

const Home = () =>{
    return(
        <>
            <Banner img={banner} title="Chez vous, partout et ailleurs" alt="paysage montagneux"/>
            <Cards data={data} />
        </>
    );
}


export default Home;
