import Typing from './Typing';

export default function Landing() {
  return (
    <section>
      <div className="max-w-5xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold sm:text-5xl md:text-6xl text-gray-800">
              <Typing />
            </h1>
            <h2 className="text-lg md:text-2xl md:mx-20 text-gray-600 w-256">
              Mathverse Tutoring is an expert tutoring service that specializes in teaching 5th-8th grade math topics.
              Our team of experienced tutors has a passion for math and for helping students build their math skills and confidence.
              Our goal is to make math accessible and fun for every student.
            </h2>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-2">
              <a
                href="#courses"
                className="px-5 py-2 font-semibold text-gray-200 duration-500 ease-in-out shadow-lg hover:-translate-y-1.5 rounded-2xl md:text-xl md:px-8 md:py-3 bg-gradient-to-br to-purple-600 from-blue-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-purple-600"
              >
                Register Now!{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 h-7 w-7 hidden sm:inline"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="pt-4 text-sm sm:pt-2 text-gray-600">
                Coming this summer
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5">
        <div className="relative z-10">
          <a
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
              src="example1.png"
              alt="Product Image"
            />
          </a>
        </div>
        <p className="z-10 my-8 text-sm font-medium text-gray-500">
            Teaching in progress...
        </p>
      </div>
    </section>
  );
}
