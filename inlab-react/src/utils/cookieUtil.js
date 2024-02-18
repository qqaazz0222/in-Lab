/** 쿠키를 추가하거나 삭제한다.
 *
 * @param strName 쿠키 이름
 * @param strValue 쿠키 값
 * @param iSecond null 을 입력하면 일시적인 쿠키를 생성한다. 0 보다 큰 값을 입력하면 쿠키 지속 시간을 포함한 쿠키를 생성한다. 0 을 입력하면 쿠키를 삭제한다.
 */
const SetCookie = (strName, strValue, iSecond) => {
    var strCookie = strName + "=" + encodeURIComponent(strValue);
    if (typeof iSecond === "number") {
        strCookie += "; max-age=" + iSecond;
    }
    document.cookie = strCookie;
};

/** 쿠키를 추가한다. */
const AddCookie = () => {
    var strName = document.getElementById("name").value;
    var strValue = document.getElementById("value").value;
    SetCookie(strName, strValue, null);
};

/** 쿠키를 삭제한다. */
const DelCookie = () => {
    var strName = document.getElementById("name").value;
    var strValue = document.getElementById("value").value;
    SetCookie(strName, strValue, 0);
};

export { SetCookie, AddCookie, DelCookie };
