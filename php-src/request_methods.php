<?php
// Utility Methods
// I usually keep this in a separate file for reuse across APIs
//
/**
 * Get the API method
 * @return string The API method
 */
function get_method () {
	return $_SERVER['REQUEST_METHOD'];
}

/**
 * Get data object from API data
 * @return array The data object
 */
function get_request_data () {
	return array_merge(empty($_POST) ? array() : $_POST, (array) json_decode(file_get_contents('php://input'), true), $_GET);
}

/**
 * Check if request is not Ajax
 * @return boolean If true, is not Ajax
 */
function is_not_ajax () {
	return empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest';
}

/**
 * Send an API response
 * @param  *       $response The API response
 * @param  integer $code     The response code
 * @param  boolean $encode   If true, encode response
 */
function send_response ($response, $code = 200) {
	http_response_code($code);
	die(json_encode($response));
}
