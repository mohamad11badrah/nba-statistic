<?php
require_once 'classes/database/Database.php';
require_once 'classes/collector/Collector.php';

//make object from the database.
//make object from the collector.
$db = new Database();
$collector = new Collector($db);
/**
 * Set link the xmldata (teams, players, schedule, depth, or injuries).
 * Get the data und convert to json.
 * convert the data to array in php.
 * Set select an object from the array.
 * Insert the data to the database.
*/
$collector->setlink('https://www.fantasybasketballnerd.com/service/teams');
$jsonTeam = $collector->getdataXmlUndConvertJson();
$collector->setArrayJson($jsonTeam);
$collector->setobjectJson('Team');
$collector->insertDataToDatabase('team');

$collector->setlink('https://www.fantasybasketballnerd.com/service/players');
$jsonPlayer = $collector->getdataXmlUndConvertJson();
$collector->setArrayJson($jsonPlayer);
$collector->setobjectJson('Player');
$collector->insertDataToDatabase('player');

$collector->setlink('https://www.fantasybasketballnerd.com/service/schedule/');
$jsonGames = $collector->getdataXmlUndConvertJson();
$collector->setArrayJson($jsonGames);
$collector->setobjectJson('Game');
$collector->insertDataToDatabase('games');

$collector->setlink('https://www.fantasybasketballnerd.com/service/depth/');
$depthObject = $collector->getdataXmlUndConvertJson();
$collector->setArrayJson($depthObject);
$collector->setobjectJson('Team');
$collector->insertDataToDatabase('depthCharts');

$collector->setlink('https://www.fantasybasketballnerd.com/service/injuries/');
$report = $collector->getdataXmlUndConvertJson();
$collector->setArrayJson($report);
$collector->setobjectJson('Team');
$collector->insertDataToDatabase('report');

?>