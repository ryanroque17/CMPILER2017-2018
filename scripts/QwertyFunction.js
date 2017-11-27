var QwertyParser = require('../generated-parser/QwertyParser');


var QwertyFunction = function (dataType, parameter, codeBlock) {
	this.setDataType(dataType);
	this.setParameter(parameter);
	this.setCodeBlock(codeBlock);
};

QwertyFunction.prototype.setDataType = function (dataType) {
    this.dataType = dataType;
};

QwertyFunction.prototype.getDataType = function () {
    return this.dataType
};

QwertyFunction.prototype.setCodeBlock = function (codeBlock) {
	this.codeBlock = codeBlock;
};

QwertyFunction.prototype.getCodeBlock = function () {
	return this.codeBlock;
};

QwertyFunction.prototype.setParameter = function (parameter) {
	this.parameter = parameter;
};

QwertyFunction.prototype.getParameter = function () {
	return this.parameter;
};

module.exports = QwertyFunction;
