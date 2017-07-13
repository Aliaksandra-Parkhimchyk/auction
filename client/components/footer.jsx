import React from 'react';
import { Link } from 'react-router';

export default props => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<nav className="footer_nav">
							<ul className="footer-nav">
								<li>
									<Link
										className="nav-item"
										to="/"
										activeClassName={
											window.location.pathname === '/' ? 'active' : ''
										}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										className="nav-item"
										to="/about"
										activeClassName={
											window.location.pathname === '/about' ? 'active' : ''
										}
									>
										About
									</Link>
								</li>
								<li>
									<Link
										className="nav-item"
										to="/delivery"
										activeClassName={
											window.location.pathname === '/delivery' ? 'active' : ''
										}
									>
										Delivery
									</Link>
								</li>
								<li>
									<Link
										className="nav-item"
										to="/contact-us"
										activeClassName={
											window.location.pathname === '/contact-us' ? 'active' : ''
										}
									>
										Contact Us
									</Link>
								</li>
								{props.currentUser
									? <li>
											<Link
												className="nav-item"
												to="/orders"
												activeClassName={
													window.location.pathname === '/orders' ? 'active' : ''
												}
											>
												Orders
											</Link>
										</li>
									: null}
								{!props.currentUser
									? <li>
											<Link
												className="nav-item"
												to="login"
												activeClassName={
													window.location.pathname === '/login' ? 'active' : ''
												}
											>
												Login
											</Link>
										</li>
									: null}
								{props.currentUser
									? <li>
											<Link
												className="nav-item"
												to="/"
												onClick={props.handleLogout}
											>
												Logout ({props.currentUser})
											</Link>
										</li>
									: null}
							</ul>
						</nav>
						<small className="copyright">
							<span>Designed by: </span>
							<a href="#" className="design">
								www.alltemplateneeds.com
								/{' '}
							</a>Images from:{' '}
							<a href="#" className="images">
								www.wallpaperswide.com /{' '}
							</a>Copyright(c) website
							name.
						</small>
					</div>
					<div className="col-md-2 col-md-offset-2">
						<figure className="footer_icons">
							<a href="https://www.facebook.com/">
								<div className="circle">
									<i className="icon-facebook" />
								</div>
							</a>
							<a href="https://twitter.com/?lang=ru">
								<div className="circle">
									<i className="icon-twitter" />
								</div>
							</a>
							<a href="https://www.linkedin.com/nhome/">
								<div className="circle">
									<i className="icon-linkedin" />
								</div>
							</a>
						</figure>
					</div>
				</div>
			</div>
		</footer>
	);
};
