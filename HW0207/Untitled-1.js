var arrayTOne = new Array();
for (var i = 0; i < 10; i++) {
	let random = Math.round(Math.random() * 1000);
	arrayTOne.push(random);
}

alert(arrayTOne);

function findMin(array) {
	return Math.min.apply(null, array);
}

alert(findMin(arrayTOne));

function findMax(array) {
	return Math.max.apply(null, array);
}

alert(findMax(arrayTOne));

// ///////////////////////////////////////////////////


var arrayTTwo = ["Банан", "Авокадо", "Личи", "Инжир", "Апельсин", "Лимон"];
arrayTTwo = arrayTTwo.sort();

function printTwo() {
	// let ul = document.createElement('ul');
	// ul.innerHTML = arrayTTwo.forEach(e => "<li>" + e)
	// 	document.body.append(ul);
	let ul = document.createElement('ul');
	for (var i = 0; i < arrayTTwo.length; i++) {
		ul.innerHTML = ul.innerHTML + "<li>" + arrayTTwo[i] + "</li>";
	}
	document.body.append(ul);
}
printTwo();

function search(name) {
	var s1 = name + "";
	for (var i = 0; i < arrayTTwo.length; i++) {
		arrayTTwo[i] = arrayTTwo[i].toUpperCase();
	}
	return arrayTTwo.indexOf(s1.toUpperCase());
}

alert(search("ИнЖир"));

// ///////////////////////////////////////////////////////
let car = {
	manufacturer: "BMW",
	model: "F90",
	yearOfProduction: 2019,
	averageSpeed: 100,
};

function print(object) {
	document.write("<br><b>Manufacturer: </b>" + car.manufacturer
		+ "<br><b>Model: </b>" + car.model
		+ "<br><b>Year of production: </b>" + car.yearOfProduction
		+ "<br><b>Average speed: </b>" + car.averageSpeed);
}
print(car);

function time(object, distance) {
	let avg = object.averageSpeed;
	let k = distance / avg;
	if (k > 4) {
		if (k == 4) {
			k = k + 1;
		} else {
			let b = k / 4;
			k = k + (Math.floor(b));
		}
	}
	document.write("<br><b>It will take time: </b>" + k + " hours");

}

time(car, 800);


// //////////////////////////////////////////////////////


var dat = new Date();


function printDat(date) {
	alert(date);
}



function changeOfSeconds(num) {
	dat.setSeconds(dat.getSeconds() + num);
}

function changeOfHours(num) {
	dat.setHours(dat.getHours() + num);
}


function minuteChange(num) {
	dat.setMinutes(dat.getMinutes() + num);
}

changeOfHours(4);
changeOfSeconds(1);
minuteChange(20);
printDat(dat);



