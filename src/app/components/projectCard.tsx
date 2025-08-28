"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
      <Image src={image} alt={title} width={600} height={300} className="rounded-t-lg object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <a href={link} target="_blank" className="block mt-4 text-blue-600 hover:underline">
          🔗 Abrir proyecto
        </a>
      </CardContent>
    </Card>
  );
}
