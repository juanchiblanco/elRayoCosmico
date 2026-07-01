import React from "react";

const Videos = () => {
  return (
    <section className="container-fluid py-4 hero3 text-light">
        <h2 className="display-6 text-center tituloPagina">Videos</h2>
      <div class="video-container">
        <h5 className="text-center fs-3 mb-3 mt-5">Descoordinado Lyrics Video</h5>
        <iframe
          src="https://www.youtube.com/embed/2rgx09b7o08?rel=0&modestbranding=1&playsinline=1"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <h5 className="text-center fs-3 mb-3 mt-5">El Cielo Lyrics Video</h5>
        <iframe
          src="https://www.youtube.com/embed/xTThsiJfndY?rel=0&modestbranding=1&playsinline=1"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <h5 className="text-center fs-3 mb-3 mt-5">The Sage´s path</h5>
        <iframe
          src="https://www.youtube.com/embed/4ZwuAUpTFLA?rel=0&modestbranding=1&playsinline=1"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <h5 className="text-center fs-3 mb-3 mt-5">Pequeños Universos</h5>
        <iframe
          src="https://www.youtube.com/embed/dZYkrAP4ZUw?rel=0&modestbranding=1&playsinline=1"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <h5 className="text-center fs-3 mb-3 mt-5">Por las Noches Lyrics Video</h5>
        <iframe
          src="https://www.youtube.com/embed/KHLNEuYTFx8?rel=0&modestbranding=1&playsinline=1"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Videos;
