import "./style.css";

const Icon = ({ name = "components", size = "24px", color = "black" }) => {
    return (
        <div
            className={`icon icon-${name}`}
            style={{ fontSize: size, color: `var(--col-${color})` }}
        ></div>
    );
};

export default Icon;
