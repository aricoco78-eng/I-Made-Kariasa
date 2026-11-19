import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Seni Rupa
 * Lingkup Materi: Karya Seni Rupa Dua Dimensi dan Tiga Dimensi
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Kurikulum Merdeka Seni Rupa Fase C
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi ciri khas karya seni rupa dua dimensi melalui pengamatan visual karya tekstil tradisional.',
    indikatorSoal:
      'Disajikan gambar kain batik motif Kawung, peserta didik dapat menentukan alasan penggolongan batik sebagai karya seni rupa dua dimensi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan karakteristik utama karya seni rupa dua dimensi dan tiga dimensi.',
    indikatorSoal:
      'Disajikan pertanyaan konseptual mengenai jenis dimensi karya seni rupa, peserta didik dapat menentukan perbedaan mendasar antara karya dua dimensi dan tiga dimensi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal unsur-unsur dasar pembentuk karya seni rupa.',
    indikatorSoal:
      'Disajikan deskripsi mengenai unsur pembentuk awal garis dan bidang, peserta didik dapat menyebutkan unsur seni rupa paling dasar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Berpikir dan Bekerja Artistik',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep pencampuran warna primer untuk menghasilkan warna sekunder dalam berkarya dua dimensi.',
    indikatorSoal:
      'Disajikan kasus siswa yang membutuhkan warna hijau dan ungu saat melukis, peserta didik dapat menentukan pasangan warna primer yang harus dicampurkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Merefleksikan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penerapan unsur ruang semu (perspektif jauh-dekat) pada karya lukisan dua dimensi.',
    indikatorSoal:
      'Disajikan gambar lukisan pemandangan alam di kanvas, peserta didik dapat menentukan cara pelukis menciptakan kesan ruang jauh dan dekat pada bidang datar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Menciptakan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi berbagai teknik menggambar pada karya seni rupa dua dimensi.',
    indikatorSoal:
      'Disajikan narasi proses menggambar menggunakan susunan titik-titik rapat dan renggang, peserta didik dapat menamai teknik menggambar tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis tekstur nyata dan tekstur semu pada karya seni rupa.',
    indikatorSoal:
      'Disajikan ilustrasi lukisan batang pohon yang tampak kasar secara visual namun terasa halus saat diraba, peserta didik dapat menentukan jenis teksturnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Berpikir dan Bekerja Artistik',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi teknik pembentukan karya seni rupa tiga dimensi berbahan tanah liat.',
    indikatorSoal:
      'Disajikan gambar guci gerabah tanah liat yang simetris, peserta didik dapat menentukan teknik pembentukan yang umum digunakan pengrajin.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Merefleksikan',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan karya seni rupa tiga dimensi berdasarkan fungsinya (seni murni dan seni terapan).',
    indikatorSoal:
      'Disajikan empat pilihan kelompok karya seni rupa, peserta didik dapat memilih kelompok yang seluruhnya merupakan karya seni rupa terapan tiga dimensi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Berpikir dan Bekerja Artistik',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan bahan lunak dan bahan keras dalam pembuatan karya seni rupa tiga dimensi.',
    indikatorSoal:
      'Disajikan kebutuhan membuat karya tiga dimensi dengan teknik membentuk/memijit, peserta didik dapat memilih pasangan bahan lunak yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi teknik pembuatan karya patung tiga dimensi berbahan keras.',
    indikatorSoal:
      'Disajikan gambar patung ukir kayu tradisional Bali, peserta didik dapat menentukan teknik pengurangan bahan yang digunakan untuk membuatnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Menciptakan',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal teknik konstruksi atau merakit dalam pembuatan karya tiga dimensi.',
    indikatorSoal:
      'Disajikan aktivitas siswa menyambung kardus, stik es krim, dan sedotan menjadi maket rumah adat, peserta didik dapat menyebutkan teknik berkarya yang diterapkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Berpikir dan Bekerja Artistik',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan prinsip seni rupa proporsi, keseimbangan, kesatuan, dan irama dalam berkarya.',
    indikatorSoal:
      'Disajikan permasalahan keserasian perbandingan ukuran bagian tubuh tokoh pada poster, peserta didik dapat menentukan prinsip seni rupa yang diterapkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Menciptakan',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karya seni rupa dua dimensi teknik tempel (kolase, montase, dan mozaik).',
    indikatorSoal:
      'Disajikan deskripsi pembuatan gambar penyu dari susunan kepingan keramik dan kulit telur sejenis, peserta didik dapat menganalisis jenis karya tempel beserta alasannya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Berdampak',
    tujuanPembelajaran:
      'Peserta didik dapat mengapresiasi karya seni kriya anyaman tradisional sebagai benda tiga dimensi yang bermanfaat.',
    indikatorSoal:
      'Disajikan gambar keranjang anyaman bambu, peserta didik dapat menggolongkan karya tersebut berdasarkan wujud dimensi dan fungsi pakainya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Menciptakan',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal teknik cetak sederhana (seni grafis) pada karya dua dimensi.',
    indikatorSoal:
      'Disajikan narasi pembuatan cap stempel dari umbi kentang dan pelepah pisang di atas kertas, peserta didik dapat mengidentifikasi teknik cetak tinggi dua dimensi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Merefleksikan',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karya seni pahat patung penuh dan karya relief pada bidang datar.',
    indikatorSoal:
      'Disajikan deskripsi ukiran dinding candi yang memiliki tonjolan namun dinikmati dari arah depan, peserta didik dapat menyebutkan istilah karya seni tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Berdampak',
    tujuanPembelajaran:
      'Peserta didik dapat memahami urutan tahapan perencanaan dan pelaksanaan dalam berkarya seni rupa.',
    indikatorSoal:
      'Disajikan konteks persiapan membuat karya patung atau lukisan, peserta didik dapat menentukan langkah awal yang paling tepat sebelum membentuk atau mewarnai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ciri dimensi, teknik pembuatan, dan unsur rupa pada karya batik tradisional.',
    indikatorSoal:
      'Disajikan gambar kain batik motif Kawung dan flora dengan tiga pilihan pernyataan, peserta didik dapat memilih lebih dari satu pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Merefleksikan',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan contoh benda seni rupa tiga dimensi yang berfungsi pakai (seni terapan).',
    indikatorSoal:
      'Disajikan tiga daftar karya seni rupa, peserta didik dapat memilih seluruh karya yang tergolong seni rupa terapan tiga dimensi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Berpikir dan Bekerja Artistik',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi penerapan prinsip komposisi dan teknik pewarnaan pada karya dua dimensi.',
    indikatorSoal:
      'Disajikan tiga deskripsi terkait tekstur, prinsip keseimbangan, dan teknik plakat, peserta didik dapat memilih lebih dari satu pernyataan yang bernilai benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis karakteristik karya gerabah tanah liat ditinjau dari dimensi, bahan, dan sudut pandang.',
    indikatorSoal:
      'Disajikan gambar guci gerabah terakota, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada 3 pernyataan terkait dimensi, bahan lunak, dan arah pandang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Mengalami',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan contoh dan unsur penyusun karya seni rupa dua dimensi dan tiga dimensi.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang klasifikasi poster, unsur rupa pada karya 3D, dan contoh karya 3D, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Merefleksikan',
    tujuanPembelajaran:
      'Peserta didik dapat mengapresiasi karya lukisan pemandangan dua dimensi melalui unsur warna dan teknik melukis.',
    indikatorSoal:
      'Disajikan gambar lukisan kanvas terasering sawah, peserta didik dapat menentukan kebenaran (Benar/Salah) dari 3 pernyataan tentang jenis dimensi, harmoni warna, dan teknik pembuatan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Berdampak',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan tujuan penciptaan karya seni rupa murni dan seni rupa terapan.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai tujuan seni murni, contoh meja ukir/tas rajut, dan perpaduan fungsi-estetika seni terapan, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Merefleksikan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis jenis bahan, tekstur nyata, dan fungsi karya seni patung ukir kayu tiga dimensi.',
    indikatorSoal:
      'Disajikan gambar patung ukir kayu tradisional, peserta didik dapat menilai kebenaran (Benar/Salah) terkait bahan keras, tekstur ukiran, dan fungsi karya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Menciptakan',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan prosedur teknik arsir, aquarel, dan montase pada karya seni rupa dua dimensi.',
    indikatorSoal:
      'Disajikan tiga deskripsi teknik menggambar dan menempel, peserta didik dapat menentukan kebenaran (Benar/Salah) untuk teknik arsir, aquarel, dan montase.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Berdampak',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bahan alam, prinsip irama, dan golongan dimensi pada kerajinan anyaman bambu.',
    indikatorSoal:
      'Disajikan gambar keranjang anyaman bambu, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) dari 3 pernyataan mengenai kelenturan bahan, irama pola, dan dimensinya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Berpikir dan Bekerja Artistik',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pengelompokan warna sekunder, sifat psikologis warna panas-dingin, dan pencampuran warna terang.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang teori warna dalam seni rupa, peserta didik dapat mengevaluasi dan menentukan nilai Benar/Salah masing-masing pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Menciptakan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan teknik konstruksi bahan daur ulang serta prinsip kesatuan dalam merancang karya 3 dimensi fungsional.',
    indikatorSoal:
      'Disajikan konteks pembuatan tempat pensil robot dari botol plastik dan kardus bekas, peserta didik dapat menentukan kebenaran (Benar/Salah) terkait fungsi, teknik merakit, dan prinsip kesatuan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} dalam berkarya seni rupa dua dimensi maupun tiga dimensi.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus materi tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('ciri') || t.includes('pengertian') || t.includes('unsur') || t.includes('tekstur') || t.includes('patung')) {
    return 'Mengalami';
  }
  if (t.includes('teknik') || t.includes('tempel') || t.includes('daur ulang')) {
    return 'Menciptakan';
  }
  if (t.includes('prinsip') || t.includes('warna') || t.includes('bahan') || t.includes('gerabah')) {
    return 'Berpikir dan Bekerja Artistik';
  }
  if (t.includes('apresiasi') || t.includes('fungsi') || t.includes('relief')) {
    return 'Merefleksikan';
  }
  if (t.includes('pameran') || t.includes('anyaman') || t.includes('tahapan')) {
    return 'Berdampak';
  }
  return 'Mengalami';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
