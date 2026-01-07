import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "123 Business Avenue, Tech Park,\nMumbai, Maharashtra 400001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@digitalsolution.com",
    href: "mailto:info@digitalsolution.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM\nSunday: Closed",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-6">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="block hover:bg-muted/50 -mx-4 px-4 py-2 rounded-lg transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755556256089!2d72.82589261508657!3d19.02197568715261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6b5a12aaa3%3A0x9e938c0f84e32c4f!2sBandra%20Kurla%20Complex%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}
