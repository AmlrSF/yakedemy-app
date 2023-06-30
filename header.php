<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yakademy | worksheets</title>
    <link rel="icon" type="image/x-icon" href="Big-favicon.png">

    <?php
    wp_head();
    ?>
</head>


<body>
    <header class="primary-header">
        <div class="container center ">
            <?php
            wp_nav_menu(array(
                'menu' => 'primary',
                'container' => false,
                'items_wrap' => '<ul role="list" id="navi" class="nav-links">%3$s</ul>'
            ));
            ?>

            <div class="logo">
                <a href="">
                    <?php
                    if (function_exists('the_custom_logo')) {
                        $custom_logo_id = get_theme_mod('custom_logo');
                        $logo = wp_get_attachment_image_src($custom_logo_id);
                    }
                    ?>
                    <img src="<?php echo $logo[0] ?>" alt="logo">
                </a>
            </div>

            </ul>
            <div class="nav-logo">
                <a href="index.html">
                    <img src="<?php echo $logo[0] ?>" alt="">
                </a>
            </div>
            <button id="nav-toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>