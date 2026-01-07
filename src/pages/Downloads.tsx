import { Layout } from "@/components/layout/Layout";
import { DownloadsTable } from "@/components/downloads/DownloadsTable";

const Downloads = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Download & Help</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Essential software, drivers, and guides for digital signatures and e-tendering
            </p>
          </div>
          <DownloadsTable />
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;
