import { getBlogs } from "@/utils/fetch-mdx";
import Link from "next/link";
import React from "react";
import { PROJECTS } from "@/db/projects";

async function Page() {
  const blogs = await getBlogs();
  return (
    <div className="mb-16">
      <div className="flex flex-row justify-between items-center gap-5">
        <h4>Projects</h4>
      </div>
      <br />
      <div>
        {PROJECTS.map((item) => {
          return (
            <Link href={`${item.href}`} key={item.id} target="_blank">
              <div className="border-b  border-dashed py-5 hover:scale-[1.02] ease-in-out duration-500">
                <h5>{item.name}</h5>
                <p className="text-neutral-500">{item.about}</p>
                <div className="mt-3 flex items-center gap-3 flex-wrap">
                  {item.stack.map((item, index) => {
                    return (
                      <p key={index} className="text-sm">
                        {item}
                      </p>
                    );
                  })}
                </div>
                {/* <br /> */}
                {/* <div>
                  <Image src={item.img} alt={item.name}/>
                </div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
