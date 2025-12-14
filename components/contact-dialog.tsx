"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Show success animation for 2 seconds then close dialog
      setTimeout(() => {
        setIsSuccess(false)
        onOpenChange(false)
        setFormData({ name: "", phone: "", email: "", message: "" })
      }, 2000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Success Animation Overlay */}
        {isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center bg-card/95 rounded-2xl z-10 animate-fadeIn">
            <div className="text-center space-y-4 animate-scaleIn">
              <div className="inline-block p-4 bg-green-500/20 rounded-full">
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you soon.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
