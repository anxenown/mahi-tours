import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function VaranasiTrip() {
  return (
    <div>
      <main className="bg-white text-black p-8">
        <header></header>

        <h1 className="text-center text-4xl font-bold mb-4">Varanasi Trip</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white py-2 px-4 rounded">
            Location: Varanasi
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
              src="https://ext.same-assets.com/641552178/4154183048.jpeg"
              alt="Group of people participating in a religious ceremony"
              className="mb-4"
              width="300"
              height="200"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-8">Tour Description</h2>
            <p className="mb-4">
              Embark on a profound journey to Varanasi with Mahi Tours and
              Travels, where spirituality meets adventure. Our tour offers an
              unforgettable experience, allowing you to explore the ancient
              temples, participate in traditional rituals, and immerse yourself
              in the local culture.
            </p>
            <p className="mb-4">
              Explore the spiritual odyssey to Varanasi with Mahi Tours and
              Travels. Dive into the heart of Hinduism along the sacred Ganges
              River, where ancient rituals and vibrant culture intertwine.
              Discover timeless temples, serene ghats, and the mesmerizing aura
              of this mystical city.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <img
                src="https://cdn1.prayagsamagam.com/media/2022/12/12154417/Kashi-Vishwanath-Temple-4.webp"
                alt="Kashi Vishwanath Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Kashi Vishwanath Temple
              </h3>
              <p>
                One of the holiest temples in Hinduism, dedicated to Lord Shiva.
                It's believed that a visit here grants moksha (liberation from
                the cycle of rebirth). The temple complex is always vibrant with
                chants and rituals.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://varanasi.tourismindia.co.in/images/places-to-visit/headers/sankat-mochan-temple-varanasi-header-varanasi-tourism.jpg.jpg"
                alt=" Sankat Mochan Hanuman Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">
                Sankat Mochan Hanuman Temple
              </h3>
              <p>
                Founded by Tulsidas, this temple is a hub for devotees of Lord
                Hanuman. Tuesdays and Saturdays are especially busy with prayer
                services for overcoming difficulties (sankat).
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://visitplacesindia.com/wp-content/uploads/2024/11/vaishno-devi-dham-vrindavan.jpg"
                alt="Durga Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Durga Temple</h3>
              <p>
                Famous for its red color and goddess Durga idol that appeared on
                its own (swayambhu).The temple is associated with Goddess
                Durga’s fierce form.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://www.gosahin.com/go/p/j/1582308009_annapurna-devi-mandir-varanasi1.jpg"
                alt="Annapurna Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Annapurna Temple</h3>
              <p>
                Adjacent to Kashi Vishwanath, this temple honors the goddess of
                food and sustenance. It’s customary for devotees to donate food
                here.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV77q244ee5A4dgVRk0_FqGEjESMW1WgzCMg&s"
                alt="Bharat Mata Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Bharat Mata Temple</h3>
              <p>
                Instead of gods or goddesses, this temple features a large
                marble relief map of India. It’s a tribute to the country
                itself, symbolizing unity and diversity.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0q1pMGNTcNmX75YB7X1N7tCnxnu8ZjyQZmw&s"
                alt="Tulsi Manas Temple"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Tulsi Manas Temple</h3>
              <p>
                Built in white marble and surrounded by gardens, this temple
                marks the spot where Tulsidas wrote the Ramcharitmanas in
                Awadhi. Walls are inscribed with verses from the Ramayana.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <img
                src="https://eindiatourism.in/wp-content/uploads/2024/03/Dashashwamedh-Ghat.jpg"
                alt="Dashashwamedh Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Dashashwamedh Ghat</h3>
              <p>
                The most famous ghat, said to be created by Lord Brahma. Every
                evening, it hosts the spectacular Ganga Aarti with chants, fire,
                and rituals.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://hblimg.mmtcdn.com/content/hubble/img/varanasi/mmt/activities/m_activities_Varanasi_Manikarnika%20Ghat_l_400_640.jpg?im=Resize=(288,162)"
                alt="Manikarnika Ghat"
                className="mb-4"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Manikarnika Ghat</h3>
              <p>
                One of the oldest and holiest cremation sites. It represents the
                cycle of life and death, where bodies are cremated openly, and
                the ashes immersed in the Ganges.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <img
                src="https://lp-cms-production.imgix.net/2019-06/e28fe554c117692d4374c0e9df3d3123-man-mandir-ghat.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75"
                alt="Panchganga Ghat"
                width="300"
                height="200"
              />
              <h3 className="text-xl font-bold mb-2">Panchganga Ghat</h3>
              <p>
                Believed to be where five sacred rivers meet spiritually. A
                calm, less crowded ghat for meditative vibes.
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
              src="https://www.openstreetmap.org/export/embed.html?bbox=82.9730%2C25.2765%2C83.0140%2C25.3085&layer=mapnik"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}


