import { motion } from 'framer-motion';

function Campaign() {
  const campaignPoints = [
    {
      title: "Our Mission",
      description: "To transform Bengaluru's transportation sector by promoting eco-friendly alternatives and raising awareness about air pollution.",
      icon: "🎯"
    },
    {
      title: "EV Initiative",
      description: "Supporting the transition to electric vehicles in the auto and taxi sector through partnerships and education.",
      icon: "🚕"
    },
    {
      title: "Community Impact",
      description: "Building a network of environmentally conscious drivers and passengers committed to cleaner air.",
      icon: "🤝"
    },
    {
      title: "Future Goals",
      description: "Expanding our reach to cover more areas of Bengaluru and inspire other cities to follow our model.",
      icon: "🌱"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Green Positive Campaign
        </h1>
        <p className="text-xl text-gray-600">
          Join our movement for cleaner air and sustainable transportation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {campaignPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-4xl mb-4">{point.icon}</div>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600">{point.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Download Our Campaign Brochure
        </h2>
        <p className="text-gray-600 mb-6">
          Learn more about our initiatives and how you can get involved
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Download PDF
        </button>
      </motion.div>
    </div>
  );
}

export default Campaign;