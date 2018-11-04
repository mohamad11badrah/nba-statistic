<h4>Attempting MySQL connection from php...</h4>
<?php
$host = 'DB';
$user = 'admin';
$pass = '123';
$database_name= 'npa';
$port = '3306';
$conn = mysqli_connect($host, $user, $pass, $database_name, $port );

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected to MySQL successfully!";
$sqlTest = "SELECT * FROM user";
$result_sql = mysqli_query($conn, $sqlTest);
while ($row = mysqli_fetch_array($result_sql, MYSQLI_ASSOC)) {
    $rows[] = $row;
    print_r($rows);

}

?>