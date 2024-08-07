<?php

include_once "request_methods.php";
class Router {
    public $routes = []; // stores routes

    public function addRoute(string $method, string $url, closure $target) {
        $this->routes[$method][$url] = $target;
    }

    public function matchRoute() {
        $method = $_SERVER['REQUEST_METHOD'];
        $url = explode('?', $_SERVER['REQUEST_URI']);
        if (isset($this->routes[$method])) {
            foreach ($this->routes[$method] as $routeUrl => $target) {
                // Simple string comparison to see if the route URL matches the requested URL
                if ($routeUrl === $url[0]) {
                    call_user_func($target);
                }
            }
        }
        send_response("Route not found!", 404);
    }
}