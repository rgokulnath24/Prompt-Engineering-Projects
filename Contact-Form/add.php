<?php
include 'database.php';

$name = $email = $phone = $dob = "";
$msg = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name  = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $dob   = $_POST["dob"];

    $errors = [];

    if (!preg_match("/^[A-Za-z ]{1,30}$/", $name)) $errors[] = "Invalid name";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 40) $errors[] = "Invalid email";
    if (!preg_match("/^[0-9]{10}$/", $phone)) $errors[] = "Invalid phone";
    if (!DateTime::createFromFormat('Y-m-d', $dob)) $errors[] = "Invalid date of birth";

    if (empty($errors)) {
        $stmt = $conn->prepare("SELECT id FROM contacts WHERE name = ?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows == 0) {
            $insert = $conn->prepare("INSERT INTO contacts (name, email, phone, dob) VALUES (?, ?, ?, ?)");
            $insert->bind_param("ssss", $name, $email, $phone, $dob);
            $insert->execute();
            echo "<script>
                window.onload = function() {
                    Swal.fire('Success', 'Contact saved!', 'success').then(() => { window.location = 'index.php'; });
                };
            </script>";
            $name = $email = $phone = $dob = ""; // clear fields on success
        } else {
            echo "<script>
                window.onload = function() {
                    Swal.fire('Duplicate', 'Name already exists!', 'warning');
                };
            </script>";
        }
    } else {
        echo "<script>
            window.onload = function() {
                Swal.fire('Error', 'Please check your inputs!', 'error');
            };
        </script>";
    }
}
?>