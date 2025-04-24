import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MathuraTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>
        <center>
          <h1 className="text-center text-4xl font-bold mb-4">Mathura Trip</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-black text-white py-2 px-2 rounded">
              Location: Mathura
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
              src="https://s7ap1.scene7.com/is/image/incredibleindia/kusum-sarovar-mathura-uttar-pradesh-2-atttr-hero?qlt=82&ts=1726649327431"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Mathura with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Explore the spiritual odyssey to Mathura with Mahi Tours and
              Travels. Mathura is a sacred city in Uttar Pradesh, northern
              India. The deity Lord Krishna is said to have been born on the
              site of Sri Krishna Janma Bhoomi, a Hindu temple. Dotting the
              Yamuna River are 25 ghats (flights of steps down to the water), of
              which Vishram Ghat is considered the holiest.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://www.trawell.in/admin/images/upload/103055465Mathura_Krishna_Janmabhoomi_Temple_Main.jpg"
                alt="Shri Krishna Janmabhoomi Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Shri Krishna Janmabhoomi Temple
              </h3>
              <p>
                The most sacred site in Mathura, believed to be the exact
                birthplace of Lord Krishna. The temple complex also houses a
                prison cell (Garbh Griha) where Krishna was born.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLvUrY0P6Waxtv9GKJ9zm_LCS1UQP-9e-1A&s"
                alt="Dwarkadhish Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Dwarkadhish Temple</h3>
              <p>
                A majestic 19th-century temple known for its intricate
                architecture and vibrant festivals, especially Janmashtami and
                Holi. Dedicated to Lord Krishna in his royal form.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllry4vkK985pj4wyHwuDYPJuvujd7dE6lQQ&s"
                alt="Gita Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Gita Mandir</h3>
              <p>
                A beautiful temple dedicated to Lord Krishna, built by Birla
                family. It is known for its intricate sculptures of Lord Krishna
                and verses from the Bhagavad Gita.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/800px-Vishram_Ghat_20200428142441.jpg"
                alt="Vishram Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Vishram Ghat</h3>
              <p>
                A sacred bathing ghat on the Yamuna River, where Krishna is said
                to have rested after defeating Kansa. Evening aarti ceremonies
                here are serene and magical.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://cdn.britannica.com/06/195006-138-993E69CA/Ganges-River-tributary-human-rights-Yamuna-2017.jpg?w=400&h=225&c=crop"
                alt="Yamuna River Ghats"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Yamuna River Ghats</h3>
              <p>
                There are 25 ghats along the Yamuna in Mathura. These are used
                for religious rituals, holy dips, and spiritual boat rides.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://stominindia.com/wp-content/uploads/2023/05/Govardhan-Parikrama.jpg"
                alt="Govardhan Hill"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Govardhan Hill</h3>
              <p>
                Located about 25 km from Mathura, Govardhan Parvat is where
                Krishna lifted the hill to protect villagers from rain. Pilgrims
                perform Govardhan Parikrama around the hill.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.6700%2C27.4500%2C77.7200%2C27.5000&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


