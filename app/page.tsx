import Image from "next/image";

const portfolioSamples = [
  {
    src: "/assets/ganchart_and_sample_estimate/Ganchart and sample estimates/ganchart.jpeg",
    alt: "Gantt chart and project schedule sample",
    title: "Gantt Chart & Schedule",
    caption:
      "Schedule planning and progress visuals for construction estimating.",
  },
  {
    src: "/assets/ganchart_and_sample_estimate/Ganchart and sample estimates/estimate_1.jpeg",
    alt: "Sample construction cost estimate sheet",
    title: "Sample Cost Estimate",
    caption: "Detailed estimate breakdown with materials, labor, and totals.",
  },
  {
    src: "/assets/Quantity_takeoff/Quantity take off using Bluebeam and zztakeoff/4d6bc1e1-c915-475f-b848-4a11e420227e.jpeg",
    alt: "Bluebeam quantity takeoff sample",
    title: "Quantity Takeoff & Cost Estimation (Bluebeam)",
    caption: "Quantity takeoff and cost estimation using Bluebeam.",
  },
  {
    src: "/assets/Quantity_takeoff/Quantity take off using Bluebeam and zztakeoff/64caafd8-86a4-4099-9536-622a40ad3945.jpeg",
    alt: "Quantity takeoff worksheet and material lists",
    title: "Quantity Takeoff (zztakeoff)",
    caption: "Quantity takeoff using zztakeoff.",
  },
];

const experience = [
  {
    logo: "/assets/arki.j.jpg",
    company: "Arki J",
    role: "Site Engineer / Estimator",
    detail:
      "Supported site engineering oversight alongside cost estimating and quantity takeoff for construction projects.",
  },
  {
    logo: "/assets/prodisenyo.jpg",
    company: "Prodisenyo",
    role: "Site Engineer / Estimator",
    detail:
      "Handled site engineering tasks together with project cost estimation and quantity takeoff deliverables.",
  },
];

const services = [
  "Residential and civil cost estimating",
  "Quantity takeoff with Bluebeam / zztakeoff",
  "Structural BOQ and unit rate costing",
  "Roofing, electrical and fencing cost breakdowns",
  "Gantt chart and schedule planning",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Estimator Portfolio
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Julito Ochia — Remote Construction Estimator
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-700">
              A practical, detail-oriented cost estimator for residential and
              civil works. I prepare structured construction quotations, cost
              breakdowns, and material analysis in client-ready formats.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Request a quote
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
            <div className="flex h-full flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Portfolio highlights
              </p>
              <div className="grid gap-4">
                {portfolioSamples.slice(0, 3).map((sample) => (
                  <div
                    key={sample.src}
                    className="overflow-hidden rounded-3xl bg-slate-100"
                  >
                    <Image
                      src={sample.src}
                      alt={sample.alt}
                      width={1200}
                      height={900}
                      className="h-[220px] w-full object-cover"
                    />
                    <div className="space-y-1 border-t border-slate-200 px-4 py-4">
                      <p className="font-semibold text-slate-900">
                        {sample.title}
                      </p>
                      <p className="text-sm leading-6 text-slate-600">
                        {sample.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">
                Services for remote estimate and takeoff work
              </h2>
              <p className="text-slate-700 leading-8">
                I create clear, static estimate deliverables for clients who
                need online support in construction and quantity surveying.
                These services are built around digital takeoff, cost
                breakdowns, and simple project visuals that make bidding and
                planning easier.
              </p>
              <ul className="space-y-3 text-slate-700">
                {services.map((service) => (
                  <li key={service} className="flex gap-3 text-base leading-7">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Ready for project work
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                Remote estimator support for your next bid
              </h3>
              <p className="mt-4 text-slate-700 leading-7">
                Fast sample estimates, quantity takeoff, roofing and structural
                costing, and schedule visuals for clients who need clear scope
                and pricing without on-site visits.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Hire me
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Full time</h3>
              <p className="mt-3 text-4xl font-bold tracking-tight">$600</p>
              <p className="mt-4 text-slate-300 leading-7">
                Full-time remote estimating support for ongoing construction and
                quantity takeoff projects.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Hire me
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                Part time
              </h3>
              <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                $300
              </p>
              <p className="mt-4 text-slate-700 leading-7">
                Part-time remote estimating and takeoff services for flexible
                project support.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Project experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Most recent project experience
            </h2>
            <p className="max-w-2xl text-slate-700 leading-8">
              These recent engagements show how I build accurate, client-ready
              cost estimates and structured quantity takeoff deliveries for
              residential and civil works.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project 1
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                Residential construction estimate
              </h3>
              <p className="mt-4 text-slate-700 leading-7">
                Full construction cost estimation for a residential building,
                including detailed material, labor, and equipment breakdowns.
              </p>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Prepared detailed quotations covering materials, labor, and
                  equipment.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Structured cost breakdowns for different work components.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Delivered a clear, client-ready cost sheet and estimate
                  format.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Project 2
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                Civil / structural fence works
              </h3>
              <p className="mt-4 text-slate-700 leading-7">
                Detailed estimate and BOQ for fence construction with a
                retaining structure, using unit rate costing and organized cost
                sheets.
              </p>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Developed a structured bill of quantities (BOQ) format.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Calculated total project cost using unit rate analysis.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                  Organized clear sections for materials, unit cost, and totals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Tools
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Software and tools I use
            </h2>
            <p className="max-w-2xl text-slate-700 leading-8">
              I use trusted estimating and takeoff software to create accurate,
              professional construction estimate deliverables.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                logo: "/assets/AutoCad_new_logo.svg.png",
                name: "AutoCAD",
                detail: "Drafting and drawing review for accurate site plans.",
              },
              {
                logo: "/assets/bluebeam-color-logo.png",
                name: "Bluebeam",
                detail: "PDF markup, takeoff, and quantity review.",
              },
              {
                logo: "/assets/zztakeoff-logo-black.svg",
                name: "zztakeoff",
                detail: "Detailed quantity takeoff and measurement capture.",
              },
              {
                logo: "/assets/Microsoft-Excel-Symbol.png",
                name: "Microsoft Excel",
                detail: "Cost sheets, pricing tables, and estimate totals.",
              },
              {
                logo: "/assets/SketchUp-logo.png",
                name: "SketchUp",
                detail: "3D modeling for visualizing project scope and layout.",
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <p className="mt-5 text-lg font-semibold text-slate-950">
                  {tool.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {tool.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Work experience
            </h2>
            <p className="max-w-2xl text-slate-700 leading-8">
              Hands-on site engineering combined with cost estimating and
              quantity takeoff for construction projects.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-950">
                      {job.company}
                    </p>
                    <p className="text-sm font-medium text-slate-600">
                      {job.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {job.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mt-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Portfolio
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Sample work from existing estimate assets
            </h2>
            <p className="max-w-2xl text-slate-700 leading-8">
              The website pulls from existing estimate visuals and takeoff
              extracts in the project assets. These examples show both planning
              documents and material measurement outputs.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioSamples.map((sample) => (
              <div
                key={sample.src}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={sample.src}
                  alt={sample.alt}
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover"
                />
                <div className="space-y-2 p-4">
                  <p className="font-semibold text-slate-900">{sample.title}</p>
                  <p className="text-sm leading-6 text-slate-600">
                    {sample.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-slate-950 px-8 py-10 text-white">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                How I work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Estimate workflow for low-risk delivery
              </h2>
              <p className="max-w-xl leading-8 text-slate-300">
                Each engagement is grounded in a review of drawings, a digital
                takeoff, a structured cost estimate, and a clean visual summary
                that can be shared with clients or contractors.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Review drawings",
                  detail: "Assess scope, materials and project requirements.",
                },
                {
                  title: "Quantity takeoff",
                  detail:
                    "Use Bluebeam/zztakeoff for accurate counts and lengths.",
                },
                {
                  title: "Cost breakdown",
                  detail:
                    "Map labor, materials, and overhead with clear pricing.",
                },
                {
                  title: "Schedule visuals",
                  detail: "Show project pacing with simple Gantt-style charts.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6"
                >
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/50"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Let's plan your next estimate
              </h2>
              <p className="mt-4 max-w-xl text-slate-700 leading-8">
                I provide static portfolio samples and remote estimating support
                for contractors, developers, and online project managers. Send
                your project scope or drawing package and I will prepare a clear
                estimate response.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Quote request
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Available for remote estimating, takeoff, and project support.
              </p>
              <div className="rounded-3xl bg-white p-5 text-sm text-slate-700 shadow-sm shadow-slate-200/50">
                Email:{" "}
                <span className="font-semibold">ochiajulito@gmail.com</span>
              </div>
              <div className="rounded-3xl bg-white p-5 text-sm text-slate-700 shadow-sm shadow-slate-200/50">
                Portfolio purpose: Static estimate showcase for online
                construction support.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
