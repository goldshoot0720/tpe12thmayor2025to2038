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

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>

      {/* WordPress */}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">WordPress</p>
            <p className="text-small text-default-500">Vultr</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>www.tpe12thmayor2038from2025.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://www.tpe12thmayor2038from2025.com/">
            WordPress
          </Link>
        </CardFooter>
        <Image alt="WordPress" height={333} radius="sm" src="" width={333} />
      </Card>

      {/* Drupal */}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Drupal</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>www.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://www.tpe12thmayor2025to2038.com/">
            Drupal
          </Link>
        </CardFooter>
        <Image alt="Drupal" height={333} radius="sm" src="" width={333} />
      </Card>

      {/* Ghost */}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Ghost</p>
            <p className="text-small text-default-500">DigitalPress</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>ghost.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://tpe12thmayor2025to2038.digitalpress.blog">
            Ghost
          </Link>
        </CardFooter>
        <Image alt="Ghost" height={333} radius="sm" src="" width={333} />
      </Card>
    </div>
  );
}
