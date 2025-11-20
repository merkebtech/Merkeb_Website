import PortfolioCard from "../components/portfolioCard";
import W1 from "../assets/p_blog.jpg";
import W2 from "../assets/p_gym.jpg";
import w3 from "../assets/P_hotel.png";
import w4 from "../assets/p_dress.png";
import w5 from "../assets/p_org.png";

function Portfolio() {
  const items = [
    {
      title: "Content Platform",
      imageSrc: W1,
      href: "",
      description:
        "A clean, content-focused website built for writers or organizations to publish articles, share insights, and engage readers through well-structured posts.",
      technologies: ["python", "flask", "mysql"],
    },
    {
      title: "Gym managment system",
      imageSrc: W2,
      description:
        "A complete platform designed to streamline gym operations, from member registration and payments to class scheduling and performance tracking.",
      technologies: ["nextjs", "mysql", "node"],
    },
    {
      title: "Hotel managment website",
      imageSrc: w3,
      href: "https://kerawi-hotel.onrender.com/",
      description:
        "A responsive booking system for a Lexurious hotels and resorts, featuring room listings, availability tracking, and secure online reservations.",
      technologies: ["python", "flask", "mysql", "bootstrap"],
    },
    {
      title: "Fashion E-Commerce Platform ",
      imageSrc: w4,
      href: "https://habesha-traditional-dress.vercel.app/",
      description:
        "A modern, user-friendly online store built for habesha clothing brands to showcase collections, manage inventory, and offer seamless shopping experiences.",
      technologies: ["react", "tailwind", "node", "mongodb"],
    },
    {
      title: "Corporate Profile Website",
      imageSrc: w5,
      href: "https://www.segelconsult.com/",
      description:
        "A professional web presence for organizations highlighting mission, services, and impact through clear structure and modern design.",
      technologies: ["react", "figma", "bootstrap"],
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Blue Background Header Section */}
      <div className="bg-white text-blue-900  py-8 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h1
            className="text-5xl md:text-5xl font-semibold mb-6 text-blue-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Portfolio
          </h1>
          <p className="text-blue-950 text-lg md:text-2xl max-w-3xl mx-auto">
            Explore our collection of innovative projects that showcase our
            design excellence and technical expertise.
          </p>
        </div>
      </div>

      {/* Portfolio Items Section */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              href={item.href}
              technologies={item.technologies}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
