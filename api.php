<?php

$domain = 'http://localhost/youtube/';

if(isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER']===$domain){
	echo exec("youtube-dl -j {$_POST['videoUrl']}");
}