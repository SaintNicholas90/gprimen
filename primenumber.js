var greatestPrimeNumber = function(x) {
	var newPrime = 0;
	for (i=0 ; i<x ; i++) {
		if (x % i === 0) {
			newPrime = i;
		}
	}
	return (newPrime);
};

greatestPrimeNumber(120000);