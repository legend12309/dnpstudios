'use client';

import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Navbar } from './Navbar';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video is muted immediately on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;

      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = isMuted;
          videoRef.current.volume = isMuted ? 0 : 0.7;
        }
      });

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error('Video autoplay failed:', error));
      }
    }
  }, []);

  // Update video mute state when isMuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = isMuted ? 0 : 0.7;
    }
  }, [isMuted]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Full-Width Navbar */}
      <Navbar
        additionalControls={
          /* Video Controls */
          <div className="relative">
            <button
              onClick={() => {
                setIsMuted((prev) => {
                  const nextMuted = !prev;
                  if (videoRef.current) {
                    videoRef.current.muted = nextMuted;
                    videoRef.current.volume = nextMuted ? 0 : 0.7;
                    if (!nextMuted) {
                      const playPromise = videoRef.current.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(() => { });
                      }
                    }
                  }
                  return nextMuted;
                });
              }}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer bg-transparent border-none"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {isMuted && (
              <div className="absolute -bottom-10 right-0 flex items-center text-white/80">
                <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                <span className="text-lg">↗</span>
              </div>
            )}
          </div>
        }
      />

      {/* Hero Content - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40 max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-6">
          Creative Solutions for Modern Brands
        </h1>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
          DNP Studios delivers video editing, graphic design, web development, app development, photography, and videography to help brands grow, engage, and stand out.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const clientsSection = document.getElementById('clients');
              clientsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-white/90 gentle-animation cursor-pointer"
          >
            View Our Clients
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 gentle-animation cursor-pointer"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
