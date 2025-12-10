import Image from "next/image";
import Hero from "@/app/components/hero";
import { FaWater, FaCar } from "react-icons/fa";
import { SiAnimalplanet } from "react-icons/si";
import Link from "next/link";


export default function Home() {

 const items = [
    {
      icon: <FaWater className="text-4xl" />,
      title: "WATERPARK",
      desc: "Dreamworld water Park, near Athirappilly Falls, is one of the oldest and safest amusement parks in Chalakudy. Operating from 15 years, the park offers rides and pools to enjoy.",
    },
    {
      icon: <SiAnimalplanet className="text-4xl" />,
      title: "WILDLIFE",
      desc: "Turning your head around beside Athirappally falls is a rich wildlife of Kerala. The place is a proud residence of Asiatic elephant, tiger, leopard, bison, sambar and lion-tailed macaque.",
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "JUNGLE SAFARI",
      desc: "The scenic beauty of Western Ghats can be enjoyed by jungle safari. The Western Ghats inhabit the wildlife sanctuary that is a treat to an eye taking Safari ride.",
    },
  ];

  return (
   <>
 {/*============== Hero Section =============*/}
   <Hero/>

  {/*============== Circular Cards Section =============*/}
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, index) => (
          <div key={index} className="group">
            {/* Circle */}
            <div className="
              w-40 h-40 mx-auto rounded-full bg-gray-200 
              flex items-center justify-center transition-all duration-300
              group-hover:bg-[#b7a87a]
            ">
              <div className="text-[#7f7025] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-josefin mt-6 text-lg font-semibold text-[#8a6a2f] tracking-wide">
              {item.title}
            </h3>

            {/* Small line */}
            <div className="w-10 h-[2px] bg-gray-300 mx-auto my-2"></div>

            {/* Description */}
            <p className="font-lato text-gray-500 leading-relaxed px-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/*============== Overlay Text Section =============*/}
     <section className="relative w-full h-[590px] md:h-[500px] flex items-center justify-center text-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero1.jpg"  
          alt="Athirappilly Falls"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Brown Glass Box */}
      <div className="bg-[#6e4f2c]/50 backdrop-blur-sm px-6 md:px-12 py-10 md:py-14 max-w-4xl lg:max-w-6xl rounded-lg shadow-lg">
        <h2 className="font-josefin text-3xl md:text-5xl font-bold mb-6 text-white">
          Athirappilly Falls
        </h2>

        <p className="font-lato text-sm md:text-lg leading-relaxed text-white">
          Situated in the lap of God’s own country Kerala is a nature’s wonder
          Athirappilly Falls. Athirappilly Falls is one of the largest waterfalls
          in Kerala. Falling down with a roar from the height of 80 feet, view of
          the waterfall gives a soothing experience to spectators. Athirappilly 
          waterfalls give a natural snowy radiant waterfall sight to its visitors
          sometimes giving glimpses of small rainbows. It is being a famous tourist
          spot and attracting many tourists from India. Athirappilly falls not only
          add beauty to the region but also a habitat to plethora of 
          <Link href="https://en.wikipedia.org/wiki/Flora" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"> flora </Link> 
          and 
          <Link href="https://en.wikipedia.org/wiki/Fauna" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"> fauna </Link>.
        </p>

        <button className="mt-8 px-6 py-2 border border-white rounded-full text-white font-medium hover:bg-white hover:text-black transition">
          View More
        </button>
      </div>
    </section>

   {/*============== Cards Section =============*/}
  <section className="w-full max-w-6xl mx-auto py-16 bg-white">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="font-josefin text-3xl md:text-4xl font-semibold text-[#8a6a2f]">
          Nearby Waterfalls
        </h2>

        <span className="block w-40 h-0.5 bg-gray-400 mx-auto mt-4"></span>

        <p className="font-lato text-gray-600 mt-4 leading-relaxed">
          A majestic falling beauty of Kerala Athirappilly Falls is not alone to give delight
          but is also accompanied by two majestic waterfalls the Vazhachal Falls and
          the Charpa Falls on a short driveway.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10 lg:px-20">

        {/* Left Card */}
        <div className="bg-[#f8f6f2] rounded-[40px] p-8 flex flex-col items-center">
          
          {/* Smaller Image Box */}
          <div className="w-full flex justify-center">
            <div className="w-[260px] md:w-[300px] h-[150px] md:h-[170px] overflow-hidden ">
              <Image
                src="/assets/vazhachal-falls.jpg"    
                alt="Vazhachal Falls"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-lato text-gray-700 mt-6 leading-relaxed text-justify">
            Vazhachal fall is situated in Thrissur district of South India district Kerala.
            The Fall has its watercourse from the river Chalakudy.
            <Link href="https://en.wikipedia.org/wiki/Chalakudy_River" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"> Chalakudy River </Link> 
            is westward flowing river. The river flourishing the Vazhachal fall flows all
            along the Vazhachal forest division and the edges of sholayar ranges.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-[#f8f6f2] rounded-[40px] p-8 flex flex-col items-center">

          {/* Smaller Image Box */}
          <div className="w-full flex justify-center">
            <div className="w-[260px] md:w-[300px] h-[150px] md:h-[170px] overflow-hidden ">
              <Image
                src="/assets/charpa-fall.jpg"    
                alt="Charpa Falls"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="font-lato text-gray-700 mt-6 leading-relaxed text-justify">
            <Link href="https://en.wikipedia.org/wiki/Charpa_Falls" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Charpa fall</Link> is a stopover tourist point during a visit to Athirappilly falls and
            Vazhachal fall. The Chalakudy river flourishes this amazing fall. The fall flows
            close to the road. The waterfall flows in full fledge in monsoons splashing onto
            the roadsides and refreshing the passerby and get down to little flow during a
            dry season.
          </p>
        </div>

      </div>
    </section>

   </>
  );
}
