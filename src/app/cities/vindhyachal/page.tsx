import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function VindhyachalTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">
          Vindhyachal Trip
        </h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Vindhyachal
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
              src="https://temple.yatradham.org/public/Product/temple/temple_Klmue7RQ_202408131457590.webp"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Vindhyachal with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Vindhyachal pronunciation is a city in Mirzapur district of the
              Indian state of Uttar Pradesh. The city is a Hindu pilgrimage site
              having the temple of Vindhyavasini, who according to Markandeya
              Purana, had incarnated to kill the demon Mahishasura.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://www.seawatersports.com/images/places/vindhyavasini-devi-temple.png"
                alt="Vindhyavasini Devi Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Vindhyavasini Devi Temple
              </h3>
              <p>
                The main shrine of Goddess Vindhyavasini (an incarnation of
                Durga), believed to have chosen this place to reside after
                defeating the demon Mahishasura. This temple is always bustling
                with devotees, especially during Navratri.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.seawatersports.com/images/places/ashtabhuja-temple.png"
                alt="Ashtabhuja Devi Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Ashtabhuja Devi Temple</h3>
              <p>
                Located on a hilltop about 8 km from the Vindhyavasini temple,
                this temple is dedicated to Ashtabhuja (the eight-armed form of
                Goddess Durga). The view from the top and the serene
                surroundings make it a spiritually enriching experience.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://pbs.twimg.com/media/FxTyhhhagAAfCv_?format=jpg&name=large"
                alt="Kali Khoh Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Kali Khoh Temple</h3>
              <p>
                A cave temple dedicated to Goddess Kali, situated in a serene
                and forested area. It is believed that the fierce form of the
                Goddess resided here after slaying demons.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://files.yappe.in/place/full/ganga-ghat-vindhyachal-10846113.webp"
                alt="Ganga Riverfront / Vindyachal Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Ganga Riverfront / Vindyachal Ghat
              </h3>
              <p>
                The sacred Ganges flows through Vindhyachal. The ghats here are
                peaceful and ideal for spiritual reflection, aarti rituals, and
                ceremonial baths.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.pilgrimagetour.in/blog/wp-content/uploads/2018/06/Rameshwar-Mahadev-Temple.jpg"
                alt="Tarkeshwar Nath Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Tarkeshwar Nath Temple</h3>
              <p>
                A peaceful Shiva temple near the river, less crowded and ideal
                for meditation and quiet worship. It’s believed to be a
                wish-fulfilling shrine.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQygyT1BGkBAyih-5L90vHL5c9fWCdjutk85NJ4D7OewiFKRJA6N1_TQT7D5DtDZo_xu4&usqp=CAU"
                alt="Navratri Mela (Fair)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Navratri Mela (Fair)</h3>
              <p>
                If you visit during Chaitra (April) or Sharad (October)
                Navratri, you’ll experience a vibrant spiritual fair filled with
                lights, devotion, music, and cultural shows.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=82.5800%2C25.2000%2C82.6300%2C25.2500&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


