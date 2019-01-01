<html>
<head>
<META HTTP-EQUIV=REFRESH CONTENT="0;URL=manage_user.php">
<title></title>
<style type="text/css">
body {
	color: #FFF;
}
</style>
</head>
<body>
<div align="center">
  <?php

include "sql_data4.php";  // File that contains the SQL connection information.
include "sql_comm_helper4.php";

function parseInfo($checkBox, $infoText)
{
	if ($checkBox == "on")
	{
		return $infoText;
	}
	else if ($infoText != NULL)
	{
		$ret = "Not confirmed: " . $infoText;
		return $ret;
	}
	else
	{
		return "N/A";
	}
}


	if (is_uploaded_file($_FILES['fileData']['tmp_name'])) {
		if (empty($_POST['descript']))
		{
			die ("A description is required, upload aborted, try again!");
		}
		else
		{
			$descr = $_POST['descript'];
		}
		$userName 		= $_POST['userName'];
		$userStreet 	= $_POST['userStreet'];
		$userCity 		= $_POST['userCity'];
		$userEmail 		= $_POST['userEmail'];
		$userCountry 	= $_POST['userCountry'];
		$userInfo1CB 	= $_POST['userInfo1isValid'];
		$userInfo2CB 	= $_POST['userInfo2isValid'];
		$userInfo3CB 	= $_POST['userInfo3isValid'];
		$userInfo1 		= $_POST['userInfo1'];
		$userInfo2 		= $_POST['userInfo2'];
		$userInfo3 		= $_POST['userInfo3'];

		$userInfo1 = parseInfo($userInfo1CB, $userInfo1);
		$userInfo2 = parseInfo($userInfo2CB, $userInfo2);
		$userInfo3 = parseInfo($userInfo3CB, $userInfo3);	
		$ipLog = "IP:" . $GLOBALS['REMOTE_ADDR'] . "<br>" . date("D M j G:i:s T Y");

		login_mysql();
		select_db(FALSE);

		$tmpFileName = $_FILES['fileData']['tmp_name'];
		$fileType = $_FILES['fileData']['type'];
		$fileSize = filesize($tmpFileName);
		

		$fileData =addslashes (file_get_contents($tmpFileName));
		$realFileName = $_FILES['fileData']['name'];
		
		$sql = "INSERT INTO login (fileName, fileType, fileSize, fileData, description";
		$sql .= ", userName, userStreetAddress, userCity, userEmail, userPhone, userCountry";
		$sql .= ", userInfo1, userInfo2, userInfo3, ipLog)";
		$sql .= " VALUES ('$realFileName','$fileType','$fileSize','$fileData','$descr'";
		$sql .= ",'$userName','$userStreet','$userCity','$userEmail','$userPhone','$userCountry'";
		$sql .= ",'$userInfo1','$userInfo2','$userInfo3','$ipLog')";
		mysql_query($sql) or die (mysql_error());			
		$fil_id = mysql_insert_id();
			
		echo "<h3>Sucessful !</h3><br>";
		logout_mysql();
	}
	else
	{
		echo ("A problem occured during the upload. Is the file to big ? <br>");
		
	}

?>
</div>
</body>
</html>
