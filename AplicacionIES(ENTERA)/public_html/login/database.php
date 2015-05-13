<?php
    function open_database($db_name = 'luis_iessv', $db_host = 'localhost', $encoding=0)
    {
        // Connecting, selecting database
        $database = @mysql_connect ($db_host, 'root', '') or die ('I cannot connect to the database because: ' . mysql_error());
        if ($database === FALSE) die('I cannot connect to the database because: ' . mysql_error());

        mysql_select_db($db_name) or die('Could not select database');

        switch($encoding) {
            case 0: mysql_query('set names utf8'); break;
            case 1: mysql_query('set names latin1'); break;
        }

        return($database);
    }

    function execute_query($query)
    {
        // Performing SQL query
        $result = mysql_query($query) or die('Query failed: ' . mysql_error());

        if ($result === TRUE) return(FALSE);

        // Saving the results
        for($i=0; ($line = mysql_fetch_object($result)); $i++) 
        {
            $output[] = $line;
        }

        // Free resultset
        mysql_free_result($result);

        return(isset($output) ? $output : FALSE);
    }

    function close_database($database)
    {
        // Closing connection
        mysql_close($database);
    }
?>
