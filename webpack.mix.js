const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    resolve: {
        alias: {
            'PAGE': path.resolve(__dirname, 'resources/js/components/pages'),
            'ATOM': path.resolve(__dirname, 'resources/js/components/atoms'),
            'MOLECULE': path.resolve(__dirname, 'resources/js/components/molecules'),
            'ORGANISM': path.resolve(__dirname, 'resources/js/components/organisms'),
            'TEMPLATE': path.resolve(__dirname, 'resources/js/components/templates'),
        }
    },
});
