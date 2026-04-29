import { Button } from "@/components/ui/button";
import { Play, Share2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full max-w-screen mx-auto py-4 px-0 sm:px-8 md:py-10">
      <div className="bg-white/80 rounded-2xl shadow-lg p-2 sm:p-12 space-y-6 sm:space-y-12 border border-gray-100">
        <div className="flex justify-center mb-2 sm:mb-8 px-0">
          <Image
            src="/ai cat.jpg"
            alt="AI Cat"
            width={600}
            height={375}
            className="rounded-2xl object-cover shadow-lg border border-gray-200 w-full max-w-md sm:max-w-xl h-auto"
            priority
          />
        </div>
        <h1 className="text-lg xs:text-xl sm:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 leading-tight text-center">Leidt AI-slop tot de dood van sociale media?</h1>
        {/* Author info and action buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-4 bg-gray-50 rounded-xl p-4 sm:p-4 border border-gray-200">
          <div className="flex items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Image
              src="/dominique.jpg"
              alt="Dominique Deckmyn"
              width={28}
              height={28}
              className="rounded-full border border-gray-300 shadow-sm object-cover"
            />
            <div>
              <span className="font-semibold">Dominique Deckmyn</span><br />
              <span>2 januari 2026 om 23:59</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
            <Button className="px-2 py-1 text-xs sm:text-base font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400"><Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />Luisteren</Button>
            <Button variant="secondary" className="px-2 py-1 text-xs sm:text-base font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 hover:scale-105 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-200"><Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />Delen</Button>
          </div>
        </div>
        <div className="prose prose-sm sm:prose-lg max-w-none text-gray-800 space-y-4 sm:space-y-6 leading-relaxed">
          <p>Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop: video’s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan. Blijven we daar in 2026 naar kijken?</p>
          <p>De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een BO realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is: willen we daarnaar blijven kijken? Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op Youutube een nieuwe account aanmaakt, dan is 20 procent van de video’s die je wordenaangeboden van AI afkomstig.</p>
          <p>Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent een nieuw tijdperk in sociale media. Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan de levens van celebrity’s en influencers – tijdperk twee. En nu komt er een stortvloed van AI-video’s aan. Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel wezen: hoe meer AI in onze feed, hoe minder video’s we bekijken van professionele makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen. Zijn we in 2026 dan zo veranderd? Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo’s, onmogelijke stunts, spectaculaire taarten of gewelddadige pranks, of wat ook je ding mag zijn (elders op het internet krijgen pornoliefhebbers nu video’s te zien die almaar meer tonen van wat ze willen, ook als dat anatomisch totaal onmogelijk is). Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo’s, u krijgt kattenvideo’s die nog veel schattiger zijn dan in het echt.</p>
          <p>Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor
          AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de voornaamste auteur was.</p>
          <p>De eerste paar weken was AI-video nieuw en verrassend, dat wel. En nu nog is het soms
          lachen geblazen met sommige van die Sora-filmpjes (ook al mijd ik ze). Er is heus wel een plaats voor AI-video, bijvoorbeeld om speciale effecten te produceren in films. En er zijn creatieve mensen die toffe, vaak heel grappige video’s maken die zonder AI onbetaalbaar duur zouden zijn. Maar horen ze thuis op Instagram en Facebook? Dat waren toch ‘sociale’ media, nietwaar? Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een
          computer gegenereerde video’s, aanbevolen door een algoritme? In die zin zien we nu de
          dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.
          Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast ‘Bits & atomen’.
         </p>
         {/* Theme buttons */}
        <div className="flex flex-wrap gap-1 sm:gap-3 mt-4 sm:mt-8 justify-center">
          <Button variant="outline" className="rounded-full px-2 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold">Cultuur en media</Button>
          <Button variant="outline" className="rounded-full px-2 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold">De Technocraat</Button>
          <Button variant="outline" className="rounded-full px-2 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold">Artificiële intelligentie</Button>
          <Button variant="outline" className="rounded-full px-2 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold">Mark Zuckerberg</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

