
 export const debounce = (function() {
	let timer = 0;
	return function(callback, ms) {
		if(timer!=0) return;
		// clearTimeout(timer);
		console.log(11111);
		timer = setTimeout(callback, ms);
	};
})();

