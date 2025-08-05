<?php include("add.php")?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <link rel="stylesheet" href="./css/style.css"/>
  <script src="./js/script.js"></script>
</head>
<body>

<div class="container">
  <div class="form-container">
    <h3 class="form-title">Contact Form</h3>
    <form method="POST" onsubmit="return validateForm()">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" name="name" id="name" maxlength="30" value="<?= htmlspecialchars($name) ?>" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" name="email" id="email" maxlength="40" value="<?= htmlspecialchars($email) ?>" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Phone</label>
        <input type="text" name="phone" id="phone" maxlength="10" value="<?= htmlspecialchars($phone) ?>" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Date of Birth</label>
        <input type="date" name="dob" id="dob" value="<?= htmlspecialchars($dob) ?>" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</div>

</body>
</html>
