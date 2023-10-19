const Choose = () => {
  return (
    <div>
      <div>
        <h2
          data-aos="fade-up"
          className="text-5xl text-center mb-4 font-semibold  my-10"
        >
          We <span className="text-blue-600">Hi Tek</span> Provides
        </h2>
        <p data-aos="fade-up" className="text-lg text-center">
          Our Electronics Products Website Specialists are a dedicated team of
          experts with <br /> a deep understanding of the electronics industry.
          They possess the technical know-how and <br /> market insights needed
          to create a dynamic and user-friendly website for your electronics
          product business.
        </p>

        <div className="container mx-auto my-10 md:flex justify-between">
          <div data-aos="fade-right" className="space-y-8">
            <h2 className="text-4xl font-semibold">
              Why Choose <span className="text-blue-600">Hi Tek</span>
            </h2>
            <h2 className="text-3xl font-semibold">
              Latest and branding products
            </h2>
            <h2 className="text-3xl font-semibold">High quality full</h2>
            <h2 className="text-3xl font-semibold">Smart features </h2>

            <p className="w-96">
              Our Electronics Products Website Specialists are a dedicated team
              of experts with a deep understanding of the electronics industry.
              They possess the technical know-how and market insights needed to
              create a dynamic and user-friendly website for your electronics
              product business.
            </p>
          </div>
          <div>
            <img className="w-96"
              data-aos="zoom-in"
              src="https://i.ibb.co/Dpnjcyh/pexels-screen-post-7745560.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
