import type { NextPageWithLayout } from "../_app";
import RootLayout from "../layout";

const Plans: NextPageWithLayout = () => {
  const plans = [
    {
      title: "Personal",
      desc: "For the small-scale farmer",
      price: "Free",
      features: [
        "Up to 5 acres",
        "1 user",
        "1 farm",
        "1 field",
        "1 crop",
        "1 season",
        "1 soil sample",
        "1 harvest yield",
        "1 crop yield",
        "1 soil health score",
        "1 crop health score",
        "1 soil health report",
        "1 crop health report",
        "1 soil health graph",
        "1 crop health graph",
        "1 soil health map",
        "1 crop health map",
        "1 soil health forecast",
        "1 crop health forecast",
      ],
    },
    {
      title: "Professional",
      desc: "For the commercial farmer",
      price: "£99.99/month",
      features: [
        "Up to 100 acres",
        "10 users",
        "10 farms",
        "10 fields",
        "10 crops",
        "10 seasons",
        "10 soil samples",
        "10 harvest yields",
        "10 crop yields",
        "10 soil health scores",
        "10 crop health scores",
        "10 soil health reports",
        "10 crop health reports",
        "10 soil health graphs",
        "10 crop health graphs",
        "10 soil health maps",
        "10 crop health maps",
        "10 soil health forecasts",
        "10 crop health forecasts",
      ],
    },
    {
      title: "Enterprise",
      desc: "For the agricultural corporation",
      price: "£999.99/month",
      features: [
        "Unlimited acres",
        "Unlimited users",
        "Unlimited farms",
        "Unlimited fields",
        "Unlimited crops",
        "Unlimited seasons",
        "Unlimited soil samples",
        "Unlimited harvest yields",
        "Unlimited crop yields",
        "Unlimited soil health scores",
        "Unlimited crop health scores",
        "Unlimited soil health reports",
        "Unlimited crop health reports",
        "Unlimited soil health graphs",
        "Unlimited crop health graphs",
        "Unlimited soil health maps",
        "Unlimited crop health maps",
        "Unlimited soil health forecasts",
        "Unlimited crop health forecasts",
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Plans</h1>
      </div>
      <div className="flex flex-wrap justify-around w-full max-w-4xl mt-16">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            // href={plan.link}
            className="group w-96 m-4 rounding-lg shadow-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <div className="p-5">
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="text-sm mt-2 text-gray-600">{plan.desc}</p>
              <p className="text-sm mt-2 text-gray-600">{plan.price}</p>
              <ul className="list-disc list-inside">
                {plan.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
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
};

Plans.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Plans;
