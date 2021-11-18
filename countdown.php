<?php

session_start();



$data = json_decode($_REQUEST["d"]);
$today =  $data->today;
$christmasDay = $data->christmas;
$today = new DateTime($today);
$christmasDay = new DateTime($christmasDay);
//Have we already passed this year's Christmas Day?

$diff = $today->diff($christmasDay);
echo $diff->format('%a : %H : %I : %S until Christmas');

//echo $data;
