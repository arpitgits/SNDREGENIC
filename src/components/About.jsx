import React from 'react';

const About = () => {
  const emailAddress = 'contact@sndregenic.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <section class="text-gray-400 bg-white-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src="/src/assets/img1.png" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-600">Welcome To The Future of Personalized Medicine
        <br class="hidden lg:inline-block" />
      </h1>
      <p class="mb-8 leading-relaxed"></p>
      <div class="flex justify-center">
        <button onClick={handleEmailClick} class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Enquiry</button>
        
      </div>
    </div>
  </div>
</section>
  );
}

export default About;