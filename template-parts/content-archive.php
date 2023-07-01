<a href="<?php echo get_permalink(); ?>">
    <div class="card-items">
        <div class="img-holder">
            <img src="<?php echo the_post_thumbnail_url(); ?>" alt="featured image">
        </div>
        <div class="info">
            <p><?php echo relevanssi_the_title(); ?></p>
            <div class="hide">
                <p> <?php echo substr(get_the_content(), 0, 100); ?>
                </p>
                <span><?php echo get_the_category()[0]->name; ?></span>
            </div>
            <span>workshhets</span>
        </div>
    </div>
</a>             