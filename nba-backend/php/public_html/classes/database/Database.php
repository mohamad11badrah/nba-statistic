<?php

/**
 * Class Database
 * Attribute $connection as privet.
 * Methods:
 * __construct: make a connection with the database.
 * getConnection: return the database connection.
 */

class Database
{
    private $_connection;
    /**
    * Database constructor.
    * Pars the ini-File.
    * Open a connection with the database.
    */
    public function __construct()
    {
        $db = parse_ini_file('settings.ini');
        $connect = mysqli_connect($db['host'], $db['user'], $db['pass'], $db['name'], $db['port']);

        $this->_connection = $connect;
        if (!$this->_connection) {
            print "Es gibt keine Verbindung mit der Datenbank ";
        }else {
            print "PHP";
        }
    }
    /**
    * Return the database connection
    *
    * @return mysqli
    */
    public function getConnection()
    {
        return $this->_connection;
    }
}

