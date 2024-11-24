import logo from '../static/logo.jpg'

function Header(){
    return (
        <header>
            <img src={logo} alt="logo"/>
            <h1>Lefovers Gourmet</h1>
        </header>
    );
}

export default Header;