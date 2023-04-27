import Logo from "../images/Logo .svg"


const Header = () => {
    return (
        <header>
            <img className="logo" src={Logo} alt="logo"/>
        </header>
    )
}

export default Header