import { WORK_EXPERIENCE } from "@/db/experience";
import Link from "next/link";

function ExperienceSection() {
  return (
    <div className="mb-16  mt-20">
      <div className="flex flex-row justify-between items-center gap-5">
        <h4>Work Experience</h4>
        
      </div>
      <br />
      <div>
        {WORK_EXPERIENCE.map((item) => {
          return (
            <Link href={`${item.company_website}`} key={item.id}>
              <div className="border-b border-dashed py-5 hover:scale-[1.02] ease-in-out duration-500">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h5>{item.company_name}</h5>
                  <p className="text-neutral-500 text-sm">{item.duration}</p>
                </div>
                <p className="text-neutral-500">{item.job_type}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceSection;
