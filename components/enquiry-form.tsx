"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle, User, Phone, Bed, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number").max(15),
  sharing: z.string().min(1, "Please select a room preference"),
  moveIn: z.string().min(1, "Please select a move-in date"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      sharing: "",
      moveIn: "",
      message: "",
    },
  })

  function onSubmit(data: FormValues) {
    console.log("[v0] Form submitted:", data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-12 section-gradient">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Book Your Stay
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Move In?
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Fill out the enquiry form and our team will get back to you
              within 2 hours. You can also call us directly for instant booking.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">info@ssgentspg.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Enquiry Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We will contact you within 2 hours. Thank you for choosing SS Gents PG.
                  </p>
                  <Button
                    className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      setSubmitted(false)
                      form.reset()
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="mb-6 text-xl font-semibold text-card-foreground">Enquiry Form</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-card-foreground">
                              <User className="h-4 w-4 text-muted-foreground" /> Full Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Rahul Sharma" {...field} className="rounded-xl" />
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
                            <FormLabel className="flex items-center gap-2 text-card-foreground">
                              <Phone className="h-4 w-4 text-muted-foreground" /> Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} className="rounded-xl" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sharing"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-card-foreground">
                              <Bed className="h-4 w-4 text-muted-foreground" /> Room Preference
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl">
                                  <SelectValue placeholder="Select room type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-sharing">Single Room - ₹8,500/mo</SelectItem>
                                <SelectItem value="2-sharing">Double Sharing - ₹6,500/mo</SelectItem>
                                <SelectItem value="3-sharing">Triple Sharing - ₹5,500/mo</SelectItem>
                                <SelectItem value="4-sharing">Quad Sharing - ₹4,500/mo</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="moveIn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-card-foreground">
                              <Calendar className="h-4 w-4 text-muted-foreground" /> Move-in Date
                            </FormLabel>
                            <FormControl>
                              <Input type="date" {...field} className="rounded-xl" />
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
                            <FormLabel className="text-card-foreground">Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any special requirements or questions..."
                                rows={3}
                                {...field}
                                className="rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Enquiry
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
