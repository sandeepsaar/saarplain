
function contact()
{
        var x = document.htmlform.phnum.value;
       
        if (x==null || x=="")
 	 {
 		 alert("Contact No cannot be Empty");
 		 return false;
 	 }       

       	 if(isNaN(x)|| x.indexOf(" ")!=-1)
	{
              			alert("Enter Numeric Value");
			return false;
              
	}
	
	if (x.length < 10)
			{
                			alert("Enter Valid Number"); 
				return false;
          			 }
					 
					 

var email = document.htmlform.email;
if (email.value == "")
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (email.value.indexOf("@", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (email.value.indexOf(".", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
}