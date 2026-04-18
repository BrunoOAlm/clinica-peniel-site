import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Treatments } from "@/components/treatments"
import { Results } from "@/components/results"
import { Differentials } from "@/components/differentials"
import { InstagramSection } from "@/components/instagram"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Treatments />
      <Results />
      <Differentials />
      <InstagramSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
