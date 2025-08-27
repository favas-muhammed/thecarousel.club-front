import { Header } from "./Header";

export const VideoHero = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#fbf5ee" }}
    >
      {/* Header with Logo and Sign Up */}
      <div className="absolute top-4 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Video frame */}
        <div className="relative w-full h-[88vh] border-y-2 border-luxury-red/30">
          <video
            src="/hero-video-final.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={(e) => console.error("Video error:", e)}
            onLoadedData={() => console.log("Video loaded successfully")}
          />
        </div>

        {/* COMING SOON below video */}
        <div className="py-2 px-4 pb-6 text-center flex items-center justify-center">
          <span className="candy-cane-stripes font-antonio font-bold text-5xl md:text-7xl lg:text-8xl">
            COMING SOON
          </span>
        </div>
      </div>
    </div>
  );
};
