export default (locale) => {
    // return a function to that can be used as i(keyName) to get value.
    return (key) => {
        const val = locale[key];
        if (val) {
            return val;
        } else {
            return key;
        }
    }
}