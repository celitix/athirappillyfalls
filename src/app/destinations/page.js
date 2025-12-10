import { FaBus } from "react-icons/fa";
import { IoTrainSharp } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const destinationspage = () => {

 const data = [
    { place: "Chalakudy", distance: "32 km" },
    { place: "Kochi", distance: "73 km" },
    { place: "Thrissur", distance: "59 km" },
    { place: "Munnar", distance: "100 km" },
    { place: "Kottayam", distance: "122 km" },
    { place: "Coimbatore", distance: "174 km" },
  ];
    

const cards = [
    {
      title: "Mountain Retreat",
      desc: "Thrissur formally known as Trichur is situated in Kerala. The city is Shiva name town shortened form of Thiru-Shiva-Per-Ur. The Lord Shiva temple Vadakkumnathan temple is the main attraction of the city. The city owns Asia’s tallest church “Our Lady of Lourdes Syro-Malabar Catholic Basilica.",
    },
    {
      title: "Beach Paradise",
      desc: "Valparai is a hill station in Coimbatore in Tamilnadu. While making a way to Valparai through Anaimalai Hills will give a soothing and beautiful view of tea and coffee plantation. The plantation is surrounded by evergreen forest. Valparai region is home to many of the elephant and leopards.",
    },
    {
      title: "City Adventure",
      desc: "The name Kodaikanal in Tamil means “The gift of the Forest”. Kodaikanal is a famous tourist destination which is also called as the “The Princess of Hill stations. Nearby Kodaikanal Bus station is Kurinji Andavar Murugan temple, famous for the flower Kurinji flowers which bloom once in twelve years.",
    },
    {
      title: "Forest Escape",
      desc: "South of India has its own “Kashmir“. Munnar is a place of confluence of three rivers Mudhirapuzha, Nallathanni and Kundaly that names it Munnar meaning “Three Rivers”. Munnar has four directions each having famous tourist spots to explore including temples, parks, viewpoints, trekking.",
    },
  ];  


  return (
<>

{/*============== Travel Card section =============*/}
 <section className="w-full max-w-6xl mx-auto bg-white py-14">
      <h2 className="font-josefin text-center text-2xl md:text-4xl font-semibold text-[#8a6a2f] mb-4 mt-18">
        Reaching Athirappilly Falls
      </h2>

<span className="block w-40 h-0.5 bg-gray-400 mx-auto mt-4"></span>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
        {/* LEFT SIDE */}
        <div className="space-y-10 px-6 md:px-12 py-6">

          {/* By Rail */}
      <div className="flex flex-col md:flex-row md:gap-8 items-center md:items-start text-center md:text-left">
  <IoTrainSharp className="text-[95px] text-[#4c4c4c] flex-shrink-0 mb-4 md:mb-0" />
            <p className="font-lato text-gray-500 leading-relaxed text-sm md:text-base">
              <span className="font-josefin font-semibold">By Rail:</span> Reaching to Athirappilly falls Kerala by opting train is a cheap way.  
              The nearest railway station to Athirappilly is Chalakudy Railway station. Distance from Chalakudy to Athirappally falls 
              Kerala is 1-hour road journey. Kochi and Thrissur are also major railway station to reach Athirappally falls.
            </p>
          </div>

          {/* By Air */}
          <div className="flex flex-col md:flex-row md:gap-8 items-center md:items-start text-center md:text-left ">
            <FaPlaneDeparture className="text-[95px] text-[#4c4c4c] flex-shrink-0 mb-4 md:mb-0" />
            <p className="font-lato text-gray-500 leading-relaxed text-sm md:text-base">
              <span className="font-josefin font-semibold">By Air:</span> The nearest airport to reach Athirappilly falls Kerala is Cochin 
              international airport. After landing to the international port, private taxi, cabs are a better option. The distance 
              from Cochin airport to Athirappally falls is 40 kilometres.
            </p>
          </div>

          {/* By Road */}
          <div className="flex flex-col md:flex-row md:gap-8 items-center md:items-start text-center md:text-left">
            <FaBus className="text-[95px] text-[#4c4c4c] flex-shrink-0 mb-4 md:mb-0" />
            <p className="font-lato text-gray-500 leading-relaxed text-sm md:text-base">
              <span className="font-josefin font-semibold">By Road:</span> Chalakudy bus stand is 32 kilometres from Athirappally falls. 
              Opting for Kerala State Road Transport Service is the best way to reach and explore the Kerala tourist places. 
              Thrissur bus stand is 55 kilometres from <Link href="/about" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Athirappally falls Kerala.</Link>
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#4a4a4a] text-white px-6 md:px-12 py-10 space-y-6 leading-relaxed text-sm md:text-base">
 
        <div className="flex items-center justify-center gap-3 py-2">
  <span className="h-[1px] w-20 bg-white/50"></span>
  <span className="text-yellow-300 text-xl">✦</span>
  <span className="h-[1px] w-20 bg-white/50"></span>
</div>

          <p className="font-lato text-center text-gray-400">
            Best time to plan a trip to Athirappally falls Kerala is in a month from September to January.  
            The temperature in summer can soar up to 36°C. Athirappally falls is open to visit in the daytime at any 
            day in a week between 8:00 a.m. to 6:00 p.m. The entry fee for sight view is INR 15 per person.
          </p>

          <p className="font-lato text-center text-gray-400">
            Besides visiting the Athirappally falls Kerala, there are lot more places to explore around 30 kilometres. 
            Usually spending 2 to 3 hours at falls, the place offers many waterparks, gardens and other falls.
          </p>

          <p className="font-lato text-center text-gray-400">
            The <span className="text-yellow-300 font-medium">Dreamworld water park</span> is about 22 km and Silverstorm waterpark 
            is about 11 km. Thumbormuzhi dam & butterfly garden is around 14 km from the fall.
          </p>

          <p className="font-lato text-center text-gray-400">
            Moving away 5kms from Athirappally falls is Vazhachal falls and 15 km from Charpa falls.
          </p>

        <div className="flex items-center justify-center gap-3 py-2">
  <span className="h-[1px] w-20 bg-white/50"></span>
  <span className="text-yellow-300 text-xl">✦</span>
  <span className="h-[1px] w-20 bg-white/50"></span>
</div>

        </div>
      </div>
 </section>

{/*============== Image cards =============*/}
  <section className="w-full max-w-7xl mx-auto py-16 bg-white">
      
      {/* Heading */}
      <h2 className="font-josefin text-center text-3xl md:text-4xl font-semibold text-[#8a6a2f] mb-4">
        Water Attractions
      </h2>
<span className="block w-40 h-0.5 bg-gray-400 mx-auto mt-2"></span>


      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20 mt-6">

        {/* Card 1 */}
        <div className="bg-[#f8f6f2] p-8 rounded-l-[120px] rounded-tr-[40px]">
          <div className="w-full flex justify-center">
            <div className="w-[260px] md:w-[280px] h-[160px] overflow-hidden rounded-xl">
              <Image
                src="/assets/Chalakudy-River.jpg"        
                alt="Chalakudy River"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-lato text-gray-700 mt-6 leading-relaxed text-center">
            Chalakudy River is actually a long river flourished with tributaries 
            originating from Parambikulam, Kuriyarkutti, Sholayar, Karapara and Anakayam 
            in Kerala. The river got its name from the town once famous for sacrifices 
            “Chalakudy”.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f8f6f2] p-8 rounded-[40px]">
          <div className="w-full flex justify-center">
            <div className="w-[260px] md:w-[280px] h-[160px] overflow-hidden rounded-xl">
              <Image
                src="/assets/Idamalayar_Damm.jpg"        
                alt="Idamalayar Dam"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-lato text-gray-700 mt-6 leading-relaxed text-center">
            Idamalayar Dam is built on the tributary of 
           <Link href="https://en.wikipedia.org/wiki/Periyar_River" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"> Periyar River </Link> 
            the Indalayar. The dam is built in 1985. It is having a hydroelectric 
            power station. One of the south India movies “Vaishali” was shot in a cave 
            nearby this dam.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f8f6f2] p-8 rounded-r-[120px] rounded-tl-[40px]">
          <div className="w-full flex justify-center">
            <div className="w-[260px] md:w-[280px] h-[160px] overflow-hidden rounded-xl">
              <Image
                src="/assets/Solaiyar-Dam.jpg"      
                alt="Solaiyar Dam"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-lato text-gray-700 mt-6 leading-relaxed text-center">
            Solaiyar Dam is located at a hill station Valparai in Coimbatore district 
            of Tamil Nadu. The dam was opened in 1965. It gives a view of wildlife 
            drinking water at early morning. The solaiyar dam has a hydroelectric 
            project over it.
          </p>
        </div>

      </div>
    </section>


{/*============== Numbers Data =============*/}   
  <div className="font-josefin w-full bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-center">

        {data.map((item, index) => (
          <div
            key={item.place}
            className="flex-1 min-w-[140px] px-4 flex flex-col items-center relative"
          >
            {/* Place */}
            <p className="text-gray-400 text-lg font-medium mb-2">{item.place}</p>

            {/* Distance */}
            <p className="text-yellow-700 text-4xl font-semibold">{item.distance}</p>

            {/* Dashed divider except last */}
            {index !== data.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 h-25 border-r border-dashed border-gray-300 transform -translate-y-1/2"></div>
            )}
          </div>
        ))}

      </div>
    </div>


{/*============== Destinations Section =============*/}
  <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
      {/* Heading */}
      <h2 className="font-josefin text-[#8a6a2f] text-3xl md:text-4xl font-bold mb-4 text-center">
        Destinations
      </h2>
   
<span className="block w-40 h-0.5 bg-gray-400 mx-auto "></span>


      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-yellow-50 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-josefin text-xl font-semibold text-[#8a6a2f] mb-3 text-center">
              {card.title}
            </h3>
            <p className="font-lato text-gray-500 text-base text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>

</>
)
}

export default destinationspage
