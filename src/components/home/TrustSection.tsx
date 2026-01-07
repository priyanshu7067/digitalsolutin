import { CheckCircle2, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: CheckCircle2, value: "50,000+", label: "DSCs Issued" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const features = [
  "Government Authorized CA Partner",
  "Same Day DSC Issuance",
  "Expert Technical Support",
  "Affordable Pricing",
  "Pan India Service",
  "Online & Doorstep Service",
];

export function TrustSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Why Choose Digital Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 15 years of experience in digital certification and business compliance services, we are your trusted partner for all e-governance needs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 bg-card rounded-xl border border-border text-center card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
