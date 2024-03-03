
import banner from '../Image/banner-01.jpg'
import banner02 from '../Image/banner-02.jpg'
import banner03 from '../Image/banner-03.jpg'

const Header = () => {
    return (
        <div className=' container-fluid p-0 '>
            
                <h1 className='text-center logo '>vixio</h1>
                <div id="carouselBanner" className="carousel slide" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ height: "550px" }}>
                            <img src={banner} className="d-block w-100" alt="" style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                        <div className="carousel-item" style={{ height: "550px" }}>
                            <img src={banner02} className="d-block w-100" alt="" style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                        <div className="carousel-item" style={{ height: "550px" }}>
                            <img src={banner03} className="d-block w-100" alt="" style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            
        </div>
    )
}

export default Header