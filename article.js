const niches = {
  technology: {
    titles: [
      "Latest Technology Trends",
      "AI and Future Innovation",
      "Modern Cloud Infrastructure",
      "Best Software Solutions",
      "Advanced Digital Systems"
    ],
    paragraphs: [
      "Technology continues to evolve rapidly, transforming how businesses and individuals interact with digital systems.",
      "Artificial intelligence and cloud computing are now central to modern innovation strategies.",
      "Companies increasingly rely on scalable infrastructure to improve operational efficiency.",
      "Fast-loading platforms and optimized user interfaces are essential for digital success.",
      "Advanced cybersecurity systems now protect data across global networks."
    ]
  },

  business: {
    titles: [
      "Business Growth Strategies",
      "Startup Development Guide",
      "Modern Corporate Management",
      "Scaling Business Operations",
      "Digital Business Transformation"
    ],
    paragraphs: [
      "Modern businesses require flexible strategies to remain competitive in changing markets.",
      "Digital transformation helps organizations improve productivity and customer engagement.",
      "Strong leadership and innovation are essential for long-term growth.",
      "Companies now rely heavily on analytics and performance tracking tools.",
      "Customer-centric approaches continue to drive business expansion."
    ]
  },

  entertainment: {
    titles: [
      "Top Entertainment Trends",
      "Streaming Media Growth",
      "Digital Content Revolution",
      "Online Video Experience",
      "Modern Media Platforms"
    ],
    paragraphs: [
      "Entertainment platforms continue to grow with the rise of streaming technology.",
      "Digital content now reaches global audiences faster than ever before.",
      "Premium video access systems improve user engagement and retention.",
      "Modern media websites focus heavily on responsive design and content quality.",
      "Users expect fast access and seamless playback experiences."
    ]
  },

  health: {
    titles: [
      "Healthy Lifestyle Guide",
      "Wellness and Fitness Trends",
      "Modern Healthcare Innovation",
      "Nutrition and Daily Health",
      "Fitness and Mental Wellness"
    ],
    paragraphs: [
      "Health and wellness remain a key priority for modern lifestyles.",
      "Balanced nutrition and regular exercise contribute to long-term wellbeing.",
      "Healthcare innovation continues to improve treatment accessibility.",
      "Mental wellness is increasingly recognized as an essential aspect of health.",
      "Preventive care helps reduce long-term health risks."
    ]
  },

  education: {
    titles: [
      "Modern Education Systems",
      "Digital Learning Platforms",
      "Future of Online Education",
      "Academic Growth Strategies",
      "Learning Technology Trends"
    ],
    paragraphs: [
      "Education continues to evolve with online learning platforms.",
      "Students benefit from interactive digital tools and flexible access.",
      "Modern academic systems rely on cloud-based collaboration.",
      "Technology helps improve both teaching quality and student outcomes.",
      "Remote learning solutions are becoming increasingly common."
    ]
  },

  travel: {
    titles: [
      "Best Travel Destinations",
      "Modern Tourism Trends",
      "Travel Planning Guide",
      "Adventure and Lifestyle Travel",
      "Luxury Destination Experience"
    ],
    paragraphs: [
      "Travel remains one of the most popular lifestyle interests worldwide.",
      "Modern tourism platforms help users discover destinations faster.",
      "Digital travel planning tools improve convenience significantly.",
      "Luxury experiences and adventure tourism continue to grow.",
      "Travel guides help users make informed decisions."
    ]
  },

  finance: {
    titles: [
      "Personal Finance Management",
      "Investment Growth Guide",
      "Modern Financial Strategies",
      "Smart Wealth Planning",
      "Digital Finance Trends"
    ],
    paragraphs: [
      "Financial planning is essential for long-term stability.",
      "Modern investment tools help users monitor portfolio growth.",
      "Digital banking systems improve convenience and accessibility.",
      "Smart budgeting helps individuals reach financial goals.",
      "Wealth management strategies continue to evolve."
    ]
  },

  sports: {
    titles: [
      "Latest Sports Updates",
      "Fitness and Performance",
      "Athlete Training Guide",
      "Sports Industry Trends",
      "Modern Athletic Development"
    ],
    paragraphs: [
      "Sports continue to inspire millions of people globally.",
      "Modern training systems improve athletic performance.",
      "Fitness technology supports better performance tracking.",
      "Professional sports industries continue to expand rapidly.",
      "Data analytics now plays a major role in sports."
    ]
  },

  lifestyle: {
    titles: [
      "Modern Lifestyle Trends",
      "Daily Productivity Guide",
      "Work-Life Balance Tips",
      "Personal Growth and Wellness",
      "Minimalist Living Ideas"
    ],
    paragraphs: [
      "Lifestyle trends continue to evolve with modern work patterns.",
      "Work-life balance is increasingly important for wellbeing.",
      "Productivity tools help individuals manage daily tasks.",
      "Minimalist living remains a growing global trend.",
      "Personal growth strategies support long-term success."
    ]
  },

  marketing: {
    titles: [
      "Digital Marketing Trends",
      "SEO Growth Strategy",
      "Content Marketing Guide",
      "Social Media Optimization",
      "Online Brand Development"
    ],
    paragraphs: [
      "Digital marketing remains essential for modern businesses.",
      "SEO strategies improve organic visibility and website growth.",
      "Content marketing helps build authority and trust.",
      "Social media continues to drive audience engagement.",
      "Brand development requires consistent messaging and analytics."
    ]
  }
};

function randomFrom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildArticleContent(paragraphs){
  let html = "";

  for(let i = 0; i < 10; i++){
    html += `<p>${randomFrom(paragraphs)}</p><br>`;
  }

  return html;
}

const nicheKeys = Object.keys(niches);

const articles = Array.from({ length: 1000 }, (_, i) => {
  const niche = niches[randomFrom(nicheKeys)];

  return {
    title: `${randomFrom(niche.titles)} ${i + 1}`,
    content: buildArticleContent(niche.paragraphs)
  };
});

function getRandomArticle(){
  return articles[Math.floor(Math.random() * articles.length)];
}
