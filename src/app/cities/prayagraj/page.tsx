import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PrayagrajTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">Prayagraj Trip</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Prayagraj
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
              src="https://ext.same-assets.com/641552178/1469909280.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Prayagraj with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Explore the holy confluence of three sacred rivers at Prayagraj
              with Mahi Tours and Travels. Experience the spiritual significance
              of Triveni Sangam, where the Ganges, Yamuna, and mythical
              Saraswati meet. Participate in the grand Kumbh Mela and discover
              ancient temples that dot this historically rich city.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmar879vngw2wQAkM_2yC4arkKnaeE3-m7rw&s"
                alt="Triveni Sangam"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Triveni Sangam</h3>
              <p>
                The most sacred spot in Prayagraj, where the rivers Ganga,
                Yamuna, and Saraswati merge. A dip here is believed to cleanse
                sins. During Kumbh Mela, millions gather here.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://apnaprayagraj.com/wp-content/uploads/2023/02/IMG_20230204_090210-e1697193102934-300x183.jpg"
                alt="Bade Hanuman Ji Temple (Lete Hanuman Mandir)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Bade Hanuman Ji Temple (Lete Hanuman Mandir)
              </h3>
              <p>
                A unique temple with a massive reclining idol of Lord Hanuman,
                partially underground. During floods, the idol is said to rise —
                considered very auspicious.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/ScreenShot2019-11-29at2.18.41PM_20191129142012.png"
                alt="Alopi Devi Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Alopi Devi Temple</h3>
              <p>
                One of the Shakti Peethas. It’s unique because the main deity is
                worshipped as an empty wooden carriage (Alop = disappeared),
                symbolizing divine presence beyond form.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.seawatersports.com/images/places/shankar-viman-mandapam.png"
                alt="Shankar Viman Mandapam"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Shankar Viman Mandapam</h3>
              <p>
                A towering South Indian-style temple near Sangam, dedicated to
                Lord Shiva, Vishnu, and Hanuman. The architecture stands out
                among local structures.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLEoSB-Yd5cOjk05tLbxqZKoft6mzq621OHQ&s"
                alt="Allahabad Fort"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Allahabad Fort</h3>
              <p>
                Built by Emperor Akbar in the 16th century near the Sangam. Now
                under Army control, but parts of it (like the Ashoka Pillar and
                Patalpuri Temple) are open to visitors.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzI4MzdjZjY0ZGQyNzRmMGVhZjI3OTc3NmRjZmViOGRkIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19"
                alt="Chandra Shekhar Azad Park (Company Garden)"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Chandra Shekhar Azad Park (Company Garden)
              </h3>
              <p>
                A lush green park named after the freedom fighter who died here.
                The park also houses the Allahabad Museum and a beautiful
                library.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=81.8470%2C25.4260%2C81.8970%2C25.4760&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


