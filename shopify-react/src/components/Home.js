import React from "react";
import v from '../assets/images/v.jpg';
import v2 from '../assets/images/v2.jpg';
import cvr from '../assets/images/cvr.jpg'

const Home = () =>{
    return(
        <div className="container-fluid">
            <div className="row main">    
            <div className="col-lg-12">
                <h3 className="main-topic">The ecommerce platform made for you</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    velit nostrum cum, 
                </p>
            </div>       
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12">
                <div className="input-group">
                    <input type="search" className="form-control rounded" id="search-bar" placeholder="Enter your email addrress" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-primary setwidth">Get Started</button>
                </div>
                <br/>
            </div> 
        </div>
        <div className="row justify-content-center">
            <p className="aligncenter">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <br/>
        <div className="col-md-12">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={v2} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100"  src={v} alt="Second slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        <br/>
        <br/>
        <div className="about_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                            <div className="section_title">
                                <h3>Your brand, your way</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                                Eos quo optio voluptate? Distinctio natus, consectetur <br/>
                                officia iusto ipsam a corporis tempore, amet, <br/>
                                iste laboriosam numquam facilis reiciendis officiis <b/>
                                repellendus illum!
                            </p>
                            <button type="button" className="btn btn-outline-primary">Start Selling</button>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className=""> 
                            <img className="img-fluid" src={cvr} alt=""/>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Home;