import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MaihardeviTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">
          Maihar devi Trip
        </h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Maihar Devi
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
              src="https://hindi.oneindia.com/img/2022/09/-1664167669.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Maihar Devi with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              The name Maihar city is also said to be derived from a story
              related to Lord Shiva in this city. It is said that when Lord
              Shiva was carrying the body of Goddess Sati, the necklace from his
              neck broke and fell at this place. Since then, this city came to
              be known as “Maihar” after the necklace.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://i0.wp.com/ropewaybooking.com/wp-content/uploads/2020/12/maihar-maa-sharda-devi-temple.jpg?fit=1280%2C720&ssl=1"
                alt="Sharda Devi Temple (Maihar Devi)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Sharda Devi Temple (Maihar Devi)
              </h3>
              <p>
                This is the main attraction of Maihar, perched on Trikuta Hill
                with 1,063 steps or ropeway access. Dedicated to Goddess Sharda
                (a form of Durga/Saraswati), it's believed that Adi
                Shankaracharya established the temple here.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlwSY3Z5GkblbXxG2FNxnPzc0e5eik9BgFg&s"
                alt="Alha and Udal Akhada"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Alha and Udal Akhada</h3>
              <p>
                Near the Sharda temple is a sacred spot associated with Alha and
                Udal, the legendary warriors and devotees of Sharda Devi.
                There's a pond and an akhada (wrestling arena) that connects
                mythology with local lore.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.myindiamyglory.com/wp-content/uploads/2016/11/trikuta-hill.jpg"
                alt="Trikuta Hill Viewpoint"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Trikuta Hill Viewpoint</h3>
              <p>
                From the Sharda Devi Temple summit, you get panoramic views of
                Maihar town and its lush surroundings. Early morning or sunset
                visits are magical.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/04/10/2768987-14.jpg"
                alt="Bhairav Baba Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Bhairav Baba Temple</h3>
              <p>
                Located near the Sharda Devi complex, this small temple is
                dedicated to Lord Bhairava, often worshipped as the guardian
                deity of Shakti temples.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://i.ytimg.com/vi/YTwqZ-6V0_k/0.jpg"
                alt="Maihar Market"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Maihar Market</h3>
              <p>
                After your temple visit, explore the local market for souvenirs,
                religious items, and local sweets like peda and laddoo.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PNt44mr4gXnf5oOGn5MkiNaZiSayNwS2jA&s"
                alt="Bada Akhada Hanuman Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Bada Akhada Hanuman Mandir
              </h3>
              <p>
                A peaceful temple en route to the Sharda shrine, known for its
                Hanuman idol and spiritual atmosphere. Pilgrims often stop here
                before the final climb.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=82.5000%2C25.3000%2C82.5500%2C25.3500&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


