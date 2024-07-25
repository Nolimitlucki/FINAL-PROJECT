import "./Gallerycomponent.css";

const images = [
  {
    id: 1,
    src: "../Pictures/HadoneDaxjLive.jpg",
    alt: "Image 1",
  },

  { id: 2, src: "../Pictures/Ninakraviz.jpg", alt: "Image 2" },

  { id: 3, src: "../Pictures/VLADIMIR-DUBYSHKIN-1.jpg", alt: "Image 3" },
];

const Gallerycomponent = () => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img className="img-recomm" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallerycomponent;
