<?php
$conn = new mysqli("localhost", "root", "", "auth_system");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo "Login successful! Welcome, " . $row['name'];
    } else {
        echo "Incorrect password!";
    }
} else {
    echo "User not found!";
}
$conn->close();
?>
