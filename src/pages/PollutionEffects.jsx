import { motion } from 'framer-motion';

function PollutionEffects() {
  const effects = [
    {
      title: "Respiratory Health",
      description: "Air pollution can cause or worsen respiratory conditions like asthma, bronchitis, and other breathing problems.",
      icon: "🫁",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Cardiovascular Impact",
      description: "Exposure to air pollutants increases the risk of heart disease and stroke.",
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1530533718754-001d2668365a?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Children's Health",
      description: "Children are particularly vulnerable to air pollution, which can affect their lung development and cognitive abilities.",
      icon: "👶",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Environmental Damage",
      description: "Air pollution contributes to climate change, acid rain, and damage to plants and wildlife.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const pollutionLevels = [
    { time: "Morning", level: "High", description: "Peak traffic hours" },
    { time: "Afternoon", level: "Moderate", description: "Reduced traffic" },
    { time: "Evening", level: "Very High", description: "Rush hour" },
    { time: "Night", level: "Low", description: "Minimal traffic" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Understanding Air Pollution Effects
        </h1>
        <p className="text-xl text-gray-600">
          Learn about how air pollution affects our health and environment
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {effects.map((effect, index) => (
          <motion.div
            key={effect.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={effect.image} 
              alt={effect.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-4xl mb-4">{effect.icon}</div>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {effect.title}
            </h3>
            <p className="text-gray-600">{effect.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Bengaluru's Daily Pollution Levels
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {pollutionLevels.map((time, index) => (
            <motion.div
              key={time.time}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg text-center"
            >
              <h3 className="font-bold text-green-700">{time.time}</h3>
              <div className={`text-lg font-semibold ${
                time.level === "High" || time.level === "Very High"
                  ? "text-red-600"
                  : "text-green-600"
              }`}>
                {time.level}
              </div>
              <p className="text-sm text-gray-600">{time.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PollutionEffects;