"use client";
import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function HostPage() {
  return (
    <div>
      <h1 className={title()}>Host</h1>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Vercel</p>
            <p className="text-small text-default-500">
              Fast Data Transfer: 100 GB /month included
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>vercel.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://vercel.tpe12thmayor2025to2038.com"
          >
            Vercel
          </Link>
        </CardFooter>
        <Image
          alt="Vercel"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-27 at 00-53-00 星空下微風輕拂黃光閃耀的世界零.png"
          width={333}
        />
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">netlify</p>
            <p className="text-small text-default-500">100GB bandwidth</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>netlify.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://netlify.tpe12thmayor2025to2038.com"
          >
            netlify
          </Link>
        </CardFooter>
        <Image
          alt="Joomla"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-27 at 00-53-00 星空下微風輕拂黃光閃耀的世界零.png"
          width={333}
        />
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Cloudflare</p>
            <p className="text-small text-default-500">Unlimited bandwidth</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>cloudflare.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://cloudflare.tpe12thmayor2025to2038.com"
          >
            Cloudflare
          </Link>
        </CardFooter>
        <Image
          alt="Drupal"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-27 at 00-53-00 星空下微風輕拂黃光閃耀的世界零.png"
          width={333}
        />
      </Card>
    </div>
  );
}
