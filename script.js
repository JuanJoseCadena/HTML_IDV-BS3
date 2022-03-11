
function botontop()
{
	var element = document.getElementById("insform");
	element.style.display = "block";
	element.scrollIntoView();
	

}

function formulario()
{

	document.getElementById("insform").style.display = "block";
	
	
}

function confirm()
{
	var string = document.getElementById("name");
	string = string.value;
	var string2 = document.getElementById("e-mail");
	string2 = string2.value;

	if(string != "" && string2 != "")
	{
		window.alert("Su solicitud se recibió correctamente");
	}
	else
	{
		window.alert("Hay valores no válidos en su solicitud");
	}
}

function conconfirm()
{
	var string = document.getElementById("name2");
	string = string.value;
	var string2 = document.getElementById("lname");
	string2 = string2.value;
	var string3 = document.getElementById("e-mail2");
	string3 = string3.value;
	var string4 = document.getElementById("tel");
	string4 = string4.value;
	var string5 = document.getElementById("txarea");
	string5 = string5.value;


	if(string != "" && string2 != "" && string3 != "" && string5 != "")
	{
		window.alert("Su mensaje se envió correctamente");
	}
	else
	{
		window.alert("Hay valores no válidos o vacíos en su solicitud y que son obligatorios");
	}

}