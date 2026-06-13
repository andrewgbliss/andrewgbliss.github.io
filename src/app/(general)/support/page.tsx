"use client";

import { useState } from "react";
import { website } from "@/lib/website";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Please enter a message"),
});

type FormValues = z.infer<typeof formSchema>;

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitted(true);
      // await createSupportTicket(data);
      form.reset();
    } catch (error) {
      console.error("Error submitting support request:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen pt-16 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto max-w-4xl page-p py-16">
          {submitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="mb-4">
                We have received your support request and will get back to you
                shortly at the email address you provided.
              </p>
              <p className="mb-6">
                Our team typically responds within 24-48 business hours.
              </p>
            </div>
          ) : (
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold mb-8">Support</h1>
              <p className="mb-6">
                Need help? Fill out the form below and our team at{" "}
                {website.name} will get back to you as soon as possible.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
