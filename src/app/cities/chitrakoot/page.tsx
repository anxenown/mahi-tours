import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChitrakootTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">Chitrakoot Trip</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Chitrakoot
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
              src="https://ext.same-assets.com/641552178/3200746457.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Chitrakoot with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Start your serene journey to Chitrakoot with Mahi Tours and
              Travels. Explore the tranquil beauty of this ancient town, steeped
              in mythological significance. Visit sacred sites like Ramghat and
              Kamadgiri, where legends of Lord Rama's exile come to life.
              Experience spiritual serenity and natural splendor in Chitrakoot
              with us.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSNt09aCTbQqJe1BuBqG3PLJuEAmiZEWHOw&s"
                alt="Ram Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Ram Ghat</h3>
              <p>
                A holy ghat on the Mandakini River, where Lord Rama is believed
                to have bathed. Pilgrims take a dip here and enjoy evening aarti
                with floating diyas.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/08/06152447/Untitled-design-59.png"
                alt="Kamadgiri Hill"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Kamadgiri Hill</h3>
              <p>
                The most sacred hill in Chitrakoot, believed to be the original
                Chitrakoot mountain mentioned in Ramayana. Devotees perform
                parikrama (ritual circumambulation) around the hill (5 km).
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGe8HRJQG4bOodlLZkI7NLgPGWZ64e5Mn4aw&s"
                alt="Bharat Milap Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Bharat Milap Temple</h3>
              <p>
                The sacred spot where Bharat met Lord Rama and asked him to
                return to Ayodhya. It’s a major emotional moment from the epic.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6_aZonT7v2mW69H2wZtfzgqggZWWV3CqEA&s"
                alt="Gupt Godavari Caves"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Gupt Godavari Caves</h3>
              <p>
                A pair of natural limestone caves where Rama and Lakshmana are
                believed to have held court. The caves have streams flowing
                inside them.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://cms.patrika.com/wp-content/uploads/2020/02/03/chitrakoot3_5724304-m.jpg"    alt="Hanuman Dhara"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Hanuman Dhara</h3>
              <p>
                A sacred site on a hill where Lord Hanuman is said to have
                cooled down after burning Lanka. There's a water stream flowing
                from the rock that never dries.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://cdn1.prayagsamagam.com/media/2023/05/12200021/Janki-kund-chitrakoot-2.webp"      alt="Janaki Kund"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Janaki Kund</h3>
              <p>
                A peaceful ghat where Sita used to bathe during exile. The area
                is tranquil and ideal for meditation or reflection.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.9000%2C25.1500%2C80.9500%2C25.2000&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


