import { motion } from 'framer-motion';
import { RecycleIcon, Leaf, Bell, Home, Menu, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFBE6] overflow-hidden">
      {/* Background wave */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#A9B388]/10" 
        style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} 
      />

      {/* Main content */}
      <div className="container px-4 pt-32 mx-auto">
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          {/* Text content */}
          <div className="relative">
            {/* Stats cards positioned absolutely */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-0 transform -translate-y-20 -left-4 sm:-left-16"
            >
              <div className="flex items-center gap-3 p-3 shadow-lg bg-white/90 backdrop-blur-sm rounded-xl">
                <div className="p-2 bg-[#FFCE31]/10 rounded-lg">
                  <RecycleIcon className="w-5 h-5 text-[#C6822A]" />
                </div>
                <div>
                  <div className="text-[#5F7053] font-semibold text-sm">100K+</div>
                  <div className="text-xs text-gray-600">Liters Recycled</div>
                </div>
              </div>
            </motion.div>

            {/* Main text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
                <div className="text-[#5F7053]">Turning Waste into</div>
                <div className="text-[#C6822A] my-2">wealth</div>
                <div className="text-[#5F7053]">with Tadweer</div>
              </h1>
              
              <p className="text-[#5F7053]/80 text-lg mb-8 max-w-xl">
                Leading the way in sustainable oil recycling. At Tadweer, we turn your used cooking oils into renewable energy, protecting the environment for future generations.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFCE31] text-[#5F7053] px-8 py-4 rounded-full 
                         font-semibold text-lg shadow-lg hover:shadow-xl 
                         transition-all"
              >
                LEARN MORE ABOUT US
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile mockup */}
          <div className="relative">
            {/* Right stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 max-w-[320px] mx-auto" // Increased from 280px
            >
              {/* Adjust the aspect ratio here for height */}
              <div className="relative w-full aspect-[1/2] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="relative bg-white w-full h-full rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 z-10 w-1/2 transform -translate-x-1/2 bg-black left-1/2 h-7 rounded-b-3xl" />
                  
                  {/* Status Bar */}
                  <div className="relative flex items-center justify-between px-8 text-xs bg-white h-7">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>100%</span>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4 pt-2">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <img src="/logo1.png" alt="Tadweer" className="w-8 h-8" />
                        <span className="text-[#5F7053] font-semibold">Tadweer</span>
                      </div>
                      <div className="flex gap-3">
                        <Bell className="w-5 h-5 text-[#5F7053]" />
                        <Menu className="w-5 h-5 text-[#5F7053]" />
                      </div>
                    </div>
                    
                    {/* Welcome Card */}
                    <div className="bg-gradient-to-r from-[#5F7053] to-[#A9B388] text-white p-5 rounded-2xl mb-4">
                      <h3 className="mb-1 text-lg font-semibold">Welcome Back!</h3>
                      <p className="mb-3 text-white/90">You've recycled 12L this month</p>
                      <div className="w-full h-1 rounded-full bg-white/20">
                        <div className="w-3/4 h-full bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-[#FFFBE6] p-4 rounded-2xl">
                        <p className="text-[#C6822A] font-semibold text-lg">150</p>
                        <p className="text-sm text-[#5F7053]">Points Earned</p>
                      </div>
                      <div className="bg-[#FFFBE6] p-4 rounded-2xl">
                        <p className="text-[#5F7053] font-semibold text-lg">25kg</p>
                        <p className="text-sm text-[#5F7053]">CO₂ Saved</p>
                      </div>
                    </div>

                    {/* Main Action Button */}
                    <button className="w-full bg-[#FFCE31] text-[#5F7053] py-4 rounded-xl 
                                   font-semibold text-lg shadow-lg mb-4">
                      Schedule Pickup
                    </button>

                    {/* Store Badges */}
                    <p className="text-center text-[#5F7053]/70 text-sm mb-3">Download our app</p>
                    <div className="flex justify-center gap-3">
                      {/* App Store */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-xl"
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs">Download on the</div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </motion.div>

                      {/* Play Store */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-xl"
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs">GET IT ON</div>
                          <div className="text-sm font-semibold">Google Play</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around px-6 py-3 bg-white border-t">
                      <Home className="w-6 h-6 text-[#5F7053]" />
                      <RecycleIcon className="w-6 h-6 text-[#5F7053]/40" />
                      <Leaf className="w-6 h-6 text-[#5F7053]/40" />
                      <Settings className="w-6 h-6 text-[#5F7053]/40" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;