import { Button } from "@/components/ui/button"

export function HeroArticle() {
  return (
    <section className="relative lg:h-[600px] h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder-mkwmv.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center max-w-7xl">
        <div className="max-w-2xl">
          <div className="text-accent text-sm font-semibold mb-2 uppercase tracking-wide">BREAKING NEWS</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight text-balance">
            {"FURY VS USYK: THE MOMENT ARRIVES"}
          </h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            The heavyweight unification bout that boxing fans have been waiting for is finally here. Two undefeated
            champions clash for the undisputed title.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  )
}
