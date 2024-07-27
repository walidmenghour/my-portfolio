import Velociraptor from "../images/Velociraptor.png";
import EFK from "../images/elk.jpg";
import Blockchain from "../images/Blockchain.jpg";
import IDS from "../images/IDS.jpeg";
import Firewall from "../images/firewall.png";

export const projects = [
  {
    title: "Digital forensics solution (Velociraptor)",
    description:
      " I have successfully deployed the Velociraptor solution to make digital forensics easier and faster in the company.(Velociraptor is an advanced digital forensic and incident response tool that enhances your visibility into your endpoints.)",
    image: Velociraptor,
  },
  {
    title: "DESIGN AND SIMULATION OF A SMART FIREWALL",
    description:
      "This project has passed through three steps:\n" +
      "\n" +
      "Firstly, we built the model. We used the autoencoder model to detect attacks and employed machine learning algorithms such as Logistic Regression, Decision Trees, Random Forest, XGBoost, SVM, and K-NN for classification based on the type or category of the attack.\n" +
      "\n" +
      "Secondly, we integrated this model into an open-source firewall (pfsense).\n" +
      "\n" +
      "Thirdly, we simulated the attacks in an environment using Eve-NG, which includes the firewall, attackers, and legitimate users",
    image: Firewall,
  },
  {
    title: "INTRUSUIN DETECTION SYSTEM BASED AGENT",
    description:
      "Detecting intrusions through agent collaborations and interacting with them. This is a web application that we built to manage the agents and monitor the logs and intrusions.",
    image: IDS,
  },
  {
    title: "LOGGING SYSTEM",
    description:
      "The EFK-Based Logging System is a project focused on implementing a robust and efficient log management solution for collecting, processing, storing, and visualizing log data from various sources.",
    image: EFK,

  },
  {
    title: "APPLICATION WEB DEPLOMACHAIN",
    description:
      "Développement d'une application web pour l'authentification des diplômes universitaires en utilisant les concepts de la blockchain.",
    image: Blockchain,

  },
  // {
  //   title: "E-commerce Platform",
  //   description:
  //     "Develop a robust e-commerce platform with features like user authentication, product catalog management, shopping cart functionality, and payment processing.\n" +
  //     "Technologies: Node.js, Express.js, MongoDB, Stripe API for payments.",
  //   image: mywap1,
  //       },
  
  // {
  //   title: "Content Management System (CMS)",
  //   description:
  //     "Build a customizable CMS for websites, allowing users to create, edit, and manage content efficiently. Implement user roles and permissions for content creators and administrators.\n" +
  //     "Technologies: Python (Django or Flask), PostgreSQL, JWT for authentication.",
  //   image: mywap2,

  // },
  // {
  //   title: "Real-time Chat Application",
  //   description:
  //     "Create a real-time chat application with features like one-on-one messaging, group chats, file sharing, and notifications. Ensure scalability and security.\n" +
  //     "Technologies: Socket.io for real-time communication, Redis for caching, Node.js.",
  //   image: mywap1,

  // },
  // {
  //   title: "API for Mobile App",
  //   description:
  //     "Develop a RESTful API to serve data to a mobile app. Include features like user registration, authentication, and data retrieval. Implement token-based authentication for security.\n" +
  //     "Technologies: Ruby on Rails, PostgreSQL, JWT for authentication.",
  //   image: mywap2,


  // },
  // {
  //   title: "Task Management System",
  //   description:
  //     "Design a task management system where users can create, assign, and track tasks. Include features like task categorization, due dates, and notifications.\n" +
  //     "Technologies: Java (Spring Boot), MySQL or MongoDB, RabbitMQ for task queues.",
  //   image: mywap1,

  // },
];
