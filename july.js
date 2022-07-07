function calculatorabc1(){
	console.log('hello calculator');
	const a = document.getElementById('text1').value;
	const b = document.getElementById('text2').value;
	const c = document.getElementById('text3').value;
	const sum = parseInt(a)* parseInt(b)* parseInt(c)/100;
	document.getElementById('text4').value = sum;
}
function CompCalculatorabc1(){
	const a = document.getElementById('text1').value;
	const b = document.getElementById('text2').value;
	const c = document.getElementById('text3').value;
	const sum = parseInt(a)*(1 + parseInt(c)/100)^parseInt(b);
	document.getElementById('text4').value = sum;

}
	