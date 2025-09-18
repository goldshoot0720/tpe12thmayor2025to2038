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

      {/* Vercel */}
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
          <p>tpe12thmayor2025to2038.vercel.app</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://tpe12thmayor2025to2038.vercel.app">
            Vercel
          </Link>
        </CardFooter>
        <Image alt="Vercel" height={333} radius="sm" src="" width={333} />
      </Card>

      {/* Netlify */}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Netlify</p>
            <p className="text-small text-default-500">100GB bandwidth</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>netlify.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://netlify.tpe12thmayor2025to2038.com">
            Netlify
          </Link>
        </CardFooter>
        <Image alt="Netlify" height={333} radius="sm" src="" width={333} />
      </Card>

      {/* Cloudflare */}
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
          <Link isExternal showAnchorIcon href="https://cloudflare.tpe12thmayor2025to2038.com">
            Cloudflare
          </Link>
        </CardFooter>
        <Image alt="Cloudflare" height={333} radius="sm" src="" width={333} />
      </Card>
    </div>
  );
}
