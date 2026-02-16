<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "folio_data";

//create connection to DB
$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (mysqli_connect_errno()) {
    echo "Failed to connect!";
    exit();

} else {
    // echo "Database Connected Successfully!!";
   //new path suggestested
}
