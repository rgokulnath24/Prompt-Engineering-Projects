<?php include 'includes/db.php'; ?>
<?php include 'includes/header.php'; ?>

<form action="add_task.php" method="POST" class="mb-4">
  <div class="input-group">
    <input type="text" name="title" class="form-control" maxlength="100" placeholder="New Task" required>
    <button type="submit" class="btn btn-primary">Add Task</button>
  </div>
</form>

<?php
$result = $conn->query("SELECT * FROM tasks ORDER BY created_at DESC");
?>

<ul class="list-group">
<?php while ($row = $result->fetch_assoc()) : ?>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <form action="update_task.php" method="POST" style="display:inline;">
        <input type="hidden" name="id" value="<?= $row['id']; ?>">
        <input type="hidden" name="is_completed" value="<?= $row['is_completed'] ? 0 : 1; ?>">
        <button type="submit" class="btn btn-sm <?= $row['is_completed'] ? 'btn-success' : 'btn-outline-success'; ?>">
          <?= $row['is_completed'] ? '✔' : '○'; ?>
        </button>
      </form>
     <span class="task-title <?= $row['is_completed'] ? 'text-decoration-line-through' : ''; ?>">
        <?= htmlspecialchars($row['title']); ?>
      </span>
    </div>
    <form action="delete_task.php" method="POST" 
    onsubmit="return confirm('Are you sure you want to delete this task?');" 
      style="display:inline;" style="margin:0;">
      <input type="hidden" name="id" value="<?= $row['id']; ?>">
      <button type="submit" class="btn btn-danger btn-sm">🗑</button>
    </form>
  </li>
<?php endwhile; ?>
</ul>

<?php include 'includes/footer.php'; ?>
