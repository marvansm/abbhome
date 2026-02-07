import { Facebook, Instagram, Linkedin, Youtube, Headphones } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] py-[60px] mt-[100px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-[60px]">
          <div>
            <h3 className="font-bold text-lg mb-6">Daxili ipoteka</h3>
            <ul className="space-y-4 text-gray-600">
              <li><Link href="#">Mənzil, fərdi yaşayış və bağ evləri üçün ipoteka krediti</Link></li>
              <li><Link href="#">Partnyor tikinti şirkətləri üzrə ipoteka krediti</Link></li>
              <li><Link href="#">Torpaq ipoteka krediti</Link></li>
              <li><Link href="#">Ev tikinti ipoteka krediti</Link></li>
              <li><Link href="#">İpoteka əmanəti krediti</Link></li>
              <li><Link href="#">Biznes obyektinin alınması üçün ipoteka krediti</Link></li>
              <li><Link href="#">Girov təminatlı istehlak krediti</Link></li>
              <li><Link href="#">Təmir krediti</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Dövlət ipotekası</h3>
            <ul className="space-y-4 text-gray-600">
              <li><Link href="#">Dövlət ipotekası - adi</Link></li>
              <li><Link href="#">Dövlət ipotekası - güzəştli</Link></li>
              <li><Link href="#">MİDA güzəştli ipoteka krediti</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Digər bölmələr</h3>
            <ul className="space-y-4 text-gray-600">
              <li><Link href="#">İpoteka filialları</Link></li>
              <li><Link href="#">TamKart Platinum kartı</Link></li>
              <li><Link href="#">ƏDV geri al</Link></li>
              <li><Link href="#">Təklif və iradlar</Link></li>
              <li><Link href="#">Onlayn növbə</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <Facebook size={20} className="text-gray-600" />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <Instagram size={20} className="text-gray-600" />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <Linkedin size={20} className="text-gray-600" />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <Youtube size={20} className="text-gray-600" />
            </Link>
          </div>

          <div className="text-gray-500 text-sm">
            © 1992—2026, &quot;ABB&quot; ASC - Bütün hüquqlar qorunur
          </div>

          <div className="flex items-center gap-2 font-bold text-gray-700">
            <Headphones size={24} />
            <span>937</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
