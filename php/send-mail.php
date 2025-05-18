<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '/home/abhinav8/PHPMailer/src/Exception.php';
require '/home/abhinav8/PHPMailer/src/PHPMailer.php';
require '/home/abhinav8/PHPMailer/src/SMTP.php';
require '/home/abhinav8/config/config.php';

$mail = new PHPMailer(true);
$userReply = new PHPMailer(true);
$response = array();

try {

	//Server settings
	$mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host = 'mail.alenslim.co.in';                  //Set the SMTP server to send through
	$mail->SMTPAuth = true;                                   //Enable SMTP authentication
	$mail->Username = EMAIL_USERNAME;				//SMTP username
	$mail->Password = EMAIL_PASSWORD_HASHED;			//SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`




	//Parsing the Json Data. It is expecting data in json format. Sample Json 
	//{"name": "Sandeep", "email": "sandeep@gmail.com", "phone": "1111111111", "company": "Sample Company", "query": "Sample Query" }

	$jsonData = file_get_contents('php://input');
	// echo "Json from input: $json\n";

	$data = json_decode($jsonData, true);
	if ($data !== null) {
		// Accessing individual fields
		$full_name = $data['full_name'];
		$email = $data['email'];
		$phone = $data['phone'];
		$company_name = $data['company_name'];
		$message = $data['message'];

		// response['name'] = $data['name'];
		// response['email'] = $data['email'];
		// response['phone'] = $data['phone'];
		// response['company'] = $data['company'];
		// response['query'] = $data['query'];

		//Fetch the Referrer Site.
		$referrer = $_SERVER['HTTP_REFERER'];
		$DEFAULT_REFERRER = "default.saarbiotech.in";
		// response['referred'] = $referrer
		// echo "Referred: $referrer\n";

		if ($referrer !== null) {
			$parsedURL = parse_url($referrer)['host'];
			// echo "Parsed URL: $parsedURL\n";
			// response['Parsed_URL'] = $parsedURL

		} else {
			// echo "Referrer not found. Defualting it to: DEFAULT_REFERRER";
			$parsedURL = $DEFAULT_REFERRER;
		}



		//echo "Using Name:$name Email:$email Company:$company ContactNo:$contactNo Query:$query\n";
		//Recipients
		$mail->setFrom('sandeep138@alenslim.co.in', 'SAAR Biotech Admin');
		$mail->addAddress('sandeep@saarbiotech.com', 'Sandeep SAAR');
		$mail->addAddress('varunaggarwal@saarbiotech.com', 'Varun Aggarwal');
		$mail->addAddress('Quotation@saarbiotech.com', 'Quotations SAAR Biotech');
		$mail->addAddress('rishavj0212@gmail.com', 'Rishav Jindal');
		$mail->addAddress('web@alaina.co.in', 'Alaina Web');
		$mail->addBCC('sandeep138@alenslim.co.in');

		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = "$parsedURL | Enquiry | {$full_name}";
		$mail->Body = "HTML Enquiry from {$full_name}.<br> Email  {$email}.<br> Phone : {$phone}.<br>Company :{$company_name} <br> Message: {$message}";
		$mail->AltBody = "Plain Enquiry from {$full_name}.\n Email is {$email}.\n Phone is: {$phone}.\n Message: {$message}";

		$mail->send();
		// print("Message has been sent");
		$response['success'] = true;
		$response['message'] = 'Message has been sent';
		// echo 'Message has been sent';

	} else {
		$response['success'] = false;
		$response['message'] = "error decoding input fields";
	}
} catch (Exception $e) {
	// print("Exception occured");
	// echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	$response['success'] = false;
	$response['message'] = 'Message could not be sent. Mailer Error: ' . $userReply->ErrorInfo;
}

header('Content-Type: application/json');
echo json_encode($response);
?>