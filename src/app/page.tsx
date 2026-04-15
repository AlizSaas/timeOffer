import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, BarChart, CheckCircle, Users, Shield, ArrowRight } from 'lucide-react'
import { MobileNav } from "@/components/common/mobile-nav"
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-slate-200/60 dark:border-border sticky top-0 bg-white/80 dark:bg-background/80 backdrop-blur-md z-40">
        <MaxWidthWrapper className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              TimeOffer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Pricing
            </Link>
            
            {/* Auth buttons for desktop */}
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-500/25">
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <MobileNav />
          </div>
        </MaxWidthWrapper>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/50 dark:from-indigo-900/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/50 dark:from-purple-900/20 to-transparent rounded-full blur-3xl" />
          </div>
          
          <MaxWidthWrapper>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Trusted by 500+ teams worldwide</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                    Effortless
                    <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Time Off Management
                    </span>
                  </h1>
                  <p className="max-w-[540px] text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
                    Streamline your company&apos;s time off requests and approvals with our intuitive platform. Save hours of administrative work every week.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 group">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 group" asChild>
                      <Link href="/dashboard">
                        Go to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </SignedIn>
                  <Button variant="outline" size="lg" className="border-slate-300 dark:border-border text-slate-700 dark:text-foreground hover:bg-slate-50 dark:hover:bg-accent" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-background bg-gradient-to-br ${
                        i === 1 ? 'from-pink-400 to-pink-600' :
                        i === 2 ? 'from-blue-400 to-blue-600' :
                        i === 3 ? 'from-green-400 to-green-600' :
                        'from-orange-400 to-orange-600'
                      }`} />
                    ))}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-muted-foreground">
                    <span className="font-semibold text-slate-900 dark:text-foreground">500+</span> teams trust TimeOffer
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10" />
                  <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10" />
                  
                  <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border border-slate-200/50 dark:border-border bg-white dark:bg-card">
                    <div className="h-8 bg-slate-100 dark:bg-muted border-b border-slate-200 dark:border-border flex items-center gap-2 px-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <Image
                      src={"/horo.png"}
                      width={600}
                      height={400}
                      priority
                      className="w-full h-auto object-cover"
                      alt="TimeOffer dashboard screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 lg:py-28 bg-white dark:bg-background">
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800">
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Features</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-foreground">
                Everything you need to manage
                <span className="block text-indigo-600">time off effortlessly</span>
              </h2>
              <p className="max-w-[700px] text-lg text-slate-600 dark:text-muted-foreground">
                Discover the powerful features that make TimeOffer the best choice for managing time off requests.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Calendar,
                  title: "Easy Request Submission",
                  description: "Employees can submit time off requests in just a few clicks, making the process quick and efficient.",
                  color: "indigo"
                },
                {
                  icon: Clock,
                  title: "Automated Approvals",
                  description: "Streamline the approval process with customizable workflows that notify managers and track status automatically.",
                  color: "purple"
                },
                {
                  icon: BarChart,
                  title: "Comprehensive Reporting",
                  description: "Generate detailed reports on time off usage, patterns, and availability across teams and departments.",
                  color: "pink"
                },
                {
                  icon: Users,
                  title: "Team Calendar",
                  description: "View your entire team's availability at a glance with our intuitive shared calendar interface.",
                  color: "blue"
                },
                {
                  icon: Shield,
                  title: "Policy Compliance",
                  description: "Ensure all requests comply with company policies automatically, reducing HR workload significantly.",
                  color: "green"
                },
                {
                  icon: CheckCircle,
                  title: "Instant Notifications",
                  description: "Keep everyone in the loop with real-time notifications for requests, approvals, and schedule changes.",
                  color: "orange"
                }
              ].map((feature, index) => (
                <Card key={index} className="group relative overflow-hidden border-slate-200/50 dark:border-border hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex flex-col space-y-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        feature.color === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400' :
                        feature.color === 'purple' ? 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400' :
                        feature.color === 'pink' ? 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400' :
                        feature.color === 'blue' ? 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400' :
                        feature.color === 'green' ? 'bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400' :
                        'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-foreground">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>

        {/* How it works section */}
        <section id="how-it-works" className="w-full py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-background dark:to-background">
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950 border border-purple-100 dark:border-purple-800">
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">How it works</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-foreground">
                Get started in
                <span className="text-purple-600 dark:text-purple-400"> 3 simple steps</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Create your account",
                  description: "Sign up in seconds and set up your company profile with your time off policies."
                },
                {
                  step: "02",
                  title: "Invite your team",
                  description: "Add team members and configure approval workflows based on your organization structure."
                },
                {
                  step: "03",
                  title: "Start managing time off",
                  description: "Employees can immediately start submitting requests and managers can approve with one click."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center space-y-4 p-6">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700" />
                  )}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/25">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-foreground">{item.title}</h3>
                  <p className="text-slate-600 dark:text-muted-foreground max-w-[280px]">{item.description}</p>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 lg:py-28">
          <MaxWidthWrapper>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-16">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Ready to simplify time off?
                </h2>
                <p className="max-w-[600px] text-lg text-white/80">
                  Join hundreds of companies that trust TimeOffer to manage their team&apos;s time off requests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 shadow-lg group">
                        Get Started Free
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 shadow-lg group" asChild>
                      <Link href="/dashboard">
                        Go to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </SignedIn>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-border bg-slate-50 dark:bg-background">
        <MaxWidthWrapper>
          <div className="py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    TimeOffer
                  </span>
                </Link>
                <p className="text-sm text-slate-600 dark:text-muted-foreground max-w-[240px]">
                  Simplifying time off management for modern teams.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-foreground">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#features" className="text-sm text-slate-600 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Pricing (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Integrations (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Changelog (Coming soon)</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-foreground">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">About (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Blog (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Careers (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Contact (Coming soon)</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 dark:text-foreground">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Privacy Policy (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Terms of Service (Coming soon)</span>
                  </li>
                  <li>
                    <span className="text-sm text-slate-400 dark:text-muted-foreground/60 cursor-not-allowed">Cookie Policy (Coming soon)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-border flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-600 dark:text-muted-foreground">
                © {new Date().getFullYear()} TimeOffer. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-slate-400 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Follow us on Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="/" className="text-slate-400 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="View our GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="/" className="text-slate-400 dark:text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Connect with us on LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  )
}
