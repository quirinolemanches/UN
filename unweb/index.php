<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <?php include 'head.php'; ?>
    <link rel="stylesheet" href="css/nivo-slider.css">
    <script>
        $(window).on('load', function()){
            $('#slider').nivoslider();
        }
    </script>

    <title>Unidad Liceana</title>
</head>
<body>
    <?php
        include 'top.php';
    ?>

    <div id="slider" class="slideShow">
        <ul class="slider">
            <li>
                <img src="img/1.png" alt="">
            </li>
            <li>
                <img src="img/2.png" alt="">
            </li>
            <li>
                <img src="img/3.png" alt="">
            </li>
        </ul>
        <ol class="paginacion">

        </ol> 
        <div class="izquierda">
        <i class="material-icons">navigate_before</i>
        </div>
        <div class="derecha">
        <i class="material-icons">navigate_next</i>
        </div>
    </div>
        <div class="seccion">
         <h1>Noticias</h1> <hr>
        </div>

    <?php
        include 'foot.php';
    ?>
</body>
</html>