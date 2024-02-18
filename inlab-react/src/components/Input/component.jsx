import { useState } from "react";
import "./style.css";
import Icon from "../Icon/component";

const InputText = ({
    name = "",
    placeholder = "",
    value = "",
    setValue = () => {},
}) => {
    return (
        <div className="inputTextWrap">
            <p className="inputTitle">{name}</p>
            <input
                className="textInput"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

const InputPassword = ({
    name = "",
    placeholder = "",
    value = "",
    setValue = () => {},
}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="inputPasswordWrap">
            <p className="inputTitle">{name}</p>
            <div className="inputRow">
                <input
                    className="passwordInput"
                    type={isVisible ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <button
                    className="btnVisible"
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                >
                    <Icon
                        name={isVisible ? "show" : "hide"}
                        size="20px"
                        color="gray-500"
                    />
                </button>
            </div>
        </div>
    );
};

export { InputText, InputPassword };
