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
          歡迎來到星空下微風輕拂黃光閃耀的世界
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          這裡是星空下微風輕拂黃光閃耀的世界分支選擇
          <br />
          繼任網站叫做鋒兄塗哥公關資訊
          <br />
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
