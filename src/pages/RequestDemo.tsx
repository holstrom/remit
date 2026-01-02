import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Building2, Users, Mail, Phone, Star } from "lucide-react";

const demoSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Enter a valid email").max(255),
  phone: z.string().min(7, "Enter a valid phone number").max(25),
  company: z.string().min(1, "Company name is required").max(120),
  role: z.string().min(1, "Select your role"),
  teamSize: z.string().min(1, "Select team size"),
  timeline: z.string().min(1, "Share your deployment timeline"),
  goals: z.string().min(10, "Please describe your goals"),
});

type DemoFormData = z.infer<typeof demoSchema>;

const RequestDemo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      teamSize: "",
      timeline: "",
      goals: "",
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast({
        title: "Demo request received",
        description: "Our solutions team will respond within one business day.",
      });
      form.reset();
      console.log("Demo request", data);
    } catch (error) {
      console.error("Demo request failed", error);
      toast({
        title: "Unable to submit",
        description:
          "Please try again or email support@easyremitsolutions.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className=" pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="container px-4 relative z-10 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white/60 mb-4">
            Request a Demo
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            See Easy Remit Solutions in Action
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Tell us about your organization, growth plans, and cross-border
            roadmap. We'll tailor a live walkthrough that highlights the modules
            and workflows that matter most to your team.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Building2 className="w-5 h-5 text-cyan" />
                <span className="text-sm font-semibold">Global Coverage</span>
              </div>
              <p className="text-white/70 text-sm mt-2">
                Demos showcase compliance-ready corridors in 180+ countries.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Users className="w-5 h-5 text-teal" />
                <span className="text-sm font-semibold">Multi-Team Views</span>
              </div>
              <p className="text-white/70 text-sm mt-2">
                Invite compliance, operations, and product stakeholders.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Star className="w-5 h-5 text-gold" />
                <span className="text-sm font-semibold">Live Sandbox</span>
              </div>
              <p className="text-white/70 text-sm mt-2">
                Get credentials to continue exploring after the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-8">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <Card className="shadow-2xl border-0">
              <CardHeader className="pb-6 border-b">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl font-heading">
                    Book a Live Walkthrough
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Complete the form and we will coordinate a time with your
                  regional solutions architect.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-primary" />
                              Work Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@company.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-primary" />
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Easy Remit" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="founder">
                                  Founder / Executive
                                </SelectItem>
                                <SelectItem value="ops">
                                  Operations / Treasury
                                </SelectItem>
                                <SelectItem value="compliance">
                                  Compliance / Risk
                                </SelectItem>
                                <SelectItem value="product">
                                  Product / Engineering
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="teamSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Team Size</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-50">1 - 50</SelectItem>
                                <SelectItem value="51-200">51 - 200</SelectItem>
                                <SelectItem value="201-1000">
                                  201 - 1,000
                                </SelectItem>
                                <SelectItem value="1000+">1,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Launch Timeline</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeframe" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="immediate">
                                  Immediate (0-30 days)
                                </SelectItem>
                                <SelectItem value="quarter">
                                  This Quarter
                                </SelectItem>
                                <SelectItem value="six-months">
                                  3-6 Months
                                </SelectItem>
                                <SelectItem value="later">
                                  Keep me posted
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What would you like to cover?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share current pain points, corridors, integrations, or KPIs you're targeting."
                              className="min-h-[140px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Scheduling your demo..."
                        : "Request Demo"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-card shadow-lg">
                <h3 className="text-lg font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    • 45-minute live walkthrough tailored to your corridors.
                  </li>
                  <li>
                    • Coverage of compliance, operations, and customer
                    experience.
                  </li>
                  <li>
                    • Technical deep dive with solutions architects on request.
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Need NDA first?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We routinely operate under mutual NDAs with banks, fintechs,
                  and regulated partners. Let us know in the notes and our legal
                  team will share the latest template.
                </p>
                <div className="text-sm">
                  <p className="text-foreground font-semibold">Direct line</p>
                  <p className="text-muted-foreground">
                    support@easyremitsolutions.com
                  </p>
                  <p className="text-muted-foreground">+1 (332) 702-1843</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Tuesday & Thursday: APAC & EMEA slots
                  <br />
                  Wednesday & Friday: Americas slots
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDemo;
