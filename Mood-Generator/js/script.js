document.getElementById("moodForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const mood = document.getElementById("mood").value;
    if (!mood) return alert("Please select a mood");

    fetch("backend/process.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "mood=" + encodeURIComponent(mood)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerHTML = data;
    })
    .catch(err => {
        document.getElementById("result").innerHTML = "Something went wrong.";
    });
});
