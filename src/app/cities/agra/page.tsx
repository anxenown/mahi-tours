import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AgraTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>
        <center>
          <h1 className="text-center text-4xl font-bold mb-4">Agra Trip</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-black text-white py-2 px-2 rounded">
              Location: Agra
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
              src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1534158986/AgraFort_1534158959.jpg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Agra with Mahi Tours and Travels,
              where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Agra is a city in the northern state of Uttar Pradesh, India. It
              is located on the banks of the Yamuna River, about 125 miles (200
              km) southeast of Delhi. Agra is famous for being the capital of
              the Mughal emperors from 1526 to 1658. It is a major tourist
              destination for its many Mughal-era buildings such as Tāj Mahal,
              Agra Fort and Fatehpūr Sikrī, all three of which are UNESCO World
              Heritage Sites.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg"
                alt="Taj Mahal"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Taj Mahal</h3>
              <p>
                A UNESCO World Heritage Site, the Taj Mahal is an eternal symbol
                of love, built by Emperor Shah Jahan in memory of his wife
                Mumtaz Mahal. The white marble marvel looks stunning at sunrise
                and sunset.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1JgKg0KjILyIZuypTtrWharVS5X_q9Mizw&s"
                alt="Agra Fort"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Agra Fort</h3>
              <p>
                Also a UNESCO site, this red sandstone fortress was the
                residence of the Mughal emperors. Inside are exquisite
                structures like Diwan-i-Khas, Diwan-i-Aam, Sheesh Mahal, and
                more.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8P8aB6-wooUhRNNq29S5HCKIaFlOdzss9w&s"
                alt="Mankameshwar Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Mankameshwar Temple</h3>
              <p>
                One of the oldest Shiva temples in Agra, located near the Agra
                Fort. It is especially crowded during Shivratri and Mondays.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://lp-cms-production.imgix.net/2019-06/GettyImages-160093836_medium.jpg"
                alt="Mehtab Bagh"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Mehtab Bagh</h3>
              <p>
                A beautiful garden located across the Yamuna River, directly
                opposite the Taj Mahal. It offers a perfect sunset view of the
                Taj away from the crowds.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jami_Masjid_-Agra_-Uttar_Pradesh_-IMG_0282.jpg/1200px-Jami_Masjid_-Agra_-Uttar_Pradesh_-IMG_0282.jpg"
                alt="Jama Masjid, Agra"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Jama Masjid, Agra</h3>
              <p>
                Built by Shah Jahan’s daughter, Jahanara Begum, this mosque is
                one of the largest in India and features impressive red
                sandstone and marble work.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://im.whatshot.in/img/2022/Apr/8-market-kinari-1649398162.jpg"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Kinari Bazaar</h3>
              <p>
                A vibrant market near Jama Masjid famous for wedding
                accessories, handicrafts, marble inlay items, and street food.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.9990%2C27.1550%2C78.0490%2C27.2050&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


