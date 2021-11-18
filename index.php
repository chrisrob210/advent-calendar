<!doctype html>
<html lang="en">

<head>
    <title>Advent</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.0.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/c29b084956.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/main.css">
    <script src="js/date.js"></script>
    <script defer src="js/modals.js"></script>
    <!-- <script defer src="js/musicplayer.js"></script> -->
</head>

<body class="advent-page-bg">
    <?php include "snow.php"; ?>
    <!-- Navbar -->
    <?php include "header.php"; ?>
    <?php include "modal.php"; ?>
    <main class="container">
        <?php include "calendar.php" ?>
    </main>
    <!-- Footer -->
    <?php include "footer.php"; ?>
</body>

</html>