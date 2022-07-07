function sort(){
	 var val1=document.getElementById('name2').value;
	 var val2=document.getElementById('name1').value;
	 console.log(val1.length);
	 console.log(val2.length);
	 
	 if(val2.length > val1.length){
		 document.getElementById('name1').value = val2;
	   	 document.getElementById('name2').value = val1;
		 
		}
}
function sortasc(){
	var val2=document.getElementById('name1').value;
	var val1=document.getElementById('name2').value;
	console.log(val1.length);
	console.log(val2.length);
	
	if(val1.length > val2.length){
		document.getElementById('name2').value = val1;
		document.getElementById('name1').value = val2;
}
}