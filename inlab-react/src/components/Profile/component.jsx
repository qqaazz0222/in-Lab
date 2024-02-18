import Thumb from "./../../assets/images/imgPlaceholder.jpg";
import "./style.css";

const Profile = ({ uid = "", size = 24 }) => {
    return (
        <div
            className="profileComp"
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <img
                className="profileImg"
                src={uid !== "" ? "" : Thumb}
                alt=""
                srcset=""
            />
        </div>
    );
};

export default Profile;
