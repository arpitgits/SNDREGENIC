import React from 'react';
// import img from '../assets/img'

const Story = () => {
  return (
    <section class="text-white bg-indigo-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Our Story
        <br class="hidden lg:inline-block" />
      </h1>
      <p class="mb-8 leading-relaxed">Our Journey has been inspired by the challenges in regenerative medicine. One of our founders gave almost one-third of his life to develop regenerative medicine solutions. We are committed to provide reliable and robust personalized medicine for the rapid healing of traumas.</p>
      
    </div>
    
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src='/src/assets/img2.png'/>
    </div>
  </div>
</section>
//     <section class="text-gray-400 bg-indigo-600 body-font" >
//   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Story
//         <br class="hidden lg:inline-block" />
//       </h1>
//       <p class="mb-8 leading-relaxed text-white">Our Journey has been inspired by the challenges in regenerative medicine. One of our founders gave almost one-third of his life to develop regenerative medicine solutions. We are committed to provide reliable and robust personalized medicine for the rapid healing of traumas.</p>
//       <div class="flex justify-center">        
//       </div>
//     </div>
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
//       <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
//     </div>
    
//   </div>
// </section>
  );
}

export default Story;