
<div id="firejet-html-app">
    <p class="search-and-filter-po-search-and-filter-po">
        Search and Filter posts
    </p>
</div>

<?php echo do_shortcode('[searchandfilter fields="search,category,post_tag"]'); ?>

<div class="container-worksheets">
    <div class="cards-container">
        <?php
        if (have_posts()) {

            while (have_posts()) {
                the_post();
                get_template_part('template-parts/content', 'archive');
            }
        }
        ?>
    </div>
</div>
<?php
the_posts_pagination();
?>

<?php get_footer(); ?>