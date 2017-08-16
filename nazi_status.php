<?php
	$nazi_request = $_GET['site_name'];
	$min_length = 5;
	$nazi_status;
	if (strlen($nazi_request) >= $min_length){
		$nazi_request = htmlspecialchars($nazi_request);
		$nazi_request = mysql_real_escape_string($nazi_request);
		$is_nazi = mysql_query("SELECT * FROM nazis WHERE (`text` = '%".$site_name."%'))");
		$might_nazi = mysql_query("SELECT * FROM might_nazi WHERE (`text` = '%".$site_name."%'))");
		$support_nazi = mysql_query("SELECT * FROM advertisers WHERE (`text` = '%".$site_name."%'))");
		elseif (mysql_num_rows($is_nazi) > 0){
			$nazi_status = 'nazi';
		}
		elseif (mysql_num_rows($might_nazi) > 0){
			$nazi_status = 'poss';
		}
		elseif (mysql_num_rows($support_nazi) > 0){
			$nazi_status = 'supp';
		}
		else{
			$nazi_status = 'none';
		}
		// return status of nazi
		echo $nazi_status;
	}
	else{
		echo 'Minimum required length of site address not met.';
	}
?>