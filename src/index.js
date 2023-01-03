module.exports = function toReadable (number) {
	const digits = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	const ties = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
	let a = ''
	let b = ''
	let c = ''
	let arrayFromNymber = (''+number).split('').map(Number).reverse()


	if (arrayFromNymber[0] === 0 && !arrayFromNymber[1] && !arrayFromNymber[2]) {
		return a = 'zero'
	}

	digits.forEach((num, index, array) => {
		if (arrayFromNymber[1] === 1) {
			if (+('' + arrayFromNymber[1] + arrayFromNymber[0]) === index) {
				a = ' ' + num
			}
		}

		if (arrayFromNymber[0] === index) {
			a = ' ' + num
		}

		if (arrayFromNymber[2] === index) {
			c = num + ' hundred'
		}
	});

	if(arrayFromNymber[1] !== 1 && arrayFromNymber[1] !== 0) {
		ties.forEach((num, index, array) => {
			if (arrayFromNymber[1] === index) {
				b = ' ' + num
			}
		});
	}

	return (c + b + a).trim()
}
