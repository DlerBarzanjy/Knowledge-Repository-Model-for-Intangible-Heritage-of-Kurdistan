<?php
session_start();
/*
    Script for uploading/downloading files to SQL database via web-browser.
    Copyright (C) 2008 Ulrik Hagstrom (ulrik@hagstroms.eu)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
include "sql_data.php";  // File that contains the SQL connection information.

if (isset($_GET['fid'])) {
	

	$dbh=@mysql_connect($host, $user, $password)
		or die(mysql_error());
	mysql_select_db($database) or die (mysql_error());
	$fid=$_GET['fid'];
	$result = mysql_query("SELECT fileData, fileType, fileName, fileSize FROM upload WHERE fid=$fid");
	$fileName = mysql_result($result, 0, "fileName");
	$fileData = mysql_result($result, 0, "fileData");
	$fileType = mysql_result($result, 0, "fileType");
	$fileSize = mysql_result($result, 0, "fileSize");
	header('Content-length:' . $fileSize);
	header('Content-type:' . $fileType);
	header('Content-Disposition: attachment; filename=' . $fileName); // Bugfix 081012: All downloaded files got the name download.php
	echo $fileData;
}
?>
