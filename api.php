<?php

$domain = 'http://18.179.174.37/youtube/';

if(isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER']===$domain){
	echo exec("youtube-dl -j {$_POST['videoUrl']}");
}