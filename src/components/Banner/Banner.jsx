
import banner from "../../assets/images/banner.png";

const Banner= () =>{

    return(

        <div className="bannerContainer">
            <img className="bannerImg" src={banner} alt="paysage montagneux"/>
            <p className="bannerText">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;