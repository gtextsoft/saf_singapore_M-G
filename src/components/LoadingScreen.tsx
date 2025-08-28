import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadeOut(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-navy via-navy-dark to-navy flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse-slow">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEh0Q2A0Js46PR3va95bzURVGzrQSqTlVw&s"
            alt="Logo"
            className="h-20 w-20 mx-auto mb-4 rounded-full shadow-2xl"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Singapore Tourism
          </h1>
          <p className="text-gold text-lg">2025</p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-navy-light rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-white text-sm">
          Loading... {progress}%
        </p>

        {/* Subtle Animation */}
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
