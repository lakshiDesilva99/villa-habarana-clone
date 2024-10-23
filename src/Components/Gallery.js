function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="villa.jpg" alt="villa" className="w-full h-auto rounded-md" />
        <h3 className="text-lg mt-4">Gallery Image 1</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="pool.jpg" alt="pool" className="w-full h-auto rounded-md" />
        <h3 className="text-lg mt-4">Gallery Image 2</h3>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="garden.jpg" alt="garden" className="w-full h-auto rounded-md" />
        <h3 className="text-lg mt-4">Gallery Image 3</h3>
      </div>
    </div>
  );
}

export default Gallery;

