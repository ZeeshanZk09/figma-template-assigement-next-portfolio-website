import React from "react";
import Link from "next/link";
function Services() {
  interface Service {
    id: number;
    title: string;
    description: string[];
  }



const services: Service[] = [
    {
      id: 1,
      title: "Custom Website Development",
      description: [
        "Design and develop unique, fully responsive websites that deliver a seamless user experience.",
        "Expertise in modern frameworks like React, Next.js, and Tailwind CSS to create fast, dynamic, and visually appealing websites.",
      ],
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: [
        "Build robust and scalable e-commerce platforms for your online business.",
        "Integration with payment gateways, inventory management, and user-friendly interfaces to enhance customer experience.",
      ],
    },
    {
      id: 3,
      title: "Landing Pages & Portfolio Websites",
      description: [
        "Create engaging and conversion-focused landing pages for marketing campaigns, product launches, or personal branding.",
        "Professional portfolio websites for showcasing your work or business.",
      ],
    },
    {
      id: 4,
      title: "Full Stack Development",
      description: [
        "Develop end-to-end solutions with both front-end and back-end capabilities.",
        "Expertise in technologies like Node.js, Express, and database management (MongoDB).",
      ],
    },
    {
      id: 5,
      title: "Website Redesign and Maintenance",
      description: [
        "Revamp outdated websites to give them a fresh, modern look.",
        "Regular updates, performance optimization, and technical support to ensure your site runs smoothly.",
      ],
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: [
        "Design intuitive and visually stunning interfaces that enhance user engagement.",
        "Focus on usability, accessibility, and responsive designs across all devices.",
      ],
    },
    {
      id: 7,
      title: "Content Management System (CMS) Development",
      description: [
        "Build CMS-based websites with platforms like WordPress or custom solutions.",
        "Easy-to-manage content systems for blogs, news portals, and more.",
      ],
    },
    {
      id: 8,
      title: "Progressive Web Apps (PWAs)",
      description: [
        "Develop PWAs for a native-app-like experience directly through the browser.",
        "Fast loading, offline support, and push notifications to engage users.",
      ],
    },
    {
      id: 9,
      title: "SEO Optimization",
      description: [
        "Optimize websites for search engines to improve visibility and organic reach.",
        "Implement technical SEO best practices and integrate tools like Google Analytics.",
      ],
    },
    {
      id: 10,
      title: "API Integration & Development",
      description: [
        "Seamlessly integrate third-party APIs for additional functionalities like payment systems, maps, and more.",
        "Build custom APIs to connect your applications efficiently.",
      ],
    },
    {
      id: 11,
      title: "Web Application Development",
      description: [
        "Create complex, interactive web applications for businesses and startups.",
        "Expertise in building dashboards, management systems, and real-time apps.",
      ],
    },
    {
      id: 12,
      title: "Chatbot and AI Integration",
      description: [
        "Integrate AI-based chatbots and automation tools to improve customer interaction and operational efficiency.",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full  flex flex-col justify-center items-center my-5  px-6 md:px-16 "
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 text-justify max-w-3xl mx-auto">
          I provide a wide range of professional services in the web development
          domain, ensuring high-quality, modern, and functional solutions
          tailored to your needs. Here’s what I offer:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 rounded-2xl p-8 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 group-hover:text-[#04AF70] transition-colors duration-300">
              {service.title}
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 text-base text-justify group-hover:text-gray-700">
              {service.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <Link href={`/services/${service.id}`}>
              <button
                type="button"
                className="mt-8 bg-[#04af70cb] hover:bg-[#04AF70] text-white py-3 px-6 rounded-full text-base font-medium shadow-md hover:shadow-lg  transition-transform transform hover:scale-110"
              >
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
