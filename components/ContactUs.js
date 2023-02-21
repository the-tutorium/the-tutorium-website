export default function ContactUs() {
  return (
    <div id="contactus" className="max-w-full md:mx-10 lg:mx-20 xl:mx-auto">
      <div
        className="px-10 shadow-2xl py-14 md:py-32 md:text-center"
        style={{
          background:
            'radial-gradient(circle, rgb(248 7 89) 21%, rgb(181 61 250) 67%',
        }}
      >
        <h1 className="mb-6 text-3xl font-semibold text-center text-white md:text-6xl">
          Transform your student's education
        </h1>
        <h2 className="mb-10 text-xl text-center text-gray-200 md:text-2xl">
          Reach out to us at <strong>mathversetutoring@gmail.com</strong>
        </h2>
        <div className="flex flex-wrap justify-center mb-10 -mt-4 space-y-4 pace-x-4">
          <a
            className="md:mt-2 text-center text-gray-100 text-md md:text-xl font-semibold px-5 py-3 ease-in-out transform text-sm transition border-2 duration-400 hover:-translate-y-0.5 hover:text-gray-300 hover:border-gray-300 rounded-xl"
            href="mailto:mathversetutoring@gmail.com"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
