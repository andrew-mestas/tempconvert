document.addEventListener('DOMContentLoaded',function(){

var convertToC = function(tempInF)
{
  return (((tempInF-32) * 5/9).toFixed(2) );
};

var convertToF = function(tempInC)
{
  return (((tempInC * 9/5)+32).toFixed(2) );
};

document.getElementsByClassName("convert")[0].addEventListener("click",function(e){
	e.preventDefault();
	console.log("clicked");
	var color;
	if(document.getElementById("value").value == "")
	{
		document.getElementById("tempName").innerHTML = "Please enter a temperature";

    }
    else{
    	var value = document.getElementById("value").value;

	if(document.getElementById("F").checked)
	{
		document.getElementById("tempName").innerHTML = convertToF(value) + " \xB0F ";
		if(convertToF(value) >= 80)
			color = "red";
		else if(convertToF(value) <= 60)
			color = "blue";
	}
	else
	{
		document.getElementById("tempName").innerHTML = convertToC(value) + " \xB0C ";
		if(convertToC(value) >= 26.67)
			color = "red";
		else if(convertToC(value) <= 0)
			color = "blue";
	}


		document.getElementsByTagName("body")[0].style.background = color;
	}


});

});

