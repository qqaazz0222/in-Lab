const NullCheck = (data) => {
    return data === undefined || data === "" || data === null ? false : true;
};
module.exports = { NullCheck };
