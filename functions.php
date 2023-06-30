<?php
    function wp_enqueue_styles()
    {
        wp_enqueue_style('main_css', get_template_directory_uri() . "/style.css", array(), "1.0", "all");
        wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&family=Cormorant:wght@400;500;600;700&family=Outfit:wght@400;500;700&family=Pacifico&family=Roboto+Condensed:ital,wght@0,300;0,400;1,300&display=swap', [], null);
        wp_enqueue_style('font-awsome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css', [], null);
    }

    add_action('wp_enqueue_scripts', 'wp_enqueue_styles');


    function wp_enqueue_js()
    {
        wp_enqueue_script('script_js', get_template_directory_uri() . "/assets/js/main.js", array(), '1.0', true);
        wp_enqueue_script('other_script_js', get_template_directory_uri() . "/assets/js/script.js", array(), '1.0', true);
    }
    add_action('wp_enqueue_scripts', 'wp_enqueue_js');

    function yk_menus()
    {
        $locations = array(
            'primary' => "nav-bar",
            'footer' => "quick_links"
        );
        register_nav_menus($locations);
    }

    add_action('init', 'yk_menus');

    function yk_theme_support()
    {
        // Adds dynamic title tag support
        add_theme_support('title-tag');
        add_theme_support('custom-logo');
        add_theme_support('post-thumbnails');
    }
    add_action('after_setup_theme', 'yk_theme_support');


    add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1);
    add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1);
    add_filter('page_item page-item', 'my_css_attributes_filter', 100, 1);
    function my_css_attributes_filter($var) {
      return is_array($var) ? array() : '';
    }
   
    add_filter( 'pre_get_posts', 'sf_search_filter' );
    function sf_search_filter( $query ) {
        if ( $query->is_search ) {
            $query->set( 'post_type', array('post', 'page') );
        }
        return $query;
    }
    add_filter( 'relevanssi_highlight_query', 'rlv_fix_highlight' );
function rlv_fix_highlight( $query ) {
    $query = str_replace( '""', '', $query );
    return $query;
}

   
    
?>
