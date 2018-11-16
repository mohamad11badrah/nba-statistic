<?php
require_once 'classes/database/Database.php';
require_once 'classes/collection/Collection.php';

$db = new Database();
$conn =$db->getConnection();

/*$sqlTest = "SELECT * FROM player";
$result_sql = mysqli_query($a, $sqlTest);
while ($row = mysqli_fetch_array($result_sql, MYSQLI_ASSOC)) {
    $rows[] = $row;
    print_r($rows);
}
*/

   /* $xmlstring = 'https://www.fantasybasketballnerd.com/service/teams';
    $xml = simplexml_load_file($xmlstring);
    $json = json_encode($xml);
    $jsonArray = json_decode($json, true);
    //$theam = $jsonArray['Team'];
   //print_r($jsonArray);
/*foreach ($theam as $e) {
    if ($e['code'])
    var_dump ($e['code'].'<br>' .$e['name'].'<br>');
    $sql = "INSERT INTO team (code, name, conference, division) VALUES ('".$e['code']."', '".$e['name']."', '".$e['conference']."', '".$e['division']."')";

    $result_sql = mysqli_query($conn, $sql);
    if (!$result_sql) {
        print "Error: " . $result_sql . "<br>" . mysqli_error($conn);
    } else {
        print " erfölg";
    }

}
*/


//$collection = new Collection($db);
/*
$collection ->getdataXmlUndConvertJson('https://www.fantasybasketballnerd.com/service/teams');
$collection->setobjectJson('Team');
$collection->insertDataToDatabase('team', ['code'=>'code','name'=>'name','conference'=>'conference','division'=>'division']);


*/

$xmlstring = 'https://www.fantasybasketballnerd.com/service/players';
$xml = simplexml_load_file($xmlstring);
$json = json_encode($xml);
$jsonArray = json_decode($json, true);
//$playrs = $jsonArray['Player'];
//var_dump($playrs);

/*foreach ($playrs as $item) {
    //var_dump($e['playerId']);

   $sql = "INSERT INTO player (playerId, name, team, position, height, weight, dob, school)
VALUES 
('".$item['playerId']."', '".$item['name']."', '".$item['team']."', '".$item['position']."', '".$item['height']."', '".$item['weight']."', '".$item['dob']."', '".$item['school']."')";

    $result_sql = mysqli_query($conn, $sql);
    if (!$result_sql) {
        print "Error: " . $result_sql . "<br>" . mysqli_error($conn);
    } else {
        print " erfölg";
    }


}
*/


//$collection ->getdataXmlUndConvertJson('https://www.fantasybasketballnerd.com/service/schedule/');
//$collection->setobjectJson('Game');
//$array = array('gameId', 'week','gameDate','away', 'home');
//print $array;
//$collection->insertDataToDatabase('games',$array );




$xmlstring = 'https://www.fantasybasketballnerd.com/service/schedule/';
$xml = simplexml_load_file($xmlstring);
$json = json_encode($xml);
$jsonArray = json_decode($json, true);
$schedule = $jsonArray['Game'];

/*foreach ($schedule as $item) {
    //var_dump($item);
  $sql = "INSERT INTO games (gameId, week, gameDate, away, home)
VALUES
('".$item['gameId']."', '".$item['week']."', '".$item['gameDate']."', '".$item['away']."', '".$item['home']."')";

    $result_sql = mysqli_query($conn, $sql);
    if (!$result_sql) {
        print "Error: " . $result_sql . "<br>" . mysqli_error($conn);
    } else {
       // print " erfölg";
    }

}

*/


$xmlstring = 'https://www.fantasybasketballnerd.com/service/depth/';
$xml = simplexml_load_file($xmlstring);
$json = json_encode($xml);
$depthCharts = json_decode($json, true);
$depthObjectTeam = $depthCharts['Team'];

$arrayPosition = null;
$arrayPlayer = null ;

/*foreach($depthObjectTeam as $key){
    $arrayPosition[] = $key ['Position'];
}
foreach($arrayPosition as $item ){
    foreach ($item as $key => $value) {
        $arrayPlayer[] = $value ['Player'];
    }
}
foreach($arrayPlayer as $array ){
    foreach ($array as $item) {
        $sql = "INSERT INTO depthCharts (playerId,team, position, rank)
     VALUES
     ( '" . $item['playerId'] . "','" . $item['team'] . "', '" . $item['position'] . "', '" . $item['rank'] . "')";

        $result_sql = mysqli_query($conn, $sql);
        if (!$result_sql) {
            print "Error: " . $result_sql . "<br>" . mysqli_error($conn);
        } else {
            print " erfölg";
        }
    }
}



$xmlstring = 'https://www.fantasybasketballnerd.com/service/injuries/';
$xml = simplexml_load_file($xmlstring);
$json = json_encode($xml);
$report= json_decode($json, true);
$reportObjectPLayer = $report['Team'];
//var_dump($reportObjectPLayer);

$arrayPlayer = null ;

foreach($reportObjectPLayer as $key){
    $arrayPlayer[] = $key ['Player'];

}

foreach ($arrayPlayer as $items) {
    foreach ($items as $item) {

       // print_r($arrayPlayer);
        $sql = "INSERT INTO report (playerId, name, injury, notes, updated)
  VALUES
  ('" . $item['playerId'] . "', '" . $item['name'] . "', '" . $item['injury'] . "', '" . $item['notes'] . "', '" . $item['updated'] . "')";

        $result_sql = mysqli_query($conn, $sql);
        if (!$result_sql) {
            print "Error: " . $result_sql . "<br>" . mysqli_error($conn);
        } else {
             print " ok";
        }

    }
}


*/

?>