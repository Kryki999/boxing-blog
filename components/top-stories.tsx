import { Card, CardContent } from "@/components/ui/card"

const stories = [
  {
    id: 1,
    category: "HEAVYWEIGHT",
    title: "Tyson Fury Predicts Knockout Victory",
    excerpt: "The Gypsy King confident ahead of unification bout",
  },
  {
    id: 2,
    category: "MIDDLEWEIGHT",
    title: "Canelo Alvarez Eyes Next Opponent",
    excerpt: "Mexican superstar looking for biggest fight available",
  },
  {
    id: 3,
    category: "LIGHTWEIGHT",
    title: "Tank Davis Destroys Challenger in Round 3",
    excerpt: "Gervonta Davis shows devastating power once again",
  },
  {
    id: 4,
    category: "WELTERWEIGHT",
    title: "Crawford vs Spence Rematch Talks Heat Up",
    excerpt: "Undisputed champion ready for second showdown",
  },
  {
    id: 5,
    category: "FEATHERWEIGHT",
    title: "Ryan Garcia Returns to Training",
    excerpt: "Young star preparing for comeback fight",
  },
]

export function TopStories() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-2xl font-bold text-primary-foreground mb-3 uppercase">TOP STORIES</h2>
        <div className="space-y-2">
          {stories.map((story, index) => (
            <Card
              key={story.id}
              className="bg-card/10 border-primary-foreground/20 hover:bg-card/20 transition-colors cursor-pointer"
            >
              <CardContent className="p-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-accent text-accent-foreground px-1.5 py-0.5 rounded text-xs font-bold min-w-fit">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-accent text-xs font-semibold mb-0.5 uppercase">{story.category}</div>
                    <h3 className="text-primary-foreground font-semibold mb-0.5 leading-tight text-xs">
                      {story.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-[10px] leading-tight">{story.excerpt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
