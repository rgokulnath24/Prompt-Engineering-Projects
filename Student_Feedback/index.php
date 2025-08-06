<?php
include 'db.php';
$msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name     = trim($_POST['name']);
    $email    = trim($_POST['email']);
    $rating   = (int)$_POST['rating'];
    $comments = trim($_POST['comments']);

    // Server-side minimal safety check
    if (!empty($name) && !empty($email) && !empty($comments) && $rating >= 1 && $rating <= 5) {
        $stmt = $conn->prepare("INSERT INTO feedback (name, email, rating, comments) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssis", $name, $email, $rating, $comments);
        if ($stmt->execute()) {
            $msg = "<div class='alert alert-success'>Thank you for your feedback!</div>";
        } else {
            $msg = "<div class='alert alert-danger'>Name already exists or error occurred!</div>";
        }
    } else {
        $msg = "<div class='alert alert-danger'>Invalid input!</div>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Feedback Form</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <style>
    body {
      background: linear-gradient(to right, #f0fdf4, #ecfeff);
    }
    .container {
      max-width: 600px;
      margin-top: 50px;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="text-center mb-4">Submit Feedback</h2>
    <?= $msg ?>
    <form method="post" onsubmit="return validateForm()" id="feedbackForm">
      <div class="mb-3">
        <label>Name</label>
        <input type="text" name="name" id="name" class="form-control" maxlength="20" required>
        <div id="nameError" class="error"></div>
      </div>

      <div class="mb-3">
        <label>Email</label>
        <input type="email" name="email" class="form-control" maxlength="30" required>
      </div>

      <div class="mb-3">
        <label>Rating</label>
        <select name="rating" class="form-control" required>
          <option value="">Select Rating</option>
          <?php for ($i = 1; $i <= 5; $i++): ?>
            <option value="<?= $i ?>"><?= $i ?></option>
          <?php endfor; ?>
        </select>
      </div>

      <div class="mb-3">
        <label>Comments</label>
        <textarea name="comments" class="form-control" rows="3" required></textarea>
      </div>

      <button type="submit" class="btn btn-success w-100">Submit</button>
    </form>
  </div>

<script>
function validateForm() {
  const nameField = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const name = nameField.value.trim();

  if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)) {
    nameError.textContent = "Only letters and a single space between words are allowed.";
    return false;
  }

  if (name.length > 20) {
    nameError.textContent = "Name cannot exceed 20 characters.";
    return false;
  }

  nameError.textContent = "";

  return true;
}

// AJAX check for duplicate name
document.getElementById("name").addEventListener("blur", function () {
  const name = this.value.trim();
  const errorBox = document.getElementById("nameError");

  if (name === "") return;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "check_name.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (this.responseText === "exists") {
      errorBox.textContent = "Name already exists!";
    } else {
      errorBox.textContent = "";
    }
  };
  xhr.send("name=" + encodeURIComponent(name));
});
</script>
</body>
</html>
