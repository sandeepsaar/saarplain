 <?php
error_reporting (E_ALL ^ E_NOTICE);

include('classes/function.php');

if(isset($_POST['search'])){
include('classes/products.php');
// get the q parameter from URL
$q=$_POST['searchtxt'];
$hint = array();

// lookup all hints from array if $q is different from "" 
		if ($q !== "")
		{
					 $q=strtolower($q);
					
					 
					if(in_array($q, $products))
					{
						//echo "yes";
						$pos=array_search($q, $products);
						
						$hint=getData($q,$pos);
					}
					else
					{
							$len=strlen($q);
							$i=0;
							
							//$productList=explode("|", $arr);
						//	print_r($productList);
							//die;
							foreach($products as $name)
							{
								if(strpos($name,$q)!==false)
								{
									$pos=$i;
									$hint=getData($q,$pos);
								}
									$i++;
								
							}
							if($pos=="" || $pos==0)
							{
								$hint=getArr($q,$pos);			
							}						
						
					} 
		}	
	 
}
$hint=array_unique($hint);
?>
<!DOCTYPE HTML>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Saar Biotech- Third party Medicine Contract Manufacturing</title>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<META NAME="Description" CONTENT="Saar Biotech Deals in Liquids, Suspensions, Dry syrups, sprays, Nasal sprays, Ointments, Tablets,creams, skin ceams, antibiotic, Anticold, Analgesic & Anti-inflammatory, Antacid, Dry Syrups, Tonic, Drops, Cough, Shampoo, Lotions, Roll On, Capsules, Sachets in very attractive packings for Amber Bottle PACKING, measuring Cap, Blister Packing, Metallic Cartons. Saar Biotech is GMP Certified company 
involved in making DCGI approved new Drugs from Past four years">
<META name="keywords" content="Contract manufacturing, export, exports, exporter, exporters,DM,Saar, biotech, Pharma, Excise freee Zone ,DCGI approved drugs, Saar Biotech, 
Pharmaceutical Manufacturing,  companies in India,  PHARMACEUTICAL, Manufacturers ,Baddi Himachal,Third party medicine manufacturers ,
Bulk medicine manufacturers in Chandigarh,  Top Pharmaceutical companies in Chandigarh,  DCGI Approved Molecules, pharmaceutical companies in India, 
pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india,pharma exporters, medicines ">
<!-- Style -->


<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="font/stylesheet.css" rel="stylesheet" type="text/css">
<link href="css/bromoPanel.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="images/favicon.ico?cb=1" />
<link rel="stylesheet" media="all" href="css/stylesheet.css" />

<!-- Javascript -->
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
<script type="text/javascript" src="js/jquery.cycle.all.min.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/jquery.tipsy.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/animatedcollapse.js"></script>
<script type="text/javascript" src="js/input.js"></script>
<script type="text/javascript" src="js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript" src="js/nivoslider.js"></script>
<script type="text/javascript" src="js/slide.js"></script>
<script type="text/javascript" src="js/slides.min.jquery.js"></script>
<script type="text/javascript" src="js/jquery.jtweetsanywhere-1.3.1.min.js"></script>
<script type="text/javascript" src="js/jquery.preloader.js"></script>
<script type="text/javascript" src="js/jquery.eislideshow.js"></script>
<script type="text/javascript" src="js/swfobject.js"></script>
<script type="text/javascript" src="js/jquery.ui.totop.js"></script>
<script type="text/javascript" src="js/styleswitch.js"></script>
<script type="text/javascript" src="js/cookies.js"></script>
<script type="text/javascript" src="js/cssLoader.js"></script>
<script src="js/contact.js" type="text/javascript" charset="utf-8"></script>

<script type="text/javascript" src="js/cookies.js"></script>
<script type="text/javascript" src="js/cssLoader.js"></script>
<script language=JavaScript>
<!--

//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="Sorry,Data is Copyright!";

///////////////////////////////////
function clickIE4(){
if (event.button==2){
alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")

// --> 
</script>
<script>
	$(document).ready(function() {
	$("#header").load("header.html");
	$("#footer").load("footer.html");
});
</script>
<style>
.CSSTableGenerator {
	margin:0px;padding:0px;
	width:100%;
	box-shadow: 10px 10px 5px #888888;
	border:1px solid #00bfbf;
	
	-moz-border-radius-bottomleft:14px;
	-webkit-border-bottom-left-radius:14px;
	border-bottom-left-radius:14px;
	
	-moz-border-radius-bottomright:14px;
	-webkit-border-bottom-right-radius:14px;
	border-bottom-right-radius:14px;
	
	-moz-border-radius-topright:14px;
	-webkit-border-top-right-radius:14px;
	border-top-right-radius:14px;
	
	-moz-border-radius-topleft:14px;
	-webkit-border-top-left-radius:14px;
	border-top-left-radius:14px;
}.CSSTableGenerator table{
    border-collapse: collapse;
        border-spacing: 0;
	width:100%;
	height:100%;
	margin:0px;padding:0px;
}.CSSTableGenerator tr:last-child td:last-child {
	-moz-border-radius-bottomright:14px;
	-webkit-border-bottom-right-radius:14px;
	border-bottom-right-radius:14px;
}
.CSSTableGenerator table tr:first-child td:first-child {
	-moz-border-radius-topleft:14px;
	-webkit-border-top-left-radius:14px;
	border-top-left-radius:14px;
}
.CSSTableGenerator table tr:first-child td:last-child {
	-moz-border-radius-topright:14px;
	-webkit-border-top-right-radius:14px;
	border-top-right-radius:14px;
}.CSSTableGenerator tr:last-child td:first-child{
	-moz-border-radius-bottomleft:14px;
	-webkit-border-bottom-left-radius:14px;
	border-bottom-left-radius:14px;
}.CSSTableGenerator tr:hover td{
	
}
.CSSTableGenerator tr:nth-child(odd){ background-color:#e5e5e5; }
.CSSTableGenerator tr:nth-child(even)    { background-color:#ffd4aa; }.CSSTableGenerator td{
	vertical-align:middle;
	
	
	border:1px solid #00bfbf;
	border-width:0px 1px 1px 0px;
	text-align:left;
	padding:7px;
	font-size:10px;
	font-family:Arial;
	font-weight:normal;
	color:#000000;
}.CSSTableGenerator tr:last-child td{
	border-width:0px 1px 0px 0px;
}.CSSTableGenerator tr td:last-child{
	border-width:0px 0px 1px 0px;
}.CSSTableGenerator tr:last-child td:last-child{
	border-width:0px 0px 0px 0px;
}
.CSSTableGenerator tr:first-child td{
		background:-o-linear-gradient(bottom, #00bfbf 5%, #00bfbf 100%);	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #00bfbf), color-stop(1, #00bfbf) );
	background:-moz-linear-gradient( center top, #00bfbf 5%, #00bfbf 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00bfbf", endColorstr="#00bfbf");	background: -o-linear-gradient(top,#00bfbf,00bfbf);

	background-color:#00bfbf;
	border:0px solid #00bfbf;
	text-align:center;
	border-width:0px 0px 1px 1px;
	font-size:14px;
	font-family:Arial;
	font-weight:bold;
	color:#000000;
}
.CSSTableGenerator tr:first-child:hover td{
	background:-o-linear-gradient(bottom, #00bfbf 5%, #00bfbf 100%);	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #00bfbf), color-stop(1, #00bfbf) );
	background:-moz-linear-gradient( center top, #00bfbf 5%, #00bfbf 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00bfbf", endColorstr="#00bfbf");	background: -o-linear-gradient(top,#00bfbf,00bfbf);

	background-color:#00bfbf;
}
.CSSTableGenerator tr:first-child td:first-child{
	border-width:0px 0px 1px 0px;
}
.CSSTableGenerator tr:first-child td:last-child{
	border-width:0px 0px 1px 1px;
}
</style>
</head>
<body onload="form1.searchtxt.focus()">
<div class="wrap">
	<div id="header">
       
        
    </div><!-- end header section -->
       <div id="search-wrap">                        
                <!-- start call information -->
                <div class="cat">
                    <h3>Search Result </h3>                       
                </div><!-- end call information -->
            </div>
    <div class="clear"></div>
    <div id="main">
        <div class="main-wrap">
        <!-- start slider -->

  <table width="100%" border="0" cellspacing="0" cellpadding="0"  >
    <tr>
      <td width="40%" align="right">&nbsp;</td>
      <td width="12%"><label></label></td>
      <td width="44%"><label>
	 

      </label></td>
      <td width="4%">&nbsp;</td>
    </tr>
   
        </table>
            </form>
      </td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td colspan="3"><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td width="20%">&nbsp;</td>
          <td width="2%">&nbsp;</td>
          <td width="62%"><form id="form2" name="form2" method="post" action="">
            <table width="100%" border="1" cellspacing="0" cellpadding="0" class="CSSTableGenerator">
              <tr >
                <td>Sr. No.</td>
                <td>Product</td>
                <td>Details</td>
              </tr>
              <?php 
			//echo "Array's Value:--";
		//	print_r($hint);
//echo			$hint[0];
//		echo $hint;
			//die;
			$sr=1;
			
			if(count($hint)>0){
				
					for($i=0;$i<count($hint);$i++)
					{
						if($hint[$i]==''){
						//nothing;
						}
						else
						{
						?>
						  <tr>
							<td><?php echo $sr; ?></td>
							<td><?php echo $hint[$i]; ?></td>
							<td><a href="datasearch.php?search=<?php echo $hint[$i]; ?>"> Read More </a></td>
						  </tr>
						  <?php
						  $sr++;
						}
					}
			}
			else
			{
			?>
			<tr><td>&nbsp;</td><td colspan="2" style="color:#ff0000;font-weight:bold;">Search not found: <?php echo $q; ?></td></tr>
			<?php
			}
			?>
            </table>
                    </form>
          </td>
          <td width="1%">&nbsp;</td>
          <td width="15%">&nbsp;</td>
        </tr>

      </table></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </table>
</div>
	</div><!-- end testimonial -->
    
   <!-- start footer -->
    <div id="footer" class="boxed">
    	   
       
        
    </div><!-- end footer -->
    

</body>

</html>
</body>
</html>
