import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GayaTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>
        <center>
          <h1 className="text-center text-4xl font-bold mb-4">Gaya Trip</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-black text-white py-2 px-2 rounded">
              Location: Gaya
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
              src="https://ext.same-assets.com/641552178/1000111973.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Gaya with Mahi Tours and Travels,
              where spirituality meets adventure. Gaya is known for its rich
              cultural heritage, religious significance, and serene landscapes.
              Our tour offers an unforgettable experience, allowing you to
              explore the ancient temples, participate in traditional rituals,
              and immerse yourself in the local culture.
            </p>
            <p className="mb-4">
              Delve into the spiritual ambiance of Gaya as you visit the revered
              Vishnupad Temple, dedicated to Lord Vishnu. Witness the grandeur
              of the temple's architecture and participate in the rituals
              performed by the priests. Explore the Mahabodhi Temple, a UNESCO
              World Heritage Site, where Lord Buddha is said to have attained
              enlightenment.
            </p>
            <p className="mb-4">
              Our tour also includes a visit to the Phalgu River, where you can
              perform the sacred Pind Daan rituals for your ancestors.
              Experience the tranquility of the river and the spiritual
              significance it holds. Additionally, you will have the opportunity
              to explore the local markets, interact with the friendly locals,
              and savor the delicious regional cuisine.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/gaya/vishnupad_temple/vishnupad-temple.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg"
                alt="Vishnupad Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Vishnupad Temple</h3>
              <p>
                Visit the revered Vishnupad Temple, dedicated to Lord Vishnu.
                Witness the grandeur of the temple's architecture and
                participate in the rituals performed by the priests.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-4-attr-hero?qlt=82&ts=1726740645749"
                alt="Mahabodhi Temple (Bodh Gaya)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Mahabodhi Temple (Bodh Gaya)
              </h3>
              <p>
                Explore the Mahabodhi Temple, a UNESCO World Heritage Site,
                where Lord Buddha is said to have attained enlightenment. The
                temple complex is a serene haven, perfect for meditation and
                introspection.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnd4dHBqjlUOxiuSX7ut6a9HOZEc-YDLOIw&s"
                alt="Mangla Gauri Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Mangla Gauri Temple</h3>
              <p>
                Dedicated to Goddess Sati (Shakti), it's considered one of the
                18 Maha Shaktipeeths. It sits atop a hill and is especially
                revered by women.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://static.langimg.com/thumb/99837609/navbharat-times-99837609.jpg?imgsize=234258&width=540&resizemode=3"
                alt="Ramshila Hill & Pretshila Hill"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Ramshila Hill & Pretshila Hill
              </h3>
              <p>
                Two important pilgrimage spots where pind daan is performed.
                Pretshila is known for liberating souls, while Ramshila has
                references from the Ramayana.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1696836496_bodhi_tree.jpg.webp"
                alt="Bodhi Tree"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Bodhi Tree</h3>
              <p>
                A direct descendant of the original Bodhi Tree under which
                Buddha meditated. Devotees and monks from all over the world sit
                under it in silence.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://cdn.britannica.com/21/1621-050-FFCB3339/pilgrims-ghat-Phalgu-River-Bihar-India-Gaya.jpg"
                alt="Phalgu River"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Phalgu River</h3>
              <p>
                Visit the Phalgu River, where you can perform the sacred Pind
                Daan rituals for your ancestors. Experience the tranquility of
                the river and the spiritual significance it holds.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=84.9814%2C24.7955%2C85.0514%2C24.8355&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


