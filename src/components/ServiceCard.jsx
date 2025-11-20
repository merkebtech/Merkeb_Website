export default function ServiceCard({ title, description, icon, imageSrc, href }) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      href={href}
      className="group block h-full rounded-xl border border-white bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon/Image at the top */}
        <div className="mb-4">
          <div className="grid h-28 w-28 place-items-center overflow-hidden rounded-xl bg-white ring-2 ring-white transition-all group-hover:bg-blue-50 group-hover:ring-blue-600/40">
            {imageSrc ? (
              <img src={imageSrc} alt="" className="h-20 w-20 object-contain" />
            ) : icon ? (
              <div className="w-20 h-20 text-blue-800 group-hover:text-blue-700 transition-colors">
                {icon}
              </div>
            ) : (
              <span className="text-2xl text-gray-400">★</span>
            )}
          </div>
        </div>

        {/* Title and Description below */}
        <div className="w-full">
          {title && (
            <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-blue-700 transition-colors mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm leading-relaxed text-gray-700">
              {description}
            </p>
          )}
        </div>
      </div>

      {href && (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-6s00 opacity-0 transition-opacity group-hover:opacity-100 justify-center w-full">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M13.5 4.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.086 6H14.5a1 1 0 0 1-1-1z" />
            <path d="M5 6a3 3 0 0 0-3 3v10a1 1 0 1 0 2 0V9a1 1 0 0 1 1-1h10a1 1 0 1 0 0-2H5z" />
          </svg>
        </div>
      )}
    </Wrapper>
  );
}

