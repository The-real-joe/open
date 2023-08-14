import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Yoda (Star Wars) Persona: "Farm, you will. Succeed, you must. With
          OpenRegen, the force of AI, you have."
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <Image
              src="/openregen-logo.svg" // Replace with OpenRegen logo
              alt="OpenRegen Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/openregen-main.svg" // Replace with OpenRegen main image
          alt="OpenRegen Main Image"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/about-us" // Replace with actual route
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>About Us</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover more about our mission and the team behind OpenRegen.
          </p>
        </a>

        <a
          href="/products" // Replace with actual route
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Our Products</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore our range of AI-powered tools designed to empower farmers.
          </p>
        </a>

        <a
          href="/learn" // Replace with actual route
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Learn</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about how our AI technology can transform farming.
          </p>
        </a>

        <a
          href="/contact-us" // Replace with actual route
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Contact Us</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get in touch with us for any questions or support.
          </p>
        </a>
      </div>
    </main>
  );
}
