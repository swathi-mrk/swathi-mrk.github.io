function sum(){
	console.log('Hello Mirketa');
}

function printName()
{
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	console.log('Hello ' + fname,lname);
}
function printAdd(){
	var fnum = document.getElementById('firstnum').value;
	var lnum = document.getElementById('lastnum').value;
	add= fnum + lnum;
	console.log(add);
	
}
function printSub(){
	var fnum = document.getElementById('firstnum').value;
	var lnum = document.getElementById('lastnum').value;
	sub= fnum - lnum;
	console.log(sub);
	
}
function printMul(){
	var fnum = document.getElementById('firstnum').value;
	var lnum = document.getElementById('lastnum').value;
	mul= fnum * lnum;
	console.log(mul);
}
function printDiv(){
	var fnum = document.getElementById('firstnum').value;
	var lnum = document.getElementById('lastnum').value;
	div= fnum / lnum;
	console.log(div);
}