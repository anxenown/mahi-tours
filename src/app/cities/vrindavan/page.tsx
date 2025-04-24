import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function VrindavanTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">Vrindavan Trip</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Vrindavan
          </button>
          <button className="bg-black text-white py-2 px-4 rounded">
            Duration: 2 Days
          </button>
          <button className="bg-black text-white py-2 px-4 rounded">
            Affordable Price
          </button>
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              CONTACT NOW
            </button>
          </Link>
        </div>

        <div className="flex space-x-8 mt-12">
          <div className="w-1/3 h-full">
            <img
              src="https://wallpapercave.com/wp/wp9294585.jpg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Vrindavan with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Vrindavan is a holy town in Uttar Pradesh, northern India. The
              Hindu deity Krishna is said to have spent his childhood here. It’s
              home to temples, many dedicated to Krishna and his lover, the
              deity Radha. At Banke Bihari Temple, the curtain in front of
              Krishna’s statue is opened and closed every few minutes. At Radha
              Raman Temple, a gold plate beside Krishna signifies Radha. Prem
              Mandir is a huge white marble temple.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://www.bihariji.org/assets/img/biharijiTemple.jpeg"
                alt="Banke Bihari Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Banke Bihari Temple</h3>
              <p>
                The most famous temple in Vrindavan, dedicated to Banke Bihari
                (a childlike form of Krishna). The deity here is so enchanting
                that even darshan (viewing) is done in intervals to prevent
                devotees from fainting in ecstasy!
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/PremMandirSideViewFromCanteen.jpg"
                alt="Prem Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Prem Mandir</h3>
              <p>
                A stunning marble temple known for its intricate carvings,
                musical fountain shows, and illuminated night views. It narrates
                Krishna's life stories in stone.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsTSbsHt0DXzSFR5WMPyeTmJiT1Tp_w7FrA&s"
                alt="Radha Raman Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Radha Raman Temple</h3>
              <p>
                Home to one of the self-manifested (swayambhu) deities of
                Krishna. A serene temple, spiritually charged and full of
                heritage.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://static.wixstatic.com/media/3ed1e1_5316b89149b744ff8e2a4f81a83e7792~mv2.jpg/v1/fill/w_640,h_484,al_c,lg_1,q_80,enc_avif,quality_auto/3ed1e1_5316b89149b744ff8e2a4f81a83e7792~mv2.jpg"
                alt="Seva Kunj"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Seva Kunj</h3>
              <p>
                A mystical garden where Lord Krishna is believed to have
                performed Raas Leela with Radha and the gopis. Entry is
                prohibited after sunset due to spiritual beliefs.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.mathuravrindavantourpackages.com/images/temple/slider/nidhivan-temple-1.webp"
                alt="Nidhivan"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Nidhivan</h3>
              <p>
                A forest believed to be the nightly meeting spot of Krishna and
                Radha. Locals believe divine activities still happen here at
                night — no one is allowed inside after dark.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzhYYl0NJ_zN7nYi74H66Law6G5dGJof6Vg&s"
                alt="Vrindavan Chandrodaya Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Vrindavan Chandrodaya Mandir
              </h3>
              <p>
                This is set to be the tallest temple in the world, combining
                spirituality with technology, with a massive Krishna temple and
                an immersive Vedic theme park.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.6700%2C27.2000%2C77.7200%2C27.2500&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


