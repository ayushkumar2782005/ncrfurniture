const designs = [
  {
    title: "Modern Living Room",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    title: "Luxury Bedroom",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
  },
  {
    title: "Minimal Kitchen",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

function Designs() {
  return (
    <section className="py-16 px-10 bg-white">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Designs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {designs.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <button className="mt-3 text-red-500 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Designs;