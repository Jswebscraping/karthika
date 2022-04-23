function generateNumbers(){
	var number=document.getElementById('num').value;
	
	if(number == "" ||	number <= 0){
		alert('Please enter something first');
	}else{
		var num=parseInt(number);
		var even=[];
		var odd=[];
		for(var i=1; i<=num; i++){
			if (i % 2 == 0){
				even.push(i);
			}else{
				odd.push(i);
			}
			
		}
		
		document.getElementById('even').innerHTML=even.join(' ,');
		document.getElementById('odd').innerHTML=odd.join(' ,');
		
	}
}	