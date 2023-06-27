export default function Footer() {
	return (
		<footer className="pt-16 pb-12 bg-gray-900 md:pt-20">
			<div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
				<div className="flex justify-center text-gray-400">
					<div className="grid grid-cols-2 gap-8 mb-20 md:gap-28">
						<ul className="space-y-1.5">
							<li className="mb-4 font-semibold text-white uppercase">Support</li>
							<li>
								<a href="#contactus">Contact Us</a>
							</li>
							<li>
								<a href="mailto:thetutoriumtutoring@gmail.com">Email</a>
							</li>
						</ul>
						<ul className="space-y-1.5">
							<li className="mb-4 font-semibold text-white uppercase">Registration Links</li>
							<li>
								<a href="https://forms.gle/Uh4xBeaLJC3JQzkQ9">5th Grade</a>
							</li>
							<li>
								<a href="https://forms.gle/Uh4xBeaLJC3JQzkQ9">6th Grade</a>
							</li>
							<li>
								<a href="https://forms.gle/Uh4xBeaLJC3JQzkQ9">7th Grade</a>
							</li>
							<li>
								<a href="https://forms.gle/Uh4xBeaLJC3JQzkQ9">8th Grade</a>
							</li>
							<li>
								<a href="https://forms.gle/Uh4xBeaLJC3JQzkQ9">Programming in Python</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="-mt-8 text-center text-gray-300">&copy; The Tutorium 2023. All rights reserved.</p>
			</div>
		</footer>
	);
}
