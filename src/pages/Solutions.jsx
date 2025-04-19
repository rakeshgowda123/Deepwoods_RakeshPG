import { motion } from 'framer-motion';

function Solutions() {
  const solutions = [
    {
      title: "Switch to EVs",
      description: "Electric vehicles produce zero direct emissions and help reduce air pollution significantly.",
      icon: "⚡",
      impact: "Reduces CO2 emissions by up to 43% compared to petrol vehicles",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Public Transport",
      description: "Using public transportation reduces the number of vehicles on the road and overall emissions.",
      icon: "🚌",
      impact: "One bus can replace up to 30 private cars",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Green Corridors",
      description: "Supporting the development of tree-lined streets and urban forests to naturally filter air pollutants.",
      icon: "🌳",
      impact: "Trees can reduce air pollutants by up to 24%",
      image: "https://images.unsplash.com/photo-1520262454473-a1a82276a574?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Smart Traffic Management",
      description: "Implementing intelligent traffic systems to reduce congestion and idle time.",
      icon: "🚦",
      impact: "Can reduce traffic emissions by up to 20%",
      image: "https://images.unsplash.com/photo-1597014159842-b5f2c7e38d12?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const personalActions = [
    "Choose EV autos and cabs for daily commute",
    "Carpool with colleagues when possible",
    "Support local green initiatives",
    "Spread awareness about air pollution",
    "Track and reduce your carbon footprint"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Solutions for Cleaner Air
        </h1>
        <p className="text-xl text-gray-600">
          Practical steps towards reducing air pollution in Bengaluru
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={solution.image} 
              alt={solution.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-4xl mb-4">{solution.icon}</div>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {solution.title}
            </h3>
            <p className="text-gray-600 mb-4">{solution.description}</p>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-green-800 font-semibold">
                Impact: {solution.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 p-8 rounded-lg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          What You Can Do
        </h2>
        <div className="max-w-2xl mx-auto bg-white/90 p-6 rounded-lg">
          <ul className="space-y-4">
            {personalActions.map((action, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-700"
              >
                <span className="text-green-600 mr-2">✓</span>
                {action}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Solutions;