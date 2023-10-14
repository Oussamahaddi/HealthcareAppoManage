// create costum function  to use acrosse all application
String.prototype.customTrim = function () {
    return this.replace(/ +/g, " ").trim();
};
