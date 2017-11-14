var QwertyValue = function (dataType, value) {
    this.dataType = dataType;
    this.value = value;
};

QwertyValue.prototype.setDataType = function (dataType) {
    this.dataType = dataType;
};

QwertyValue.prototype.getDataType = function () {
    return this.dataType
};

QwertyValue.prototype.setValue = function (value) {
    this.value = value;
};

QwertyValue.prototype.getValue = function () {
	return this.value;
};

module.exports = QwertyValue;
