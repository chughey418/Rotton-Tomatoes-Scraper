<?php
if($_POST['genre'])
    chdir('./challenge5/');
    shell_exec('scrapy crawl cs -a genre="'.$_POST['genre'].'"');
?>