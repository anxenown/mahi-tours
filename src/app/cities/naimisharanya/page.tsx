import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NaimisharanyaTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">
          Naimisharanya Trip
        </h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Naimisharanya
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
              src="https://ext.same-assets.com/641552178/2439788814.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Naimisharanya with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Explore the spiritual exploration to Naimisharanya with Mahi Tours
              and Travels. Delve into the serene ambiance of this ancient
              forest, revered in Hindu scriptures. Visit sacred sites like
              Chakra Tirtha and Vyas Gaddi, where sages meditated and scriptures
              were penned. Immerse yourself in divine tranquility with us.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://imagedelivery.net/IEMzXmjRvW0g933AN5ejrA/wwwnotionso-image-prod-files-secures3us-west-2amazonawscom-0da87b11-5e1d-4762-99d5-edcbbb5df6df-40b0443f-acfa-4eb6-83a7-b94ff31af4aa-chakratirth-1jpg/public"
                alt="Chakra Tirth"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Chakra Tirth</h3>
              <p>
                This is the central point of Naimisharanya and believed to be
                the place where Lord Vishnu's Sudharshan Chakra fell, marking it
                as a divine spot. It is a circular water tank and considered the
                center of spiritual energy.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sri-lalita-devi-mandir-naimisharanya.jpg"
                alt="Lalita Devi Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Lalita Devi Temple</h3>
              <p>
                One of the Shakti Peethas, this temple is dedicated to Goddess
                Lalita. It’s said that the heart of Goddess Sati fell here,
                making it a potent place of divine feminine energy.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.tourmyindia.com/states/uttarpradesh/images/sita-kund-naimisharanya.jpg"
                alt="Sita Kund"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Sita Kund</h3>
              <p>
                A peaceful water body said to have been formed when Goddess Sita
                quenched her thirst during her exile. Pilgrims believe its
                waters have healing properties.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/c3/d4/0a/hanuman-garhi-temple.jpg?w=900&h=500&s=1"
                alt="Hanuman Garhi"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Hanuman Garhi</h3>
              <p>
                A temple dedicated to Lord Hanuman with a large statue and a
                peaceful spiritual ambiance. A must-visit for Hanuman devotees.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.connectingtraveller.com/images/localtip/1632587439images%20(91).jpeg"
                alt="Dashashwamedh Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Dashashwamedh Ghat</h3>
              <p>
                Named after the spot where Lord Rama performed ten Ashwamedha
                Yagnas. This ghat by the Gomti River is ideal for holy dips and
                rituals.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.tourmyindia.com/states/uttarpradesh/images/nardanand-saraswati-ashram-naimisharanya1.jpg"
                alt="Pandav Kila"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Pandav Kila</h3>
              <p>
                Believed to be a place where the Pandavas stayed during their
                exile. The site includes ancient remains and spiritual vibes.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.5000%2C26.2000%2C80.5500%2C26.2500&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


