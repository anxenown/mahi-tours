import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AyodhyaTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">Ayodhya Trip</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Ayodhya
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
              src="https://ext.same-assets.com/641552178/3746420266.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Ayodhya with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Begin your tour of Ayodhya with Mahi Tours and Travels and uncover
              the legendary city's profound heritage. Explore sacred sites like
              Ram Janmabhoomi and Hanuman Garhi, resonating with tales of Lord
              Rama's divine presence. Immerse yourself in Ayodhya's spiritual
              ambiance and unravel its timeless significance.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://srjbtkshetra.org/wp-content/uploads/2020/11/Cam_04_01_Comp.jpg"
                alt="Ram Janmabhoomi / Shri Ram Mandir"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Ram Janmabhoomi / Shri Ram Mandir
              </h3>
              <p>
                The newly constructed grand Ram Temple marks the exact spot
                believed to be Lord Rama’s birthplace. The majestic temple
                showcases ancient Nagara-style architecture and is the spiritual
                heart of Ayodhya.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Hanuman_Garhi_Temple%2C_a_major_religious_site_in_Ayodhya_utter_pradesh.jpg"
                alt="Hanuman Garhi"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Hanuman Garhi</h3>
              <p>
                A fortress-like temple dedicated to Lord Hanuman, it’s situated
                on a hilltop and offers panoramic views of Ayodhya. Devotees
                believe you must visit Hanuman Garhi before Ram Janmabhoomi.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ac/8f/60/kanak-bhavan-temple.jpg?w=900&h=500&s=1"
                alt="Kanak Bhawan"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Kanak Bhawan</h3>
              <p>
                This beautiful temple is dedicated to Lord Ram and Goddess Sita.
                It’s adorned with golden crowns and ornaments and is believed to
                have been gifted to Sita by Queen Kaikeyi.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/2-guptar-ghat-ayodhya-uttar-pradesh-attr-hero?qlt=82&ts=1726649747726"
                alt="Guptar Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Guptar Ghat</h3>
              <p>
                Believed to be the place where Lord Ram took Jal Samadhi
                (departed from earth). It’s a serene ghat with temples and
                peaceful vibes, located slightly away from the main town.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.nativeplanet.com/photos/325x244x100/2019/01/photo-92-155031-1.jpg"
                alt="reta Ke Thakur Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Treta Ke Thakur Temple</h3>
              <p>
                Built at the place where Lord Ram performed the Ashwamedha
                Yagya, this temple houses black stone idols of Ram, Sita,
                Lakshman, Bharat, Shatrughna, and Hanuman.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://rishikeshdaytour.com/blog/wp-content/uploads/2023/09/Sita-ki-Rasoi-Ayodhya.jpg"
                alt="Sita Ki Rasoi"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Sita Ki Rasoi</h3>
              <p>
                A symbolic kitchen believed to have been used by Goddess Sita
                after marriage. It has now been converted into a temple and
                museum-like structure.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://virtualbanjara.com/wp-content/uploads/2024/02/unnamed-2-1024x1024.jpg"
                alt="Ram Rasoi"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Ram Rasoi</h3>
              <p>
                Experience the divine devotion of the shradhalu at Ram Rasoi in
                Ayodhya, where thousands of devotees come to partake in free
                meals.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Ayodhya_Tulsi_smarak_bhawan_museum_1_l_422_640.jpg?im=Resize=(288,162)"
                alt="Tulsi Smarak Bhawan"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Tulsi Smarak Bhawan</h3>
              <p>
                Built in memory of Goswami Tulsidas, this site includes a
                museum, library, and a Ram Katha auditorium with regular
                devotional programs.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sarayu_River_night_view%2C_Ayodhya_001.jpg/800px-Sarayu_River_night_view%2C_Ayodhya_001.jpg"
                alt="Ram Ki Paidi Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Ram Ki Paidi Ghat</h3>
              <p>
                A series of well-maintained ghats along the Saryu River, this is
                a key site for ritual bathing, evening aartis, and stunning
                sunsets. It is beautifully lit at night and during festivals.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=82.1870%2C26.7860%2C82.2370%2C26.8360&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


