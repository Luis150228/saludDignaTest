<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Allow: POST");

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    $contBody = file_get_contents('php://input');
    echo $contBody;
} else {
    http_response_code(205);
    header('Content-Type: application/json; charset=UTF-8');
}

?>