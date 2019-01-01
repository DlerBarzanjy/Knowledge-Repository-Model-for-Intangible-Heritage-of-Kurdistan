<style type="text/css">
body {
	background-image: url(../../final26/Web/images/_gen_img2_1020.jpg);
}
</style>
<?php

	include "sql_data4.php";  // Contains SQL connection settings.	
	
	// Function that logs into the sql server
	function login_mysql()
	{
		global $host;
		global $user;
		global $password;
		global $connection;
		$connection = mysql_connect($host, $user, $password) or die("Could not connect to database");
	}
	
	// Function logs out from the sql server.
	function logout_mysql()
	{
		global $connection;		
		mysql_close($connection);
	}

	// Hook up to the proper database.
	function select_db($first_time)
	{
		global $database;
		$db = mysql_select_db($database);
		if ($db == null && $first_time == true)
		{
			echo ("creating database...$database.");
			mysql_query("CREATE DATABASE $database");
			select_db(false);
		}
	}
	
	// This function creates the table used by the "upload" script.
	

	// This function removed the table "login".
	function drop_login_table()
	{
		$query = "DROP TABLE login";
		mysql_query($query) or die (mysql_error());	
	}
	
	
	// This function removed the table "login".
	function clear_login_table()
	{
		$query = "DELETE FROM login";
		mysql_query($query) or die (mysql_error());	
	}
	
	//
	function delete_id_from_login_table($id)
	{
		$query = "DELETE FROM login WHERE id=$id";
		mysql_query($query) or die (mysql_error());	
	}
	
	//
	function delete_id_file_only_from_login_table($id)
	{
		$query = "UPDATE login SET fileData=NULL WHERE id=$id";
		mysql_query($query) or die (mysql_error());	
		$query = "UPDATE login SET fileSize=0 WHERE id=$id";
		mysql_query($query) or die (mysql_error());	
	}	
	
?>
