import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const blogPosts: Record<string, { title: string; content: string; category: string; readTime: string; image: string }> = {
  "smart-home-beginners": {
    title: "Smart Home voor Beginners: Waar Begin Je?",
    category: "Beginners",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=600&fit=crop",
    content: "Een smart home is een woning waarin apparaten met elkaar verbonden zijn via internet. Je kunt ze bedienen met je smartphone, stem, of ze automatisch laten werken.\n\nWaarom zou je beginnen met smart home? Ten eerste gemak: bedien je verlichting, thermostaat en meer vanaf de bank of onderweg. Ten tweede energiebesparing: slimme thermostaten en verlichting kunnen tot 30% besparen op je energierekening. Ten derde veiligheid: camera's, sensoren en slimme sloten houden je huis veilig.\n\nWaar begin je? Start met het kiezen van je ecosysteem - de meeste mensen kiezen voor Google Home of Amazon Alexa. Begin dan klein met bijvoorbeeld slimme lampen, een slimme stekker, of een slimme thermostaat. Breid langzaam uit en voeg stap voor stap producten toe.\n\nTips voor beginners: zorg voor stabiel WiFi (dit is de basis), kies producten die met elkaar werken, begin met wat je het meeste gebruikt, en stel automatiseringen in voor maximaal gemak.",
  },
  "energie-besparen": {
    title: "Energie Besparen met Smart Home: Tot 30% Minder Kosten",
    category: "Besparen",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1200&h=600&fit=crop",
    content: "Met de stijgende energieprijzen zoekt iedereen naar manieren om te besparen. Smart home technologie kan je helpen tot 30% te besparen - zonder in te leveren op comfort.\n\nDe slimme thermostaat is de nummer één investering voor energiebesparing. Hij leert je gedrag en past zich aan, verwarmt alleen wanneer nodig, is bedienbaar op afstand, en geeft inzicht in je verbruik. Gemiddelde besparing: 15-25% op verwarmingskosten.\n\nSlimme verlichting met LED lampen verbruikt al 80% minder dan gloeilampen. Met automatisch uitschakelen, dimmen, bewegingssensoren en tijdschema's bespaar je nog meer. Gemiddelde besparing: 5-10% op elektriciteit.",
  },
  "slimme-verlichting-tips": {
    title: "10 Tips voor Slimme Verlichting in Huis",
    category: "Verlichting",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    content: "Slimme verlichting is meer dan lampen aan en uit zetten met je telefoon. Met deze tips creëer je de perfecte sfeer én bespaar je energie.\n\nTip 1: Kies de juiste kleurtemperatuur. Gebruik 's ochtends koel wit voor energie, overdag neutraal wit voor focus, en 's avonds warm wit voor ontspanning.\n\nTip 2: Gebruik scènes voor verschillende momenten.\n\nTip 3: Automatiseer met zonsopgang en zonsondergang.\n\nTip 4: Plaats bewegingssensoren in hal, gang, toilet, trap en garage.\n\nTip 5: Dim voor sfeer én besparing.",
  },
  "beveiliging-camera": {
    title: "Je Huis Beveiligen met Slimme Camera's",
    category: "Beveiliging",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=600&fit=crop",
    content: "Een slim beveiligingssysteem geeft je gemoedsrust - thuis en onderweg.\n\nVoordelen van slimme camera's: bekijk live beelden op je telefoon, ontvang meldingen bij beweging, geen dure abonnementen nodig, en eenvoudig zelf te installeren.\n\nSoorten camera's: Binnen camera's voor huisdier of kinderen. Buiten camera's met nachtzicht voor 24/7 bewaking. Video deurbellen om te zien wie er voor de deur staat.",
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-white/80 text-sm">{post.readTime} leestijd</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Terug naar Blog
        </Link>

        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-600 mb-4">{paragraph}</p>
            ))}
          </div>
        </article>

        <div className="mt-8 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Hulp nodig bij het kiezen?</h3>
          <p className="text-gray-600 mb-4">Ons team staat klaar voor persoonlijk advies</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Neem Contact Op
          </Link>
        </div>
      </div>
    </main>
  );
}
