<?php get_header(); ?>


<section class="last-section">
    <div class="container-content" style="height: fit-content ;margin-top:60px; padding-block: 3rem;">
        <h4><?php echo get_the_category()[0]->name; ?></h4>
        <h1><?php echo get_the_title(); ?></h1>
        <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
        <?php while (have_posts()) : the_post(); ?>
            <?php the_content(); ?>
        <?php endwhile; ?>
        <?php
        // Check if the post has a file block with a PDF file
        if (has_block('core/file', $post) && strpos(get_the_content(), '.pdf')) {
            // There is a file block with a PDF file, get the URL of the file block
            $blocks = parse_blocks(get_the_content());
            foreach ($blocks as $block) {
                if ($block['blockName'] == 'core/file' && strpos($block['innerHTML'], '.pdf')) {
                    // Found the file block with a PDF file, extract the URL from the innerHTML
                    preg_match('/href="([^"]+)"/', $block['innerHTML'], $matches);
                    $file_url = $matches[1];
                    break;
                }
            }
            // Show the download button with the URL of the file block
            echo '<button type="button"> <a class="btn" href="' . $file_url . '">Download PDF file</a> </button>';
        } else {
            // There is no file block with a PDF file, show an alert message
            echo '<button class="btn" type="button" onclick="alert(\'Sorry, there is no PDF file in this post.\')">Download PDF file</button>';
        }
        ?>
        <button type="button"> <a class='btn1' href="<?php echo get_permalink(); ?>"> ← Go back </a></button>

    </div>
</section>

<?php get_footer(); ?>