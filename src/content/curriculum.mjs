export const QUESTION_DENSITY_MINIMUMS = {
  very_high: 6,
  high: 4,
  medium: 3,
  low: 2
};

export const PDF_ANALYSES = [
  {
    id: "membrane-transport",
    pdf: "Hücre Zarından Madde Geçişi.pdf",
    summary:
      "Biyolojik zarların fiziksel ilkeleri, zar proteinlerinin bağlanma biçimleri, zar asimetrisi, füzyon ve çözünmüş maddelerin zardan taşınması işlenir.",
    mainHeadings: [
      "Biyolojik zarların temel özellikleri",
      "Lipit çift tabaka ve sıvı-mozaik model",
      "Zar proteinleri ve asimetri",
      "Zar kıvrımı ve füzyonu",
      "Pasif ve aktif taşınma",
      "Su ve iyon kanalları"
    ],
    subtopics: [
      { name: "Biyolojik zarların ortak özellikleri", pages: [3, 8] },
      { name: "Sıvı-mozaik model ve lipit çift tabaka", pages: [9, 13] },
      { name: "Zar asimetrisi", pages: [16, 16] },
      { name: "Zar proteinlerinin bağlanma tipleri", pages: [17, 17] },
      { name: "Zar akışkanlığı ve dinamikleri", pages: [18, 19] },
      { name: "Zar füzyonu ve SNARE mantığı", pages: [20, 28] },
      { name: "Taşıyıcılar ve kanallar", pages: [29, 33] },
      { name: "GLUT ve kolaylaştırılmış difüzyon", pages: [34, 35] },
      { name: "Klorür-bikarbonat değiştiricisi", pages: [36, 37] },
      { name: "Aktif taşınma", pages: [38, 39] },
      { name: "Akuaporinler", pages: [40, 41] },
      { name: "İyon seçici kanallar", pages: [42, 43] }
    ],
    criticalConcepts: [
      "Seçici geçirgenlik",
      "Yanal hareket",
      "Yaprakçık asimetrisi",
      "Taşıyıcı-kanal ayrımı",
      "Elektrokimyasal fark",
      "Elektronötr antiport"
    ],
    mechanisms: [
      "Lipit çift tabakanın oluşumu",
      "Zar füzyonu",
      "Kolaylaştırılmış difüzyon",
      "Birincil aktif taşınma",
      "Su geçişi",
      "İyon seçiciliği"
    ],
    classifications: [
      "İntegral, periferik ve lipit-ankorlu proteinler",
      "Taşıyıcılar ve kanallar",
      "Birincil ve ikincil aktif taşınma"
    ],
    comparisons: [
      "Pasif ve aktif taşınma",
      "Taşıyıcı ve kanal",
      "Akuaporin ve iyon kanalı"
    ],
    exceptions: [
      "Yaprakçık asimetrisinin mutlak olmaması",
      "Bazı akuaporinlerin gliserol ve üre de geçirebilmesi"
    ],
    examDistinctions: [
      "GLUT pasif taşımaya aracılık eder",
      "Klorür-bikarbonat değiştiricisi elektronötrdür",
      "Akışkanlık lipit bileşiminden etkilenir"
    ]
  },
  {
    id: "carbohydrates-glycobiology",
    pdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    summary:
      "Monosakkarit yapısı ve stereokimyası, disakkarit adlandırması, depo-yapısal polisakkaritler, glikozaminoglikanlar, glikokonjugatlar ve şeker kodu işlenir.",
    mainHeadings: [
      "Monosakkaritler ve stereokimya",
      "Halkalı yapı ve anomerler",
      "Şeker türevleri ve disakkaritler",
      "Depo ve yapısal polisakkaritler",
      "Glikozaminoglikanlar",
      "Glikokonjugatlar",
      "Şeker kodu ve analitik yöntemler"
    ],
    subtopics: [
      { name: "Monosakkaritlerin temel sınıflandırılması", pages: [5, 9] },
      { name: "D/L izomerleri ve kiralite", pages: [10, 15] },
      { name: "Halkalı yapı, anomerler ve mutarotasyon", pages: [16, 23] },
      { name: "Heksoz türevleri", pages: [24, 32] },
      { name: "İndirgen şeker mantığı", pages: [33, 35] },
      { name: "Disakkarit adlandırması ve bağ tipleri", pages: [36, 45] },
      { name: "Depo polisakkaritleri", pages: [46, 55] },
      { name: "Yapısal homopolisakkaritler", pages: [56, 65] },
      { name: "Peptidoglikan ve hücre duvarı heteropolisakkaritleri", pages: [66, 68] },
      { name: "Glikozaminoglikanlar", pages: [69, 81] },
      { name: "Proteoglikanlar, glikoproteinler ve glikolipitler", pages: [82, 100] },
      { name: "Şeker kodu ve lektinler", pages: [101, 110] },
      { name: "Karbohidrat analitik yöntemleri", pages: [111, 117] }
    ],
    criticalConcepts: [
      "Aldoz-ketoz ayrımı",
      "Anomerik karbon",
      "Epimer",
      "Glikozit bağı",
      "Dallanma sıklığı",
      "Şeker kodu"
    ],
    mechanisms: [
      "Halka kapanması",
      "Mutarotasyon",
      "Disakkarit oluşumu",
      "Polisakkarit dallanması",
      "Lektin-karbohidrat tanıma"
    ],
    classifications: [
      "Aldozlar ve ketozlar",
      "Depo ve yapısal polisakkaritler",
      "Homopolisakkarit ve heteropolisakkarit",
      "Glikokonjugat sınıfları"
    ],
    comparisons: [
      "D/L ve optik dönüş",
      "Anomer ve enantiyomer",
      "Glikojen ve nişasta",
      "Selüloz ve kitin",
      "Proteoglikan ve glikoprotein"
    ],
    exceptions: [
      "Trehalozda iki anomerik karbonun bağa katılması",
      "Hiyaluronanın sülfat içermeyen bir GAG olması"
    ],
    examDistinctions: [
      "Trehaloz indirgen değildir",
      "Hiyaluronan tekrarlayan disakkaritlerden oluşur",
      "Lektinler şeker kodunu okuyan proteinlerdir"
    ]
  },
  {
    id: "carbohydrate-metabolism",
    pdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    summary:
      "Glikoliz, fermentasyonlar, glukoneogenez ve pentoz fosfat yolağı enerji korunumu, by-pass basamakları ve akı düzenlemesiyle birlikte işlenir.",
    mainHeadings: [
      "Glikolizin genel mantığı",
      "Glikolitik basamaklar",
      "Fermentasyon",
      "Glukoneogenez",
      "Karşılıklı düzenleme",
      "Pentoz fosfat yolağı"
    ],
    subtopics: [
      { name: "Glukoz kullanımının ana yolları", pages: [2, 3] },
      { name: "Glikolizin iki evresi", pages: [4, 11] },
      { name: "Pirüvatın akıbetleri", pages: [12, 16] },
      { name: "Glikolizde enerji korunumu", pages: [17, 20] },
      { name: "Hazırlık evresi basamakları", pages: [22, 33] },
      { name: "Sonlanma evresi basamakları", pages: [34, 43] },
      { name: "Glikolizi besleyen yolaklar", pages: [44, 45] },
      { name: "Laktik asit fermentasyonu", pages: [46, 51] },
      { name: "Etanol fermentasyonu", pages: [52, 53] },
      { name: "Glukoneogenezin genel ilkeleri", pages: [55, 59] },
      { name: "Glukoneogenez by-pass tepkimeleri", pages: [60, 68] },
      { name: "Glukoneogenez enerji maliyeti", pages: [69, 71] },
      { name: "Glukojenik öncüller ve yağ asidi istisnası", pages: [72, 73] },
      { name: "Glikoliz ve glukoneogenezin karşılıklı düzenlenmesi", pages: [74, 74] },
      { name: "Pentoz fosfat yolağının oksidatif evresi", pages: [75, 82] },
      { name: "Pentoz fosfat yolağının oksidatif olmayan evresi", pages: [83, 83] },
      { name: "G6P akısının glikoliz ve PPP arasında bölünmesi", pages: [84, 85] }
    ],
    criticalConcepts: [
      "Net ATP kazancı",
      "NADH yenilenmesi",
      "Tersinmez basamak",
      "By-pass",
      "NADPH üretimi",
      "Yolak seçimi"
    ],
    mechanisms: [
      "Substrat düzeyinde fosforilasyon",
      "Fermentasyonla NAD+ yenilenmesi",
      "Oksaloasetatın taşınabilir forma çevrilmesi",
      "G6P'nin hücresel ihtiyaca göre yönlendirilmesi"
    ],
    classifications: [
      "Hazırlık ve sonlanma evresi",
      "Laktat ve etanol fermentasyonu",
      "PPP'nin oksidatif ve oksidatif olmayan evresi"
    ],
    comparisons: [
      "Glikoliz ve glukoneogenez",
      "ATP üretimi ve NADPH üretimi",
      "Laktat ve etanol fermentasyonu"
    ],
    exceptions: [
      "Memeliler yağ asitlerinden glukoz sentezleyemez",
      "Bazı bitki ve mikroorganizmalarda PPi kullanan PFK bulunabilir"
    ],
    examDistinctions: [
      "Glikolizin net ürünü 2 ATP ve 2 NADH'dir",
      "Glukoneogenez glikolizin tam tersi değildir",
      "PPP sadece riboz değil NADPH de sağlar"
    ]
  },
  {
    id: "lipids",
    pdf: "Lipitler.pdf",
    summary:
      "Depo lipitleri, yağ asidi gösterimi, triaçilgliseroller, yapısal zar lipitleri, sfingolipitler, steroller ve lipit türevli sinyal-kofaktör pigmentler işlenir.",
    mainHeadings: [
      "Yağ asitleri ve depo lipitleri",
      "Triaçilgliseroller ve mumlar",
      "Zar lipitleri",
      "Sfingolipitler ve steroller",
      "Sinyal, kofaktör ve pigment olarak lipitler"
    ],
    subtopics: [
      { name: "Lipitlerin genel özelliği", pages: [2, 2] },
      { name: "Yağ asidi yapısı ve X:Y gösterimi", pages: [4, 17] },
      { name: "Elzem omega-3 yağ asitleri", pages: [9, 11] },
      { name: "Triaçilgliseroller", pages: [18, 24] },
      { name: "Kısmi hidrojenleme ve trans yağlar", pages: [25, 26] },
      { name: "Mumlar", pages: [27, 27] },
      { name: "Yapısal lipitlerin genel mantığı", pages: [28, 31] },
      { name: "Gliserofosfolipitler", pages: [32, 37] },
      { name: "Galaktolipitler ve sülfolipitler", pages: [38, 38] },
      { name: "Arke zar lipitleri", pages: [39, 41] },
      { name: "Sfingolipitler", pages: [42, 47] },
      { name: "Steroller", pages: [48, 49] },
      { name: "Lipit türevli vitaminler ve kinonlar", pages: [50, 73] }
    ],
    criticalConcepts: [
      "Su çözünmezliği",
      "Doymuşluk derecesi",
      "Ester ve eter bağları",
      "Sfingozin omurgası",
      "Dört halkalı sterol çekirdeği",
      "Lipit kinonlar"
    ],
    mechanisms: [
      "Kısmi hidrojenleme",
      "Enerji depolama",
      "Zar bileşiminin çeşitlenmesi",
      "Yüzey tanıma için sfingolipit kullanımı"
    ],
    classifications: [
      "Depo ve yapısal lipitler",
      "Gliserofosfolipit ve sfingolipit",
      "Steroller, vitaminler ve kinonlar"
    ],
    comparisons: [
      "Doymuş ve doymamış yağ asitleri",
      "Triaçilgliserol ve mum",
      "Sfingolipit ve gliserofosfolipit"
    ],
    exceptions: [
      "Arke zar lipitlerinde eter bağları",
      "Bazı gliserofosfolipitlerde eter bağlı zincir bulunması"
    ],
    examDistinctions: [
      "ALA insan için elzemdir",
      "Trans yağ oluşumu kısmi hidrojenlemeyle ilişkilidir",
      "Steroller kaynaşmış dört halka taşır"
    ]
  },
  {
    id: "nucleotides",
    pdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    summary:
      "Nükleotid yapısı ve işlevleri, nükleik asit omurgası, DNA çift sarmalı, RNA çeşitleri, denatürasyon-hibritleşme ve nükleik asit hasarı işlenir.",
    mainHeadings: [
      "Temel bilgiler ve baz-pentoz yapısı",
      "Fosfodiester omurga",
      "DNA çift sarmalı",
      "RNA çeşitleri",
      "Nükleik asit kimyası",
      "Enzimatik olmayan hasar",
      "Nükleotidlerin diğer işlevleri"
    ],
    subtopics: [
      { name: "Nükleotidlerin temel işlevleri", pages: [1, 4] },
      { name: "Pürin, pirimidin ve pentoz yapısı", pages: [5, 13] },
      { name: "Fosfodiester bağları ve yönlülük", pages: [16, 23] },
      { name: "Baz özellikleri, UV soğurma ve istiflenme", pages: [24, 27] },
      { name: "Chargaff kuralları ve DNA kanıtları", pages: [28, 31] },
      { name: "Watson-Crick modeli", pages: [32, 35] },
      { name: "mRNA ve diğer RNA tipleri", pages: [36, 40] },
      { name: "Denatürasyon, renatürasyon ve Tm", pages: [41, 46] },
      { name: "Hibritleşme", pages: [47, 48] },
      { name: "Deaminasyon ve AP lezyonları", pages: [49, 51] },
      { name: "UV, radyasyon, alkilleyici ve oksidatif hasar", pages: [52, 59] },
      { name: "Nükleotidlerin enerji ve kofaktör rolleri", pages: [60, 61] }
    ],
    criticalConcepts: [
      "Pürin-pirimidin ayrımı",
      "Riboz ve deoksiriboz",
      "5' ve 3' uç",
      "Antiparalellik",
      "Tm",
      "Mutajenik hasar"
    ],
    mechanisms: [
      "Fosfodiester omurganın kurulması",
      "Baz istiflenmesi",
      "Denatürasyon-renatürasyon",
      "Deaminasyon",
      "UV ile dimer oluşumu"
    ],
    classifications: [
      "Pürinler ve pirimidinler",
      "Monosistronik ve polisistronik mRNA",
      "Hasar türleri"
    ],
    comparisons: [
      "DNA ve RNA",
      "Monosistronik ve polisistronik mRNA",
      "Deaminasyon ve oksidatif hasar"
    ],
    exceptions: [
      "DNA/RNA ayrımında bazdan çok pentozun belirleyici oluşu",
      "Timin kullanımının deaminasyonla ilişkili gerekçesi"
    ],
    examDistinctions: [
      "A=T ve G=C oranı Chargaff kuralıdır",
      "DNA zincirleri antiparaleldir",
      "G-C oranı arttıkça Tm yükselir"
    ]
  },
  {
    id: "citric-acid-cycle",
    pdf: "Sitrik Asit Çevrimi.pdf",
    summary:
      "Pirüvat dehidrogenaz kompleksi, asetil-KoA oluşumu, sitrik asit çevrimi basamakları, enerji korunumu ve amfibolik rol işlenir.",
    mainHeadings: [
      "Pirüvatın asetil-KoA'ya dönüşümü",
      "PDH kompleksinin yapısı ve koenzimleri",
      "Sitrik asit çevrimi basamakları",
      "Enerji korunumu",
      "Amfibolik rol"
    ],
    subtopics: [
      { name: "Hücresel solunumun genel akışı", pages: [1, 4] },
      { name: "Pirüvatın asetil-KoA'ya oksidatif dekarboksillenmesi", pages: [5, 7] },
      { name: "PDH kompleksinin koenzimleri", pages: [8, 8] },
      { name: "PDH kompleksinin alt enzimleri", pages: [9, 15] },
      { name: "Substrat yönlendirilmesi", pages: [16, 16] },
      { name: "Sitrat oluşumu ve akonitaz", pages: [17, 20] },
      { name: "İzositrat dehidrogenaz", pages: [21, 22] },
      { name: "Alfa-ketoglutarat dehidrogenaz", pages: [23, 23] },
      { name: "Süksinil-KoA'dan süksinata geçiş", pages: [24, 24] },
      { name: "Süksinat dehidrogenaz", pages: [25, 25] },
      { name: "Fumaraz ve malat dehidrogenaz", pages: [26, 27] },
      { name: "Çevrimde enerji korunumu", pages: [28, 32] },
      { name: "Amfibolik rol ve biyosentetik ara ürünler", pages: [33, 34] }
    ],
    criticalConcepts: [
      "Oksidatif dekarboksillenme",
      "Lipoat ve TPP",
      "Substrat yönlendirilmesi",
      "Substrat düzeyinde fosforilasyon",
      "NADH ve FADH2 oluşumu",
      "Amfibolik yolak"
    ],
    mechanisms: [
      "PDH ardışık beş tepkimesi",
      "Sitrat sentaz kondensasyonu",
      "Oksidatif dekarboksillenme",
      "Süksinil-KoA düzeyinde ATP eşdeğeri korunumu"
    ],
    classifications: [
      "PDH koenzimleri",
      "Çevrimin yükseltgenme ve izomerizasyon basamakları"
    ],
    comparisons: [
      "PDH ve alfa-ketoglutarat DH kompleksleri",
      "NAD-bağımlı ve NADP-bağımlı izositrat dehidrogenaz"
    ],
    exceptions: [
      "İzositrat dehidrogenazın NADP+ kullanan formu",
      "Çevrimde doğrudan ATP eşdeğerinin tek basamakta oluşması"
    ],
    examDistinctions: [
      "PDH geri dönüşümsüzdür",
      "Süksinil-KoA'dan süksinata geçişte ATP eşdeğeri korunur",
      "Çevrim biyosentetik öncül de sağlar"
    ]
  },
  {
    id: "oxidative-phosphorylation",
    pdf: "Oksidatif Fosforillenme.pdf",
    summary:
      "Elektron taşıma zincirine giriş ilkeleri, elektron taşıyıcı tipleri, NADH-NADPH ayrımı ve fotosenteze giriş düzeyinde pigmentler ile kloroplast bölmeleri işlenir.",
    mainHeadings: [
      "Oksidatif fosforillenmenin yeri",
      "Elektron taşıyıcıları",
      "Fotosenteze giriş",
      "Pigmentler",
      "Kloroplast yapısı",
      "Fotofosforillenme"
    ],
    subtopics: [
      { name: "Oksidatif fosforillenmenin genel rolü", pages: [1, 3] },
      { name: "NADH ve NADPH ayrımı", pages: [4, 5] },
      { name: "Flavoproteinler", pages: [7, 7] },
      { name: "Solunum zinciri taşıyıcıları", pages: [8, 10] },
      { name: "Fotosentezin redoks mantığı", pages: [11, 14] },
      { name: "Klorofil pigmentleri", pages: [15, 18] },
      { name: "Karotenoidler ve bilin pigmentler", pages: [19, 21] },
      { name: "Kloroplast yapısı ve bölmeleri", pages: [22, 23] },
      { name: "Işık tepkimeleri ve ATP/NADPH oluşumu", pages: [24, 27] }
    ],
    criticalConcepts: [
      "Elektron giriş noktası",
      "NADH ve NADPH havuzları",
      "Flavin nükleotidi",
      "Ubikinon",
      "Pigment çeşitliliği",
      "Stroma ve tilakoit ayrımı"
    ],
    mechanisms: [
      "Elektron aktarımı",
      "Fotolizle elektron kazanımı",
      "Işık enerjisinin ATP ve NADPH'ye çevrilmesi"
    ],
    classifications: [
      "Elektron taşıyıcı tipleri",
      "Fotosentetik pigmentler"
    ],
    comparisons: [
      "NADH ve NADPH",
      "Oksidatif fosforillenme ve fotofosforillenme",
      "Klorofil ve karotenoid"
    ],
    exceptions: [
      "Bilin pigmentlerin Mg ve fitol içermemesi",
      "Karotenoidlerin koruyucu işlevi"
    ],
    examDistinctions: [
      "NADH iç zarı serbestçe geçmez",
      "Karotenoidler klorofili fotooksidasyondan korur",
      "Karanlık tepkimeler stromada yürür"
    ]
  }
];

export const CURRICULUM_MAP = [
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Biyolojik zarların ortak özellikleri",
    learningObjective: "Zarların seçici geçirgen, esnek ve protein içeren yapılar olduğunu açıklamak.",
    criticalDistinction: "Zarın pasif bir bariyer değil, özgül işlevler üstlenen dinamik bir yapı olması",
    questionDensityNeed: "medium",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [3, 8]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Sıvı-mozaik model ve lipit çift tabaka",
    learningObjective: "Sıvı-mozaik modeli ve çift tabakanın organizasyon ilkelerini yorumlamak.",
    criticalDistinction: "Misel ve çift tabaka ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [9, 13]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Zar asimetrisi ve protein tipleri",
    learningObjective: "Zar asimetrisi ile integral, periferik ve lipit-ankorlu proteinleri ayırt etmek.",
    criticalDistinction: "Lipit asimetrisi ve protein bağlanma biçimi",
    questionDensityNeed: "high",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [16, 17]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Zar akışkanlığı ve dinamikleri",
    learningObjective: "Akışkanlığın sıcaklık ve lipit bileşimiyle ilişkisini kurmak.",
    criticalDistinction: "Kararlılık ve akışkanlığın birlikte bulunması",
    questionDensityNeed: "medium",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [18, 19]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Zar füzyonu",
    learningObjective: "Özgül tanıma ve füzyonun basamaklı mantığını açıklamak.",
    criticalDistinction: "Yalnız temas ile özgül füzyon arasındaki fark",
    questionDensityNeed: "high",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [20, 28]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Taşıyıcılar ve kanallar",
    learningObjective: "Kanallar ile taşıyıcıların işlevsel farklarını yorumlamak.",
    criticalDistinction: "Aktifleşme enerjisini düşürme ve seçicilik",
    questionDensityNeed: "high",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [29, 33]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "GLUT ve kolaylaştırılmış difüzyon",
    learningObjective: "GLUT aracılı glukoz taşınmasını pasif taşınma mantığıyla açıklamak.",
    criticalDistinction: "Kolaylaştırılmış difüzyon ile aktif taşınma",
    questionDensityNeed: "medium",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [34, 35]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Anyon değiştiriciler",
    learningObjective: "Klorür-bikarbonat değiştiricisinin işlevini CO2 taşınmasıyla ilişkilendirmek.",
    criticalDistinction: "Elektronötr antiport",
    questionDensityNeed: "medium",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [36, 37]
  },
  {
    topic: "Biyolojik zarlar ve taşınma",
    subtopic: "Aktif taşınma, akuaporinler ve iyon kanalları",
    learningObjective: "Aktif taşınma ile su/iyon geçiş sistemlerini aynı zar bağlamında karşılaştırmak.",
    criticalDistinction: "Derişim farkına karşı taşıma ile kanal aracılı geçiş",
    questionDensityNeed: "high",
    sourcePdf: "Hücre Zarından Madde Geçişi.pdf",
    sourcePages: [38, 43]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Monosakkaritlerin temel sınıflandırılması",
    learningObjective: "Monosakkaritleri karbon sayısı ile aldoz/ketoz özelliklerine göre sınıflandırmak.",
    criticalDistinction: "Aldotrioz ve ketotrioz ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [5, 9]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "D/L izomerleri ve kiralite",
    learningObjective: "D/L tanımını karbonil grubuna en uzak kiral merkezle ilişkilendirmek.",
    criticalDistinction: "D/L ve optik dönüş ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [10, 15]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    learningObjective: "Anomerik karbonun önemini ve mutarotasyonu açıklamak.",
    criticalDistinction: "Anomer ve epimer ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [16, 23]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Heksoz türevleri",
    learningObjective: "Amino şeker, deoksi şeker ve asit türevlerini tanımak.",
    criticalDistinction: "C-2 aminasyonu ve C-6 oksidasyonu",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [24, 32]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "İndirgen şeker mantığı",
    learningObjective: "İndirgenlik kavramını anomerik karbonun serbestliği ile ilişkilendirmek.",
    criticalDistinction: "İndirgen ve indirgen olmayan disakkarit",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [33, 35]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Disakkarit adlandırması ve bağ tipleri",
    learningObjective: "Disakkaritlerde bağ tipi ile indirgenlik ilişkisini yorumlamak.",
    criticalDistinction: "Trehaloz, sükroz ve maltoz tipleri",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [36, 45]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Depo polisakkaritleri",
    learningObjective: "Nişasta ve glikojenin depolama mantığını karşılaştırmak.",
    criticalDistinction: "Dallanma sıklığı ve uç sayısı",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [46, 55]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Yapısal homopolisakkaritler",
    learningObjective: "Selüloz ve kitinin yapısal özelliklerini açıklamak.",
    criticalDistinction: "Depo ve yapısal homopolisakkarit",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [56, 65]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Peptidoglikan ve heteropolisakkaritler",
    learningObjective: "Hücre duvarı heteropolisakkaritlerini temel bileşenleriyle tanımak.",
    criticalDistinction: "Homopolisakkarit ve heteropolisakkarit",
    questionDensityNeed: "medium",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [66, 68]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Glikozaminoglikanlar",
    learningObjective: "Başlıca GAG türlerini ve ECM ile ilişkilerini karşılaştırmak.",
    criticalDistinction: "Hiyaluronan ve diğer sülfatlı GAG'lar",
    questionDensityNeed: "very_high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [69, 81]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    learningObjective: "Glikokonjugat sınıflarını yapı ve işlev açısından ayırt etmek.",
    criticalDistinction: "Proteoglikan ve glikoprotein ayrımı",
    questionDensityNeed: "very_high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [82, 100]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Şeker kodu ve lektinler",
    learningObjective: "Karbohidratların bilgi molekülü olarak işlevini lektinler üzerinden yorumlamak.",
    criticalDistinction: "Yapısal karbonhidrat ve bilgi taşıyan yüzey işareti",
    questionDensityNeed: "high",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [101, 110]
  },
  {
    topic: "Karbohidratlar ve glikobiyoloji",
    subtopic: "Karbohidrat analitik yöntemleri",
    learningObjective: "Karbohidrat ayırma ve analizinde kullanılan temel yöntemleri tanımak.",
    criticalDistinction: "İyon değişim ve jel filtrasyon temeli",
    questionDensityNeed: "low",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourcePages: [111, 117]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Glukoz kullanımının ana yolları",
    learningObjective: "Glukozun farklı metabolik kaderlerini genel çerçevede saymak.",
    criticalDistinction: "Katabolik ve anabolik yönelim",
    questionDensityNeed: "medium",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [2, 5]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Glikolizin iki evresi",
    learningObjective: "Glikolizi hazırlık ve sonlanma evreleriyle açıklamak.",
    criticalDistinction: "ATP tüketimi ve ATP üretimi ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [6, 11]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Pirüvatın akıbetleri",
    learningObjective: "Pirüvatın üç temel metabolik kaderini koşullarıyla eşleştirmek.",
    criticalDistinction: "Aerobik oksidasyon ve fermentasyon",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [12, 16]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Glikolizde enerji korunumu",
    learningObjective: "Glikolizin net ATP ve NADH çıktısını açıklamak.",
    criticalDistinction: "Brüt ve net enerji kazancı",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [17, 20]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Hazırlık evresi basamakları",
    learningObjective: "Hexozun iki trioza ayrılmasına kadar olan glikolitik tepkimeleri sıralamak.",
    criticalDistinction: "Hekzokinaz/PFK-1 ve aldolaz aşamaları",
    questionDensityNeed: "very_high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [22, 33]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Sonlanma evresi basamakları",
    learningObjective: "GAP'ten pirüvata giden enerji üreten basamakları yorumlamak.",
    criticalDistinction: "NADH oluşumu ve substrat düzeyinde fosforilasyon",
    questionDensityNeed: "very_high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [34, 43]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Laktik asit fermentasyonu",
    learningObjective: "Laktik asit fermentasyonunun NAD+ yenilenmesindeki rolünü açıklamak.",
    criticalDistinction: "Net karbon oksidasyon değişimi olmaması",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [46, 51]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Etanol fermentasyonu",
    learningObjective: "Etanol fermentasyonunda elektron alıcısı ve ürünlerini belirlemek.",
    criticalDistinction: "Laktat ve etanol fermentasyonu",
    questionDensityNeed: "medium",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [52, 53]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Glukoneogenezin genel ilkeleri",
    learningObjective: "Glukoneogenezin doku dağılımını ve temel amacını açıklamak.",
    criticalDistinction: "Glikolizin ters yönde birebir tekrarı olmaması",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [55, 59]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Glukoneogenez by-pass tepkimeleri",
    learningObjective: "Glukoneogenezin by-pass basamaklarını ve malat/oksaloasetat mantığını yorumlamak.",
    criticalDistinction: "Oksaloasetatın mitokondriden doğrudan çıkamaması",
    questionDensityNeed: "very_high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [60, 68]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Glukoneogenez enerji maliyeti ve karşılıklı düzenleme",
    learningObjective: "Glukoneogenezin neden enerji gerektirdiğini ve glikolizle nasıl karşılıklı düzenlendiğini açıklamak.",
    criticalDistinction: "Enerji maliyeti ve düzenleme mantığı",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [69, 74]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Pentoz fosfat yolağının oksidatif evresi",
    learningObjective: "PPP'nin oksidatif evresinde NADPH üretimini açıklamak.",
    criticalDistinction: "NADPH ve NADH rolleri",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [75, 82]
  },
  {
    topic: "Karbohidrat metabolizması",
    subtopic: "Pentoz fosfat yolağının oksidatif olmayan evresi ve akı seçimi",
    learningObjective: "Riboz ihtiyacı ile NADPH ihtiyacına göre G6P akısının yönlendirilmesini yorumlamak.",
    criticalDistinction: "PPP'nin yalnız riboz üretim yolu olmaması",
    questionDensityNeed: "high",
    sourcePdf: "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf",
    sourcePages: [83, 85]
  },
  {
    topic: "Lipitler",
    subtopic: "Lipitlerin genel özelliği",
    learningObjective: "Biyolojik lipitlerin ortak fizikokimyasal özelliğini tanımlamak.",
    criticalDistinction: "Ortak işlev değil ortak çözünürlük özelliği",
    questionDensityNeed: "medium",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [2, 2]
  },
  {
    topic: "Lipitler",
    subtopic: "Yağ asidi yapısı ve gösterimi",
    learningObjective: "X:Y ve omega gösterimlerini yorumlamak.",
    criticalDistinction: "Çift bağ sayısı ile ilk çift bağ konumu",
    questionDensityNeed: "high",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [4, 17]
  },
  {
    topic: "Lipitler",
    subtopic: "Triaçilgliseroller ve depolama mantığı",
    learningObjective: "Triaçilgliserollerin depo formu olarak avantajını açıklamak.",
    criticalDistinction: "Serbest yağ asidi ve esterleşmiş depo formu",
    questionDensityNeed: "high",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [18, 24]
  },
  {
    topic: "Lipitler",
    subtopic: "Kısmi hidrojenleme ve trans yağlar",
    learningObjective: "Trans yağ oluşumunu kısmi hidrojenleme bağlamında açıklamak.",
    criticalDistinction: "Doymuşlaştırma ve geometrik izomerleşme",
    questionDensityNeed: "medium",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [25, 26]
  },
  {
    topic: "Lipitler",
    subtopic: "Mumlar",
    learningObjective: "Mumların yapısını ve işlevsel avantajlarını tanımak.",
    criticalDistinction: "Triaçilgliserol ve mum ayrımı",
    questionDensityNeed: "low",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [27, 27]
  },
  {
    topic: "Lipitler",
    subtopic: "Gliserofosfolipitler ve diğer zar lipitleri",
    learningObjective: "Başlıca yapısal zar lipitlerini omurga tiplerine göre karşılaştırmak.",
    criticalDistinction: "Gliserol ve sfingozin temelli zar lipitleri",
    questionDensityNeed: "very_high",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [28, 47]
  },
  {
    topic: "Lipitler",
    subtopic: "Steroller",
    learningObjective: "Sterollerin yapısal çekirdeğini ve zar bağlamındaki önemini tanımak.",
    criticalDistinction: "Sterol ve steroid kavramı",
    questionDensityNeed: "medium",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [48, 49]
  },
  {
    topic: "Lipitler",
    subtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    learningObjective: "Lipit türevli kofaktör ve pigment örneklerini sınıflandırmak.",
    criticalDistinction: "Depo/yapısal lipit ve biyolojik işaret/kofaktör lipidi",
    questionDensityNeed: "high",
    sourcePdf: "Lipitler.pdf",
    sourcePages: [50, 73]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "Nükleotidlerin temel işlevleri",
    learningObjective: "Nükleotidlerin enerji, kofaktör ve bilgi molekülü rollerini açıklamak.",
    criticalDistinction: "Nükleotid ve nükleik asit ayrımı",
    questionDensityNeed: "medium",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [1, 4]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "Pürin, pirimidin ve pentoz yapısı",
    learningObjective: "Baz ve pentoz bileşenlerini doğru sınıflandırmak.",
    criticalDistinction: "DNA/RNA ayrımında pentozun belirleyiciliği",
    questionDensityNeed: "high",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [5, 13]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "Fosfodiester bağları ve yönlülük",
    learningObjective: "Nükleik asit omurgasının 5'-3' yönlülüğünü açıklamak.",
    criticalDistinction: "Baz eşleşmesi ve kovalent omurga ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [16, 23]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "Baz istiflenmesi ve UV soğurma",
    learningObjective: "Baz özelliklerinin 3B yapı ve UV davranışına etkisini açıklamak.",
    criticalDistinction: "Hidrojen bağı ve istiflenme katkıları",
    questionDensityNeed: "medium",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [24, 27]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "DNA çift sarmalının kanıtları ve yapısı",
    learningObjective: "Chargaff, Franklin-Wilkins ve Watson-Crick katkılarını yapısal sonuçlarıyla ilişkilendirmek.",
    criticalDistinction: "Baz bileşimi kanıtı ve geometrik model",
    questionDensityNeed: "very_high",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [28, 35]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "mRNA ve diğer RNA tipleri",
    learningObjective: "mRNA'nın diğer RNA türleri içindeki yerini ve kodlama mantığını yorumlamak.",
    criticalDistinction: "Monosistronik ve polisistronik mRNA",
    questionDensityNeed: "medium",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [36, 40]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "Denatürasyon, renatürasyon, Tm ve hibritleşme",
    learningObjective: "Denatürasyon ve hibritleşmeyi baz eşleşmesi ve G-C oranı ile ilişkilendirmek.",
    criticalDistinction: "Erime sıcaklığı ve tam parçalanma ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [41, 48]
  },
  {
    topic: "Nükleotidler ve nükleik asitler",
    subtopic: "Enzimatik olmayan nükleik asit hasarı",
    learningObjective: "Deaminasyon, AP lezyonu, UV ve oksidatif hasarı ayırt etmek.",
    criticalDistinction: "Kendiliğinden oluşan ve dış etkilerle artan hasar türleri",
    questionDensityNeed: "very_high",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourcePages: [49, 59]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Pirüvatın asetil-KoA'ya oksidatif dekarboksillenmesi",
    learningObjective: "PDH tepkimesinin genel çıktısını açıklamak.",
    criticalDistinction: "Pirüvat karboksilaz ve PDH ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [5, 7]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "PDH kompleksinin koenzimleri ve alt enzimleri",
    learningObjective: "PDH kompleksinin koenzimlerini ve alt birim görevlerini ayırt etmek.",
    criticalDistinction: "E1, E2, E3 rolleri",
    questionDensityNeed: "very_high",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [8, 15]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Substrat yönlendirilmesi",
    learningObjective: "Çok enzimli komplekslerde ara ürünlerin neden ayrılmadığını açıklamak.",
    criticalDistinction: "Serbest difüzyon ve kanalize ara ürün akışı",
    questionDensityNeed: "medium",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [16, 16]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Sitrat oluşumu ve akonitaz",
    learningObjective: "Çevrimin başlangıç iki basamağını eşleştirmek.",
    criticalDistinction: "Kondensasyon ve izomerizasyon",
    questionDensityNeed: "medium",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [17, 20]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Oksidatif dekarboksillenme basamakları",
    learningObjective: "İzositrat ve alfa-ketoglutarat dehidrogenaz basamaklarını karşılaştırmak.",
    criticalDistinction: "NAD+ ve NADP+ kullanan izositrat dehidrogenaz formları",
    questionDensityNeed: "high",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [21, 23]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Süksinil-KoA sonrası basamaklar",
    learningObjective: "Süksinat, fumarat, malat ve oksaloasetat basamaklarını ürünleriyle eşleştirmek.",
    criticalDistinction: "ATP eşdeğeri, FADH2 ve NADH üreten basamaklar",
    questionDensityNeed: "high",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [24, 27]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Çevrimde enerji korunumu",
    learningObjective: "Sitrik asit çevriminin toplam enerji çıktısını yorumlamak.",
    criticalDistinction: "Doğrudan ATP eşdeğeri ve oksidatif fosforillenme katkısı",
    questionDensityNeed: "high",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [28, 32]
  },
  {
    topic: "Pirüvat oksidasyonu ve sitrik asit çevrimi",
    subtopic: "Amfibolik rol ve biyosentetik ara ürünler",
    learningObjective: "Çevrimin neden amfibolik olduğunu açıklamak.",
    criticalDistinction: "Yalnız enerji yolağı ve biyosentetik merkez ayrımı",
    questionDensityNeed: "medium",
    sourcePdf: "Sitrik Asit Çevrimi.pdf",
    sourcePages: [33, 34]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Oksidatif fosforillenmenin genel rolü",
    learningObjective: "Oksidatif fosforillenmenin hücresel solunumdaki yerini açıklamak.",
    criticalDistinction: "Glikoliz ve oksidatif fosforillenme konumu",
    questionDensityNeed: "medium",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [1, 3]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "NADH, NADPH ve flavoproteinler",
    learningObjective: "NADH, NADPH ve flavoproteinlerin elektron taşıma bağlamındaki rollerini karşılaştırmak.",
    criticalDistinction: "Katabolik ve anabolik elektron taşıyıcı havuzları",
    questionDensityNeed: "high",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [4, 7]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Solunum zinciri taşıyıcıları",
    learningObjective: "Ubikinon, sitokrom ve Fe-S proteinlerini taşıyıcı sınıfları içinde konumlandırmak.",
    criticalDistinction: "Çözünür kofaktörler ve zar bağlı taşıyıcılar",
    questionDensityNeed: "high",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [8, 10]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Fotosentezin redoks mantığı",
    learningObjective: "Fotosentezin suyun yükseltgenmesi ve CO2'nin indirgenmesi üzerinden kurulmasını açıklamak.",
    criticalDistinction: "Katabolik elektron akışı ve fotosentetik elektron akışı",
    questionDensityNeed: "medium",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [11, 14]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Klorofil pigmentleri",
    learningObjective: "Başlıca klorofil tiplerini ve temel özelliklerini tanımak.",
    criticalDistinction: "Klorofil a/b ve bakteriyoklorofiller",
    questionDensityNeed: "high",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [15, 18]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Karotenoidler ve bilin pigmentler",
    learningObjective: "Fotosentetik yardımcı pigmentlerin işlevlerini karşılaştırmak.",
    criticalDistinction: "Işık aktarımı ve fotooksidasyondan koruma",
    questionDensityNeed: "high",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [19, 21]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Kloroplast yapısı ve bölmeleri",
    learningObjective: "Stroma, granum ve tilakoit ilişkisini açıklamak.",
    criticalDistinction: "Işık ve karanlık tepkimelerin bölmesel ayrımı",
    questionDensityNeed: "high",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [22, 23]
  },
  {
    topic: "Oksidatif fosforillenme ve fotosenteze giriş",
    subtopic: "Işık tepkimeleri ve ATP/NADPH oluşumu",
    learningObjective: "Işık enerjisinin ATP ve NADPH üretimine nasıl bağlandığını açıklamak.",
    criticalDistinction: "Fotofosforilasyon ve stromal karbonhidrat sentezi",
    questionDensityNeed: "high",
    sourcePdf: "Oksidatif Fosforillenme.pdf",
    sourcePages: [24, 27]
  }
];

export const DEDUP_RULES = [
  {
    overlap: "Lipitler PDF'si ile hücre zarı PDF'si",
    decision:
      "Lipitler tarafında yapısal kimya ve sınıflandırma, zar PDF'sinde ise davranış, taşınma ve kanal/taşıyıcı mantığı sorulacak; aynı fosfolipit bilgisi iki kez hedeflenmeyecek."
  },
  {
    overlap: "Karbohidrat yapısı ile karbohidrat metabolizması PDF'leri",
    decision:
      "Yapısal PDF monosakkarit, polisakkarit ve glikobiyoloji ile sınırlanacak; metabolizma PDF'si yolak, enerji bilançosu ve düzenleme üzerinden ilerleyecek."
  },
  {
    overlap: "Glikoliz, PDH, sitrik asit çevrimi ve oksidatif fosforillenme",
    decision:
      "Aynı enerji muhasebesi zincir boyunca tekrarlanmayacak; her PDF kendi basamak mantığı, kofaktörleri ve ürünleri üzerinden soru verecek."
  },
  {
    overlap: "Nükleotidlerin enerji rolü ile metabolizma PDF'leri",
    decision:
      "ATP/NAD(P)H soruları nükleotid kimyası PDF'sinde yapısal ve işlevsel tanıma düzeyinde; metabolizma PDF'lerinde ise yolak içi işlev düzeyinde kalacak."
  },
  {
    overlap: "Oksidatif fosforillenme PDF'si içindeki fotosentez kısmı",
    decision:
      "Mitokondriyel taşıyıcı soruları ile pigment/kloroplast soruları ayrı alt konularda tutulacak; aynı elektron taşıma kavramı iki farklı biyolojik bağlamda kopyalanmayacak."
  }
];
