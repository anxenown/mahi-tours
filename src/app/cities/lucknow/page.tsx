import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LucknowTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>
        <center>
          <h1 className="text-center text-4xl font-bold mb-4">Lucknow Trip</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-black text-white py-2 px-2 rounded">
              Location: Lucknow
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
              src="https://s7ap1.scene7.com/is/image/incredibleindia/1-chota-imambara-lucknow-uttar-pradesh-attr-hero?qlt=82&ts=1726648528039"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Lucknow with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Lucknow, a large city in northern India, is the capital of the
              state of Uttar Pradesh. Toward its center is Rumi Darwaza, a
              Mughal gateway. Nearby, the 18th-century Bara Imambara shrine has
              a huge arched hall. Upstairs, Bhool Bhulaiya is a maze of narrow
              tunnels with city views from its upper balconies. Close by, the
              grand Victorian Husainabad Clock Tower was built as a victory
              column in 1881.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://static.toiimg.com/photo/103890972.cms"
                alt="Bara Imambara"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Bara Imambara</h3>
              <p>
                Built by Nawab Asaf-ud-Daula in 1784, this iconic structure is
                known for the Bhool Bhulaiya (labyrinth) and large vaulted hall
                without support beams.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://i.pinimg.com/736x/db/d0/e2/dbd0e22cb13b247990357f7eb20bb735.jpg"
                alt="Hanumant Dham"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Hanumant Dham</h3>
              <p>
                This temple is beside Gomti river and very beautiful temple near
                kd singh babu stadium metro station lucknow. One must visit once
                atleast.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtcvZOJu6Epa-U7LhW0aFHy4fYx4FPgMwvQ&s"
                alt="Ambedkar Memorial Park"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Ambedkar Memorial Park</h3>
              <p>
                A grand memorial made of red sandstone with statues, pillars,
                and a peaceful vibe — dedicated to Dr. B.R. Ambedkar and other
                social reformers.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEar9SL3qXtKX_U3djr585aWED0KU22hoTRg&s"
                alt="Janeshwar Mishra Park"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Janeshwar Mishra Park</h3>
              <p>
                One of Asia's largest parks, it features lakes, cycle tracks,
                and lush greenery — perfect for relaxation or a morning walk.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://staticimg.amarujala.com/assets/images/2023/08/15/street-food_1692098934.jpeg?w=414&dpr=1.0&q=80"
                alt="Chatori Gali"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Chatori Gali</h3>
              <p>
                Popular market for local street food like momos, tunday, kababs
                and biryani.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/5b/24/de/a-heritage-building-in.jpg?w=1200&h=-1&s=1"
                alt="Aminabad Market"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Aminabad Market</h3>
              <p>
                Traditional market for Chiken, clothing, bangles, jewelry, and
                local street food like noodles and biryani.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.9431%2C26.8350%2C80.9931%2C26.8850&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


