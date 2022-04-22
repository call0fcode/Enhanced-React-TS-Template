interface Tech {
  name: string;
  icon: string;
  url: string;
}

const techs: Tech[] = [
  {
    name: "Vite",
    icon: "https://api.iconify.design/logos:vitejs.svg?color=%23888888",
    url: "https://vitejs.dev/",
  },
  {
    name: "React",
    icon: "https://api.iconify.design/logos:react.svg?color=%23888888",
    url: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    icon: "https://api.iconify.design/logos:typescript-icon.svg?color=%23888888",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Prettier",
    icon: "https://api.iconify.design/logos:prettier.svg?color=%23888888",
    url: "https://prettier.io/",
  },
  {
    name: "ESLint",
    icon: "https://api.iconify.design/logos:eslint.svg?color=%23888888",
    url: "https://eslint.org/",
  },
  {
    name: "SASS",
    icon: "https://api.iconify.design/logos:sass.svg?color=%23888888",
    url: "https://sass-lang.com/",
  },
  {
    name: "Tailwind CSS",
    icon: "https://api.iconify.design/logos:tailwindcss-icon.svg?color=%23888888",
    url: "https://tailwindcss.com/",
  },
];

const Tech: React.FC<{ tech: Tech }> = ({ tech }) => {
  return (
    <li className="cursor-pointer rounded-xl p-5 text-2xl shadow-xl hover:shadow-blue-200">
      <a
        href={tech.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-4"
      >
        {tech.name}
        <img className="w-14" src={tech.icon} alt={`${tech.name} Logo`} />
      </a>
    </li>
  );
};

function App() {
  return (
    <main className="grid place-content-center bg-gray-400 py-10 px-5 lg:h-screen">
      <div className="relative max-w-sm space-y-8 rounded-xl bg-white p-10 text-center shadow-xl lg:max-w-none">
        <a
          href="https://github.com/call0fcode/Enhanced-React-TS-Template"
          target="_blank"
          rel="noreferrer"
          className="group absolute top-5 right-2/4 flex translate-x-2/4 items-center space-x-3 lg:right-5 lg:translate-x-0"
        >
          <p className="hidden text-xs blur transition-all duration-700 group-hover:opacity-100 group-hover:blur-0 lg:block lg:opacity-0">
            View on GitHub
          </p>
          <img
            src="https://api.iconify.design/logos:github-icon.svg?color=%23888888"
            alt="GitHub Logo"
            className="w-10 transition-all duration-700 group-hover:scale-110"
          />
        </a>
        <h1 className="text-4xl font-bold text-gray-700">
          Enhanced React Template
        </h1>
        <p className="mb-4 text-2xl font-medium">Preconfigured with</p>
        <ul className="flex flex-col flex-wrap gap-10 lg:flex-row lg:justify-around">
          {techs.map((tech) => (
            <Tech key={tech.name} tech={tech} />
          ))}
        </ul>
        <p className="!mt-12 text-xs font-light text-gray-900">
          Designed with ❤ by{" "}
          <a
            className="font-normal transition-all duration-500 hover:text-blue-500"
            href="https://github.com/call0fcode"
            target="_blank"
            rel="noreferrer"
          >
            call0fCode
          </a>
        </p>
      </div>
    </main>
  );
}

export default App;
