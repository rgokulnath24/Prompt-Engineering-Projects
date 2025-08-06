<?php
include 'db.php';

if (isset($_POST['name'])) {
    $name = trim($_POST['name']);
    $stmt = $conn->prepare("SELECT COUNT(*) FROM feedback WHERE name = ?");
    $stmt->bind_param("s", $name);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    echo ($count > 0) ? "exists" : "ok";
}
?>
