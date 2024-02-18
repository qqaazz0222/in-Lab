import "./style.css";

const PageTitle = ({ title = "", subTitle = "" }) => {
    return (
        <div className="pageTitleWrap">
            <div className="pageTitle">{title}</div>
            {subTitle !== "" && <div className="pageSubTitle">{subTitle}</div>}
        </div>
    );
};

const CardTitle = ({ title = "" }) => {
    return (
        <div className="cardTitleWrap">
            <div className="cardTitle">{title}</div>
        </div>
    );
};

export { PageTitle, CardTitle };
