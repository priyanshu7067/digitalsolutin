import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ServicesHighlight />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
