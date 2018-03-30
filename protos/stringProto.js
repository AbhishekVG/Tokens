String.prototype.stringConcat = function (index, newString) {
    return `${this.slice(0, index)}${newString}${this.slice(index)}`;
}
String.prototype.repeatedDashCases = function (word) {
    var reg = new RegExp(word, 'g')
    try {
        return this.toLowerCase().split("").sort().join("").match(reg).length;
    }
    catch (e) {
        return 0;
    }
}