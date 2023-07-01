<?php get_header();?>


<div id="firejet-html-app">
    <p class="search-and-filter-po-search-and-filter-po">
        Search and Filter posts
    </p>
</div>



<?php
$order = isset($_GET['ordre']) ? $_GET['ordre'] : 'ASC';
// echo $ordre;
echo do_shortcode('[searchandfilter fields="search,category,post_tag" orderby="date" order="' . $order . '"]');
?>

<select name="ordre" id="select">
    <option value="ASC" <?php if($order === 'ASC') echo 'selected'; ?>>ASC news</option>
    <option value="DESC" <?php if($order === 'DESC') echo 'selected'; ?>>DESC news</option>
</select>


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