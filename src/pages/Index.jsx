import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [count, setCount] = useState(0);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white mb-8">Fun Confetti App!</h1>
      <Button 
        onClick={handleConfetti}
        className="text-xl py-6 px-8 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Make it Rain! 🎉
      </Button>
      <p className="mt-6 text-2xl text-white">Confetti Count: {count}</p>
    </div>
  );
};

export default Index;
