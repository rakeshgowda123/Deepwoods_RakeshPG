import { useState } from 'react';
import { motion } from 'framer-motion';

function Home() {
  const [distance, setDistance] = useState(5);
  const emissionsSaved = (distance * 0.12).toFixed(2); // Approximate CO2 savings in kg

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem',
          borderRadius: '1rem',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 relative z-10">
          Turn your daily commute into a green statement
        </h1>
        <p className="text-xl text-white relative z-10">
          Join us in making Bengaluru's air cleaner, one ride at a time
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Calculate Your Impact
          </h2>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Distance traveled (in km):
            </label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full p-2 border rounded"
              min="0"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Your Impact:</h3>
            <p className="text-4xl font-bold text-green-600">{emissionsSaved} kg</p>
            <p className="text-gray-600">CO2 emissions saved</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-green-50 p-6 rounded-lg relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=500"
              alt="Electric Vehicle"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Why Choose EV?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Zero direct emissions</li>
              <li>Lower operating costs</li>
              <li>Quieter rides</li>
              <li>Support for clean energy transition</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=500"
              alt="Environmental Impact"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Your Impact Matters
            </h3>
            <p className="text-gray-700">
              By choosing an EV auto or cab, you're contributing to cleaner air
              in Bengaluru. Every small action counts towards a sustainable future.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;