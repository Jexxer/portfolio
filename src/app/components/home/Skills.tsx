const Skills = () => {
  return (
    <div className="w-full">
      <div className="rounded-lg m-3 p-5 flex flex-col lg:flex-row bg-neutral-500 shadow-md justify-center">
        <nav
          aria-label="Tabs"
          className="flex border-b border-gray-100 text-sm font-medium self-center"
        >
          <a
            href="#"
            className="-mb-px border-b border-current p-4 text-cyan-500"
          >
            Core Skills
          </a>
          <a
            href="#"
            className="-mb-px border-b border-slate-700 p-4 hover:text-cyan-500"
          >
            Secondary
          </a>
          <a
            href="#"
            className="-mb-px border-b border-slate-700 p-4 hover:text-cyan-500"
          >
            Additional
          </a>
          {/* <a
            href=""
            className="-mb-px border-b border-slate-700 p-4 hover:text-cyan-500"
          >
            Platinum
          </a> */}
        </nav>
      </div>
    </div>
  );
};

export default Skills;
