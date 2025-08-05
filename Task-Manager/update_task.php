<?php
include 'includes/db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = (int)$_POST['id'];
    $is_completed = (int)$_POST['is_completed'];
    $conn->query("UPDATE tasks SET is_completed = $is_completed WHERE id = $id");
}
header("Location: index.php");
exit();
