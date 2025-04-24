import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GorakhpurTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>
        <center>
          <h1 className="text-center text-4xl font-bold mb-4">Gorakhpur Trip</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-black text-white py-2 px-2 rounded">
              Location: Gorakhpur
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
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gorakhnath_Mandir_in_nutshell.jpg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Gorakhpur with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Gorakhpur is a city in the Indian state of Uttar Pradesh, along
              the banks of the Rapti river in the Purvanchal region. It is
              situated 272 kilometres east of the state capital, Lucknow. It is
              the administrative headquarters of Gorakhpur district, North
              Eastern Railway Zone and Gorakhpur division.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gorakhnath_Mandir_in_nutshell.jpg"
                alt="Gorakhnath Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Gorakhnath Temple</h3>
              <p>
                The most iconic temple in the city, dedicated to Gorakhnath, a
                revered yogi and saint of the Nath tradition. It has a massive
                campus with daily rituals, fairs, and deep spiritual energy.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://images.indianexpress.com/2023/06/gate21644394027-2.jpg"
                alt="Geeta Press"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Geeta Press</h3>
              <p>
                One of the world's largest publishers of Hindu religious texts.
                The press has a museum-like hall with sculptures from epics like
                the Ramayana and Mahabharata, and a serene vibe.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.jagranimages.com/images/newimg/20062022/20_06_2022-vishunu_mandir_22817840.jpg"
                alt="Vishnu Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Vishnu Temple</h3>
              <p>
                A peaceful temple near the railway station known for its
                beautiful idol of Lord Vishnu and quiet ambiance.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr1__rbzDH3bKTxME5mU8y15ws6GMsJoiIw&s"
                alt="Arogya Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Arogya Mandir</h3>
              <p>
                A wellness and naturopathy center founded by Dr. Vithal Das Modi
                — known for its natural healing therapies and peaceful
                environment.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://staticimg.amarujala.com/assets/images/2020/09/25/ramgarh-taal_1601017393.jpeg?w=750"
                alt="Ramgarh Taal (Lake)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Ramgarh Taal (Lake)</h3>
              <p>
                A huge natural lake, great for boating, picnicking, or watching
                the sunset. It’s being developed as a tourist attraction with
                modern amenities.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8_qt3Gix4xH3c2PDtr2CQxJ2PINrCXcH1A&s"
                alt="Golghar Market"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Golghar Market</h3>
              <p>
                A bustling central market for shopping clothes, electronics, and
                street food — a great place to feel the city’s energy.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=83.3460%2C26.7350%2C83.3960%2C26.7850&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


