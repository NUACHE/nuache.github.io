import Link from "next/link";
import { BiChevronDown, BiDownload } from "react-icons/bi";
import { SiDevdotto,  SiGithub, SiGmail, SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <div className="pb-[10vh]">
      <div>
        <p className="text-neutral-500 text-sm">Hi! I&apos;m Michael.</p>
        <h1 className="mt-2">
          Software Engineer,
          <br />
        </h1>
      </div>
      <br />
      <div>
        <p>
          I&apos;m a Software Engineer, currently focusing on Mobile
          Development and Front-End.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 my-5">
          {/* <Link href={"mailto:asantekwasi101@gmail.com"} target="_blank">
            <button className="btn rounded-full">
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full"></div>
              <p className="text-sm mt-0">Download Resume</p>
              <BiDownload />
            </button>
          </Link> */}
          <div className="flex items-center gap-5">
            <Link
              href={"https://github.com/nuache"}
              target="_blank"
              className="text-2xl"
            >
              <SiGithub />
            </Link>
            <Link
              href={"https://dev.to/topboyasante"}
              target="_blank"
              className="text-2xl"
            >
              <SiDevdotto />
            </Link>
            <Link
              href={"mailto:michaelopoku790@gmail.com"}
              target="_blank"
              className="text-2xl"
            >
              <SiGmail />
            </Link>
            <Link
              href={"mailto:michaelopoku790@gmail.com"}
              target="_blank"
              className="text-2xl"
            >
              <SiLeetcode />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
