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
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">WordPress</p>
            <p className="text-small text-default-500">Vultr</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>wordpress.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://wordpress.tpe12thmayor2025to2038.com"
          >
            WordPress
          </Link>
        </CardFooter>
        <Image
          alt="WordPress"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-26 at 23-38-43 關於 – 星空下微風輕拂黃光閃耀的世界.png"
          width={333}
        />
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Joomla</p>
            <p className="text-small text-default-500">Vultr</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>joolma.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://joolma.tpe12thmayor2025to2038.com"
          >
            Joomla
          </Link>
        </CardFooter>
        <Image
          alt="Joomla"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-26 at 23-48-43 文章.png"
          width={333}
        />
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Drupal</p>
            <p className="text-small text-default-500">Vultr</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>drupal.tpe12thmayor2025to2038.com</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://drupal.tpe12thmayor2025to2038.com"
          >
            Drupal
          </Link>
        </CardFooter>
        <Image
          alt="Drupal"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-26 at 23-54-08 關於 星空下微風輕拂黃光閃耀的世界.png"
          width={333}
        />
      </Card>
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
          <Link
            isExternal
            showAnchorIcon
            href="https://ghost.tpe12thmayor2025to2038.com/"
          >
            Ghost
          </Link>
        </CardFooter>
        <Image
          alt="Drupal"
          height={333}
          radius="sm"
          src="/images/Screenshot 2025-08-27 at 00-37-13 關於.png"
          width={333}
        />
      </Card>
    </div>
  );
}
