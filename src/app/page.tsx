import Image from "next/image";

export default function Home() {
  const sections = [
    {
      title: "Embrace the Future of Farming",
      desc: "Learn how we're redefining farming with AI-assisted solutions. Meet our pioneers driving the regenerative agriculture revolution",
      link: "/about-us",
    },
    {
      title: "Harness the Power of AI",
      desc: "Investigate our suite of tools that combine innovative technology with traditional farming practices. Making agriculture smarter, for you.",
      link: "/products",
    },
    {
      title: "Join the Regeneration",
      desc: "Understand how AI and regenerative farming can harmoniously reshape agriculture and ensure sustainability. Get insights, stay informed.",
      link: "/learn",
    },
    {
      title: "Grow With Us",
      desc: "Have queries or need assistance? We're just a click away. Together we can cultivate a healthier planet.",
      link: "/contact-us",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 to-shamrock-900 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-black-800 lg:text-white lg:p-4 lg:dark:bg-zinc-800/30"
          style={{ color: "white", textShadow: "1px 1px black" }}
        >
          " Empower your farm with AI. Grow with OpenRegen, cultivating the
          future."
        </p>
      </div>

      <div className="flex flex-wrap justify-around w-full max-w-4xl mt-16">
        {sections.map((section, idx) => (
          <a
            key={idx}
            href={section.link}
            // className="group w-72 m-4 rounding-lg shadow-lg p=10 border border-transparent transition-all transform hover:scale-105"
            className="group w-72 m-4 rounding-lg shadow-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <div className="p-5">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-sm mt-2 text-gray-600">{section.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mb-32 text-center flex justify-center items-center lg:m-0">
        <a
          href="#" // Replace with actual link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-green-500"
        >
          <h2 className="text-lg font-semibold">Discover OpenRegen</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Begin your AI-assisted regenerative farming journey.
          </p>
        </a>
      </div>
    </main>
  );
}
