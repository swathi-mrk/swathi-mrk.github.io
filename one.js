function callabc(){
	console.log('hello mirketa');
	var a = document.getElementById('t1').value;
	var sum = a*2;
	document.getElementById('t2').value = sum;
}
function clearabc(){
	document.getElementById('t1').value = "";
	document.getElementById('t2').value = "";
}
function double(){
	var b1 =document.getElementById('t1').value;
	var b2 = 2*b1;
	document.getElementById('result').textContent= 'Result is '+ b2;
}