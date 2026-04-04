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
      "Technology continues to evolve rapidly, transforming how businesses and users interact with digital ecosystems.",
      "Artificial intelligence and automation now play a major role in modern innovation strategies.",
      "Cloud systems continue to improve scalability, performance, and user experience.",
      "Modern web infrastructure relies heavily on performance optimization and security.",
      "Businesses increasingly adopt advanced software solutions for efficiency."
    ]
  },

  business: {
    titles: [
      "Business Growth Strategies",
      "Startup Development Guide",
      "Scaling Operations",
      "Corporate Innovation",
      "Digital Business Systems"
    ],
    paragraphs: [
      "Modern businesses need flexible strategies to remain competitive.",
      "Customer-focused approaches continue to drive long-term growth.",
      "Digital transformation remains a critical part of operational success.",
      "Companies rely on performance analytics for better decisions.",
      "Scalable business models help organizations grow sustainably."
    ]
  },

  entertainment: {
    titles: [
      "Streaming Media Growth",
      "Modern Video Platforms",
      "Digital Entertainment Trends",
      "Premium Content Experience",
      "Online Media Access"
    ],
    paragraphs: [
      "Entertainment platforms continue to grow rapidly in the digital era.",
      "Users expect smooth playback and instant access.",
      "Modern streaming systems prioritize speed and responsiveness.",
      "High-quality content remains the core of user engagement.",
      "Premium delivery systems improve retention and satisfaction."
    ]
  }
};

const authors = [
  "James Carter",
  "Emily Johnson",
  "Daniel Brooks",
  "Sophia Turner",
  "Michael Scott",
  "Olivia Walker",
  "William Davis",
  "Emma Wilson",
  "Benjamin Harris",
  "Charlotte Young"
];

function randomFrom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(text){
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function randomDate(){
  const start = new Date(2024, 0, 1);
  const end = new Date();

  const date = new Date(
    start.getTime() +
    Math.random() * (end.getTime() - start.getTime())
  );

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function buildArticleContent(paragraphs){
  let html = "";

  for(let i = 0; i < 10; i++){
    html += `<p>${randomFrom(paragraphs)}</p><br><br>`;
  }

  return html;
}

function generateMetaDescription(title){
  return `${title} - explore in-depth insights, expert analysis, and the latest trends in this category with premium web-style content.`;
}

const nicheKeys = Object.keys(niches);

const articles = Array.from({ length: 1000 }, (_, i) => {
  const nicheKey = randomFrom(nicheKeys);
  const niche = niches[nicheKey];

  const title = `${randomFrom(niche.titles)} ${i + 1}`;

  return {
    title,
    slug: slugify(title),
    metaDescription: generateMetaDescription(title),
    author: randomFrom(authors),
    publishDate: randomDate(),
    readTime: `${Math.floor(Math.random() * 6) + 4} min read`,
    category: nicheKey,
    content: buildArticleContent(niche.paragraphs)
  };
});

function getRandomArticle(){
  return articles[Math.floor(Math.random() * articles.length)];
}
