<style type="text/css">
body {
	background-image: url(../../final26/Web/images/_gen_img3_80.jpg);
}
</style>
<?php

	include "sql_data3.php";  // Contains SQL connection settings.	
	
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
	
	// This function creates the table used by the "blog" script.
	
	// This function removed the table "blog".
	function drop_blog_table()
	{
		$query = "DROP TABLE blog";
		mysql_query($query) or die (mysql_error());	
	}
	
	
	// This function removed the table "blog".
	function clear_blog_table()
	{
		$query = "DELETE FROM blog";
		mysql_query($query) or die (mysql_error());	
	}
	
	//
	function delete_fid_from_blog_table($fid)
	{
		$query = "DELETE FROM blog WHERE fid=$fid";
		mysql_query($query) or die (mysql_error());	
	}
	
	//
	function delete_fid_file_only_from_blog_table($fid)
	{
		$query = "UPDATE blog SET fileData=NULL WHERE fid=$fid";
		mysql_query($query) or die (mysql_error());	
		$query = "UPDATE blog SET fileSize=0 WHERE fid=$fid";
		mysql_query($query) or die (mysql_error());	
	}	
	
?>
