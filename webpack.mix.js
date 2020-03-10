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
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            // Provide path to the file with resources
                            resources: './resources/sass/app.scss',
                        },
                    },
                ],
            },
        ],
    },
});
