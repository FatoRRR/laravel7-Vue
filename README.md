# laravel7-Vue

Requirements:
- PHP 7.3
  - Package Manager (COMPOSER)
- Node 11.15.0
  - Package Manager (NPM / YARN)
- MySQL
- Redis
- Nginx
- echo-server

Steps:
- Download Project
- Duplicate .env.example => .env
  - Adjust your .env config for mysql database connection
    - DB_DATABASE
    - DB_USERNAME
    - DB_PASSWORD
- Adjust your laravel-echo-server.json
  - authHost
- Configure Nginx vhost to your project OR simple use "Valet"
- Run Commands in your CLI:
  - Yarn OR npm install
  - composer install
  - php artisan key:generate
  - php artisan jwt:secret
  - php artisan migrate:fresh --seed
  - yarn hot
  - laravel-echo-server start
- Open in Browser
