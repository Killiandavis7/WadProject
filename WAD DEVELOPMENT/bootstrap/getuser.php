<!DOCTYPE html>
<html>
<head>

</head>
<body>

<?php

//Connect to the database
    $host = "127.0.0.1";
    $user = "x14402132@student.ncirl.ie";                     //Your Cloud 9 username
    $pass = "";                                 //Remember, there is NO password by default!
    $db = "my_db";                          //Your database name you want to connect to
    $port = 3306;                               //The port #. It is always 3306

  

$q = intval($_GET['q']);

 $con = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
 

mysqli_select_db($con,"my_db");
$sql="SELECT * FROM user WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Day</th>
<th>Date</th>
<th>Descrip</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['day'] . "</td>";
    echo "<td>" . $row['date'] . "</td>";
    echo "<td>" . $row['descrip'] . "</td>";

    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>