import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, HelpCircle, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getServiceBySlug, services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Service Not Found</h1>
            <Button asChild><Link to="/services">Back to Services</Link></Button>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = service.icon;
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold">{service.title}</h1>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

              <div className="bg-card rounded-xl border border-border p-6 mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Documents Required
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-heading text-xl font-semibold mb-4">Need Help?</h3>
                <p className="mb-6 opacity-90">Contact our experts for personalized assistance.</p>
                <Button asChild variant="secondary" className="w-full btn-press">
                  <Link to="/contact"><Phone className="w-4 h-4 mr-2" /> Contact Us</Link>
                </Button>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-semibold mb-4">Related Services</h3>
                <div className="space-y-3">
                  {relatedServices.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="block p-3 rounded-lg hover:bg-muted transition-colors">
                      <p className="font-medium">{s.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
