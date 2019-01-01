<html>
<head>
<META HTTP-EQUIV=REFRESH CONTENT="0;URL=blog_user.php">
<title>Blog</title>
<style type="text/css">
body {
	color: #FFF;
}
</style>
</head>
<body>
<div align="center">
  <?php

include "sql_data1.php";  // File that contains the SQL connection information.
include "sql_comm_helper1.php";

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


	
		if (empty($_POST['descript']))
		{
			die ("A comment is required, failure, try again!");
		}
		else
		{
			$descr = $_POST['descript'];
		}
		

		login_mysql();
		select_db(FALSE);

		$tmpFileName = $_FILES['fileData']['tmp_name'];
		$fileType = $_FILES['fileData']['type'];
		$fileSize = filesize($tmpFileName);
		

		$fileData =addslashes (file_get_contents($tmpFileName));
		$realFileName = $_FILES['fileData']['name'];
		
		$sql = "INSERT INTO blog (description)";
		
		$sql .= " VALUES ('$descr')";
		
		mysql_query($sql) or die (mysql_error());			
		$fil_id = mysql_insert_id();
			
		echo "<h3>Blog Posted Sucessfully !</h3><br>";
		logout_mysql();
	

	
	

?>
</div>
</body>
</html>
