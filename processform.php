<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROCESS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
        theme: {
            extend: {
            colors: {
                clifford: '#da373d',
            }
            }
        }
        }
    </script>
    <style>
        body {
            font-family: 'Kanit', sans-serif;
        }
    </style>
</head>
<body>
   <div class="container mx-auto">
    <div class="text-center mt-5">
    <?php
        if(isset($_POST['signup'])) {
            if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['repassword']) && isset($_POST['phone']) 
            && isset($_POST['day']) && isset($_POST['month']) && isset($_POST['year'])) {
                if ($_POST['password'] === $_POST['repassword']) {
                    if (filter_var($_POST['username'], FILTER_VALIDATE_EMAIL)) {
                        if(is_numeric($_POST['phone']) && strlen($_POST['phone']) === 9) {
        ?>
                                <h4 class="text-green-500 text-[20px] font-bold">Sign-UP SUCCESS</h4>
                                <hr />
                                <h4>Username (Email): <?php echo $_POST['username']; ?></h4>
                                <!-- <h4>Password: <?php// echo $_POST['password']; ?></h4> -->
                                <h4>Phone: +66<?php echo $_POST['phone']; ?></h4>
                                <h4>Birthday: <?php echo $_POST['day']; ?> / <?php echo $_POST['month']; ?> / <?php echo $_POST['year']; ?></h4>
        <?php
                        }else{
                            echo '<h4>เบอร์ไม่ถูกต้อง</h4>';
                        }
                    }else{
                        echo '<h4>อีเมล์ไม่ถูกต้อง</h4>';
                    }
                }else{
                    echo '<h4>รหัสผ่านไม่ตรงกัน</h4>';
                }
            }else{
                echo '<h4>ข้อมูลไม่ถูกต้อง</h4>';
            }
        }elseif(isset($_POST['signin'])) {
            if(isset($_POST['username']) && isset($_POST['password'])) {
                if($_POST['username'] === 'admin@gmail.com' && $_POST['password'] === '1234') {
        ?>
                    <div>
                        <h4 class="text-green-500 text-[20px] font-bold">Sign-IN SUCCESS</h4>
                        <hr />
                        <h4>Username (Email): <?php echo $_POST['username']; ?></h4>
                        <!-- <h4>Password: <?php //echo $_POST['password']; ?></h4> -->
                    </div>
        <?php
                }else{
                echo '<h4>ข้อมูลไม่ถูกต้อง</h4>';
                }
            }else{
                echo '<h4>ข้อมูลไม่ถูกต้อง</h4>';
            }
        }else{
            echo '<h4>ไม่สามารถดำเนินการได้</h4>';
        }
        ?>

        
        </div>
        <div class="text-center mt-3">
        <a href="./index.html" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">BACK</a>

        </div>
   </div>
</body>
</html>
