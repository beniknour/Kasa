import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";
import data from '../../data/logements.json';
const Home = () =>{
    return(
        <>
            <Banner />
            <Cards data={data} />
        </>
    );
}


export default Home;
