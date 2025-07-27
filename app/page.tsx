import { ArrowRight, CheckCircle, Users, Zap, Shield, BarChart3, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* ── Logo ─────────────────────────────── */}
            <Image
              src="/logo.png"        // ← public/logo.png
              alt="LaboProtocol logo"
              width={32}             // w-8 (8 × 4 px)
              height={32}            // h-8
              className="rounded-lg" // keep rounded corners
              priority
            />
            <span className="font-bold text-xl">LaboProtocol</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
           
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Get started free</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 New: AI-powered protocol optimization</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Accelerate your research
            <br />
            with next-generation lab protocols
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Easily manage, share, and optimize complex experimental workflows. Our AI-assisted platform dramatically boosts productivity for research teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch a free demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              14-day free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Critical challenges in research environments</h2>
            <p className="text-gray-600 text-lg">We solve the inefficiencies most research teams face.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-600 font-bold">
                    1
                  </span>
                  Scattered protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Protocols are spread across Excel, Word, and paper notebooks. Finding the right information takes an average of 45 minutes, severely impacting experimental reproducibility.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-600 font-bold">
                    2
                  </span>
                  Knowledge silos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  When senior researchers retire or transfer, valuable tacit know‑how is lost. Onboarding newcomers takes over 6 months, significantly lowering research throughput.
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700 flex items-center">
                  <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-600 font-bold">
                    3
                  </span>
                  Limited collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sharing information across teams is hard. Identical experiments are repeated, wasting resources by millions of yen per year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Innovative solutions from LaboProtocol</h2>
            <p className="text-gray-600 text-lg">Take your research to the next level with AI and cloud technology.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-powered protocol optimization</h3>
                    <p className="text-gray-600">
                      Machine learning analyzes historical experiment data and automatically proposes optimal conditions, increasing success rates by an average of 40%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time collaboration</h3>
                    <p className="text-gray-600">
                      Co-edit, comment, and review with teammates worldwide. Dramatically improves transparency and reproducibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced analytics & reporting</h3>
                    <p className="text-gray-600">
                      Automatic aggregation and visualization of experimental data reveal trends instantly, reducing manuscript preparation time by 50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">HPLC Protocol v2.3</h4>
                  <Badge className="bg-green-100 text-green-700">Optimized</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Success rate</span>
                    <span className="font-semibold text-green-600">94.2% (+12%)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Run time</span>
                    <span className="font-semibold text-blue-600">2.5h (-30min)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Cost efficiency</span>
                    <span className="font-semibold text-purple-600">¥1,200 (-¥400)</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500">AI suggestion: Lower temperature by 2°C to improve success rate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features that transform research</h2>
            <p className="text-gray-600 text-lg">Why world-class research organizations choose us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise-grade security",
                description: "ISO 27001 aligned and SOC 2 certified. Highest-level protection for research data.",
              },
              {
                icon: Zap,
                title: "Fast search & filtering",
                description: "Instantly find and extract steps from hundreds of protocols.",
              },
              {
                icon: Users,
                title: "Access control & approvals",
                description: "Flexible permissions and approval workflows matched to research stages.",
              },
              {
                icon: BarChart3,
                title: "Statistics & prediction models",
                description: "Statistical analysis of results with success probability predictions.",
              },
              {
                icon: CheckCircle,
                title: "Quality management & audit trail",
                description: "Complete GLP/GMP-compliant audit trails and quality controls.",
              },
              {
                icon: ArrowRight,
                title: "Integrations",
                description: "Seamless connections with external systems via APIs.",
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the future of research today</h2>
          <p className="text-xl mb-8 opacity-90">
            Start a 14-day free trial and see how much more efficient your research can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* ── Logo & tagline ───────────────────────── */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"        // public/logo.png
                  alt="LaboProtocol logo"
                  width={32}             // w-8
                  height={32}            // h-8
                  className="rounded-lg"
                  priority
                />
                <span className="font-bold text-xl">LaboProtocol</span>
              </div>
              <p className="text-gray-400 text-sm">
                A next-generation lab protocol platform that accelerates research.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#api" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#help" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#training" className="hover:text-white transition-colors">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 LaboProtocol. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

