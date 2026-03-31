import { Button } from "@/components/ui/button";
import { Play, Share2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white/80 rounded-2xl shadow-lg p-8 space-y-8 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">Leidt AI-slop tot de dood van sociale media?</h1>
        {/* Author info and action buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Dominique Deckmyn</span><br />
            <span>2 januari 2026 om 23:59</span>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-0">
            <Button className="px-5 py-2 text-base font-medium"><Play className="w-5 h-5 mr-2" />Luisteren</Button>
            <Button variant="secondary" className="px-5 py-2 text-base font-medium"><Share2 className="w-5 h-5 mr-2" />Delen</Button>
          </div>
        </div>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p>Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop: video’s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan. Blijven we daar in 2026 naar kijken?</p>
          <p>De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een BO realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is: willen we daarnaar blijven kijken? Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op Youutube een nieuwe account aanmaakt, dan is 20 procent van de video’s die je wordenaangeboden van AI afkomstig.</p>
          <p>Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent een nieuw tijdperk in sociale media. Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan de levens van celebrity’s en influencers – tijdperk twee. En nu komt er een stortvloed van AI-video’s aan. Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel wezen: hoe meer AI in onze feed, hoe minder video’s we bekijken van professionele makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen. Zijn we in 2026 dan zo veranderd? Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo’s, onmogelijke stunts, spectaculaire taarten of gewelddadige pranks, of wat ook je ding mag zijn (elders op het internet krijgen pornoliefhebbers nu video’s te zien die almaar meer tonen van wat ze willen, ook als dat anatomisch totaal onmogelijk is). Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo’s, u krijgt</p>
        </div>
      </div>
    </div>
  )
}

