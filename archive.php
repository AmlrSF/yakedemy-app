<?php get_header(); ?>

<div class="container-worksheets">
    <div class="cards-container">
        <?php
            if (have_posts()){

                while(have_posts()){
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