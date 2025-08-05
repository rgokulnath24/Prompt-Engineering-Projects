<?php
include 'includes/db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = (int)$_POST['id'];
    $conn->query("DELETE FROM tasks WHERE id = $id");
}
header("Location: index.php");
exit();
