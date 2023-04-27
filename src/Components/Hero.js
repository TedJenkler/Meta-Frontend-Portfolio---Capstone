import Img from "../images/restauranfood.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-h1">Little Lemon</h1>
                <h2 className="hero-h2">Chicago</h2>
                <p className="hero-p">We are a family owned Mediterranean resturant, focused on traditional recipes served with a mordern twist.</p>
                <button className="hero-btn">Reserve a Table</button>
            </div>
            <div className="hero-right">
                <img className="resturantfood" src={Img} alt="resturantfood" />
            </div>
        </div>
    )
}

export default Hero