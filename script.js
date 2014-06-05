	var count = 0;
	function myFunc(){
		count++;
		if(count %2 == 0){
			document.getElementById("test").innerHTML = "even";
		}
		else{
			document.getElementById("test").innerHTML = "odd";
		}
	}

	// setInterval(function(){
	// 	if(count == 0){
	// 		document.getElementById("image").style.background = "url(pics/pic2.jpg)";
	// 		document.getElementById("image").style.backgroundSize= "cover";
	// 	}else if( count == 1){
	// 		document.getElementById("image").style.background = "url(pics/pic1.jpg)";
	// 		document.getElementById("image").style.backgroundSize = "cover";
	// 	}else{
	// 		document.getElementById("image").style.background = "url(pics/pic3.jpg)";
	// 		count = 0;
	// 	}
	// 	console.log(count);
	// 	count++;
	// },3000);

function mOverPic(){
	document.getElementById("picture").innerHTML = "Hello";
}	

function mOver(obj){
	obj.innerHTML = "minhquannguyen@berkeley.edu";
}

function mOut(obj){
	obj.innerHTML = "Contact";
}