import { SiReact, SiNodedotjs, SiFigma, SiPhp, SiPython, SiMysql, SiMongodb, SiFlask, SiNextdotjs, SiBootstrap, SiTailwindcss } from "react-icons/si";

export default function PortfolioCard({ title, description, imageSrc, href, technologies }) {
  const Wrapper = href ? 'a' : 'div';

  const allIcons = {
    react: { Icon: SiReact, color: 'text-cyan-400' },
    node: { Icon: SiNodedotjs, color: 'text-green-500' },
    figma: { Icon: SiFigma, color: 'text-pink-500' },
    php: { Icon: SiPhp, color: 'text-indigo-500' },
    python: { Icon: SiPython, color: 'text-yellow-500' },
    mysql: { Icon: SiMysql, color: 'text-blue-600' },
    mongodb: { Icon: SiMongodb, color: 'text-green-600' },
    flask: { Icon: SiFlask, color: 'text-red-500' },
    nextjs: { Icon: SiNextdotjs, color: 'text-gray-900' },
    bootstrap: { Icon: SiBootstrap, color: 'text-purple-600' },
    tailwind: { Icon: SiTailwindcss, color: 'text-teal-500' },
  };

  const selectedIcons = (technologies && Array.isArray(technologies))
    ? technologies.filter((tech) => allIcons[tech]).map((tech) => ({ key: tech, ...allIcons[tech] }))
    : [];

  return (
    <Wrapper
      href={href}
      className="group block overflow-hidden border border-white bg-gray-900/60 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-blue-300/10 rounded-lg"
    >
      <div className="w-full overflow-hidden bg-gray-800">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title || ''}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      {(title || description) && (
        <div className="px-5 py-4 bg-white">
          {title && (
            <h3 className="text-gray-800 text-xl font-semibold">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-800 text-normal mt-5">
              {description}
            </p>
          )}
          {selectedIcons.length > 0 && (
            <div className="mt-3 flex items-center gap-4">
              {selectedIcons.map(({ key, Icon, color }) => (
                <span key={key} className={`text-4xl ${color}`}>
                  <Icon />
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
}


