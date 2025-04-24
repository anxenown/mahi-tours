import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GhazipurTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>
        <center>
          <h1 className="text-center text-4xl font-bold mb-4">Ghazipur Trip</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-black text-white py-2 px-2 rounded">
              Location: Ghazipur
            </button>
            <button className="bg-black text-white py-2 px-2 rounded">
              Duration: 2 Days
            </button>
            <button className="bg-black text-white py-2 px-2 rounded">
              Affordable Price
            </button>
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                CONTACT NOW
              </button>
            </Link>
          </div>
        </center>
        <div className="flex space-x-8 mt-12">
          <div className="w-1/3 h-full">
            <img
              src="https://medcab.in/assets/city/city_thumbnail1702377841.jpg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Gazipur with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Ghazipur, is a city in the state of Uttar Pradesh, India. Ghazipur
              city is the administrative headquarters of the Ghazipur district,
              one of the four districts that form the Varanasi division of Uttar
              Pradesh
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://staticimg.amarujala.com/assets/images/2022/02/25/u-bb_1645730596.jpeg?w=1200"
                alt="Vishwanath Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Vishwanath Temple</h3>
              <p>
                A sacred temple dedicated to Lord Shiva, located near the Ghats.
                It’s considered spiritually powerful, especially during
                Mahashivratri.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2NiN2UyNzQ0OTAzYzRlYWI5YWM5NGMxOGZjYTJmMDdhIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19"
                alt="Mahadeva Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Mahadeva Ghat</h3>
              <p>
                Peaceful riverside locations ideal for morning prayers, Ganga
                snan (bathing), and evening aarti. The ghats are dotted with
                small temples and offer scenic views of the Ganges.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbizRet5kSZSHFF8RiGzqLBJLIGTz9tut68CfVCoVfduEHNxq3WBf1Xp3rqQR0HO5CSZM&usqp=CAU"
                alt="Dadri Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Dadri Ghat</h3>
              <p>
                Dadri Ghat in Ghazipur, Uttar Pradesh, is a significant river
                ghat on the Ganges (Ganga) River, known for its ancient history
                and religious significance.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bb/ab/ec/broken-edge.jpg?w=1200&h=1200&s=1"
                alt="Tila Munj (Ashoka's Stupa Site)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Tila Munj (Ashoka's Stupa Site)
              </h3>
              <p>
                An ancient Buddhist site believed to have remnants of a stupa
                built by Emperor Ashoka. It’s of interest to archaeology and
                history enthusiasts.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kmVCWh3mh5tAAoiBt_y6n85PhLM0dSA_yGeFFOvh1Lq_OVkr9iTmj58g7ucMTYxArR4&usqp=CAU"
                alt="Ghazipur Bazaar (Gol Bazaar, Buxipur)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Ghazipur Bazaar (Gol Bazaar, Buxipur)
              </h3>
              <p>
                Great for local sweets (like peda), brass items, and traditional
                goods. It has a laid-back, small-town charm.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.livehindustan.com/lh-img/uploadimage/library/2019/11/16/16_9/16_9_6/HH_BAL16BALPIC25_1573909878_1573909878.JPG"
                alt="Dadri Mela"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Dadri Mela</h3>
              <p>
                One of the largest cattle and trade fairs in India, held
                annually. It features livestock trade, rural entertainment, folk
                performances, and more.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-center text-2xl font-bold mt-8 mb-8">
              Location
            </h2>
            <iframe
              className="mb-8 w-full"
              height="300"
              src="https://www.openstreetmap.org/export/embed.html?bbox=83.5780%2C25.5800%2C83.6280%2C25.6300&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


