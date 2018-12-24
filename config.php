<?php

$conn = mysql_connect("localhost","root","")
or die("Could not connect to the server.");

mysql_select_db("ich",$conn)
or die("Could not select the database.");

?>