import Image from "next/image";
import Link from "next/link";

import { FiBook, FiBriefcase, FiLayers, FiMail, FiSettings } from "react-icons/fi";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";

import Spotlight from "./components/spotlight";
import PrimaryLinks from "./components/primary-links";

const iconClass = "text-zinc-300 text-lg";

const links = [
  {
    icon: <FiLayers className={iconClass} />,
    title: "Projects",
    url: "https://www.projextly.com/projects",
  },
  {
    icon: <FiBook className={iconClass} />,
    title: "Blog",
    url: "https://www.projextly.com/blog",
  },
  {
    icon: <FiBriefcase className={iconClass} />,
    title: "Services",
    url: "https://www.projextly.com/services",
  },
  {
    icon: <FiSettings className={iconClass} />,
    title: "Customize Projects",
    url: "https://www.projextly.com/customize",
  },
  {
    icon: <FiMail className={iconClass} />,
    title: "Contact Us",
    url: "https://www.projextly.com/contact",
  },
  {
    icon: <SiInstagram className={iconClass} />,
    title: "Instagram",
    url: "https://instagram.com/projextly",
  },
  {
    icon: <SiGithub className={iconClass} />,
    title: "GitHub",
    url: "https://github.com/projextly",
  },
  {
    icon: <SiX className={iconClass} />,
    title: "X",
    url: "https://x.com/projextly",
  },
];


const HomePage = () => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24">
        <Spotlight className="-top-4 left-56" />

        <Image
          src="/logo.png"
          width={90}
          height={90}
          alt="Projextly Logo"
          className="rounded-full"
          priority
        />

        <h1 className="text-xl font-semibold">Projextly Links</h1>
      </div>

      <PrimaryLinks />

      <div className="flex flex-col gap-4 py-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 transition-colors duration-300 hover:border-zinc-500"
          >
            <div className="absolute left-8">{link.icon}</div>
            <div className="text-zinc-100">{link.title}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
