<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
        $email =  $_REQUEST['email'];
        $uname = $_REQUEST['uname'];
        $psw = $_REQUEST['psw'];

	$sql = "INSERT INTO user  VALUES (0,'$email','$uname','$psw')";
	$conn = mysqli_connect("localhost", "dbadmin", "inidbadmin", "web");
	try { mysqli_query($conn, $sql); header("location:index.html");  }
	catch (Exception $e) { print "Error!: " . $e->getMessage() . "<br/>";
	die();}
	mysqli_close($conn);
}
 
?>
