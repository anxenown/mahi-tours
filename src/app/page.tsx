import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="hero-section py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/641552178/1469909280.jpeg')`,
        }}
      >
        <div className="container mx-auto px-4 hero-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Uttar Pradesh
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Your Gateway to Timeless Journeys
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Embark on unforgettable adventures in Uttar Pradesh with our travel
            agency. Explore ancient wonders, vibrant culture, and spiritual
            serenity with us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours">
              <Button className="w-full sm:w-auto" size="lg">
                Packages
              </Button>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=919198742110&text=Hi%20I%20Have%20an%20enquiry">
              <Button
                variant="outline"
                className=" text-green-600 hover:text-primary transition-colors"
                size="icon"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/cities/varanasi"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/641552178/4154183048.jpeg"
                  alt="Varanasi"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Varanasi</h3>
                </div>
              </div>
            </Link>

            <Link href="/cities/gaya" className="destination-card group block">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/641552178/1000111973.jpeg"
                  alt="Gaya"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Gaya</h3>
                </div>
              </div>
            </Link>

            <Link
              href="/cities/ayodhya"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/641552178/3746420266.jpeg"
                  alt="Ayodhya"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Ayodhya</h3>
                </div>
              </div>
            </Link>

            <Link
              href="/cities/prayagraj"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/641552178/1469909280.jpeg"
                  alt="Prayag Raj"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Prayag Raj</h3>
                </div>
              </div>
            </Link>

            <Link
              href="/cities/chitrakoot"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/641552178/3200746457.jpeg"
                  alt="Chitrakoot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Chitrakoot</h3>
                </div>
              </div>
            </Link>

            <Link
              href="/cities/naimisharanya"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/641552178/2439788814.jpeg"
                  alt="Naimisharanya"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    Naimisharanya
                  </h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/mathura"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://s7ap1.scene7.com/is/image/incredibleindia/kusum-sarovar-mathura-uttar-pradesh-2-atttr-hero?qlt=82&ts=1726649327431"
                  alt="Mathura"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Mathura</h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/lucknow"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://s7ap1.scene7.com/is/image/incredibleindia/1-chota-imambara-lucknow-uttar-pradesh-attr-hero?qlt=82&ts=1726648528039"
                  alt="Lucknow"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Lucknow</h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/vindhyachal"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://temple.yatradham.org/public/Product/temple/temple_Klmue7RQ_202408131457590.webp"
                  alt="Vindhyachal"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Vindhyachal</h3>
                </div>
              </div>
            </Link>
            <Link href="/cities/agra" className="destination-card group block">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1534158986/AgraFort_1534158959.jpg"
                  alt="Agra"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Agra</h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/maihardevi"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://hindi.oneindia.com/img/2022/09/-1664167669.jpeg"
                  alt="Maihar Devi"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Maihar Devi</h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/vrindavan"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://wallpapercave.com/wp/wp9294585.jpg"
                  alt="Vrindavan"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Vrindavan</h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/gorakhpur"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gorakhnath_Mandir_in_nutshell.jpg"
                  alt="Gorakhpur"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Gorakhpur</h3>
                </div>
              </div>
            </Link>
            <Link href="/cities/mau" className="destination-card group block">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/0/4/5/655045/0/734454151753704977822350762730n.jpg"
                  alt="Mau"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Mau</h3>
                </div>
              </div>
            </Link>
            <Link
              href="/cities/ghazipur"
              className="destination-card group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://medcab.in/assets/city/city_thumbnail1702377841.jpg"
                  alt="Ghazipur"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Ghazipur</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Amazing Things Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Amazing Things for You
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-10">
            Embark on spiritual pilgrimages, cultural immersions, and boat
            excursions along the Ganges with our Varanasi travel agency. Tailor
            your experience, savor local cuisine, and indulge in luxury
            accommodations. Explore traditions through exclusive workshops and
            expert guides, ensuring a seamless, unforgettable journey.
          </p>
          <div className="flex justify-center">
            <Link href="/about">
              <Button>Our History</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Varanasi Tour Packages
          </h2>
          <p className="text-center mb-12">
            Choose a best tour from a list of most popular package.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "VARANASI TOUR 01 NIGHTS/ 02 DAYS",
                image: "https://ext.same-assets.com/641552178/4154183048.jpeg",
              },
              {
                title: "VARANASI TOUR 02 NIGHTS/ 03 DAYS",
                image: "https://ext.same-assets.com/641552178/1000111973.jpeg",
              },
              {
                title: "VARANASI TOUR 04 N/ 05 D EVENING",
                image: "https://ext.same-assets.com/641552178/3746420266.jpeg",
              },
              {
                title: "VARANASI TOUR 03 NIGHTS/ 04 DAYS",
                image: "https://ext.same-assets.com/641552178/1469909280.jpeg",
              },
              {
                title: "VARANASI TOUR 05 N/ 06 D",
                image: "https://ext.same-assets.com/641552178/3200746457.jpeg",
              },
              {
                title: "VARANASI TOUR 06 NIGHTS / 07 Days",
                image: "https://ext.same-assets.com/641552178/2439788814.jpeg",
              },
            ].map((tour, index) => (
              <Card key={index} className="overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-4">{tour.title}</h3>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Enquire
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Rental Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Rental Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maruti Suzuki Ertiga",
                price: "16 ₹",
                seats: "6 seater",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKzYeFR2KdyV_5S7Retga6ee0ce-2gFRfBA&s",
                details: ["Outstation Rs.17 ₹/Km"],
              },
              {
                name: "Swift Dzire",
                price: "13 ₹",
                seats: "4 seater",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXFTEPpR6khLiYO3Ia802PjbqJWBZ_lQ8Qw&s",
                details: ["Outstation Rs.14 ₹/Km"],
              },
              {
                name: "Innova Crysta",
                price: "20 ₹",
                seats: "6 seater",
                image:
                  "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
                details: ["Outstation Rs.21 ₹/Km"],
              },

              {
                name: "Urbania Tempo Traveller",
                price: "28 ₹",
                seats: "17-26 seater",
                image:
                  "https://5.imimg.com/data5/ANDROID/Default/2024/9/454625205/ZO/VU/VP/91384426/product-jpeg-500x500.jpg",
                details: ["Outstation Rs.29 ₹/Km"],
              },
              {
                name: "Bus",
                price: "75 ₹",
                seats: "30-40 seater",
                image:
                  "https://buscdn.cardekho.com/in/ashok-leyland/oyster-tourist-bus/ashok-leyland-oyster-tourist-bus.jpg",
                details: ["Outstation Rs.76/Km"],
              },
              {
                name: "Force Cruiser",
                price: "18 ₹",
                seats: "10-13 seater",
                image:
                  "https://static.caronphone.com/public/brands/9/348/348.webp",
                details: ["Outstation Rs.19 ₹/Km"],
              },
            ].map((car, index) => (
              <Card key={index} className="overflow-hidden bg-white shadow-md">
                <div className="relative h-48">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">{car.name}</h3>
                  <div className="flex items-end gap-1 my-2">
                    <span className="text-3xl font-bold text-primary">
                      {car.price}
                    </span>
                    <span className="text-gray-600 pb-1">/ per km</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{car.seats}</p>

                  <ul className="space-y-2 mb-4">
                    {car.details.map((detail, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <span className="text-primary">•</span> {detail}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm mb-4">
                    Hire {car.name.split(" ")[0]} in Varanasi.
                  </p>

                  <Link href="/contact">
                    <Button className="w-full">Rent Now</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Glimpses of Varanasi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Performances In Kashi",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_4.jpg",
              },
              {
                title: "Virtues In Kashi",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_1.jpg",
              },
              {
                title: "Beauty of Banaras",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_2.jpg",
              },
              {
                title: "Special Transport In Kashi",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_6.jpg",
              },
              {
                title: "Spirituality In Kashi",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_5.jpg",
              },
              {
                title: "Special Boat Ride In Kashi",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_3.jpg",
              },
            ].map((glimpse, index) => (
              <div key={index} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={glimpse.image}
                    alt={glimpse.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-bold text-white">
                      {glimpse.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Excellent</h3>
          <p className="mb-4">
            Based on <strong>266 reviews</strong>
          </p>

          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Shubham Gupta",
                date: "2024-05-04",
                review: "Best car rental service quickly response",
              },
              {
                name: "Himani Gupta",
                date: "2024-04-29",
                review: "Best cab service and affordable car rental tariff",
              },
              {
                name: "Sejal Sahu",
                date: "2024-04-22",
                review: "Nice car rental and prompt response",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm mb-4">{review.review}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{review.name}</span>
                  <span className="text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.8)), url('https://ext.same-assets.com/641552178/1469909280.jpeg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Call to Action</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Start your Varanasi adventure today. Explore, experience, and
            embrace the magic. Book now for an unforgettable journey with our
            expertly crafted travel packages.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/20"
            >
              Contact
            </Button>
          </Link>
        </div>
      </section>

      {/* Places to Visit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Places to Visit Varanasi
          </h2>
          <p className="text-center mb-12">
            Choose a best tour from a list of most popular package.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sarnath",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_2.jpg",
              },
              {
                title: "Ganga Arti",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/01/blt_6_3.jpg",
              },
              {
                title: "Tulsi Manas Mandir",
                image:
                  "https://bijaylaxmitravels.com/wp-content/uploads/2024/02/tmm.jpg",
              },
            ].map((place, index) => (
              <div key={index} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">
                      {place.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
