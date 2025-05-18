<!-- contact form -->
				<?php
if(isset($_REQUEST['action']) && $_REQUEST['action']=='contactUs')
{
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$headers .= "Cc: salim@cefpodoximeofloxacin.com \r\n";
	$headers .= "Cc: abhinav@dmpharma.org \r\n";
	$headers .= "From: ".$_REQUEST['email']."". "\r\n";
	$to='web@alaina.co.in';
	$subject='Saar Biotech Website Query Response ';
	$news_content = '';
	$news_content .= "Hello Sir, <br><br> I have following Query: <br><br>";
	$news_content .= 'Company Name: '.$_REQUEST['cname'].'<br>';
	$news_content .= 'Name: '.$_REQUEST['name'].'<br>';
	$news_content.='Phone Number: '.nl2br($_REQUEST['phnum']).'<br>';
	$news_content.='Query: '.nl2br($_REQUEST['query'])."<br><br>";
	$news_content .= "Thanks & Regards,<br>";
	$news_content .= ucwords(strtolower($_REQUEST['name']));
	
	mail($to,$subject,$news_content,$headers);
	
	echo "<script>document.location.href='contact-us.html?msg=1'</script>";
}
?>
