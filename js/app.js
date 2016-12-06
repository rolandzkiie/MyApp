"use strict"

class App {
	constructor(){
		this.x = [
		{
			"img" : "images/pic01.jpg",
			"video" : "https://youtu.be/TNAsEIoxncg",
			"title": "The Avengers",
			"year": "2011",
			"details":"images/details01.jpg",
		},

		{
			"img" : "images/pic02.jpg",
			"video" : "https://youtu.be/n_IB00IQrDs",
			"title": "Conjuring 2",
			"year": "2012",

		},

		{
			"img" : "images/pic03.jpg",
			"video" : "https://youtu.be/xnpY2BRF1ug",
			"title": "The Ant Man",
			"year": "2013",

		},

		{
			"img" : "images/pic04.jpg",
			"video" : "https://youtu.be/QqxibDFWBqw",
			"title": "Silent Dead",
			"year": "2014",

		},

		{
			"img" : "images/pic05.jpg",
			"video" : "https://youtu.be/PzPWsCPdHns",
			"title": "Avatar",
			"year": "2015",

		},

		{
			"img" : "images/pic06.jpg",
			"video" : "https://youtu.be/yEF61JXHyv0",
			"title": "Twilight",
			"year": "2016",

		}

		];
	}

	render(html,component){
			component.innerHTML +=html;
		}

	reRender(html,component){
		component.innerHTML =html;
	}

}

class Component extends App {
	constructor(){

		super();
	}

	landingPage(){
		let html = `
		    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#landingpage">Marathon</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a class="page-scroll" href="#landingpage"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#watch">Watch Movie</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#services">Services</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Section -->
    <section id="landingpage" class="intro-section">
       <section id="banner" data-video="images/banner">
                    <div class="inner">
                        <header>
                            <h1>Movie Marathon Online</h1>
                            <p><strong>Hi, </strong> &nbspExplore and watch your favorite movie for free.</p>
                        </header>
                        <a href="#watch" class="more">Learn More</a>
                    </div>
                </section>
    </section>

    <!-- About Section -->
    <section id="watch" class="about-section">
         <div id="main">
					<div class="inner">
						<div class="thumbnails">

						`;

						for(let i=0;i<this.x.length;i++){
						html += `

							<div class="box">
								<a href="${this.x[i].video}" class="image fit"><img src="${this.x[i].img}" alt="" /></a>
								<div class="inner">
									<h3>${this.x[i].title}</h3>
									<p>${this.x[i].year}</p>
									<a href="${this.x[i].video}" class="button fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>
 						`;
						}

			 html += `
        				</div>
        			</div>
        	</div>
    </section>
    </div>
				<footer id="footer">
					<div class="inner">
						<h2>Movie Marathon Online</h2>
						<p>Description</p>

						<ul class="icons">
							<li><a href="https://twitter.com/Rolandzkiie" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="https://www.facebook.com/Rolandzkiie24/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="ins" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
						</ul>
						<p class="copyright">&copy; AMA Computer College Davao. Design by: <a href="https://facebook.com/rolandzkiie">Rolandz Gardose Buta Jr.</a></p>
					</div>
				</footer>

			  `;
		this.reRender(`${html}`,document.getElementById("app"));
	}

	page2(){
		let html = `

			<h1>Page Two</h1>
		`
		this.reRender(`${html}`, document.getElementById("page2"));
		$('#landingPage').hide();
	}




}

let component = new Component();
component.landingPage();