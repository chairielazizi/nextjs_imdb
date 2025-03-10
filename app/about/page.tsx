const About = () => {
  return (
    <div>
      <header>
        <title>About | IMDB</title>
      </header>

      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <p className="text-lg mb-4">
          Welcome to our simple IMDB website, where we provide a comprehensive
          database of movies, TV shows, and celebrities. Our goal is to make it
          easy for users to find and discover new content, and to provide a
          platform for fans to share their love for movies and TV shows.
        </p>

        <p className="text-lg mb-4">
          Our website is built using the latest technologies, including Next.js,
          Tailwind CSS, MongoDB and Clerk for authentication. We strive to
          provide a fast, secure, and user-friendly experience for all our
          users.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Team</h2>

        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="https://dummyimage.com/300"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-bold mb-2">John Doe</h3>
            <p className="text-lg">Founder & CEO</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="https://dummyimage.com/300"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Jane Doe</h3>
            <p className="text-lg">CTO</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="https://dummyimage.com/300"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Bob Smith</h3>
            <p className="text-lg">Developer</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

        <p className="text-lg mb-4">
          If you have any questions or feedback, please don&apos;t hesitate to
          contact us. We&#39;d love to hear from you!
        </p>

        <div className="flex justify-center mb-4">
          <a
            href="mailto:info@example.com"
            className="text-lg font-bold hover:text-blue-500"
          >
            info@example.com
          </a>
        </div>

        <div className="flex justify-center mb-4">
          <a
            href="https://www.twitter.com/example"
            className="text-lg font-bold hover:text-blue-500"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/example"
            className="text-lg font-bold hover:text-blue-500 ml-4"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/example"
            className="text-lg font-bold hover:text-blue-500 ml-4"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
