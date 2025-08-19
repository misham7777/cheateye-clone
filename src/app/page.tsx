"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Eye, Shield, Zap, Database, Globe, Search, Plus, Clock, Minus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold">CHEATEYE</span>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Login
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm opacity-90">#1 Cheater Busting App</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Find any Tinder profile instantly
              </h1>

              <p className="text-xl mb-8 opacity-90">
                Find out if your partner has an active Tinder profile in minutes with AI.
              </p>

              <div className="text-sm opacity-75 mb-8">
                <p className="mb-3">Featured in</p>
                <div className="flex items-center space-x-8 mt-2">
                  <div className="flex items-center space-x-2 opacity-80">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <span>Sun</span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-80">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <span>The Star</span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-80">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <span>TikTok</span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-80">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <span>Daily Record</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Card */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Who are you searching for?
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="aspect-square bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full mb-2 relative">
                    <div className="absolute inset-2 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full"></div>
                  </div>
                  <span className="font-semibold">MAN</span>
                </button>
                <button className="aspect-square bg-gray-100 text-gray-900 rounded-xl flex flex-col items-center justify-center p-4 hover:bg-gray-200 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mb-2 relative">
                    <div className="absolute inset-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
                  </div>
                  <span className="font-semibold">WOMAN</span>
                </button>
              </div>

              <Button className="w-full bg-black text-white py-4 text-lg font-semibold rounded-xl hover:bg-gray-900">
                Start search
                <span className="ml-2">→</span>
              </Button>

              <p className="text-sm text-center mt-4 text-gray-600">
                Get your report in 3 min
              </p>

              <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Private</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Instant results</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99% accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How does our Tinder Profile Search work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            How does our <span className="text-pink-500">Tinder Profile Search</span> work?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            CheatEye uses AI technology to access Tinder's database in real-time, finding profiles that match your search criteria.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-pink-500">1.</span>
                <Badge className="bg-pink-500 text-white">~ 1 min</Badge>
              </div>
              <div className="flex items-center mb-4">
                <Search className="w-6 h-6 text-pink-500 mr-2" />
                <h3 className="text-xl font-semibold">Enter Search Details</h3>
              </div>
              <p className="text-gray-600">
                Start by entering the person's name, age, and location where they use the app.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-pink-500">2.</span>
                <Badge className="bg-pink-500 text-white">~ 2 min</Badge>
              </div>
              <div className="flex items-center mb-4">
                <Plus className="w-6 h-6 text-pink-500 mr-2" />
                <h3 className="text-xl font-semibold">Let AI Do the Search</h3>
              </div>
              <p className="text-gray-600">
                Our advanced AI scans Tinder profiles securely and anonymously to find a match
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-pink-500">3.</span>
                <span></span>
              </div>
              <div className="flex items-center mb-4">
                <Plus className="w-6 h-6 text-pink-500 mr-2" />
                <h3 className="text-xl font-semibold">Get Instant Results</h3>
              </div>
              <p className="text-gray-600">
                See their detailed profile, including their bio, photos, last activity date, where they last used the app and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-pink-100 rounded-lg mr-6 flex items-center justify-center">
              <Database className="w-8 h-8 text-pink-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">What you'll get</h2>
              <p className="text-gray-600">Your comprehensive report will include:</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Database className="w-8 h-8 text-pink-500 mb-2" />
                <CardTitle className="text-lg">Profile Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">View their full bio, age, and name exactly as they appear on Tinder.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <Clock className="w-8 h-8 text-pink-500 mb-2" />
                <CardTitle className="text-lg">Last Dating Activity</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Find out if their account is still active, including the last time and location they used Tinder.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <Plus className="w-8 h-8 text-pink-500 mb-2" />
                <CardTitle className="text-lg">Account Updates</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Stay informed about any updates to their profile info.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <Shield className="w-8 h-8 text-pink-500 mb-2" />
                <CardTitle className="text-lg">Subscription Info</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Discover whether they're using premium Tinder features like Tinder Gold or Tinder Plus.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why people love CheatEye */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Why people love CheatEye?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Thousands of people trust CheatEye to help them let go of doubts and relationship anxiety.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <Shield className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">100% Private and Secure</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">We will never share any information you provide, and the person you're searching for will never know you looked them up.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <Zap className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Quick and Easy</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">No login required. Simply enter the person's information, and CheatEye will quickly reveal if they have an active Tinder profile.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <Database className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Complete Data Profile</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Get a detailed report with their bio, photos, last activity, Tinder subscription, and last used location.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader className="pb-4">
                <Search className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Smarter Searches</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Even if they've used a different name or changed their age, CheatEye will still find them.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CheatEye in action - Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            CheatEye in action
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-bold text-pink-500 mb-2">+51%</CardTitle>
                <CardTitle className="text-xl">Matched Profiles</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Users found who they were looking for.</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-bold text-blue-500 mb-2">140k+</CardTitle>
                <CardTitle className="text-xl">Searches Completed</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Search for anyone anywhere in the world.</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-bold text-purple-500 mb-2">95%</CardTitle>
                <CardTitle className="text-xl">Customer Support Satisfaction</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">Here to help 24/7.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
              <span className="ml-2 text-gray-600">4,5/5 based on 1572 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            People just like you found the answer they were looking for
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">9 days ago</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4">"This app is the real deal. Found her profile with photos she swore she didn't even have anymore."</p>
                <p className="font-semibold">Noah, 30 years old</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4 days ago</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4">"This website is just brilliant. Honestly, thanks for the hours of therapy saved."</p>
                <p className="font-semibold">Mary Belle, 38 years old</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4">Was doing my casual 2am stalking and decided to try Cheateye. Found out my situationship had an active Tinder profile AND was seeing no less than six other girls at the same time.</p>
                <p className="font-semibold">Angel, 25 years old</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How does the Tinder profile search work?",
                answer: "CheatEye uses advanced AI technology to scan Tinder's database in real-time. Our system analyzes millions of profiles to find matches based on the information you provide."
              },
              {
                question: "How accurate is the Tinder profile search?",
                answer: "Our search accuracy is 99%. We use multiple verification methods and cross-reference data points to ensure the highest level of accuracy possible."
              },
              {
                question: "How long does it take to find a Tinder profile?",
                answer: "Most searches are completed within 2-3 minutes. In rare cases, it may take up to 5 minutes for comprehensive results."
              },
              {
                question: "What information do I need to search for someone on Tinder?",
                answer: "You need the person's name, approximate age, and the city/location where they use Tinder. Additional details like photos can help improve accuracy."
              },
              {
                question: "Is searching for Tinder profiles legal?",
                answer: "Yes, our service is completely legal. We only access publicly available information that users have chosen to share on their dating profiles."
              },
              {
                question: "Will the person know they're being searched?",
                answer: "No, our searches are 100% anonymous and undetectable. The person you're searching for will never know they've been looked up."
              },
              {
                question: "What information will I get in the search results?",
                answer: "You'll receive their full profile including photos, bio, last activity date, location history, and subscription information."
              },
              {
                question: "How recent are the search results?",
                answer: "Our results are updated in real-time. You'll see their current profile status and activity as of the moment you run the search."
              },
              {
                question: "Can I search Tinder profiles without an account?",
                answer: "Yes, you don't need a Tinder account to use CheatEye. Our service works independently of Tinder's platform."
              },
              {
                question: "What happens if no profile is found?",
                answer: "If no profile is found, it means the person either doesn't have a Tinder account or isn't active in the location you specified. You'll receive a full report confirming this."
              },
              {
                question: "How do I know if the profile I found is current?",
                answer: "Our reports include the last activity date and current status of the profile, so you'll know exactly how recently they've been active."
              },
              {
                question: "Are the results in real time?",
                answer: "Yes, all our searches provide real-time results showing the most current information available on the person's Tinder profile."
              },
              {
                question: "How much does a search with Cheateye.ai cost?",
                answer: "Pricing varies by search type. Visit our pricing page for current rates and package options."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">CHEATEYE</span>
            </div>

            <div className="flex items-center space-x-6 text-gray-600">
              <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
              <a href="#" className="hover:text-gray-900">Fulfillment Policy</a>
              <a href="#" className="hover:text-gray-900">Blog</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>All Rights Reserved © 2025</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-700">
                <span className="sr-only">TikTok</span>
                🎵
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-6 hover:shadow-md transition-shadow">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between text-left">
            <h3 className="text-lg font-semibold">{question}</h3>
            {isOpen ? (
              <Minus className="w-5 h-5 text-pink-500 flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-pink-500 flex-shrink-0" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <p className="text-gray-600">{answer}</p>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
