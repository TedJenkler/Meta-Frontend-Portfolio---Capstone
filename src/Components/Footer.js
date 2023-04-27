import Logo from "../images/Logo .svg"

const Footer = () => {
    return (
        <footer>
        <img src={Logo} />
        <ul>
            <li>Doormat Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>OrderOnline</li>
            <li>Login</li>
        </ul>
        <ul>
            <li>Contact</li>
            <li>Adress</li>
            <li>Phone</li>
            <li>email</li>
        </ul>
        <ul>
            <li>Social Media Links</li>
            <li>Adress</li>
            <li>Phone</li>
            <li>email</li>
        </ul>
        </footer>
    )
}

export default Footer