import { Question } from '../types';
import imgBatik2D from '../assets/images/seni_batik_2d_1795060250175.jpg';
import imgGerabah3D from '../assets/images/gerabah_tanah_liat_1795060250466.jpg';
import imgPatungKayu3D from '../assets/images/patung_kayu_3d_1795060251470.jpg';
import imgLukisan2D from '../assets/images/lukisan_pemandangan_2d_1795060252545.jpg';
import imgAnyaman3D from '../assets/images/anyaman_bambu_3d_1795060252780.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================
  // --- PILIHAN GANDA (18 SOAL: ID 1 - 18, MASING-MASING 4 OPSI) ---
  // =========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Ciri Karya Seni Rupa 2 Dimensi',
    difficulty: 'Mudah',
    imageUrl: imgBatik2D,
    imageAlt: 'Kain batik motif Kawung dan flora sebagai karya seni rupa dua dimensi',
    imageCaption: 'Gambar 1.1: Karya seni kain batik tulis motif Kawung dan ragam hias flora',
    text: 'Perhatikan gambar karya seni kain batik di atas! Berdasarkan dimensinya, karya seni rupa tersebut termasuk jenis karya seni rupa dua dimensi (dwimatra) karena...',
    options: [
      { id: 'A', text: 'Memiliki ukuran panjang, lebar, dan tinggi sehingga bervolume' },
      { id: 'B', text: 'Hanya memiliki ukuran panjang dan lebar serta dinikmati dari satu arah depan' },
      { id: 'C', text: 'Dapat diisi benda di dalamnya dan dilihat dari segala arah pandang' },
      { id: 'D', text: 'Dibuat dengan teknik pahat dan cor menggunakan bahan keras batu atau kayu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Karya seni rupa dua dimensi (dwimatra) adalah karya seni yang hanya memiliki dua ukuran, yaitu panjang dan lebar, tidak memiliki ruang atau ketebalan yang nyata, serta hanya dapat dinikmati dari satu arah (depan). Contohnya kain batik, lukisan, poster, dan gambar ilustrasi.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pengertian Seni Rupa 2D & 3D',
    difficulty: 'Mudah',
    text: 'Perbedaan paling mendasar antara karya seni rupa dua dimensi dengan karya seni rupa tiga dimensi terletak pada...',
    options: [
      { id: 'A', text: 'Jenis warna yang digunakan oleh perupa' },
      { id: 'B', text: 'Harga jual karya tersebut di galeri pameran' },
      { id: 'C', text: 'Ada tidaknya unsur volume (ketebalan/ruang) dan arah sudut pandangnya' },
      { id: 'D', text: 'Jumlah seniman yang terlibat dalam proses pembuatannya' },
    ],
    correctAnswer: 'C',
    explanation:
      'Karya seni rupa dua dimensi hanya mempunyai panjang dan lebar serta dilihat dari satu arah. Sementara itu, karya seni rupa tiga dimensi memiliki panjang, lebar, dan tinggi (volume/ruang) sehingga dapat dilihat dari berbagai arah.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Unsur-Unsur Seni Rupa',
    difficulty: 'Mudah',
    text: 'Unsur paling dasar atau paling kecil dalam seni rupa yang menjadi awal mula terbentuknya garis, bidang, dan bentuk adalah...',
    options: [
      { id: 'A', text: 'Titik (bintik)' },
      { id: 'B', text: 'Tekstur' },
      { id: 'C', text: 'Gelap terang' },
      { id: 'D', text: 'Ruang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Titik adalah unsur seni rupa paling dasar dan terkecil. Kumpulan titik yang berderet dan saling terhubung akan membentuk garis, sedangkan garis yang saling bertemu ujungnya akan membentuk bidang.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Unsur Warna (Primer & Sekunder)',
    difficulty: 'Mudah',
    text: 'Saat melukis di atas kanvas, Dayu kehabisan cat berwarna hijau dan ungu. Untuk mendapatkan warna hijau dan ungu secara tepat, warna primer apa sajakah yang harus dicampurkan oleh Dayu?',
    options: [
      { id: 'A', text: 'Merah + kuning untuk hijau, serta biru + kuning untuk ungu' },
      { id: 'B', text: 'Biru + kuning untuk hijau, serta merah + biru untuk ungu' },
      { id: 'C', text: 'Hitam + putih untuk hijau, serta merah + kuning untuk ungu' },
      { id: 'D', text: 'Merah + putih untuk hijau, serta biru + hitam untuk ungu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tiga warna primer (pokok) adalah merah, kuning, dan biru. Pencampuran warna primer menghasilkan warna sekunder:\n• Biru + Kuning = Hijau\n• Merah + Biru = Ungu\n• Merah + Kuning = Jingga (Oranye).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Unsur & Prinsip Karya 2 Dimensi',
    difficulty: 'Sedang',
    imageUrl: imgLukisan2D,
    imageAlt: 'Lukisan pemandangan sawah terasering dan gunung di atas kanvas pada sandaran kayu',
    imageCaption: 'Gambar 1.2: Karya lukisan cat akrilik bertema pemandangan alam pada media kanvas',
    text: 'Amati lukisan pemandangan alam pada gambar di atas! Agar pegunungan tampak jauh di belakang dan pematang sawah tampak lebih dekat, pelukis menerapkan unsur ruang semu dengan cara...',
    options: [
      { id: 'A', text: 'Membuat warna gunung lebih cerah dan ukurannya lebih besar daripada pohon kelapa di depan' },
      { id: 'B', text: 'Membuat ukuran objek di depan lebih besar dan jelas, sedangkan objek di belakang semakin kecil dan memudar' },
      { id: 'C', text: 'Melubangi bagian tengah kanvas agar cahaya matahari masuk ke dalam lukisan' },
      { id: 'D', text: 'Menempelkan batu kerikil sungguhan pada seluruh permukaan gunung di kanvas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada karya seni rupa dua dimensi, kedalaman ruang bersifat semu (ilusi). Untuk menciptakan kesan jauh-dekat (perspektif), pelukis membuat objek yang dekat berukuran lebih besar dan warnanya tegas, sedangkan objek yang jauh dibuat lebih kecil dan warnanya lebih lembut/pudar.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Teknik Berkarya Seni Rupa 2 Dimensi',
    difficulty: 'Sedang',
    text: 'Edo menggambar buah apel di kertas gambar dengan cara menyusun titik-titik pensil warna secara rapat pada bagian yang gelap dan renggang pada bagian yang terang. Teknik menggambar yang dilakukan oleh Edo disebut teknik...',
    options: [
      { id: 'A', text: 'Dusel (gosok)' },
      { id: 'B', text: 'Aquarel (sapuan basah)' },
      { id: 'C', text: 'Pointilis' },
      { id: 'D', text: 'Siluet (blok)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Teknik pointilis adalah teknik menggambar atau melukis dengan menggunakan kumpulan titik-titik kecil. Semakin rapat titik yang dibuat maka kesannya semakin gelap, dan semakin jarang titik maka kesannya semakin terang.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Tekstur Nyata dan Tekstur Semu',
    difficulty: 'Sedang',
    text: 'Sebuah lukisan pemandangan menampilkan gambar batang pohon yang tampak kasar bergerigi saat dilihat oleh mata, namun ketika diraba dengan ujung jari permukaan kanvasnya terasa halus dan rata. Kondisi tersebut menunjukkan jenis tekstur...',
    options: [
      { id: 'A', text: 'Tekstur nyata' },
      { id: 'B', text: 'Tekstur semu (maya)' },
      { id: 'C', text: 'Tekstur kasar alami' },
      { id: 'D', text: 'Tekstur tiga dimensi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tekstur semu (maya) adalah sifat permukaan benda yang tampak kasar atau berpola jika dilihat oleh indra penglihatan, tetapi apabila diraba terasa halus atau berbeda dari yang terlihat. Sebaliknya, tekstur nyata memiliki kesamaan antara yang dilihat mata dan yang dirasakan rabaan tangan.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Karya Seni Rupa 3 Dimensi (Gerabah)',
    difficulty: 'Mudah',
    imageUrl: imgGerabah3D,
    imageAlt: 'Guci gerabah tanah liat berwarna cokelat terakota dengan ukiran geometris di bagian leher',
    imageCaption: 'Gambar 1.3: Guci gerabah berbahan tanah liat dengan hiasan garis geometris',
    text: 'Perhatikan gambar guci gerabah berbahan tanah liat di atas! Teknik yang paling umum digunakan pengrajin untuk membentuk badan guci agar bulat simetris dan berongga dengan cepat adalah teknik...',
    options: [
      { id: 'A', text: 'Teknik putar menggunakan meja putar (meja pelarik)' },
      { id: 'B', text: 'Teknik pahat menggunakan palu dan tata kayu' },
      { id: 'C', text: 'Teknik anyam menggunakan bilah-bilah bambu' },
      { id: 'D', text: 'Teknik sablon menggunakan layar screen dan rakel' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gerabah atau keramik dari tanah liat dapat dibentuk menggunakan teknik pijit tekan, teknik pilin (coil), teknik lempeng (slab), teknik cetak, dan teknik putar (throwing) menggunakan alat meja putar agar bentuk silindris/bulat menjadi simetris dan halus.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Fungsi Seni Rupa (Murni & Terapan)',
    difficulty: 'Sedang',
    text: 'Manakah di antara kelompok karya seni rupa berikut yang seluruhnya termasuk contoh karya seni rupa TERAPAN (applied art) tiga dimensi?',
    options: [
      { id: 'A', text: 'Lukisan kanvas, poster kebersihan, dan patung monumen' },
      { id: 'B', text: 'Kendi air tanah liat, kursi rotan anyaman, dan cangkir keramik' },
      { id: 'C', text: 'Patung pahlawan, lukisan kaligrafi, dan foto pemandangan' },
      { id: 'D', text: 'Relief candi, kain batik tulis, dan gambar karikatur' },
    ],
    correctAnswer: 'B',
    explanation:
      'Seni rupa terapan (applied art) adalah karya seni yang mengutamakan fungsi pakai (kegunaan praktis sehari-hari) selain nilai keindahannya. Kendi air, kursi rotan, dan cangkir keramik semuanya berwujud 3 dimensi dan memiliki fungsi pakai nyata.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Bahan Berkarya 3 Dimensi',
    difficulty: 'Mudah',
    text: 'Berikut ini merupakan pasangan bahan yang tepat jika seorang siswa ingin membuat karya seni rupa tiga dimensi dengan teknik membentuk/memijit (modeling) menggunakan bahan LUNAK adalah...',
    options: [
      { id: 'A', text: 'Kayu jati dan batu andesit' },
      { id: 'B', text: 'Logam perunggu dan besi cor' },
      { id: 'C', text: 'Tanah liat dan plastisin' },
      { id: 'D', text: 'Batu pualam (marmer) dan kaca' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bahan lunak dalam pembuatan karya tiga dimensi bersifat lentur dan mudah dibentuk dengan tekanan tangan, contohnya tanah liat, plastisin, bubur kertas, dan sabun batang. Kayu jati, batu andesit, marmer, dan logam termasuk bahan keras.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Teknik Pembuatan Patung Kayu',
    difficulty: 'Sedang',
    imageUrl: imgPatungKayu3D,
    imageAlt: 'Patung ukiran kayu tradisional Bali berbentuk penari di atas meja putih',
    imageCaption: 'Gambar 1.4: Karya patung ukir berbahan kayu jati dengan detail ornamen tiga dimensi',
    text: 'Perhatikan karya patung ukir kayu tradisional pada gambar di atas! Proses pembuatan karya seni rupa tiga dimensi tersebut dilakukan dengan cara mengurangi bagian bahan kayu secara bertahap menggunakan pahat dan palu. Teknik ini dikenal sebagai teknik...',
    options: [
      { id: 'A', text: 'Teknik cetak/cor (casting)' },
      { id: 'B', text: 'Teknik pahat dan ukir (carving)' },
      { id: 'C', text: 'Teknik konstruksi/merakit (assembling)' },
      { id: 'D', text: 'Teknik pilin (coiling)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teknik pahat dan ukir (carving) adalah teknik membuat karya tiga dimensi pada bahan keras seperti kayu atau batu dengan cara mengurangi atau membuang bagian bahan yang tidak diperlukan hingga terbentuk wujud patung yang diinginkan.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Teknik Konstruksi / Merakit 3D',
    difficulty: 'Sedang',
    text: 'Siswa kelas 6 membuat maket rumah adat Bali dari gabungan potongan kardus bekas, stik es krim, sedotan, dan lem kayu. Teknik pembuatan karya tiga dimensi dengan cara menyambung dan menyusun berbagai potongan bahan tersebut disebut teknik...',
    options: [
      { id: 'A', text: 'Teknik merakit (konstruksi)' },
      { id: 'B', text: 'Teknik membutsir' },
      { id: 'C', text: 'Teknik cor (tuang)' },
      { id: 'D', text: 'Teknik aquarel' },
    ],
    correctAnswer: 'A',
    explanation:
      'Teknik merakit atau konstruksi adalah teknik berkarya seni rupa tiga dimensi dengan cara menyusun, menyambung, atau merekatkan beberapa bagian bahan (seperti kardus, kayu, botol bekas, logam) menjadi satu kesatuan bentuk baru yang utuh.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Prinsip Seni Rupa',
    difficulty: 'Sedang',
    text: 'Dalam membuat gambar ilustrasi atau poster, perbandingan ukuran antara kepala, badan, dan tangan tokoh manusia harus dibuat wajar dan serasi agar tidak tampak janggal. Prinsip seni rupa yang diterapkan tersebut adalah...',
    options: [
      { id: 'A', text: 'Irama (ritme)' },
      { id: 'B', text: 'Proporsi (kesebandingan)' },
      { id: 'C', text: 'Gradasi warna' },
      { id: 'D', text: 'Penekanan (kontras)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Proporsi (kesebandingan) adalah prinsip seni rupa yang mengatur perbandingan ukuran antara bagian yang satu dengan bagian lainnya dalam satu objek maupun antarobjek agar terlihat wajar, harmonis, dan seimbang.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Karya Seni Tempel 2 Dimensi',
    difficulty: 'Sukar',
    text: 'Siti membuat karya seni tempel 2 dimensi bertema "Kelestarian Laut" dengan cara menempelkan kepingan-kepingan kecil keramik warna-warni dan pecahan kulit telur di atas papan tripleks hingga membentuk gambar penyu. Karya yang dibuat oleh Siti tersebut termasuk jenis...',
    options: [
      { id: 'A', text: 'Montase, karena menggabungkan potongan gambar jadi dari majalah' },
      { id: 'B', text: 'Kolase, karena menempelkan bahan alam utuh seperti daun kering' },
      { id: 'C', text: 'Mozaik, karena menyusun kepingan material kecil sejenis berukuran seragam' },
      { id: 'D', text: 'Cetak tinggi, karena memindahkan cat dari cetakan ke papan' },
    ],
    correctAnswer: 'C',
    explanation:
      '• Mozaik: menempelkan kepingan-kepingan kecil bahan sejenis (pecahan keramik, kaca, cangkang telur, biji-bijian) membentuk pola gambar.\n• Montase: menempelkan potongan gambar yang sudah jadi (dari koran/majalah) menjadi cerita visual baru.\n• Kolase: menempelkan berbagai jenis material berbeda (kain, daun, kertas, benang) dalam satu karya.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Seni Kriya Anyaman 3 Dimensi',
    difficulty: 'Mudah',
    imageUrl: imgAnyaman3D,
    imageAlt: 'Keranjang anyaman bambu tradisional berbentuk bundar dengan pegangan di sisi kiri dan kanan',
    imageCaption: 'Gambar 1.5: Kerajinan keranjang anyaman berbahan bilah bambu alami',
    text: 'Perhatikan kerajinan keranjang anyaman bambu pada gambar di atas! Berdasarkan wujud dimensi dan tujuannya, karya seni kriya tersebut digolongkan ke dalam kelompok...',
    options: [
      { id: 'A', text: 'Seni rupa murni dua dimensi karena memiliki pola garis menyilang' },
      { id: 'B', text: 'Seni rupa terapan tiga dimensi karena memiliki volume ruang dan fungsi wadah' },
      { id: 'C', text: 'Seni rupa murni tiga dimensi karena hanya untuk pajangan dinding' },
      { id: 'D', text: 'Seni grafis dua dimensi karena dibuat dengan teknik cetak silang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keranjang anyaman bambu memiliki ukuran panjang, lebar, dan tinggi (bervolume/berongga) sehingga merupakan karya 3 dimensi. Karena dibuat untuk keperluan sehari-hari (wadah penyimpanan/membawa barang) sekaligus indah dipandang, kerajinan ini termasuk seni rupa terapan 3 dimensi.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Teknik Cetak / Seni Grafis 2 Dimensi',
    difficulty: 'Sedang',
    text: 'Di kelas Seni Rupa, guru mengajak siswa membuat cap stempel menggunakan umbi kentang dan pelepah pisang yang dicelupkan ke pewarna lalu ditekan ke atas kertas gambar. Kegiatan tersebut merupakan penerapan teknik...',
    options: [
      { id: 'A', text: 'Cetak tinggi (seni grafis dua dimensi)' },
      { id: 'B', text: 'Membutsir (seni patung tiga dimensi)' },
      { id: 'C', text: 'Cor logam (seni kriya tiga dimensi)' },
      { id: 'D', text: 'Meronce (seni kerajinan manik-manik)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Seni grafis dengan bahan pelepah pisang, kentang, atau cukil kayu memanfaatkan bagian permukaan yang menonjol untuk memindahkan tinta ke atas kertas. Teknik ini disebut cetak tinggi dan menghasilkan karya dua dimensi.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Karya Relief',
    difficulty: 'Sukar',
    text: 'Ukiran batu bermotif cerita sejarah pada dinding candi atau dinding bangunan pura yang memiliki tonjolan permukaan namun hanya dapat dinikmati dari arah depan disebut...',
    options: [
      { id: 'A', text: 'Patung torso' },
      { id: 'B', text: 'Lukisan mural' },
      { id: 'C', text: 'Relief' },
      { id: 'D', text: 'Diorama' },
    ],
    correctAnswer: 'C',
    explanation:
      'Relief adalah seni pahat atau ukiran yang menempel pada bidang datar latar belakang (seperti dinding candi atau kayu panel). Meskipun memiliki sedikit ketebalan/tonjolan, relief umumnya hanya dinikmati dari satu arah depan.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Tahapan Berkarya & Pameran',
    difficulty: 'Mudah',
    text: 'Sebelum membuat patung dari tanah liat atau melukis pada kanvas, langkah awal yang paling penting dilakukan oleh perupa agar komposisi karya terencana dengan baik adalah...',
    options: [
      { id: 'A', text: 'Langsung memajang bahan mentah di ruang pameran sekolah' },
      { id: 'B', text: 'Mencari ide gagasan dan membuat sketsa rancangan terlebih dahulu' },
      { id: 'C', text: 'Menyemprotkan pernis (finishing) sebelum bentuk karya selesai' },
      { id: 'D', text: 'Membingkai kertas kosong sebelum menentukan tema gambar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tahapan berkarya seni rupa yang runtut diawali dengan pengamatan dan pencarian ide gagasan, dilanjutkan pembuatan sketsa rancangan, pemilihan alat/bahan, proses perwujudan karya (pewarnaan/pembentukan), lalu tahap penyelesaian akhir (finishing).',
  },

  // =========================================================
  // --- PILIHAN GANDA KOMPLEKS (3 SOAL: ID 19 - 21, MASING-MASING 3 OPSI) ---
  // =========================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Analisis Karya Batik 2 Dimensi',
    difficulty: 'Sedang',
    imageUrl: imgBatik2D,
    imageAlt: 'Kain batik motif Kawung dan flora sebagai karya seni rupa dua dimensi',
    imageCaption: 'Gambar 2.1: Ragam hias kain batik tulis motif Kawung dan bunga',
    text: 'Perhatikan gambar kain batik di atas! Manakah pernyataan berikut yang BENAR mengenai karya seni rupa pada gambar tersebut? (Pilih lebih dari satu jawaban yang benar)',
    options: [
      { id: 'A', text: 'Termasuk karya seni rupa dua dimensi karena dibentuk di atas bidang datar kain' },
      { id: 'B', text: 'Dibuat dengan teknik pahat dan butsir menggunakan alat sudip kayu' },
      { id: 'C', text: 'Memiliki unsur seni rupa berupa titik, garis lengkung, bidang berulang, dan perpaduan warna' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Kain batik merupakan karya seni rupa dua dimensi (A benar) yang tersusun atas unsur titik, garis, bidang geometris berulang (motif Kawung), serta warna biru nila dan cokelat soga (C benar). Batik dibuat dengan teknik canting lilin malam dan pewarnaan celup, bukan teknik pahat/butsir (B salah).',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Karya 3 Dimensi Fungsional (Terapan)',
    difficulty: 'Mudah',
    text: 'Di bawah ini disediakan beberapa daftar benda hasil karya seni rupa. Pilihlah karya yang termasuk jenis seni rupa TIGA DIMENSI TERAPAN (memiliki volume sekaligus fungsi pakai sehari-hari):',
    options: [
      { id: 'A', text: 'Vas bunga dari gerabah tanah liat' },
      { id: 'B', text: 'Bakul nasi dari anyaman bambu' },
      { id: 'C', text: 'Lukisan pemandangan di atas kertas gambar' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Vas bunga gerabah (A) dan bakul nasi anyaman bambu (B) keduanya berbentuk tiga dimensi (bervolume) dan mempunyai kegunaan praktis dalam kehidupan sehari-hari (seni terapan). Lukisan pemandangan (C) adalah karya dua dimensi murni.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Unsur & Prinsip Karya 2 Dimensi',
    difficulty: 'Sukar',
    text: 'Dalam merancang karya seni rupa dua dimensi seperti poster lingkungan atau lukisan bertema alam, manakah pernyataan yang tepat mengenai penerapan prinsip dan teknik berkarya seni rupa?',
    options: [
      { id: 'A', text: 'Tekstur nyata hanya dapat dirasakan jika kertas gambar dibiarkan kosong tanpa warna' },
      { id: 'B', text: 'Keseimbangan (balance) membuat susunan objek di sisi kiri dan kanan gambar terasa harmonis' },
      { id: 'C', text: 'Teknik plakat menggunakan sapuan cat yang tebal dan kental sehingga menutup warna dasar' },
    ],
    correctAnswer: ['B', 'C'],
    explanation:
      'Keseimbangan (balance) menjaga agar susunan unsur visual pada bidang gambar tidak terasa berat sebelah (B benar). Teknik plakat memakai sapuan cat yang kental/tebal sehingga bersifat menutup/opak (C benar). Pernyataan A keliru karena tekstur nyata terasa jika permukaan karya memang dibuat timbul/kasar (misal tempelan biji/pasir).',
  },

  // =========================================================
  // --- PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: ID 22 - 30, 3 PERNYATAAN B/S) ---
  // =========================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Identifikasi Karya Gerabah 3D',
    difficulty: 'Mudah',
    imageUrl: imgGerabah3D,
    imageAlt: 'Guci gerabah tanah liat berwarna terakota dengan ukiran di leher guci',
    imageCaption: 'Gambar 3.1: Guci gerabah tradisional berbahan tanah liat',
    text: 'Perhatikan gambar guci gerabah di atas! Tentukan nilai kebenaran (Benar atau Salah) dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Karya gerabah pada gambar termasuk karya seni rupa tiga dimensi karena memiliki panjang, lebar, tinggi, dan isi ruang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bahan utama untuk membuat karya gerabah tersebut adalah tanah liat yang termasuk kelompok bahan lunak.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Guci gerabah hanya dapat dinikmati keindahannya dari arah depan saja dan tidak bisa dilihat dari sisi samping atau belakang.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1) Benar: Gerabah memiliki dimensi panjang, lebar, tinggi, serta volume ruang.\n2) Benar: Tanah liat bersifat plastis/lunak saat basah sebelum dibakar.\n3) Salah: Sebagai karya 3 dimensi, gerabah dapat diamati dari segala arah pandang (depan, samping, belakang, maupun atas).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Perbandingan Karya 2D dan 3D',
    difficulty: 'Mudah',
    text: 'Cermati karakteristik karya seni rupa dua dimensi dan tiga dimensi. Tentukan pernyataan berikut bernilai Benar atau Salah:',
    statements: [
      {
        id: 's1',
        text: 'Poster ajakan menjaga kebersihan sekolah termasuk contoh karya seni rupa dua dimensi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Karya seni rupa tiga dimensi tidak memiliki unsur garis, warna, dan tekstur sama sekali.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Patung, topeng kayu, dan kendi tanah liat termasuk contoh karya seni rupa tiga dimensi.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1) Benar: Poster dibuat di bidang datar kertas sehingga merupakan karya 2 dimensi.\n2) Salah: Karya 3 dimensi tetap memiliki unsur rupa seperti bentuk/volume, tekstur, warna, dan garis kontur.\n3) Benar: Patung, topeng, dan kendi bervolume nyata sehingga termasuk karya 3 dimensi.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Apresiasi Lukisan 2 Dimensi',
    difficulty: 'Sedang',
    imageUrl: imgLukisan2D,
    imageAlt: 'Lukisan pemandangan sawah terasering dan matahari terbit di atas kanvas',
    imageCaption: 'Gambar 3.2: Lukisan kanvas bertema pemandangan sawah terasering',
    text: 'Perhatikan karya lukisan pada gambar di atas! Tentukan kebenaran (Benar atau Salah) dari pernyataan analisis karya berikut:',
    statements: [
      {
        id: 's1',
        text: 'Lukisan pemandangan di atas merupakan karya seni rupa dua dimensi yang dibuat di atas bidang datar kanvas.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Warna hijau pada hamparan sawah dan warna jingga keemasan pada langit menunjukkan penerapan unsur warna yang harmonis.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Lukisan tersebut dibuat dengan teknik cetak tinggi menggunakan bahan logam cair.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1) Benar: Lukisan kanvas adalah karya seni rupa dua dimensi.\n2) Benar: Perpaduan warna hijau alam dan gradasi jingga-kuning senja/fajar menciptakan harmoni visual.\n3) Salah: Karya tersebut dibuat dengan teknik lukis menggunakan kuas dan cat akrilik, bukan cetak tinggi maupun cor logam.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Seni Rupa Murni dan Terapan',
    difficulty: 'Sedang',
    text: 'Pelajarilah penggolongan seni rupa berdasarkan fungsinya (seni murni dan seni terapan). Tentukan Benar atau Salah untuk ketiga pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Seni rupa murni diciptakan terutama untuk dinikmati keindahannya sebagai sarana ekspresi estetis perupa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Meja ukir kayu dan tas rajut tangan merupakan contoh karya seni rupa murni karena tidak boleh digunakan sehari-hari.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Seni rupa terapan memadukan nilai keindahan (estetis) dengan nilai kegunaan praktis (fungsional).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1) Benar: Tujuan utama seni murni adalah ekspresi dan keindahan.\n2) Salah: Meja ukir dan tas rajut memiliki fungsi pakai nyata, sehingga keduanya tergolong seni rupa terapan.\n3) Benar: Seni terapan selalu memperhatikan kenyamanan/fungsi pakai sekaligus keindahan bentuknya.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Karya Patung Kayu 3 Dimensi',
    difficulty: 'Sedang',
    imageUrl: imgPatungKayu3D,
    imageAlt: 'Patung ukiran kayu tradisional Bali',
    imageCaption: 'Gambar 3.3: Patung ukir kayu tradisional dengan detail ornamen',
    text: 'Amati karya patung ukir kayu pada gambar di atas! Tentukan apakah pernyataan berikut bernilai Benar atau Salah:',
    statements: [
      {
        id: 's1',
        text: 'Kayu yang digunakan sebagai bahan pembuatan patung pada gambar termasuk kelompok bahan keras.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Tekstur ukiran pada baju dan sayap patung menghasilkan kesan permukaan yang nyata apabila diraba.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Patung pajangan di atas dibuat dengan tujuan utama sebagai alat wadah penampung air minum.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1) Benar: Kayu jati/kayu ukir merupakan bahan alam berstruktur keras.\n2) Benar: Cekungan dan tonjolan hasil pahatan menciptakan tekstur nyata yang dapat dilihat sekaligus diraba.\n3) Salah: Patung figuratif tersebut merupakan karya seni rupa murni/dekoratif sebagai hiasan estetis, bukan wadah air.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Teknik Gambar & Tempel 2 Dimensi',
    difficulty: 'Sedang',
    text: 'Perhatikan berbagai teknik dalam berkarya seni rupa dua dimensi berikut. Tentukan Benar atau Salah untuk setiap pernyataan:',
    statements: [
      {
        id: 's1',
        text: 'Teknik arsir dilakukan dengan menggoreskan garis-garis sejajar atau menyilang untuk menciptakan kesan gelap terang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Teknik aquarel menghasilkan warna yang pekat, tebal, dan menutup seluruh lapisan kertas dengan cat minyak murni.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Montase dibuat dengan memotong gambar-gambar dari majalah atau koran bekas lalu menempelkannya menjadi susunan gambar baru.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1) Benar: Arsir memanfaatkan kerapatan garis sejajar/silang untuk efek bayangan (gelap terang).\n2) Salah: Teknik aquarel menggunakan cat air encer dengan sapuan tipis dan transparan (tembus pandang), bukan tebal pekat.\n3) Benar: Montase menyusun potongan gambar jadi dari berbagai sumber cetak.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Seni Kriya Anyaman Bambu 3 Dimensi',
    difficulty: 'Mudah',
    imageUrl: imgAnyaman3D,
    imageAlt: 'Keranjang anyaman bambu tradisional berbentuk bundar',
    imageCaption: 'Gambar 3.4: Kerajinan keranjang anyaman bambu',
    text: 'Perhatikan kerajinan keranjang anyaman bambu pada gambar di atas! Tentukan pernyataan berikut Benar atau Salah:',
    statements: [
      {
        id: 's1',
        text: 'Keranjang anyaman bambu tersebut dibuat menggunakan bahan alam yang lentur setelah diserut tipis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pola silang-menyilang antara bilah bambu warna terang dan gelap menciptakan unsur irama (ritme) visual yang teratur.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Karena terbuat dari bambu, keranjang anyaman tersebut digolongkan sebagai karya seni rupa dua dimensi.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1) Benar: Bambu merupakan bahan alam yang kuat sekaligus lentur bila dibelah menjadi bilah tipis untuk dianyam.\n2) Benar: Pengulangan pola silang terang-gelap secara teratur menghasilkan prinsip irama (ritme).\n3) Salah: Keranjang anyaman mempunyai ruang dan volume nyata sehingga tetap termasuk karya 3 dimensi.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Teori Warna dalam Seni Rupa',
    difficulty: 'Sukar',
    text: 'Evaluasi pengetahuanmu tentang pengelompokan warna dalam seni rupa. Tentukan Benar atau Salah untuk ketiga pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Warna jingga (oranye), hijau, dan ungu merupakan kelompok warna sekunder hasil percampuran dua warna primer.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Warna merah, kuning, dan jingga termasuk warna dingin yang memberi kesan sejuk seperti air dan es.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menambahkan warna putih pada cat biru akan menghasilkan warna biru muda yang tingkat kecerahannya lebih terang.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1) Benar: Warna sekunder terbentuk dari campuran dua warna primer (jingga, hijau, ungu).\n2) Salah: Merah, kuning, dan jingga termasuk warna panas/hangat (memberi kesan semangat/matahari/api), sedangkan biru dan hijau memberi kesan sejuk/dingin.\n3) Benar: Pencampuran warna putih (tint) meningkatkan nilai terang warna dasar.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Karya 3D Daur Ulang & Prinsip Kesatuan',
    difficulty: 'Sedang',
    text: 'Sekelompok siswa kelas 6 membuat tempat pensil berbentuk robot dari botol plastik bekas, tutup botol, dan kardus warna. Tentukan Benar atau Salah untuk pernyataan di bawah ini:',
    statements: [
      {
        id: 's1',
        text: 'Karya tempat pensil robot tersebut termasuk karya seni rupa tiga dimensi terapan karena berfungsi menyimpan alat tulis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pembuatan karya tersebut menerapkan teknik merakit/konstruksi dengan menggabungkan berbagai komponen.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Agar karya terlihat indah, bagian kepala, badan, dan tangan robot sebaiknya ditempelkan secara terpisah-pisah tanpa memperhatikan kesatuan (unity).',
        correctAnswer: false,
      },
    ],
    explanation:
      '1) Benar: Tempat pensil berbentuk 3 dimensi dan memiliki fungsi pakai menyimpan alat tulis.\n2) Benar: Menggabungkan botol, tutup botol, dan kardus merupakan teknik konstruksi/merakit.\n3) Salah: Prinsip kesatuan (unity) sangat penting agar seluruh bagian karya saling mendukung dan terlihat utuh harmonis.',
  },
];
