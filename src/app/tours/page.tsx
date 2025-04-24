import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ToursPage() {
  const destinations = [
    {
      id: "varanasi",
      name: "Varanasi",
      image: "https://ext.same-assets.com/641552178/4154183048.jpeg",
      description:
        "Embark on a spiritual odyssey to Varanasi with Mahi Tours and Travels. Dive into the heart of Hinduism along the sacred Ganges River, where ancient rituals and vibrant culture intertwine. Discover timeless temples, serene ghats, and the mesmerizing aura of this mystical city.",
    },
    {
      id: "gaya",
      name: "Gaya",
      image: "https://ext.same-assets.com/641552178/1000111973.jpeg",
      description:
        "Delve into the rich tapestry of spirituality in Gaya with Mahi Tours and Travels. Explore the revered Mahabodhi Temple, where Lord Buddha attained enlightenment. Witness the solemnity of Bodh Gaya's sacred sites and immerse yourself in the tranquility of this spiritual haven.",
    },
    {
      id: "ayodhya",
      name: "Ayodhya",
      image: "https://ext.same-assets.com/641552178/3746420266.jpeg",
      description:
        "Embark on a journey to Ayodhya with Mahi Tours and Travels and uncover the legendary city's profound heritage. Explore sacred sites like Ram Janmabhoomi and Hanuman Garhi, resonating with tales of Lord Rama's divine presence. Immerse yourself in Ayodhya's spiritual ambiance and unravel its timeless significance.",
    },
    {
      id: "prayagraj",
      name: "Prayag Raj",
      image: "https://ext.same-assets.com/641552178/1469909280.jpeg",
      description:
        "Explore the holy confluence of three sacred rivers at Prayagraj with Mahi Tours and Travels. Experience the spiritual significance of Triveni Sangam, where the Ganges, Yamuna, and mythical Saraswati meet. Participate in the grand Kumbh Mela and discover ancient temples that dot this historically rich city.",
    },
    {
      id: "chitrakoot",
      name: "Chitrakoot",
      image: "https://ext.same-assets.com/641552178/3200746457.jpeg",
      description:
        "Embark on a serene journey to Chitrakoot with Mahi Tours and Travels. Explore the tranquil beauty of this ancient town, steeped in mythological significance. Visit sacred sites like Ramghat and Kamadgiri, where legends of Lord Rama's exile come to life. Experience spiritual serenity and natural splendor in Chitrakoot with us.",
    },
    {
      id: "naimisharanya",
      name: "Naimisharanya",
      image: "https://ext.same-assets.com/641552178/2439788814.jpeg",
      description:
        "Embark on a journey of spiritual exploration to Naimisharanya with Mahi Tours and Travels. Delve into the serene ambiance of this ancient forest, revered in Hindu scriptures. Visit sacred sites like Chakra Tirtha and Vyas Gaddi, where sages meditated and scriptures were penned. Immerse yourself in divine tranquility with us.",
    },
    {
      id: "mathura",
      name: "Mathura",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kusum-sarovar-mathura-uttar-pradesh-2-atttr-hero?qlt=82&ts=1726649327431",
      description:
        "Embark on a spiritual odyssey to Mathura with Mahi Tours and Travels. Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple. Dotting the Yamuna River are 25 ghats (flights of steps down to the water), of which Vishram Ghat is considered the holiest.",
    },
    {
      id: "lucknow",
      name: "Lucknow",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/1-chota-imambara-lucknow-uttar-pradesh-attr-hero?qlt=82&ts=1726648528039",
      description:
        "Lucknow, a large city in northern India, is the capital of the state of Uttar Pradesh. Toward its center is Rumi Darwaza, a Mughal gateway. Nearby, the 18th-century Bara Imambara shrine has a huge arched hall. Upstairs, Bhool Bhulaiya is a maze of narrow tunnels with city views from its upper balconies. Close by, the grand Victorian Husainabad Clock Tower was built as a victory column in 1881.",
    },
    {
      id: "vindhyachal",
      name: "Vindhyachal",
      image:
        "https://temple.yatradham.org/public/Product/temple/temple_Klmue7RQ_202408131457590.webp",
      description:
        "Vindhyachal pronunciation is a city in Mirzapur district of the Indian state of Uttar Pradesh. The city is a Hindu pilgrimage site having the temple of Vindhyavasini, who according to Markandeya Purana, had incarnated to kill the demon Mahishasura",
    },
    {
      id: "maihardevi",
      name: "Maihar Devi",
      image: "https://hindi.oneindia.com/img/2022/09/-1664167669.jpeg",
      description:
        "The name Maihar city is also said to be derived from a story related to Lord Shiva in this city. It is said that when Lord Shiva was carrying the body of Goddess Sati, the necklace from his neck broke and fell at this place. Since then, this city came to be known as “Maihar” after the necklace.",
    },
    {
      id: "agra",
      name: "Agra",
      image:
        "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1534158986/AgraFort_1534158959.jpg",
      description:
        "Agra is a city in the northern state of Uttar Pradesh, India. It is located on the banks of the Yamuna River, about 125 miles (200 km) southeast of Delhi. Agra is famous for being the capital of the Mughal emperors from 1526 to 1658. It is a major tourist destination for its many Mughal-era buildings such as Tāj Mahal, Agra Fort and Fatehpūr Sikrī, all three of which are UNESCO World Heritage Sites.",
    },
    {
      id: "vrindavan",
      name: "Vrindavan",
      image:
        "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-cms-storage.s3.ap-south-1.amazonaws.com%2FVrindavan_3f5fcf83ef.webp&w=3840&q=50https://s7ap1.scene7.com/is/image/incredibleindia/kusum-sarovar-mathura-uttar-pradesh-2-atttr-hero?qlt=82&ts=1726649327431",
      description:
        "Vrindavan is a holy town in Uttar Pradesh, northern India. The Hindu deity Krishna is said to have spent his childhood here. It’s home to temples, many dedicated to Krishna and his lover, the deity Radha. At Banke Bihari Temple, the curtain in front of Krishna’s statue is opened and closed every few minutes. At Radha Raman Temple, a gold plate beside Krishna signifies Radha. Prem Mandir is a huge white marble temple.",
    },
    {
      id: "gorakhpur",
      name: "Gorakhpur",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Gorakhnath_Mandir_in_nutshell.jpg",
      description:
        "Gorakhpur is a city in the Indian state of Uttar Pradesh, along the banks of the Rapti river in the Purvanchal region. It is situated 272 kilometres east of the state capital, Lucknow. It is the administrative headquarters of Gorakhpur district, North Eastern Railway Zone and Gorakhpur division.",
    },
    {
      id: "mau",
      name: "Mau",
      image:
        "https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/0/4/5/655045/0/734454151753704977822350762730n.jpg",
      description:
        "Mau, also now known as Maunath Bhanjan, is an industrial town and the headquarter of the Mau district. It is located in the eastern part of Uttar Pradesh, India. The town is known for its saree industry which is a traditional business and centuries old art of the people of this city.",
    },
    {
      id: "ghazipur",
      name: "Ghazipur",
      image: "https://medcab.in/assets/city/city_thumbnail1702377841.jpg",
      description:
        "Ghazipur, is a city in the state of Uttar Pradesh, India. Ghazipur city is the administrative headquarters of the Ghazipur district, one of the four districts that form the Varanasi division of Uttar Pradesh.",
    },
  ];

  const tourPackages = [
    {
      title: "VARANASI TOUR 01 NIGHTS/ 02 DAYS",
      image: "https://ext.same-assets.com/641552178/4154183048.jpeg",
      highlights: [
        "Evening Ganga Aarti at Dashashwamedh Ghat",
        "Morning boat ride on the Ganges",
        "Visit to Kashi Vishwanath Temple",
        "Exploration of Sarnath Buddhist site"
      ]
    },
    {
      title: "VARANASI TOUR 02 NIGHTS/ 03 DAYS",
      image: "https://ext.same-assets.com/641552178/1000111973.jpeg",
      highlights: [
        "Two evenings of Ganga Aarti ceremonies",
        "Sunrise boat ride on the sacred Ganges",
        "Visit to Kashi Vishwanath Temple complex",
        "Day trip to Sarnath with Buddhist monuments",
        "Tour of Banaras Hindu University campus"
      ]
    },
    {
      title: "VARANASI TOUR 04 N/ 05 D EVENING",
      image: "https://ext.same-assets.com/641552178/3746420266.jpeg",
      highlights: [
        "Multiple evening Ganga Aarti experiences",
        "Sunrise and sunset boat rides on the Ganges",
        "Comprehensive tour of city temples and ghats",
        "Excursion to Sarnath Buddhist pilgrimage site",
        "Visit to Ramnagar Fort and Museum",
        "Cultural performances and local cuisine experiences"
      ]
    },
    {
      title: "VARANASI TOUR 03 NIGHTS/ 04 DAYS",
      image: "https://ext.same-assets.com/641552178/1469909280.jpeg",
      highlights: [
        "Multiple Ganga Aarti ceremonies",
        "Morning boat rides on the Ganges",
        "Visit to major temples including Kashi Vishwanath",
        "Excursion to Sarnath",
        "Exploration of the old city and its markets",
        "Visit to silk weaving centers"
      ]
    },
    {
      title: "VARANASI TOUR 05 N/ 06 D",
      image: "https://ext.same-assets.com/641552178/3200746457.jpeg",
      highlights: [
        "Complete exploration of Varanasi's spiritual sites",
        "Multiple sunrise and sunset boat rides",
        "Evening aartis at different ghats",
        "Day trip to Sarnath",
        "Visit to nearby villages for rural experience",
        "Cultural programs and local craft demonstrations",
        "Optional yoga and meditation sessions"
      ]
    },
    {
      title: "VARANASI TOUR 06 NIGHTS / 07 Days",
      image: "https://ext.same-assets.com/641552178/2439788814.jpeg",
      highlights: [
        "Comprehensive spiritual journey through Varanasi",
        "Daily boat rides on the Ganges at different times",
        "Visit to all major temples and ghats",
        "Sarnath excursion with Buddhist monuments",
        "Day trip to Chunar Fort",
        "Cultural immersion with music and dance performances",
        "Cooking classes for traditional Banarasi cuisine",
        "Meditation and yoga sessions by the Ganges"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="hero-section py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/375568365/2979250428.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 hero-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trips & Tours</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our wide range of carefully crafted tour packages to experience the beauty and spirituality of India's most sacred destinations.
          </p>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>

          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className={`${index % 2 !== 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <h3 className="text-2xl font-bold mb-4">{destination.name}</h3>
                  <p className="text-gray-700 mb-6">
                    {destination.description}
                  </p>
                  <Link href={`/contact`}>
                    <Button variant="outline">Contact</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Varanasi Tour Packages</h2>
          <p className="text-center mb-12">Choose from our most popular tour packages</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <Card key={tour.title} className="overflow-hidden shadow-md h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold mb-4 text-lg">{tour.title}</h3>

                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-sm mb-2 text-gray-700">HIGHLIGHTS:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={`${tour.title}-highlight-${idx}`}>{highlight}</li>
                      ))}
                      {tour.highlights.length > 3 && (
                        <li className="text-primary">+{tour.highlights.length - 3} more...</li>
                      )}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button variant="outline" className="w-full">Enquire</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.8)), url('https://ext.same-assets.com/641552178/1469909280.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Create Your Custom Tour</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Looking for something specific? Contact us to design a custom tour package tailored to your preferences, schedule, and interests.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
