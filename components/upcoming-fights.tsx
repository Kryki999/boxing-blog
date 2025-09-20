import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingFights = [
  {
    id: 1,
    fighter1: "Tyson Fury",
    fighter2: "Oleksandr Usyk",
    date: "May 18, 2024",
    location: "Riyadh, Saudi Arabia",
    title: "Undisputed Heavyweight Championship",
    image1: "/placeholder-o14dh.png",
    image2: "/placeholder-mtlk8.png",
  },
  {
    id: 2,
    fighter1: "Canelo Alvarez",
    fighter2: "Jermell Charlo",
    date: "September 30, 2024",
    location: "Las Vegas, Nevada",
    title: "Super Middleweight Title",
    image1: "/placeholder-6d3le.png",
    image2: "/placeholder-cnubf.png",
  },
]

export function UpcomingFights() {
  return (
    <section className="py-6 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 uppercase">UPCOMING FIGHTS</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {upcomingFights.map((fight) => (
            <Card key={fight.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-accent text-sm font-semibold uppercase">{fight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={fight.image1 || "/placeholder.svg"}
                      alt={fight.fighter1}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-card-foreground">{fight.fighter1}</h3>
                    </div>
                  </div>

                  <div className="text-primary font-bold text-xl">VS</div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <h3 className="font-bold text-card-foreground">{fight.fighter2}</h3>
                    </div>
                    <img
                      src={fight.image2 || "/placeholder.svg"}
                      alt={fight.fighter2}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <p className="text-muted-foreground font-semibold">{fight.date}</p>
                  <p className="text-muted-foreground text-sm">{fight.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
