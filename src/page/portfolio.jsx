import PortfolioCard from "../components/portfolioCard";
import P_B from "../assets/P_B.jpg";
import P_G from "../assets/P_G.jpg";
import P_H from "../assets/P_H.png";
import P_D from "../assets/P_D.png";
import P_O from "../assets/P_O.png";

function Portfolio() {
  const items = [
    {
      title: "Content Platform",
      imageSrc: P_B,
      href: "",
      description:
        "A clean, content-focused website built for writers or organizations to publish articles, share insights, and engage readers through well-structured posts.",
      technologies: ["python", "flask", "mysql"],
    },
    {
      title: "Gym managment system",
      imageSrc: P_G,
      description:
        "A complete platform designed to streamline gym operations, from member registration and payments to class scheduling and performance tracking.",
      technologies: ["nextjs", "mysql", "node"],
    },
    {
      title: "Hotel managment website",
      imageSrc: P_H,

      description:
        "A responsive booking system for a Lexurious hotels and resorts, featuring room listings, availability tracking, and secure online reservations.",
      technologies: ["python", "flask", "mysql", "bootstrap"],
    },
    {
      title: "Fashion E-Commerce Platform ",
      imageSrc: P_D,

      description:
        "A modern, user-friendly online store built for habesha clothing brands to showcase collections, manage inventory, and offer seamless shopping experiences.",
      technologies: ["react", "tailwind", "node", "mongodb"],
    },
    {
      title: "Corporate Profile Website",
      imageSrc: P_O,

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
              technologies={item.technologies}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
