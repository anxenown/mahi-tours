import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MauTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">Mau Trip</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Mau
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
              src="https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/0/4/5/655045/0/734454151753704977822350762730n.jpg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Mau with Mahi Tours and Travels,
              where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Mau, also now known as Maunath Bhanjan, is an industrial town and
              the headquarter of the Mau district. It is located in the eastern
              part of Uttar Pradesh, India. The town is known for its saree
              industry which is a traditional business and centuries old art of
              the people of this city.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NmUHSpcSJ3TuDTxTXhHl-i-CoobEvTIyMO_kZdcqTYHO-KDvuzxYWRu80F0zAGS01A8&usqp=CAU"        alt="Sitla Mata Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Sitla Mata Mandir</h3>
              <p>
                A revered temple dedicated to Goddess Sheetala, located in the
                heart of Mau. Devotees gather especially during Sheetala
                Ashtami.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.templepurohit.com/wp-content/uploads/2015/05/Kalkaji-Mandir-Kalka-Devi-temple-Delhi_TemplePurohit.jpg"           alt="Kalka Devi Mandir (Kalka Maa Temple)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Kalka Devi Mandir (Kalka Maa Temple)
              </h3>
              <p>
                A popular temple dedicated to Goddess Kali, attracting a large
                number of devotees during Navratri. The temple has a peaceful
                ambiance.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://images.bhaskarassets.com/web2images/521/2024/08/19/2232d898-11e7-422a-b4ec-dc1faa8b0555_1724010139189.jpg"        alt="Mahadev Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Mahadev Mandir</h3>
              <p>
                A Shiva-Parvati temple that is centuries old. It holds
                historical and religious importance and is visited frequently by
                locals, especially on Mondays and during Shravan.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://i.ytimg.com/vi/D4WZgXvWqcM/maxresdefault.jpg"         alt="Tamsa River Ghats"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Tamsa River Ghats</h3>
              <p>
                The Tamsa River flows near Mau. The riverbanks are calm and
                suitable for short visits, especially at sunrise or sunset.
                Occasional festivals and rituals are held here.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://content.jdmagicbox.com/comp/mau/q6/9999px547.x547.180118112833.u3q6/catalogue/mukti-dham-mau-parks-47zq2jc0yi.jpg"       alt="Company Garden (Town Park)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Company Garden (Town Park)
              </h3>
              <p>
                A small but pleasant green space in Mau city for relaxation,
                morning walks, and family outings. It has walking paths and a
                few play zones.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://content.jdmagicbox.com/v2/comp/mau/w1/9999px547.x547.190617205653.q8w1/catalogue/jama-masjid-mirzahadipura-mau-mosques-gn3zmodlo0.jpg"      alt="Jamia Mosque"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Jamia Mosque</h3>
              <p>
                One of the oldest mosques in Mau, showcasing
                Islamic architecture. It serves as a major place of worship and
                community gathering for Muslims.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=83.4870%2C26.2670%2C83.5370%2C26.3170&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


