import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">BOXING NEWS</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                NEWS
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                FIGHTS
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                RANKINGS
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                VIDEOS
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              SUBSCRIBE
            </Button>
            <Button size="sm">SIGN IN</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
