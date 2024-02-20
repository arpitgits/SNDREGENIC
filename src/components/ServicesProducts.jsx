
import React from 'react';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

const ServicesProducts = () => {
  return (
        <section class="text-gray-400 bg-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600">Product and services</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img3}/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Research & Healthcare</h2>
                {/* <h1 class="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1> */}
                <p class="leading-relaxed">We are developing biomaterials and 3D-bio printing technology to develop personalized medicines for neural tissue engineering.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img4}/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">AI/ML for Precision Healthcare</h2>
                {/* <h1 class="title-font text-lg font-medium text-white mb-3"></h1> */}
                <p class="leading-relaxed">AI/ML for drug development to address the challenges of neuro-degenerative diseases and psychiatric disorders.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img5}/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Sustainable Development</h2>
                {/* <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1> */}
                <p class="leading-relaxed">Sustainable development of agriculture through soil regeneration by processes food/agriculture biowaste.</p>
              </div>
            </div>
          </div>
          {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Neptune</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Holden Caulfield</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">THE SUBTITLE</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">Alper Kamu</h1>
                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
 );     
};

export default ServicesProducts;