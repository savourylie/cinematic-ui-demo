import { notFound } from "next/navigation";
import { Metadata } from "next";
import { demos } from "@/data/demos";
import Header from "@/components/Header";
import DemoViewer from "@/components/DemoViewer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = demos.find((d) => d.slug === slug);
  if (!demo) return {};
  return {
    title: `${demo.filmTitle} — Cinematic UI`,
    description: demo.description,
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = demos.find((d) => d.slug === slug);
  if (!demo) notFound();

  return (
    <>
      <Header />
      <DemoViewer demo={demo} />
    </>
  );
}
