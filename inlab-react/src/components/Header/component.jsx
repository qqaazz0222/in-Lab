import Icon from "../Icon/component";
import Profile from "../Profile/component";
import "./style.css";

const Header = () => {
    return (
        <div id="headerComp">
            <Icon name="circle-help" size="28px" color="gray-900" />
            <Icon name="bell-notification" size="28px" color="gray-900" />
            <Profile uid="" size={36} />
        </div>
    );
};

export default Header;
