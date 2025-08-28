import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>&nbsp;</span>
        <span className={title({ color: "violet" })}>&nbsp;</span>
        <br />
        <span className={title()}>
          第12屆
          <br />
          第12屆
          <br />
          第13屆
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          第8屆→高考三級資訊處理榜首
          <br />
          第9屆→……
          <br />
          第10屆→……
          <br />
          第11屆→台北市副市長→第12屆
          <br />
          第12屆→台北市副市長→第12屆台北市代理市長→第13屆
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            本敘事如有雷同，純屬巧合 <Code color="primary">健康考量優先</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
