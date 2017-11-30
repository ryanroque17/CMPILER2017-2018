var QwertyParser = require('../generated-parser/QwertyParser');

var QwertyValue = function (dataType, value, ctx) {
	this.setDataType(dataType);
	this.setValue(value, ctx);
};

QwertyValue.prototype.setDataType = function (dataType) {
    this.dataType = dataType;
};

QwertyValue.prototype.getDataType = function () {
    return this.dataType
};

QwertyValue.prototype.setValue = function (value, ctx, arrayVal, arrayIndex) {
	var chars = new antlr4.InputStream("");
    var lexer = new QwertyLexer.QwertyLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new QwertyParser.QwertyParser(tokens);
    var arrayValNull = false;
    console.log("value of var: " + value);
	console.log("dataType of var " +this.dataType);
	console.log("type of val " +typeof(value));
	
	////console.log(value);
	if(Array.isArray(value)){
		if(isValidAssignment(this.dataType, value, arrayVal)){
			//console.log("eyyy");

			this.value = value;
		}else{
			if(arrayVal!=null)
				this.dataType = this.dataType.split("[]")[0];
			parser.notifyErrorListeners("Invalid assignment! Expecting " + this.dataType + " object.", ctx.start);
			arrayValNull = true;
			value = null;
		}
	}else{
		if(typeof(value)=="object" && !value){
			//console.log("yey");
			value=null;
		}else if(typeof(value)=="string" && (value.includes("null") || value == "")){
			value=null;
		}else if(isValidAssignment(this.dataType, value, arrayVal)){
			this.value = value;
		}
		else if(this.dataType =="int" && typeof(value) == "number") {
			value = Math.floor(value);
		}
		else{
			parser.notifyErrorListeners("Invalid assignment! Expecting " + this.dataType + " object.", ctx.start);
			arrayVal = null;
			value = null;
		}
	}

	if(this.dataType == "float" && typeof(value) == "number" && !value.toString().includes(".")){
		var string = value.toString().concat(".0");
		value = parseFloat(value).toFixed(1);
	}

	if(this.dataType =="int" && typeof(value) == "number") {
		value = Math.round(value);
	}
	
	if(arrayVal==null)
		this.value = value;
	else{
		if(arrayValNull)
			arrayVal = true;
		//console.log("ey" + this.value.length);
		this.value[arrayIndex] = arrayVal;
	}
	
};

QwertyValue.prototype.getValue = function () {
	return this.value;
};

function isValidAssignment(dataType, input, arrayVal) {
	////console.log("isvalid " + dataType);
	//console.log("INPUT" + input);
	////console.log(typeof(input));
	//console.log("isnanINPUT" + isNaN(input));
	var dataTypeSplit;

	if(arrayVal!=null){
		dataTypeSplit = dataType.split("[]");
		dataType = dataTypeSplit[0];
		input = arrayVal;
		//console.log("data type array" + dataType);
	}

	if(dataType == "string") {
		////console.log("yey");
		if(typeof(input) != "string") {
			return false;
		}
		return true;
	} else if(dataType == "boolean") {
		if(!(input.toString().includes("true") || input.toString().includes("false"))) {
			return false;
		}
		return true;
	} else if(dataType.includes("[]")){
		//console.log("EY");
		if(Array.isArray(input))
			return true;
		else
			return false;
	}else if(!isNaN(input)){
		if(dataType == "int") {
			if(input.toString().includes(".")) {
				return false;
			}
		} else if(dataType == "float") {
			if(typeof(input) != "number") {
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
