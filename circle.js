function AreaPerimeterabc(){
	console.log('hello cal');
	const a = document.getElementById('fnum').value;
	const area = 2*3.14*a*a;
	const perimeter = 2*3.14*a;
	document.getElementById('area').value= sum;
	document.getElementById('perimeter').value= sum1;
}
function AreaPerimeterSqr(){
	const b =document.getElementById('lnum').value;
	const areaofsquare = b*b;
	const perimeterofsquare = 4*b;
	document.getElementById('area').value= areaofsquare;
	document.getElementById('perimeter').value= perimeterofsquare;
}

