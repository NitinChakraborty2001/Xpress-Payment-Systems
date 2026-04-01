import { ServicePage } from "@/app-views/ServicePage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
