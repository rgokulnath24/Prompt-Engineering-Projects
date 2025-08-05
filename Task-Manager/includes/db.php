<?php
$host = "localhost";
$user = "root";
$pass = "pass@123";
$dbname = "task_manager";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
