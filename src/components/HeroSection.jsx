const HeroSection = () => {
 return (
  <section className="relative h-screen flex items-center justify-center">
   {/* Background with overlay */}
   <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-dark to-orange-300 opacity-60"></div>
    <img
     src="https://plus.unsplash.com/premium_photo-1683657860843-abae8aa03a64?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     alt="Street food background"
     className="w-full h-full object-cover"
     loading="lazy"
    />
   </div>

   {/* Hero content */}
   <div className="container mx-auto px-4 z-10 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
     Street Food <span className="text-secondary">Adventures</span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
     Join us as we explore the world's most delicious street food, one bite at a
     time!
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
     <button className="bg-primary hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full flex items-center transition duration-300">
      <i className="fab fa-youtube mr-2"></i> Subscribe Now
     </button>
     <button className="border-2 border-white hover:bg-white hover:text-dark text-white hover:text-black font-bold py-3 px-8 rounded-full flex items-center transition duration-300">
      <i className="fas fa-play-circle mr-2"></i> Watch Videos
     </button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
     <div className="p-4">
      <div className="text-4xl font-bold text-secondary">250+</div>
      <div className="text-lg">Street Food Videos</div>
     </div>
     <div className="p-4">
      <div className="text-4xl font-bold text-secondary">500K+</div>
      <div className="text-lg">Subscribers</div>
     </div>
     <div className="p-4">
      <div className="text-4xl font-bold text-secondary">40+</div>
      <div className="text-lg">Countries Explored</div>
     </div>
    </div>
   </div>

   {/* Scroll indicator */}
   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="animate-bounce">
     <i className="fas fa-chevron-down text-white text-2xl"></i>
    </div>
   </div>
  </section>
 );
};

export default HeroSection;
