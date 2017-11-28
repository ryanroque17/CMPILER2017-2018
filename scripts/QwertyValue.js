var QwertyParser = require('../generated-parser/QwertyParser');


var QwertyValue = function (dataType, value) {
	this.setDataType(dataType);
	this.setValue(value);
};

QwertyValue.prototype.setDataType = function (dataType) {
    this.dataType = dataType;
};

QwertyValue.prototype.getDataType = function () {
    return this.dataType
};

QwertyValue.prototype.setValue = function (value) {
	//console.log(typeof(value));
	//console.log(value);
	
	if(typeof(value)=="object" && !value){
		//console.log("yey");
		this.value=null;
	}else if(typeof(value)=="string" && value.includes("null")){
		this.value=null;
	}else if(isValidAssignment(this.dataType, value))
		this.value = value;
	else{
		console.log("Invalid Assignment! Data type mismatch!");
		this.value = null;
	}
	
};

QwertyValue.prototype.getValue = function () {
	return this.value;
};

function isValidAssignment(dataType, input) {
	//console.log(dataType);
	//console.log(input);
	//console.log(typeof(input));
	//console.log(isNaN(input));
	
	if(dataType == "string") {
		//console.log("yey");
		if(typeof(input) != "string") {
			return false;
		}
		return true;
	} else if(dataType == "boolean") {
		if(!(input.toString().includes("true") || input.toString().includes("false"))) {
			return false;
		}
		return true;
	} else if(!isNaN(input)){
		if(dataType == "int") {
			//console.log("int");
			if(typeof(input) != "number" || input.toString().includes(".")) {
				return false;
			}
		} else if(dataType == "float") {
			if(typeof(input) != "number" || !(input.toString().includes("."))) {
				return false;
			}
		} 
		return true;

	}else{
		return false;
	}
	
	return true;
}

module.exports = QwertyValue;
