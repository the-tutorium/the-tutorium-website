export default function Team() {
	return (
		<section id="team" className="py-20 bg-gradient-to-t from-[#524790] to-[#8c79ed]">
			<div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
				<div className="space-y-16 md:space-y-24">
					<div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
						<div className="max-w-4xl space-y-5 md:text-center xl:mx-auto">
							<div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
								Meet the Team
							</div>
							<h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">Founders</h1>
							{/* <p className="text-xl text-gray-200 md:text-2xl"></p> */}
						</div>
					</div>
					<div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
						<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
							<img
								src="member_images/arjun.jpg"
								alt="Arjun Sahlot"
								className="object-cover border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-80 w-80 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
							/>
							<h3 className="text-xl font-semibold text-white">Arjun Sahlot</h3>
							<p className="text-gray-200">
								Hey! I'm Arjun, a senior at Evergreen Valley High School. I love working on math problems and
								computer science projects. I am an AIME Qualifer and have also earned the USACO Silver rank.
								Throughout high school, I have tutored a total of 6 courses. I also enjoy watching the NBA
								and following the Golden State Warriors. In my free time I enjoy playing soccer with my
								friends.
							</p>
						</div>
						<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
							<img
								src="member_images/archit.webp"
								alt="Archit Raul"
								className="object-cover border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-80 w-80 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
							/>
							<h3 className="text-xl font-semibold text-white">Archit Raul</h3>
							<p className="text-gray-200">
								Hello, my name is Archit and this coming year I will be a senior at Irvine High School. I am
								an officer in Student Forums and also a lead in Robotics. Throughout my teen years, I have
								taken part in multiple math competitions and have successfully completed Calculus AB. I love
								spending my free time playing basketball and hanging out with friends.
							</p>
						</div>
						<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
							<img
								src="member_images/ommu.webp"
								alt="Omkar Patel"
								className="object-cover border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-80 w-80 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
							/>
							<h3 className="text-xl font-semibold text-white">Omkar Patel</h3>
							<p className="text-gray-200">
								Hey, my name is Omkar Patel and I am an incoming Junior at Lynbrook High School. Some of my
								passions are coding, playing music, and taekwondo. I'll be teaching 6th grade math and
								Programming in python this summer. I have been tutoring for about 2 years now and I'm looking
								forward to seeing you soon!
								<br />
								<br />
							</p>
						</div>
						<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
							<img
								src="member_images/granth.webp"
								alt="Granth Patel"
								className="object-cover border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-80 w-80 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
							/>
							<h3 className="text-xl font-semibold text-white">Granth Patel</h3>
							<p className="text-gray-200">Dude I’m just worried about the professor</p>
						</div>
						<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
							<img
								src="member_images/aryaman.webp"
								alt="Aryaman Gupta"
								className="object-cover border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-80 w-80 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
							/>
							<h3 className="text-xl font-semibold text-white">Aryaman Gupta</h3>
							<p className="text-gray-200">Hello</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
