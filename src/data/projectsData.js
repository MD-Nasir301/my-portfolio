
export const personalInfo = {
  name: "আপনার নাম",
  designation: "Full-Stack Web Developer",
  bio: "I am a passionate web developer focused on building clean, responsive, and high-performance web applications using modern technologies.",
  email: "your.email@example.com",
  phone: "+880 1234 567890",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const skillsData = [
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
];

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    image: "https://images.unsplash.com/photo-1557821552-17105176670c?w=600&auto=format&fit=crop&q=80",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    description: "A full-featured e-commerce platform with product filtering, cart management, and secure checkout system.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project-1",
    challenges: "Handling complex state management for the shopping cart and optimizing image loading performance.",
    solutions: "Used React Context API for global state management and implemented lazy loading for images.",
    futurePlan: "Add online payment gateway integration (Stripe/SSLCommerz) and user review system."
  },
  {
    id: 2,
    title: "Task Management SaaS",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    description: "A productivity tool for teams to manage tasks, track progress, and collaborate in real-time.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project-2",
    challenges: "Synchronizing real-time data updates across multiple clients without lagging.",
    solutions: "Leveraged Firebase Realtime Database hooks to handle live data streams efficiently.",
    futurePlan: "Introduce drag-and-drop Kanban board functionality and email notifications."
  },
  {
    id: 3,
    title: "AI Content Generator App",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    techStack: ["React", "Tailwind CSS", "OpenAI API"],
    description: "An AI-powered web application that generates blog posts, summaries, and social media captions instantly.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project-3",
    challenges: "Managing API rate limits and handling asynchronous loading states gracefully.",
    solutions: "Implemented robust error handling, custom loading skeletons, and debounced input requests.",
    futurePlan: "Add history saving feature using local storage and export to PDF option."
  }
];