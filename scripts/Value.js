var Value = function(name, value) {
	var obj = Object.create(Value.prototype);
	obj.name = name;
	obj.value = value;
};