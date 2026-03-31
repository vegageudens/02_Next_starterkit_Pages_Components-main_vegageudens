import { Button } from "@/components/ui/button";
import { Play, Share2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white/80 rounded-2xl shadow-lg p-8 space-y-8 border border-gray-100">
        <div className="flex justify-center mb-6">
          <Image
            src="/dino.png"
            alt="Dino spel"
            width={600}
            height={375}
            className="rounded-2xl object-cover shadow-lg border border-gray-200"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI</h1>
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
              <span>23 januari 2026 om 23:59</span>
            </div>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-0">
            <Button className="px-5 py-2 text-base font-medium"><Play className="w-5 h-5 mr-2" />Luisteren</Button>
            <Button variant="secondary" className="px-5 py-2 text-base font-medium"><Share2 className="w-5 h-5 mr-2" />Delen</Button>
          </div>
        </div>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p>Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat. Of liever: AI maakt die voor je.</p>
          <p>Het is nog maar januari, maar ‘vibecoding’, ofwel coderen met AI, maakt al een goede kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen.</p>
          <p>Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je in je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar een prompt. Denk aan “maak een spel waarbij je cocktails moet mixen”. Al helpt het wel om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.</p>
          <p>Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeR niet te kunnen programmeren, je hoeR zelfs geen programmacode te kunnen lezen, wel moet je nadenken over wat je precies wilt bouwen en welke componenten daarvoor nodig zijn. Maar hier is het goede nieuws: je kunt klein beginnen en heel snel je grenzen verleggen.</p>
          <p>Een eenvoudig spel</p>
          <p>Hoe klein? Wel, laten we beginnen met zo’n spelletje. Open een chatbot naar keuze: Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel spel. Ik probeerde bijvoorbeeld: “Schrijf een spel waarbij een dinosaurus een bal moet koppen.”</p>
        </div>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mt-8">
          <p>Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren dan een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document met de extensie ‘.html’, bijvoorbeeld ‘Mijnspelletje.html’ op je computer.</p>
          <ol className="list-decimal pl-6">
            <li>Klik op de code die de chatbot genereerde (meestal op het ‘copy’-knopje bovenaan of onderaan)</li>
            <li>Plak de code in een programma als Windows Kladblok of Macintosh TextEdit</li>
            <li>Bewaar het bestand met een naam als ‘dinospel.html’</li>
            <li>Klik op dinospel.html</li>
            <li>Het spel opent in je standaardbrowser. En spelen maar!</li>
          </ol>
          <p>Als je MicrosoR Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten zijn), moet je wel op één ding letten: het programma heeR de neiging om elk document te bewaren met de extensie “.txt”. Hou dus in de gaten dat hij er niet stiekem dinospel.html.txt van heeR gemaakt.</p>
          <p>Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Wil ik het programma dat ik op mijn pc maakte op mijn smartphone spelen, dan kan ik het bijvoorbeeld naar mijzelf e-mailen en op mijn smartphone de bijlage bewaren.</p>
          <p>Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk. Soms begrijpt de chatbot je verkeerd, en moet je wat meer preciseren: “Schrijf het programma in Javascript en zet alles in één bestand.” En je kunt ook aanwijzingen geven over de visuele stijl (‘laat het eruitzien als een 8-bit computerspel’), de bediening (‘met de pijltjestoetsen’) of het spelverloop.</p>
          <p>Vaak zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden, bijvoorbeeld, of de voorwerpen in het spel bewegen te snel of juist te traag. Dan doe je een tweede ronde: je vraagt aan ChatGPT of Gemini om de nodige aanpassingen. En hop: een verbeterde versie verschijnt, die je op dezelfde manier op je harde schijf bewaart.</p>
          <p>Op die manier krijg je meestal spelletjes die sterk geïnspireerd zijn op wat al bestaat. Maar het is zeker ook mogelijk om meer originele spelletjes te bouwen, als je een meer gedetailleerde beschrijving geeR. Stap voor stap uitbreiden met extra functies of ececten (geluid!) kan ook.</p>
          <p>Zo bouwde ik in vijf stappen een ‘cocktailspel’, waarbij je in enkele seconden een cocktail moet mixen op basis van een recept. De eerste versie was wat saai, dus ik voegde er opties als ‘schudden’ en ‘parasolletje’ aan toe.</p>
        </div>
       
      </div>
    </div>
  )
}
