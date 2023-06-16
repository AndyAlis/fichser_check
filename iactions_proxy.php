<?php

	$url = "https://cp.i-actions.ru/utils/promo_check.php";
	// $FKEY = './key.txt';
	
	$query = [];
	parse_str($_SERVER["QUERY_STRING"], $query);

	//добавляем POST переменные
	foreach ($_POST as $key => $value)
		$query[$key] = $value;

	$query['ip'] = $_SERVER["REMOTE_ADDR"];
	$query['key'] = '1e1d69141e0ce5c84f9d0539ec55f8c1';

	$answer = '';
    if ( ($answer = @file_get_contents($url . "?" . http_build_query($query))) !== FALSE)
	{
		echo $answer;
	}
	else
	{
		echo '{}';
	}
	
