<?php
$host = 'localhost';
$user = 'root';
$pass = 'pass@123';
$db = 'mood_generator';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
