const getMonthList = (year = 2024, month = 1) => {
    const firstDate = new Date(year, month - 1, 1, 0, 0, 0);
    const lastDate = new Date(year, month, 0, 0, 0, 0);
    let startDate = new Date(firstDate);
    let startEndDate = new Date(firstDate);
    let endStartDate = new Date(lastDate);
    let endDate = new Date(lastDate);
    startDate.setDate(firstDate.getDate() - firstDate.getDay());
    startEndDate.setDate(firstDate.getDate() - 1);
    endStartDate.setDate(lastDate.getDate() + 1);
    endDate.setDate(lastDate.getDate() + 6 - lastDate.getDay());

    const mainSection = getDateData(
        firstDate,
        firstDate.getDate(),
        lastDate.getDate(),
        true
    );
    const prevSection =
        mainSection[0].day === "일"
            ? []
            : getDateData(
                  startDate,
                  startDate.getDate(),
                  startEndDate.getDate(),
                  false
              );

    const nextSection =
        mainSection[mainSection.length - 1].day === "토"
            ? []
            : getDateData(
                  endStartDate,
                  endStartDate.getDate(),
                  endDate.getDate(),
                  false
              );
    return [...prevSection, ...mainSection, ...nextSection];
};

const getDateData = (date = Date, start = 0, end = 0, type = true) => {
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    let result = [];
    for (let d = start; d <= end; d++) {
        const tempDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            d,
            0,
            0,
            0
        );
        const temp = {
            year: tempDate.getFullYear(),
            month: tempDate.getMonth() + 1,
            date: tempDate.getDate(),
            day: dayList[tempDate.getDay()],
            datetime: tempDate,
            isMain: type,
        };
        result.push(temp);
    }
    return result;
};

export { getMonthList, getDateData };
