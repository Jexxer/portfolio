import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 h-full border-red-500">
      <MyInfo />
    </div>
  );
};

const MyInfo = () => {
  return (
    <section className="rounded-lg m-3 p-5 flex flex-col lg:flex-row bg-neutral-500">
      <div className="rounded-full place-self-center overflow-hidden w-[120px] h-[120px] relative">
        <Image src="/headshot.jpg" fill alt="Jesse Watson headshot" />
      </div>

      <div className="flex flex-1 items-center justify-center mb-4">
        <div className="flex flex-col">
          <span className="text-bold text-white text-2xl">Jesse Watson</span>
          <span className="text-bold text-white text-xs place-self-center">
            Software Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
