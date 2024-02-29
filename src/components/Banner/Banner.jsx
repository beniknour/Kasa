const Banner = (Propsbanner)=>{
    const {img , title, alt} = Propsbanner ;
    return(

        <div className="bannerContainer">
            <img className="bannerImg" src={img} alt={alt}/>
            <h2 className="bannerText">{title}</h2>
        </div>
    )
}

export default Banner;