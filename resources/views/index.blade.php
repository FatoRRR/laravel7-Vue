<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>{{ config('app.name') }}</title>
    </head>
    <body>
        <app id="app"></app>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
