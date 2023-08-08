<?php

/**
 * Load generated scripts
 */
add_action( 'wp_enqueue_scripts', function () {

    wp_enqueue_script(
        'cv-enqueue-js',
        get_stylesheet_directory_uri() . '/assets/js/index.min.js',
        false,
        filemtime(get_stylesheet_directory() . '/assets/js/index.min.js'),
        true
    );

});
