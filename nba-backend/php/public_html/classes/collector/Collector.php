<?php

/**
 * Created by PhpStorm.
 * User: ashaddad
 * Date: 12.11.18
 * Time: 15:15
 */
class Collector
{   private $_link;
    private $_arrayJson;
    private $_objectJson;
    private $_connection;

    function __construct($db)
    {
        return $this->_connection = $db->getConnection();
    }

    public function setlink ($value) {
        $this->_link = $value;
    }
    public function setArrayJson ($value) {
        $this->_arrayJson = $value;
    }

    public function setobjectJson ($value) {
        $this->_objectJson = $value;
    }

    public function getLink() {
        return $this->_link;
    }

    public function getObjectJson() {
        return $this->_objectJson;

    }

    public function getArrayJson () {
       return $this->_arrayJson;
    }

    function getdataXmlUndConvertJson () {
        $xml = simplexml_load_file($this->getLink());
        $json = json_encode($xml);
       return json_decode($json, true);
    }

    function getSelectDataFromDatabase ($tabelName) {
        $rows = null;
        $result_sql = null;
        if ($tabelName == 'team') {
            $sqlTeam = "SELECT * FROM `team`";
            $result_sql = mysqli_query($this->_connection, $sqlTeam );
        } elseif ($tabelName == 'player') {
            $sqlPlayer = "SELECT * FROM `player`";
            $result_sql = mysqli_query($this->_connection, $sqlPlayer);
        } elseif ($tabelName == 'games') {
            $sql_games = "SELECT * FROM `games`";
            $result_sql = mysqli_query($this->_connection, $sql_games);
        }elseif ($tabelName == 'report'){
            $sql_report = "SELECT * FROM `report`";
            $result_sql = mysqli_query($this->_connection, $sql_report);
        } elseif($tabelName == 'depthCharts') {
            $sql_report = "SELECT * FROM `depthCharts`";
            $result_sql = mysqli_query($this->_connection, $sql_report);
        }
        if (!$result_sql) {
            print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
        } else {
            while ($row = mysqli_fetch_array($result_sql, MYSQLI_ASSOC)) {
                $rows[] = $row;
            }
            return $rows;
        }
    }

    function insertDataToDatabase ($tabelName)
    {
        $items = $this->getArrayJson()[$this->getObjectJson()];

        switch ($tabelName) {
            case 'team':
                if (empty($this->getSelectDataFromDatabase('team'))) {
                    foreach ($items as $item) {
                        $sql = "INSERT INTO team (code, name, conference, division)
                    VALUES 
                    (
                      '" . $item['code'] . "', 
                      '" . $item['name'] . "', 
                      '" . $item['conference'] . "', 
                      '" . $item['division'] . "')";
                        $result_sql = mysqli_query($this->_connection, $sql);
                        if (!$result_sql) {
                             //print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
                        }
                    }
                }
                break;
            case 'player':
                if (empty($this->getSelectDataFromDatabase('player'))) {
                    foreach ($items as $item) {
                        $sql = "INSERT INTO player (playerId, name, team, position, height, weight, dob, school)
                    VALUES 
                    (
                      '" . $item['playerId'] . "', 
                      '" . $item['name'] . "', 
                      '" . $item['team'] . "', 
                      '" . $item['position'] . "', 
                      '" . $item['height'] . "', 
                      '" . $item['weight'] . "', 
                      '" . $item['dob'] . "', 
                      '" . $item['school'] . "')";
                        $result_sql = mysqli_query($this->_connection, $sql);
                        if (!$result_sql) {
                             //print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
                        }
                    }
                }
                break;
            case 'games':
                if (empty($this->getSelectDataFromDatabase('games'))) {
                    foreach ($items as $item) {
                        $sql = "INSERT INTO games (gameId, week, gameDate, away, home)
                    VALUES
                    (
                      '" . $item['gameId'] . "', 
                      '" . $item['week'] . "', 
                      '" . $item['gameDate'] . "', 
                      '" . $item['away'] . "', 
                      '" . $item['home'] . "')";
                        $result_sql = mysqli_query($this->_connection, $sql);
                        if (!$result_sql) {
                           // print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
                        }
                    }
                }
                break;
            case 'depthCharts':
                if (empty($this->getSelectDataFromDatabase('depthCharts'))) {
                    $arrayPosition = null;
                    $arrayPlayer = null;
                    foreach ($items as $key) {
                        $arrayPosition[] = $key ['Position'];
                    }
                    foreach ($arrayPosition as $item) {
                        foreach ($item as $key => $value) {
                            $arrayPlayer[] = $value ['Player'];
                        }
                    }
                    foreach ($arrayPlayer as $array) {
                        foreach ($array as $item) {
                            $sql = "INSERT INTO depthCharts (playerId,team, position, rank)
                        VALUES
                        (
                          '" . $item['playerId'] . "', 
                          '" . $item['team'] . "', 
                          '" . $item['position'] . "', 
                          '" . $item['rank'] . "')";
                            $result_sql = mysqli_query($this->_connection, $sql);
                            if (!$result_sql) {
                               // print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
                            }
                        }
                    }
                }
                break;
            case 'report':
                if (empty($this->getSelectDataFromDatabase('report'))) {
                    $arrayPlayer = null;
                    foreach ($items as $key) {
                        $arrayPlayer[] = $key ['Player'];
                    }
                    foreach ($arrayPlayer as $array) {
                        foreach ($array as $item) {
                            $sql = "INSERT INTO report (playerId, name, injury, notes, updated)
                        VALUES
                        (
                          '" . $item['playerId'] . "', 
                          '" . $item['name'] . "', 
                          '" . $item['injury'] . "', 
                          '" . $item['notes'] . "', 
                          '" . $item['updated'] . "')";
                            $result_sql = mysqli_query($this->_connection, $sql);
                            if (!$result_sql) {
                               // print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
                            }
                        }
                    }
                }
        }

    }
}



