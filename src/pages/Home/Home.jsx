import Card from "../../components/Cards/Card";
import Banner from "../../components/Banner/Banner";
import data from '../../data/logements.json';
const Home = () =>{
    return(
        <>
            <Banner />
            <div className="cardsContainer">
                {data.map((item) => (
                    <Card key={item.id} cover={item.cover} title={item.title} />
                ))}
            </div>
        </>
    );
}


export default Home;
