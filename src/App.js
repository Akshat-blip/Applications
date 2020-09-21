import React from 'react';
import './App.css';

function App() {
	return (
		<div className='app'>
			<header>
				<div class='container'>
					<div class='branding'>
						<h1>
							<span class='highlight'>Acme</span> Web Design
						</h1>
					</div>
					<nav>
						<ul>
							<li class='current'>
								<a>Home</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>Services</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<section class='showcase'>
				<div class='container'>
					<h1>Affordable Professional Websites</h1>
					<p>
						Another area to consider is Venice and the Po Valley in Italy...
						What better way to explore Venice than by water! Cruising on a fully
						crewed, all inclusive hotel barge is a fantastic way to relax and
						experience the beauty and culture of the country.
					</p>
				</div>
			</section>

			<section class='newsletter'>
				<div class='container'>
					<h1>Subscribe To Our Newsletter</h1>
					<form>
						<input type='email' placeholder='Enter Email...' />
						<button type='submit' class='button_1'>
							Subscribe
						</button>
					</form>
				</div>
			</section>

			<section class='boxes'>
				<div class='container'>
					<div class='box'>
						<img src='https://www.floggingsails.com/images/logo_html.png' />
						<h3>HTML5 Markup</h3>
						<p>
							Another area to consider is Venice and the Po Valley in Italy...
						</p>
					</div>
					<div class='box'>
						<img src='https://www.floggingsails.com/images/logo_css.png' />
						<h3>CSS3 Styling</h3>
						<p>
							Another area to consider is Venice and the Po Valley in Italy...
						</p>
					</div>
					<div class='box'>
						<img src='https://www.floggingsails.com/images/logo_brush.png' />
						<h3>Graphic Design</h3>
						<p>
							Another area to consider is Venice and the Po Valley in Italy...
						</p>
					</div>
				</div>
			</section>

			<footer>
				<p>Acme Web Deisgn, Copyright © 2020</p>
			</footer>
		</div>
	);
}

export default App;
