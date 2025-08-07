<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['mood'])) {
    $mood = trim($_POST['mood']);
    $stmt = $conn->prepare("SELECT message FROM quotes WHERE mood = ? ORDER BY RAND() LIMIT 1");
    $stmt->bind_param("s", $mood);
    $stmt->execute();
    $stmt->bind_result($message);
    if ($stmt->fetch()) {
        echo htmlspecialchars($message);
    } else {
        echo "No quote found for this mood.";
    }
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
