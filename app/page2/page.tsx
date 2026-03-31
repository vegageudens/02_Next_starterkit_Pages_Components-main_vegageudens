import { Button } from "@/components/ui/button";
import { Play, Share2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white/80 rounded-2xl shadow-lg p-8 space-y-8 border border-gray-100">
        <div className="flex justify-center mb-6">
          <Image
            src="/dominique 2.png"
            alt="Dominique Deckmyn"
            width={600}
            height={375}
            className="rounded-2xl object-cover shadow-lg border border-gray-200"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">Was het verzet van Dario Amodei tegen minister Hegseth het “Ik ben Spartacus!”-moment van Silicon Valley?</h1>
        {/* Author info and action buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Image
              src="/dominique.jpg"
              alt="Dominique Deckmyn"
              width={36}
              height={36}
              className="rounded-full border border-gray-300 shadow-sm object-cover"
            />
            <div>
              <span className="font-semibold">Dominique Deckmyn</span><br />
              <span>13 maart 2026 om 23:59</span>
            </div>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-0">
            <Button className="px-5 py-2 text-base font-medium"><Play className="w-5 h-5 mr-2" />Luisteren</Button>
            <Button variant="secondary" className="px-5 py-2 text-base font-medium"><Share2 className="w-5 h-5 mr-2" />Delen</Button>
          </div>
        </div>
       
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p>Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth, en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.</p>
          <p>BO</p>
          <p>Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde amicus briefs, documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische strijd tegen het Pentagon.</p>
          <p>Toch staat er rake taal in. De strafmaatregel die minister van “Oorlog” Pete Hegseth Anthropic oplegt, namelijk het uitroepen tot “risico voor de toeleveringsketen”, creëert “een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat de regering alle middelen waarover het beschikt zal gebruiken om te straffen wie het aandurft het oneens te zijn”. En dat staat in een document dat – indirect – ondertekend is door Amazon, Google en Apple (via de belangengroep Chamber of Progress).</p>
          <p>Is dit nu het “Ik ben Spartacus!’” moment van Silicon Valley? Nee, daarvoor is het allemaal veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics recht op vrije meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren te formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfs voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen en maren.</p>
          <p>Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet te ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel eigen invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot, nu verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nog wel steun voor het idee dat iedereen zijn zegje mag hebben.</p>
          <p>Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals vroeger. We zullen van deze ceo’s de komende jaren waarschijnlijk weinig politieke gevoelige uitspraken horen.</p>
          <p>Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was dat (zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging. Het was eerder omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract met Defensie liet vallen.</p>
          <p>Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken, en dat merk je. Met één uitzondering, weliswaar: de paar honderd AI-experts die de meest geavanceerde LLM’s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe hebben om volgens hun overtuiging te handelen.</p>
          <p>Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een ethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.</p>
        </div>
         {/* Theme buttons */}
        <div className="flex flex-wrap gap-3 mt-8">
          <Button variant="outline" className="rounded-full px-6 py-2 text-sm font-semibold">Cultuur en media</Button>
          <Button variant="outline" className="rounded-full px-6 py-2 text-sm font-semibold">De Technocraat</Button>
          <Button variant="outline" className="rounded-full px-6 py-2 text-sm font-semibold">Artificiële intelligentie</Button>
        </div>
      </div>
    </div>
  )
}
