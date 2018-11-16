<?php

/**
 * Created by PhpStorm.
 * User: ashaddad
 * Date: 12.11.18
 * Time: 15:15
 */
class Collection
{

    private $_objectJson;
    private $_jsonArray;
    private $_connection;

    public function setobjectJson ($value) {
        $this->_objectJson = $value;
    }
    public function setJsonArray ($value) {
        $this->_jsonArray = $value;
    }

    public function getObjectJson() {
        return $this->_objectJson;

    }

    public function getJsonArray() {
        return $this->_objectJson;
    }


    function __construct($db)
        {
            return $this->_connection = $db->getConnection();
        }


    function getdataXmlUndConvertJson ($link) {
        $xml = simplexml_load_file($link);
        $json = json_encode($xml);
       $this->_jsonArray = json_decode($json, true);
    }

    function insertDataToDatabase ($tabelName, $insData)
    {
        $items = $this->_jsonArray[$this->_objectJson];
        //for ($i = 0; $i <= count($insData); $i++) {
            foreach ($items as $item) {
                //print_r($insData[$key]);
                foreach ($insData as $key => $value) {


                    $sql = "INSERT INTO games('".$key."') VALUES ('".$item[$value]."')";
                    $result_sql = mysqli_query($this->_connection, $sql);
                    if (!$result_sql) {
                        print "Error: " . $result_sql . "<br>" . mysqli_error($this->_connection);
                    }



                }
            }
    }

}


