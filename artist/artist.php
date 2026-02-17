<?php
session_start();

include("data.php");

if (isset($_POST["submit"])) {
    $newSub = htmlspecialchars($_POST['newSub']);
 
    if (empty("submit")) {

        echo "<Script> alert('Kindly input your Email') </script>";

        header("Location:../artist.php");
    } else {
        echo "<script> Please wait while we update your information </script>";
    }

    $query = "INSERT INTO newsubz VALUES ('','$newSub')";
    mysqli_query($con, $query);


    echo "<script> alert('You have subscribed successfully. Kindly check your email for updates')</script>";
	exit;
	
}


$image_url = '/Portfolio/img/newwwww.png'

?>


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<script src="https://kit.fontawesome.com/0f977cd8f2.js" crossorigin="anonymous"></script>
	<title>TAZII - The artist</title>
	<link rel="icon" type="image/x-icon" href="/Portfolio/img/RTB.png" sizes="200x200">
</head>

<body>
	<main>

		<nav class="navbar navbar-expand-lg navbar-dark bg-transparent ">
			<div class="container-fluid container">
				<a class="navbar-brand" href="index.php">TAZII</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<ul class="nav nav-underline">
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="#music">MUSIC</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#videos">VIDEOS</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#follow">FOLLOW+</a>
							</li>
							<!-- <li class="nav-item">
								<a class="nav-link disabled" aria-disabled="true">Disabled</a>
							</li> -->
						</ul>
					</div>
				</div> 
			</div>

		</nav>
		<section id="info">
			<div class="container">
				<div class="row cont1">
					<div class="col-md-6">
						<p class="infotxt">
							<strong>TAZII</strong> is a budding Trap artiste born and raised in Nigeria. He discovered his flare for rap while freestyling with the guys back in UNI.
							Now, he's developed his sound and came into the scene with his debut single "Bando Basic" which has received much critical acclaim.
							While Hip-Hop/Rap is his main MO, he has delved into different genres and successfully fused his "trap boy vibe" in the mix to deliver outstanding records.
							As he evolves, you get to see the diverse catalogue this talent has to offer.
						</p>

					</div>
					<div class="col-md-6">

						<img src="<?= $image_url ?>" style="width: 100%;" class="zili" alt="TAZII - The Artist">

					</div>
				</div>
			</div>
		</section>
<hr>
		<section id="music">
			<div class="container ">
				<h2 class="p-3">MUSIC</h2>
				<div class="row">
					<div class="col-md-4 g-3 music">
						<div class="card border-0 bg-transparent" style="width: 100%;">
							<img src="/Portfolio/img/WEIGH ART.jpg" class="card-img-top rounded" alt="Weigh art">
							<div class="card-body">
								<h5>WEIGH</h5>
								<a class="btn btn-outline-light" href="https://tr.ee/qaU4n-_RlX" role="button">GET IT HERE</a>
							</div>
						</div>

					</div>
					<div class="col-md-4 g-3 music">
						<div class="card border-0  bg-transparent" style="width: 100%;">
							<img src="/Portfolio/img/BANDO basic.jpg" class="card-img-top rounded" alt="Bando Basic art">
							<div class="card-body">
								<h5>Bando Basic</h5>
								<a class="btn btn-outline-light" href="https://tr.ee/Ylll9K7cvQ" role="button">GET IT HERE</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 g-3 music">
						<div class="card border-0 bg-transparent" style="width: 100%;">
							<img src="/Portfolio/img/S&S2.PNG" class="card-img-top rounded" alt="Shuga & Spyce art">
							<div class="card-body">
								<h5>Shuga & Spyce</h5>
								<a class="btn btn-outline-light" href="https://tr.ee/nk7dXoEPQ1" role="button">GET IT HERE</a>
							</div>
						</div>
					</div>
				</div>
		</section>
		<hr>

		<section id="videos">
			<div class="container"> 
				<h2 class="p-3">VIDEOS</h2>
				<div class="row justify-content-center">
					<div class="col-md-6 g-3">
						<iframe width="100%" height="280" src="https://www.youtube.com/embed/6hOtONc6jj8?si=7ecJh0wKPbyb-FIl" title="TAZII - WEIGH (One Mic Session)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<div class="col-md-6 g-3">
						<iframe width="100%" height="280" src="https://www.youtube.com/embed/HFvk29jVjNM?si=ApFpjnWH9eRj6oYq" title="TAZII - WEIGH (Visualizer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
					<div class="col-md-6 g-3">
						<iframe width="100%" height="280" src="https://www.youtube.com/embed/u0eqzsLEoqI?si=CcZ90aoT1vWpFUSh" title="TAZII - Just Another freestyle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>

				</div>
				<span>
					<a class="btn btn-outline-light mt-5" href="http://www.youtube.com/@Tazii2x" role="button">WATCH MORE VIDEOS</a>
				</span>

			</div>
		</section>

<hr>
		<section id="follow">
			<div class="container">
				<h2 class="p-3">FOLLOW & JOIN</h2>
				<h5>Follow TAZII on all Socials and Subcribe to get the latest News and Music Updates.</h5>
				<div class="row justify-content-center">
					<div class="col-md-6 my-4">
						<form method="post">
							<div class="input-group">
								<input type="email" name="newSub" class="form-control" placeholder="Enter Email" aria-label="Email" aria-describedby="button-addon2" required>
								<button class="btn btn-outline-light" type="submit" name="submit" value="submit" id="button-addon2">Subscribe</button>
							</div>
						</form>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-md-6 my-3">
						<a href="http://www.instagram.com/tazii2x" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-instagram fa-xl"></i></a>
						<a href="http://www.twitter.com/tazii2x" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-x-twitter fa-xl"></i></a>
						<a href="http://www.facebook.com/tazii2x" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-facebook-f fa-xl"></i></a>
						<a href="http://www.youtube.com/tazii2x" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-youtube fa-xl"></i></a>
						<a href="http://www.soundcloud.com/tazii2x" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-soundcloud fa-xl"></i></a>
						<a href="https://open.spotify.com/artist/1cSaLUKUxUfaJQwWbif9ga?si=fgkP5Ki2SHmBivYkTa5cUg" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-spotify fa-xl"></i>
						</a>
						<a href="https://music.apple.com/ng/artist/tazii/1671421733" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-apple fa-xl"></i></a>
					</div>
				</div>
			</div>

		</section>

	</main>
	<footer>
		<div class="footer">
			<div class="text-center">
				<p>Copyright © 2024 RTB Records. All Rights Reserved. </p>
			</div>
		</div>
	</footer>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>

