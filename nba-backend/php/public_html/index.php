<?php
require_once 'classes/database/Database.php';
require_once 'classes/collector/Collector.php';

$db = new Database();
$collector = new Collector($db);

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