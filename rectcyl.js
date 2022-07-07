function AreaPerimeterRect(){
	const a = document.getElementById('fnum').value;
	const b = document.getElementById('lnum').value;
	Areaofrectangle = a * b;
	Perimeterofrectangle = 2*a*B;
	document.getElementById('area').value = Areaofrectangle;
	document.getElementById('text1').value = Perimeterofrectangle;
}
function AreaVolume(){
	const a = document.getElementById('anum').value;
	const b = document.getElementById('bnum').value;
	Areaofcylinder = 2*3.14*a*b + 2*3.14*a*a;
	volumeofcylinder = 3.14*a*a*b;
	document.getElementById('area').value = Areaofcylinder;
	document.getElementById('text1').value = volumeofcylinder;
}