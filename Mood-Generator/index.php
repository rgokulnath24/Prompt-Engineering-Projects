<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Mood Generator</title>
    <link rel="stylesheet" href="css/style.css"/>
    <!-- <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon"/> -->
</head>
<body>
    <div class="container">
        <h1>How are you feeling today?</h1>
        <form id="moodForm">
            <select id="mood" name="mood" required>
                <option value="">Select Mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="motivated">Motivated</option>
                <option value="angry">Angry</option>
            </select>
            <button type="submit">Get Inspiration</button>
        </form>
        <div id="result"></div>
    </div>
    <script src="js/script.js"></script>
</body>
</html>
