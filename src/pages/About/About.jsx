import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import about from '../../data/about.json';
import aboutBanner from "../../assets/images/aboutBanner.png";

function About (){

    return(

        <>

        <Banner img={aboutBanner} title="" alt="paysage montagneux"/>
        <div className="collapseContainer">
            {about.map((section, index) => (
                <Collapse key={index} section={section} />
            ))}
        </div>
        </>
    )
        
}

export default About;