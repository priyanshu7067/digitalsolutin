import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        "group block p-6 bg-card rounded-xl border border-border",
        "card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      )}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {service.summary}
      </p>

      {/* Divider */}
      <div className="h-px bg-border mb-4" />

      {/* Link */}
      <span className="inline-flex items-center text-primary text-sm font-medium">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
