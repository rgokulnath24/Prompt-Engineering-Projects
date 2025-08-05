function validateForm() {
  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!/^[A-Za-z ]{1,30}$/.test(name)) {
    Swal.fire("Invalid", "Name should only contain alphabets & spaces (max 30)", "error");
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 40) {
    Swal.fire("Invalid", "Please enter a valid email (max 40 chars)", "error");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    Swal.fire("Invalid", "Phone must be exactly 10 digits", "error");
    return false;
  }

  return true;
}