const AboutPage = () => {
    return (
      
      <div className="flex flex-col items-start justify-center px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-6 self-center">
          About <span className="text-cyan-600">DaniBlog</span>
        </h1>
  
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-justify">
          Welcome to <span className="font-bold">DaniBlog</span>, Your Ultimate Destination For Exploring Fresh Ideas, Learning, And Sharing Creative Insights.
           Fueled By A Passion For Storytelling And Knowledge-Sharing, DaniBlog Is Dedicated To Delivering High-Quality Content That Inspires, Informs, And Entertains.
           Whether You're Here To Dive Into The Latest Trends, Read Insightful Articles, Or Find Motivation For Both Your Personal And Professional Growth, We've Got You Covered..
        </p>
  
        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-relaxed text-justify">
            At DaniBlog, We Strive To Build A Thriving Community Of Thinkers, Dreamers, And Achievers.
             Our Mission Is To Craft A Platform That Sparks Creativity, Fosters Lifelong Learning, And Inspires Meaningful Change In The Lives Of Our Readers.
             Together, We Empower Individuals To Dream Big, Grow Constantly, And Make A Positive Impact In The World.
          </p>
        </div>
  
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Why DaniBlog?</h2>
          <ul className="list-disc list-inside space-y-2 text-start">
            <li>Unique perspectives and authentic storytelling.</li>
            <li>
              Wide range of topics, from personal growth to industry trends.
            </li>
            <li>Commitment to providing value and meaningful insights.</li>
          </ul>
        </div>
  
        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-justify">
            Have questions, feedback, or ideas to share? We'd love to hear from
            you! Feel free to contact us through our blog's contact page or
            connect with us on social media.
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutPage;