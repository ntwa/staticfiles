// JavaScript Document
function setHyperLinks(command)
{
//winWidth=document.all?document.body.clientWidth:window.innerWidth; 
//winHeight=document.all?document.body.clientHeight:window.innerHeight; 




var winWidth=window.screen.availWidth;
var winHeight=window.screen.availHeight;

//alert(winHeight);
//var result = $("#main_interface_wrapper").height();


//var winWidth=window.screen.width;
//var winHeight=window.screen.height;
//var img = document.getElementById('interface'); 
//or however you get a handle to the IMG
//var width = img.clientWidth;
//var height = img.clientHeight;
//alert(""+getDocHeight())
//alert("Height="+height+"and Width="+width)

var mystr="http://localhost/cgi-bin/load_main_interface.py?randomnumber="+Math.random()+"&screen_height="+winHeight+"&screen_width="+winWidth
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
 
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	  
	   document.getElementById("interface_wrapper").innerHTML=xmlhttp.responseText;
		
      
    }
  }
//xmlhttp.open("GET","http://ictd4.cs.uct.ac.za/cgi-bin/load_main_interface.py?randomnumber="+Math.random()+"&screen_height="+winHeight+"&screen_width="+winWidth+"&command="+command,true);
xmlhttp.open("GET","http://localhost/cgi-bin/load_main_interface.py?randomnumber="+Math.random()+"&screen_height="+winHeight+"&screen_width="+winWidth+"&command="+command,true);
xmlhttp.send();

}
