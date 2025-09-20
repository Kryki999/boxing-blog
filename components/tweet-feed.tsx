import { Card, CardContent } from "@/components/ui/card"

const tweets = [
    {
        id: 1,
        user: "@boxingnews",
        avatar: "/placeholder-user.jpg",
        content: "Fury vs Usyk już dziś! Kto wygra waszym zdaniem? 🥊 #boxing #FuryUsyk",
        time: "2 min temu",
    },
    {
        id: 2,
        user: "@ringmagazine",
        avatar: "/placeholder-user.jpg",
        content: "Canelo gotowy na kolejną walkę o pas! 🔥",
        time: "10 min temu",
    },
    {
        id: 3,
        user: "@boxrec",
        avatar: "/placeholder-user.jpg",
        content: "Nowy prospekt w wadze lekkiej robi furorę na galach w USA!",
        time: "25 min temu",
    },
]

export function TweetFeed() {
    return (
        <div className="bg-gradient-to-b from-secondary/80 to-background rounded-xl shadow-lg">
            <div className="px-4 py-3 lg:py-6">
                <h2 className="text-2xl font-bold text-secondary-foreground mb-3 lg:mb-6 uppercase tracking-wide">NAJNOWSZE TWEETY</h2>
                <div className="flex flex-col gap-3 lg:gap-6">
                    {tweets.map((tweet) => (
                        <Card
                            key={tweet.id}
                            className="flex flex-col justify-between bg-card/80 border-none shadow-md hover:scale-[1.02] transition-transform duration-200 overflow-hidden lg:min-h-[400px]"
                        >
                            <CardContent className="p-3 lg:p-5 h-full flex flex-col justify-between">
                                <div className="flex items-center gap-3 mb-3">
                                    <img src={tweet.avatar} alt={tweet.user} className="w-10 h-10 rounded-full border border-secondary" />
                                    <span className="font-semibold text-accent text-base">{tweet.user}</span>
                                    <span className="ml-auto text-xs text-muted-foreground">{tweet.time}</span>
                                </div>
                                <p className="text-lg text-card-foreground leading-snug font-medium">{tweet.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
