<?php
    function open_database()
    {
        // Connecting, selecting database
        $database = @mysql_connect ('localhost', 'luis', 'marquezCARPINTERO1996') or die ('I cannot connect to the database because: ' . mysql_error());
        if ($database === FALSE) die('I cannot connect to the database because: ' . mysql_error());

        mysql_select_db('luis_ies') or die('Could not select database');
        mysql_query('set names utf8');

        return($database);
    }

    function execute_query($query)
    {
        // Performing SQL query
        $result = mysql_query($query) or die('Query failed: ' . mysql_error());

        if ($result === TRUE) return(FALSE);

        // Saving the results
        for($i=0; ($line = mysql_fetch_row($result)); $i++) 
        {
            foreach ($line as $col_value) {
                $output[$i][] = $col_value;
            }
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
