const validate = (actual, required, property) => {
	if (actual < required || actual % 2) {
		throw new Error(`${property} should be even and greater or equal to ${required}, but ${actual} was given`);
	}
};
const draw = (width, height, padding) => {
	validate(width, 20, 'width');
	validate(height, 20, 'height');
	validate(padding, 4, 'padding');
	const board = Array(height).fill(0).map(x => Array(width).fill(0));
	const dash = (start, end, rowIndex) => {
		for (let colIndex = start; colIndex <= end; colIndex++) {
			board[rowIndex][colIndex] = 1;
		}
	};
	const pipe = (start, end, colIndex) => {
		for (let rowIndex = start; rowIndex <= end; rowIndex++) {
			board[rowIndex][colIndex] = 2;
		}
	};
	
	// Draw box
	let level = 0;
	while (true) {
		const calculatedPadding = (level * (padding / 2)) + level;
		const dashStart = calculatedPadding;
		const dashEnd = width - calculatedPadding - 1;
		const pipeStart = calculatedPadding + 1;
		const pipeEnd = height - calculatedPadding - 1 - 1;

		if (calculatedPadding >= height - calculatedPadding -1) {
			break;
		}
		// Draw top
		dash(dashStart, dashEnd, calculatedPadding);
		// Draw bottom
		dash(dashStart, dashEnd, height - calculatedPadding - 1);

		if (calculatedPadding >= width - calculatedPadding - 1) {
			break;
		}
		// Draw Left
		pipe(pipeStart, pipeEnd, calculatedPadding);
		// Draw right
		pipe(pipeStart, pipeEnd, width - calculatedPadding - 1);

		level = level + 1;
	}

	return board;
};
const print = (pixelArray) => {
	pixelArray.forEach(pixelRow => {
		console.log(pixelRow.join('').replace(/0/g, ' ').replace(/1/g, '-').replace(/2/g, '|'));
	});    
};


module.exports = {
	draw,
	print
};
