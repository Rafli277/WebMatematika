<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$uname = $_REQUEST['uname'];
        $psw = $_REQUEST['psw'];

	$conn = new mysqli('localhost', 'dbadmin', 'inidbadmin', 'web');
	$sql = "SELECT * FROM user WHERE username='$uname' AND password='$psw'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		header("location:kuis.html");
	} else {  header("location:login.html"); }
}
?>
