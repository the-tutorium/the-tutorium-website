const Feature = ({ featureText }) => {
  return (
    <li className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 w-4 h-4 mt-1.5 mr-2 text-gray-700 md:h-4 md:w-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div>{featureText}</div>
    </li>
  );
};

export default function Pricing() {
  return (
    <section
      id="courses"
      className="py-20 md:pb-32 bg-gradient-to-t from-sky-300 to-sky-100"
    >
      <div className="mx-8 w-3/4 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 md:mb-28">
          <div className="max-w-3xl mx-auto md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg bg-[#bbd0dd] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40 mb-4">
              Our Courses
            </div>
            <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-5xl">
              Tailored to your level
            </h2>
            <p className="text-xl md:text-2xl">
              All our courses are designed to meet you at your level, and then push you further.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-12 md:mt-0 xl:grid-cols-4">
          <div className="transition duration-500 ease-in-out transform scale-100 hover:scale-105 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  5th Grade
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Taught by: Asdf, Bsdf</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For students desiring a boost into middle school
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Convallis posuere." />
                <Feature featureText="Sed risus pretium." />
                <Feature featureText="Vestibulum morbi blandit." />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Get Started{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 hover:scale-105 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  6th Grade
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Taught by: Asdf, Bsdf</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For students aiming for more than just average
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Convallis posuere." />
                <Feature featureText="Sed risus pretium." />
                <Feature featureText="Vestibulum morbi blandit." />
                <Feature featureText="Convallis posuere." />
                <Feature featureText="Sed risus pretium." />
                <Feature featureText="Vestibulum morbi blandit." />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Get Started{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 hover:scale-105 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  7th Grade
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Taught by: Asdf, Bsdf</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For students willing to crush the competition
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Convallis posuere." />
                <Feature featureText="Sed risus pretium." />
                <Feature featureText="Vestibulum morbi blandit." />
                <Feature featureText="Convallis posuere morbi leo urna." />
                <Feature featureText="Magnis dis." />
                <Feature featureText="Cursus risus." />
                <Feature featureText="Convallis posuere morbi leo." />
                <Feature featureText="Nulla malesuada pellentesque." />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Contact Sales{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 hover:scale-105 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  8th Grade
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Taught by: Asdf, Bsdf</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For students ready to dive into the world of math
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Convallis posuere." />
                <Feature featureText="Sed risus pretium." />
                <Feature featureText="Vestibulum morbi blandit." />
                <Feature featureText="Convallis posuere morbi leo urna." />
                <Feature featureText="Magnis dis." />
                <Feature featureText="Cursus risus." />
                <Feature featureText="Convallis posuere morbi leo." />
                <Feature featureText="Nulla malesuada pellentesque." />
                <Feature featureText="Convallis posuere." />
                <Feature featureText="Sed risus pretium." />
                <Feature featureText="Vestibulum morbi blandit." />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Contact Sales{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
