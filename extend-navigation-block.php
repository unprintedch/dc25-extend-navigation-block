<?php
/**
 * Plugin Name: Extend Navigation Block
 * Description: Extends the core navigation block with additional features
 * Version: 1.0.0
 * Author: David Corradini
 * Author URI: https://unprinted.ch
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: extend-navigation-block
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function extend_navigation_block_init() {
    register_block_type( __DIR__ . '/build/extend-navigation-block' );
    
    // Register styles for front-end
    wp_register_style(
        'extend-navigation-block-style',
        plugins_url( 'build/extend-navigation-block/style-index.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/extend-navigation-block/style-index.css' )
    );
    
    // Register and enqueue frontend script
    wp_register_script(
        'extend-navigation-block-frontend',
        plugins_url( 'build/extend-navigation-block/view.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/extend-navigation-block/view.js' ),
        true
    );
    
    // Enqueue the style and script
    wp_enqueue_style( 'extend-navigation-block-style' );
    wp_enqueue_script( 'extend-navigation-block-frontend' );
}
add_action( 'init', 'extend_navigation_block_init' );

// Add filter for dynamic block rendering
function extend_navigation_block_render( $block_content, $block ) {
    if ( $block['blockName'] === 'core/navigation' && 
         isset( $block['attrs']['accordionActive'] ) && 
         $block['attrs']['accordionActive'] ) {
            
        $processor = new WP_HTML_Tag_Processor( $block_content );
        if ( $processor->next_tag( 'nav' ) ) {
            $processor->add_class( 'accordion-enabled' );
        }
        
        return $processor->get_updated_html();
    }
    return $block_content;
}
add_filter( 'render_block', 'extend_navigation_block_render', 10, 2 ); 

