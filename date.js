exports.getDate = function() {
	var today = new Date();
	var options = {
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	};

	return today.toLocaleDateString('en-US', options);
};
exports.getDay = function() {
	var today = new Date();
	var options = {
		weekday: 'long',
	};

	return today.toLocaleDateString('en-US', options);
};
