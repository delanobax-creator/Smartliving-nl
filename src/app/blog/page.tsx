import { Lightbulb, Zap, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "smart-home-beginners",
    title: "Smart Home voor Beginners: Waar Begin Je?",
    excerpt: "Wil je je huis slimmer maken maar weet je niet waar je moet beginnen? In deze gids leggen we stap voor stap uit hoe je start met smart home.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    category: "Beginners",
    readTime: "5 min",
  },
  {
    slug: "energie-besparen",
    title: "Energie Besparen met Smart Home: Tot 30% Minder Kosten",
    excerpt: "Ontdek hoe slimme thermostaten, verlichting en stekkers je kunnen helpen om flink te besparen op je energierekening.",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop",
    category: "Besparen",
    readTime: "4 min",
  },
  {
    slug: "slimme-verlichting-tips",
    title: "10 Tips voor Slimme Verlichting in Huis",
    excerpt: "Van sfeerverlichting tot automatische routines: haal het maximale uit je slimme lampen met deze praktische tips.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Verlichting",
    readTime: "6 min",
  },
  {
    slug: "beveiliging-camera",
    title: "Je Huis Beveiligen met Slimme Camera's",
    excerpt: "Alles wat je moet weten over WiFi camera's, video deurbellen en bewegingsdetectie voor een veilig huis.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop",
    category: "Beveiliging",
    readTime: "5 min",
  },
];

const tips = [
  { icon: Lightbulb, title: "Begin Klein", description: "Start met één product zoals slimme lampen en breid langzaam uit." },
  { icon: Zap, title: "Check Compatibiliteit", description: "Zorg dat producten werken met je bestaande systeem (Google/Alexa)." },
  { icon: Shield, title: "WiFi is Key", description: "Een stabiel WiFi netwerk is essentieel voor smart home producten." },
  { icon: TrendingUp, title: "Automatiseer", description: "Stel routines in voor maximaal gemak en energiebesparing." },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Advies</h1>
          <p className="text-xl text-blue-200">Tips, tricks en inspiratie voor jouw smart home</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Laatste Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime} leestijd</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Lees meer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Hulp Nodig bij het Kiezen?</h2>
          <p className="text-xl text-blue-200 mb-8">Ons team staat klaar om je te helpen met persoonlijk advies</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Vraag Advies Aan
          </Link>
        </div>
      </section>
    </main>
  );
}
