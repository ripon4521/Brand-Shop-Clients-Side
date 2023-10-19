import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            
<section class="block">
  <div class="py-16 md:py-24 lg:py-32 px-5 md:px-10">
    <div class="mx-auto flex-col flex w-full max-w-3xl items-center">
      <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" class="mb-8 mx-auto inline-block h-56 w-56 flex-none object-cover"/>
      <div class="text-center">
        <h1 class="font-bold mb-4 text-4xl md:text-6xl">404 Error</h1>
        <div class="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
          <p class="text-[#636262] max-[479px]:text-sm">Commodo, consequat turpis placerat ultrices sapien, tortor tincidunt. Sit quisque est metus auctor sed turpis lectus quis.</p>
        </div>
        <Link to="/" class="inline-block items-center bg-black px-8 py-4 text-center font-semibold text-white">Back Home</Link>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Error;