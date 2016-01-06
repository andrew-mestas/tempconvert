document.addEventListener('DOMContentLoaded',function(){

var convertToC = function(tempInF)
{
  return (((tempInF-32) * 5/9).toFixed(2) );
};

var convertToF = function(tempInC)
{
  return (((tempInC * 9/5)+32).toFixed(2) );
};

document.getElementsByClassName("convert")[1].addEventListener("click", function(e){
	e.preventDefault();
	document.getElementById("value").value = "";
	document.getElementById("tempName").innerHTML = "Temperature";
	document.getElementsByTagName("body")[0].style.background = "white";
})

document.getElementsByClassName("convert")[0].addEventListener("click",function(e){
	e.preventDefault();
	console.log("clicked");
	var color;
	if(document.getElementById("value").value == "")
	{
		document.getElementById("tempName").innerHTML = "Enter a temperature";
    }
    else{
    	var value = document.getElementById("value").value;

	if(document.getElementById("C").checked)
	{
		document.getElementById("tempName").innerHTML = convertToF(value) + " \xB0F ";
		var temp = convertToF(value);
		if(temp >= 80)
			color = "red";
		else if(temp < 80 && temp >= 50)
			color = "yellow"
		else if(temp <= 32)
			color = "blue";
		else 
			color = "white";
	}
	else
	{
		document.getElementById("tempName").innerHTML = convertToC(value) + " \xB0C ";
		var temp = convertToC(value);
		if(temp >= 26.67)
			color = "red";
		else if(temp < 26.67 && temp >= 9)
			color = "yellow";
		else if(temp <= 0)
			color = "blue";
		else
			color = "white"
	}
		document.getElementsByTagName("body")[0].style.background = color;
	}
});
});

