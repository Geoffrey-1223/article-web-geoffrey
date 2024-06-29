import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import "../css/App.css";

function App() {
  return (
    <div>
      <Navbar />
      
		<section id="home" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>Explore a World of Articles</h2>
							<p>Read, Learn, Explore</p>
             				 <Link to="/articlePage">EXPLORE</Link>
						</div>
					</div>
				</div>
			</div>

		</section>
		

		
		<section id="aboutUs" className="about">
			<div className="section-heading text-center">
				<h2>about us</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
                Your premier destination for insightful, well-researched, and engaging articles on technology, health, lifestyle, etc. Whether you're looking for the latest trends, in-depth analyses, or practical advice, we've got you covered.
								</h3>
								<p>
                Our mission is to provide our readers with high-quality content that not only informs but also inspires and entertains. We believe that knowledge is power, and our goal is to empower our readers by delivering reliable, comprehensive, and thought-provoking articles on a wide range of topics. We strive to be your go-to source for information that matters, helping you stay informed and make better decisions in your daily life.
								</p>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src="assets/images/about/readingsmile.jpg" alt="profile_image" />

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>

		
		<section id="feature" className="profiles">
			<div className="profiles-details">
				<div className="section-heading text-center">
					<h2>4 Core Features</h2>
				</div>
				<div className="container">
					<div className="profiles-content">
						<div className="row">
							<div className="col-sm-6">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="#"><i className="flaticon-themeforest"></i></Link>
										<div className="profile-icon-name">Latest Article</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="#"><i className="flaticon-themeforest"></i></Link>
											<div className="profile-icon-name">Article are get from the latest in the world</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="left-single-profile">
									<div className="profile-txt">
										<Link to="#"><i className="flaticon-dribbble"></i></Link>
										<div className="profile-icon-name">Dynamic search</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="#"><i className="flaticon-dribbble"></i></Link>
											<div className="profile-icon-name">Search by the key word of article</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="profile-border"></div>
						<div className="row">
              
							<div className="col-sm-6">
								<div className="single-profile">
									<div className="profile-txt">
										<Link to="#"><i className="flaticon-behance-logo"></i></Link>
										<div className="profile-icon-name">Filter</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="#"><i className="flaticon-behance-logo"></i></Link>
											<div className="profile-icon-name">Able to filter in different criteria (source, publish date, and keyword)</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-6">
								<div className="left-single-profile">
									<div className="profile-txt">
										<Link to="#"><i className="flaticon-flickr-website-logo-silhouette"></i></Link>
										<div className="profile-icon-name">Direct Link</div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<Link to="#"><i className="flaticon-flickr-website-logo-silhouette"></i></Link>
											<div className="profile-icon-name">Every article include with a source link to direct to the article source</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		

		
		<section id="interestTopic" className="portfolio">
			<div className="portfolio-details">
				<div className="section-heading text-center">
					<h2>Interest Topic</h2>
				</div>
				<div className="container">
					<div className="portfolio-content">
						<div className="isotope">
							<div className="row">

								<div className="col-sm-4">
									<div className="item">
										<img src="assets/images/about/healtharticles.jpg" alt="portfolio"/>
										<div className="isotope-overlay">
											<Link to="#">
                      Health Articles
											</Link>
										</div>
									</div>
									<div className="item">
										<img src="assets/images/about/relationshiparticle.jpg" alt="portfolio"/>
										<div className="isotope-overlay">
											<Link to="#">
                      Relationship Articles
											</Link>
										</div>
									</div>
								</div>

                <div className="col-sm-4">
									<div className="item">
										<img src="assets/images/about/businessArticles.jpg" alt="portfolio"/>
										<div className="isotope-overlay">
											<Link to="#">
                      Business Articles
											</Link>
										</div>
									</div>
									<div className="item">
                    <img src="assets/images/about/careerArticles.jpg" alt="Career-related articles" />
                    <div className="isotope-overlay">
                      <Link to="#">
                        Career Articles
                      </Link>
                    </div>
                  </div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src="assets/images/about/travelArticles.jpg" alt="portfolio"/>
										<div className="isotope-overlay">
											<Link to="#">
                      Travel Articles
											</Link>
										</div>
									</div>
									<div className="item">
										<img src="assets/images/about/technologyArticle.jpg" alt="portfolio"/>
										<div className="isotope-overlay">
											<Link to="#">
                      Technology Articles
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		

		
		<section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>"Knowledge is power, but sharing knowledge is the key to unlocking endless possibilities."</h2>
			</div>
		</section>

		
    </div> 
  );
}

export default App;

