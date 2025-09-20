import { Card, CardContent } from "@/components/ui/card"
import { TweetFeed } from "@/components/tweet-feed"

const newsArticles = [
  {
    id: 1,
    title: "Davis Continues Winning Streak",
    excerpt:
      "Gervonta Davis showcases explosive power in latest victory, maintaining his perfect record with another spectacular knockout.",
    image: "/placeholder-ixp5o.png",
    category: "LIGHTWEIGHT",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Canelo Eyes Unification Bout",
    excerpt:
      "Mexican superstar Canelo Alvarez sets sights on unifying the super middleweight division with upcoming title fight.",
    image: "/placeholder-3ii68.png",
    category: "SUPER MIDDLEWEIGHT",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Rising Star Makes Statement",
    excerpt: "Young prospect delivers impressive performance, catching the attention of promoters and fans worldwide.",
    image: "/placeholder-c07ae.png",
    category: "PROSPECT WATCH",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Heavyweight Division Shakeup",
    excerpt: "Major changes coming to the heavyweight landscape as top contenders position themselves for title shots.",
    image: "/placeholder-u2jgb.png",
    category: "HEAVYWEIGHT",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Women's Boxing Reaches New Heights",
    excerpt: "Female fighters continue to break barriers and draw massive audiences in historic championship bouts.",
    image: "/placeholder-qjqow.png",
    category: "WOMEN'S BOXING",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Legendary Trainer Shares Wisdom",
    excerpt: "Hall of fame trainer reveals secrets behind developing world champions and building boxing dynasties.",
    image: "/placeholder-0syb0.png",
    category: "TRAINING",
    readTime: "7 min read",
  },
]

export function NewsGrid() {
  return (
    <section className="py-6 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 uppercase">LATEST NEWS</h2>

        {/* Desktop: grid, Mobile: flex-col */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_360px] lg:gap-8 overflow-visible">
          {/* Lewa kolumna: artykuły */}
          <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {newsArticles.map((article) => (
                <Card
                  key={article.id}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent text-sm font-semibold">{article.readTime}</span>
                      <span className="text-primary text-sm font-semibold hover:underline">Read More →</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Prawa kolumna: TweetFeed na desktopie, na mobile pod spodem */}
          <aside className="mt-8 lg:mt-0 lg:block">
            <div className="lg:sticky lg:top-6 static">
              <TweetFeed />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
