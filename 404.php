<?php get_header(); ?>

<section class="home-page ">
    <div class="container ">
        <div class="even-columns">
            <div class="left-content">
                <h4>Error 404</h4>
                <h1>We could not find the page you were looking for </h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque adipisci? Soluta, nulla? Distinctio, qui reiciendis hic atque, deserunt animi fugiat quae beatae officiis consequatur facere vel fugit? Numquam, possimus.</p>
            </div>
            <div class="right-content">
                <img src="" alt="404 image">
            </div>
        </div>
    </div>
</section>
<section class="last-posts">
    <h4>Our Latest Worksheets</h4>
<div class="container-worksheets" style="padding-top: 0; padding-bottom: 1rem;">
        <div class="cards-container" style="padding-top: 0; padding-bottom: 1rem;">
            <?php
            //define the query arguments
            $args = array(
                'post_type' => 'post', //get only posts
                'posts_per_page' => 4, //get 10 posts per page
                'orderby' => 'date', //order by date
                'order' => 'DESC', //order from newest to oldest
            );

            //create a new WP_Query object with the arguments
            $query = new WP_Query($args);

            //check if the query has any posts
            if ($query->have_posts()) {

                //loop through the posts
                while ($query->have_posts()) {

                    //set up the post data
                    $query->the_post();

                    //use your template part to display the post
            ?>
                    <a href="<?php echo get_permalink(); ?>">
                        <div class="card-items">
                            <div class="img-holder">
                                <img src="<?php echo the_post_thumbnail_url(); ?>" alt="featured image">
                            </div>
                            <div class="info">
                                <p><?php echo get_the_title(); ?></p>
                                <div class="hide">
                                    <p> <?php echo substr(get_the_content(), 0, 100); ?>
                                    </p>
                                    <span><?php echo get_the_category()[0]->name; ?></span>
                                </div>
                                <span>workshhets</span>
                            </div>
                        </div>
                    </a>
            <?php

                }

                //reset the post data
                wp_reset_postdata();
            } else {

                //if no posts are found, display a message
                echo '<p>No posts found.</p>';
            }
            ?>


<?php get_footer(); ?>
</section>