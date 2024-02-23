import BannerAbout from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import about from '../../data/about.json';
function About (){

    return(

        <>

        <BannerAbout />
        <div className="collapseContainer">
            {about.map((section, index) => (
                <Collapse key={index} section={section} />
            ))}
        </div>
        </>
    )
        
}

export default About;