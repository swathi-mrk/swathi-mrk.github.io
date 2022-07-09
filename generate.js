function gen(){
	var str = '<table>';
	for(i=1;i<=5;i++){
		str = str + '<tr><td>Apple' + i +'</td></tr>';
	}
	str = str + '</table>';
	document.getElementById('t1').innerHTML = str;
}
function gen2(){
	var a =0;
	var c = document.getElementById('t1').value;
	var d = document.getElementById('t2').value;
	var str ='<table class="table table-striped">';
     for(a=1; a<=parseInt(d); a++){
      str = str +'<tr><td>'+ c +'</td><td>' + 'x' + '</td><td>' + a +'</td></td>' + '=' + '</td><td>' + (c*a)+ '</td></tr>';
   }
   str = str + '</table>'; 
   document.getElementById('s1').innerHTML = str;
}