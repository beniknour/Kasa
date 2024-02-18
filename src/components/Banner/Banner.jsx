
import banner from "../../assets/images/banner.png";

const Banner= () =>{

    return(

        <div className="bannerContainer">
            <img className="bannerImg" src={banner} alt="paysage montagneux"/>
            <h2 className="bannerText">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner;