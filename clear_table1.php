
<HTML> 
<HEAD>
<META HTTP-EQUIV=REFRESH CONTENT="0;URL=gallery_user.php">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
body {
	background-image: url(../../final26/Web/images/_gen_img2_1020.jpg);
}
body {
	color: #FFF;
}
</style>
</HEAD>
<div align="center"></div>

</HTML>
<?php


/*
*	Before this script is executed make sure that you have the proper settings in 
*	sql_data.php.
*/

	include "sql_comm_helper1.php";	
	
	if ($_POST['delete_this'])
	{
		login_mysql();
		select_db(true);
		clear_blog_table();
		echo ("If no errors reported above the uploaded files are deleted!");
	}
	else if ($_POST['delete_checkboxes_button'])
	{
		login_mysql();
		select_db(true);	
		// Delete entry.
		if ($_POST['fid_delete'])
		{		
			foreach ($_POST['fid_delete'] as $cb)
			{
				echo "Deleting entry $cb<br>";
				delete_fid_from_blog_table($cb);
			}
		}
		// Delete file only.
		if ($_POST['fid_delete_upload_only'])
		{		
			foreach ($_POST['fid_delete_upload_only'] as $cb)
			{
				echo "Deleting file $cb<br>";
				delete_fid_file_only_from_blog_table($cb);
			}
		}
	}	
	else
	{
		echo ("ERROR! This file will only be executed if called from admin.php!");
	}
?>