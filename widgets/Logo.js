import logo from '../../images/new_logo.png';
// import Image from "../../widgets/Image";
import "../../styles/widgets/_logo.scss";

const Logo = (s)=>{
    return (
        <a href="/" className="logo">
            <img type={"element"} src={logo} alt={"Scott Forba Logo"}/>
        </a>

    );
}

// Logo.propTypes = {
//     className: PropTypes.string,
// };

export default Logo;
