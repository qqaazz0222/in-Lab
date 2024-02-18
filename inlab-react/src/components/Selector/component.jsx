import "./style.css";

const HorizontalSelector = ({ options = [], value = "" }) => {
    return (
        <div className="selector horizontal">
            {options.map((option, idx) => (
                <div className="option">{option}</div>
            ))}
        </div>
    );
};

const VerticalSelector = ({ options = [], value = "" }) => {
    return <div className="selector vertical"></div>;
};

const SignInSelector = ({ value = "", func = () => {} }) => {
    return (
        <div className="selector signIn">
            <div
                className={`option user ${value === "user" && "selected"}`}
                onClick={() => {
                    func("user");
                }}
            >
                연구원 로그인
            </div>
            <div
                className={`option admin ${value === "admin" && "selected"}`}
                onClick={() => {
                    func("admin");
                }}
            >
                관리자 로그인
            </div>
        </div>
    );
};

export { HorizontalSelector, VerticalSelector, SignInSelector };
