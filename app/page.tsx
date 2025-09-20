import { Header } from "@/components/header"
import { HeroArticle } from "@/components/hero-article"
import { TopStories } from "@/components/top-stories"
import { UpcomingFights } from "@/components/upcoming-fights"
import { NewsGrid } from "@/components/news-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO + TOP STORIES z marginesami */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <div className="lg:flex-1">
              <HeroArticle />
            </div>
            <aside className="lg:w-80 lg:pt-6">
              <div className="lg:sticky lg:top-6">
                <TopStories />
              </div>
            </aside>
          </div>
          <UpcomingFights />
          <NewsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
