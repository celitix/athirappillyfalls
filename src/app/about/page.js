import Image from 'next/image'
import Link from 'next/link'


const aboutpage = () => {
  return (
    <>
    {/*============== About Section ============= */}
   <section  className='py-16 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-5xl mx-auto'>
    <h2 className='font-josefin text-3xl font-bold text-[#8a6a2f] mb-2 mt-16 text-center'>Athirappilly - The Niagara Of India</h2>
<span className="block w-40 h-0.5 bg-gray-400 mx-auto mt-4"></span>
    <p className='font-lato text-center text-gray-500 leading-relaxed mt-6'>
Hidden under south, India has its very own <Link href="https://en.wikipedia.org/wiki/Niagara_Falls" className='font-semibold text-blue-600 hover:text-blue-700 hover:underline' target='_blank' rel='noopener noreferrer' >Niagara Fall.</Link> Athirapally waterfalls is situated in Thrissur district of Kerala is also famously known as The Niagara of India. Athirapally waterfalls, is a blessing of Chalakudy River, making this waterfall the largest waterfall in Kerala. This river has its origin from the stretch of Western Ghats in Kerala. The waterfall is 82 feet tall standing at the garth of flourished flora. Athirapally waterfall is a wonder to but it also has prospered the river, wildlife, and other <Link href="/destinations" className='font-semibold text-blue-600 hover:text-blue-700 hover:underline' >tourist attractions</Link> from all over India. The place offers an engaging view of the sight making visitors to stop and enjoy the scene.
    </p>
    </div>
    </section>

    {/*============== Overlay section ============= */}
    <section className="relative w-full h-[30vh] md:h-[20vh] lg:h-[40vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/hero1.jpg"     
        alt="Doddabetta Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Glass Box Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 md:p-10 max-w-6xl text-center">
          <h1 className="font-josefin text-2xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg">
            Amazing Waterfall In God's Own Country
          </h1>
        </div>
      </div>
    </section>

   {/*=============== Dual para Text section ===============*/}
<section className="py-12 px-4">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* River */}
    <div className="space-y-4">
      <h2 className="font-josefin text-3xl md:text-4xl font-bold text-[#8a6a2f] text-center">River</h2>
      <span className="block w-24 h-0.5 bg-gray-400 mx-auto"></span>
      <p className="font-lato text-gray-500 leading-relaxed text-center">
        Chalakudy River originating from Anamudi the highest peak point in Kerala and South India has gifted the largest waterfall to Kerala. The river has got its name from the town named Chalakudy. Chalakudy River is rich for the riparian vegetation. This river is considered as India’s one of the conservers of many endangered, rare, endemic species of flowering plants and fishes.
      </p>
    </div>

    {/* Wildlife */}
    <div className="space-y-4">
      <h2 className="font-josefin text-3xl md:text-4xl font-bold text-[#8a6a2f] text-center">Wildlife</h2>
      <span className="block w-24 h-0.5 bg-gray-400 mx-auto"></span>
      <p className="font-lato text-gray-500 leading-relaxed text-center">
        The forest near Athirapally waterfalls is a home to many of the wildlife. It is a unique riparian forest situated at 590 feet of elevation. Visiting this place will encounter you to many of the Asiatic elephants, tigers, leopards, bison, sambar and lion-tailed macaque. One can experience all four types of hornbills named Great hornbill, Malabar pied hornbill, Malabar grey hornbill and the Indian grey hornbill.
      </p>
    </div>

  </div>
</section>


{/*==================== Image strip =================*/}
    <section>
        <div className="w-full h-60 flex flex-col md:flex-row">
            <div className='w-1/4 h-60 relative'>
            <Image src="/assets/str1.jpg" alt="chalakudy river" fill className="object-cover"/>
            </div>
            <div className='w-1/4 h-60 relative'>
            <Image src="/assets/str2.jpg" alt="wildife" fill className="object-cover"/>
            </div>
            <div className='w-1/4 h-60 relative'>
            <Image src="/assets/str3.jpg" alt="safari" fill className="object-cover"/>
            </div>
            <div className='w-1/4 h-60 relative'>
            <Image src="/assets/str4.jpg" alt="bollywood shoot" fill className="object-cover"/>
            </div>
        </div>
    </section>

{/*===================== Dual para Image =================*/}
<section className="py-12 px-4">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* River */}
    <div className="space-y-4">
      <h2 className="font-josefin text-3xl md:text-4xl font-bold text-[#8a6a2f] text-center">Jungle Safari</h2>
      <span className="block w-24 h-0.5 bg-gray-400 mx-auto"></span>
      <p className="text-gray-500 leading-relaxed text-center">
        An en route from Athirapally to <Link href="https://en.wikipedia.org/wiki/Malakkappara" target="_blank" rel="noopener noreferrer" className='font-semibold text-blue-600 hover:text-blue-700 hover:underline'>Malakkappara,</Link> jungle safari is a treat to explore and enjoy a watchful view of both an evergreen forest and wildlife. A stretch of 90 kilometers for a jungle safari is across the sholayar ranges of the Western Ghats in the south. Jungle Safari is a promotional trip from the council of promotion of Thrissur district.
      </p>
    </div>

    {/* Wildlife */}
    <div className="space-y-4">
      <h2 className="font-josefin text-3xl md:text-4xl font-bold text-[#8a6a2f] text-center">Shooting Location</h2>
      <span className="block w-24 h-0.5 bg-gray-400 mx-auto"></span>
      <p className="font-lato text-gray-500 leading-relaxed text-center">
        The forest near Athirapally waterfalls is a home to many of the wildlife. It is a unique riparian forest situated at 590 feet of elevation. Visiting this place will encounter you to many of the Asiatic elephants, tigers, leopards, bison, sambar and lion-tailed macaque. One can experience all four types of hornbills named Great hornbill, Malabar pied hornbill, Malabar grey hornbill and the Indian grey hornbill.
      </p>
    </div>

  </div>
</section>

{/*===================== Text On Image =================*/}
<section>
  <div className="relative w-full h-60">
    <Image
      src="/assets/gallery1.jpg"
      alt=""
      fill
      className="object-cover"
    />

 <div className="absolute inset-0 bg-black/50"></div>

    {/* Text container */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
      <h2 className="font-josefin text-3xl md:text-4xl font-bold text-white">
       Athirappilly Waterfall In Monsoon
      </h2>
      <p className="font-lato text-gray-300 leading-relaxed max-w-5xl mt-6">
        Chalakudy River originating from Anamudi the highest peak point in Kerala and South India
        has gifted the largest waterfall to Kerala. The river has got its name from the town named
        Chalakudy. Chalakudy River is rich for the riparian vegetation. This river is considered as
        India’s one of the conservers of many endangered, rare, endemic species of flowering plants
        and fishes.
      </p>
    </div>
  </div>
</section>

{/*=================== numbers section =================*/}
 <section className="w-full bg-[#f3f3f3] py-5 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md p-6 sm:p-10 rounded-md border border-gray-200">
        
        {/* Timings */}
        <div className="w-full bg-[#f3f3f3] p-4 text-center mb-4">
          <p className="font-josefin text-xl font-semibold text-[#7a6a33]">
            Timings: 8:00 am to 5:00 pm
          </p>
        </div>

        {/* Height */}
        <div className="w-full bg-[#f3f3f3] p-4 text-center mb-4">
          <p className="font-josefin text-xl font-semibold text-[#7a6a33]">
            Total Height: 25 m (82 ft)
          </p>
        </div>

        {/* Coordinates */}
        <div className="w-full bg-[#f3f3f3] p-4 text-center">
          <p className="font-josefin text-xl font-semibold text-[#7a6a33]">
            Coordinates : 10°17'5"N 76°34'7"E
          </p>
        </div>

      </div>
    </section>


    </>
  )
}

export default aboutpage