<?php
include_once "router.php";
include_once "crm/crm_requests.php";

$router = new Router();
$routs = [
    ['GET', '/', 'index.html'],
    ['GET', '/university', 'university.html']
];

foreach($routs as $route){
    $router->addRoute($route[0], $route[1], function () use ($route) {
        $html= file_get_contents($route[2]);
        echo $html;
        exit;
    });
}

$router->addRoute('POST', '/contact', function () {
        $data = get_request_data();

        if (!isset($data['name']) || !isset($data['phone'])) {
            send_response("Missing required fields", 400);
        }

        $formatedData = [
            [
                "name" => $data["name"],
                "custom_fields_values" => [
                    [
                        "field_id" => 1535744,
                        "values" => [
                            [
                                "value" => $data["phone"]
                            ]
                        ]
                    ]
                ]
            ]
        ];
        
        $responseData = crm_post_request("/contacts", $formatedData);

        send_response($responseData, 200);
    });

$router->addRoute('GET', '/contact', function () {
        $query = explode('?', $_SERVER['REQUEST_URI'])[1];

        $responseData = crm_get_request("/contacts?$query");

        send_response($responseData, 200);
    });

$router->addRoute('POST', '/lead', function () {
         $data = get_request_data();

        if (!isset($data['name']) || !isset($data['pipeline_id'])) {
            send_response("Missing required fields", 400);
        }

        $formatedData = [[
            "name" => $data['name'],
            "pipeline_id" => $data['pipeline_id']
        ]];
        
        $responseData = crm_post_request("/leads", $formatedData);

        send_response($responseData, 200);
    });

$router->addRoute('POST', '/lead-contact-link', function () {
         $data = get_request_data();

        if (!isset($data['lead_id']) || !isset($data['contact_id'])) {
            send_response("Missing required fields", 400);
        }

        $formatedData = [[
            "to_entity_type" => "contacts",
            "to_entity_id" => $data['contact_id']
        ]];
        
        $responseData = crm_post_request("/leads/{$data['lead_id']}/link", $formatedData);

        send_response($responseData, 200);
    });

$router->addRoute('POST', '/lead/user-data', function () {
         $data = get_request_data();

        if (!isset($data['link']) || !isset($data['lead_id']) || !isset($data['name']) || !isset($data['phone'])) {
            send_response("Missing required fields", 400);
        }

        $text = "User data: 
        Link: {$data['link']}
        Name: {$data['name']}
        Phone: {$data['phone']}
        User agent: {$_SERVER['HTTP_USER_AGENT']}
        IP-address: {$_SERVER['REMOTE_ADDR']}
        Date: " . date("Y-m-d H:i:s") . "
        Referrer: {$_SERVER['HTTP_REFERER']}
        ";

        $formatedData = [[
            "entity_id" => $data['lead_id'],
            "note_type" => "common",
            "params" => [
                "text" => $text
            ]
        ]];
        
        $responseData = crm_post_request("/leads/notes", $formatedData);

        send_response($responseData, 200);
    });


$router->matchRoute();