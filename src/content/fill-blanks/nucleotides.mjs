import { makeFillBlank } from "./helpers.mjs";

const sourcePdf = "Nükleotidler Ve Nükleik Asitler.pdf";
const sourceTopic = "Nükleotidler ve nükleik asitler";

const fb = (config) =>
  makeFillBlank({
    sourcePdf,
    sourceTopic,
    ...config
  });

export const nucleotideFillBlanks = [
  fb({
    id: "FB-NUC-001",
    sourceSubtopic: "Nükleotidlerin temel işlevleri",
    sourcePages: [4, 5],
    difficulty: "Kolay",
    promptText:
      "Hücresel enerji aktarımında merkezde yer alan temel nükleotid _____dir.",
    blankAnswer: "ATP",
    acceptedAnswers: ["Adenozin trifosfat", "adenosine triphosphate"],
    explanation:
      "Nükleotidlerin temel işlevleri anlatılırken enerji aktarımının en tipik örneği olarak ATP verilir.",
    learningObjective:
      "Nükleotidlerin enerji aktarımındaki temel örneğini tanımak.",
    tags: ["ATP", "Enerji", "Nükleotid işlevi"]
  }),
  fb({
    id: "FB-NUC-002",
    sourceSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    sourcePages: [6],
    difficulty: "Kolay",
    promptText:
      "Adenin ve guanin yapısal olarak _____ baz sınıfına girer.",
    blankAnswer: "Pürin",
    acceptedAnswers: ["Purin", "pürin bazları", "purine"],
    explanation:
      "Azotlu bazlar iki ana sınıfa ayrılır; adenin ve guanin pürin türevleridir.",
    learningObjective:
      "Pürin ve pirimidin sınıflamasını baz örnekleri üzerinden kurmak.",
    tags: ["Pürin", "Adenin", "Guanin"]
  }),
  fb({
    id: "FB-NUC-003",
    sourceSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    sourcePages: [12],
    difficulty: "Orta",
    promptText:
      "DNA'nın tekrarlayan birimlerinde bulunan pentoz şekeri 2'-_____ -D-ribozdur.",
    blankAnswer: "Deoksi",
    acceptedAnswers: ["deoksi", "deoksi-D-riboz", "2-deoksi", "2'-deoksi"],
    explanation:
      "DNA'daki pentoz 2'-deoksi-D-ribozdur; RNA'daki karşılığı ise D-ribozdur.",
    learningObjective:
      "DNA ve RNA'daki pentozları birbirinden ayırt etmek.",
    tags: ["Pentoz", "Deoksiriboz", "DNA"]
  }),
  fb({
    id: "FB-NUC-004",
    sourceSubtopic: "Fosfodiester bağları ve yönlülük",
    sourcePages: [19],
    difficulty: "Kolay",
    promptText:
      "Ardışık nükleotidleri omurgada birbirine bağlayan bağlantı _____ bağıdır.",
    blankAnswer: "Fosfodiester",
    acceptedAnswers: ["Fosfodiester bağı", "phosphodiester", "phosphodiester bond"],
    explanation:
      "Nükleik asit omurgası, komşu nükleotidleri birbirine bağlayan fosfodiester bağlarıyla kurulur.",
    learningObjective:
      "Nükleik asit omurgasını oluşturan bağ tipini tanımak.",
    tags: ["Fosfodiester bağ", "Omurga", "Yönlülük"]
  }),
  fb({
    id: "FB-NUC-005",
    sourceSubtopic: "Fosfodiester bağları ve yönlülük",
    sourcePages: [19, 20],
    difficulty: "Zor",
    promptText:
      "Nükleik asit zincirlerinin biyokimyasal yönlülüğü standart olarak _____ yönünde ifade edilir.",
    blankAnswer: "5'ten 3'e",
    acceptedAnswers: ["5 ten 3 e", "5' 3'", "5'-3'", "5 ten 3", "5 3"],
    explanation:
      "5' ve 3' uçlar fosfodiester bağını değil zincirin uçlarını ifade eder; zincir yönlülüğü 5'ten 3'e yazılır.",
    learningObjective:
      "Nükleik asit yönlülüğünü uç adlandırmasıyla ilişkilendirmek.",
    tags: ["Yönlülük", "5'-3'", "Fosfodiester bağ"]
  }),
  fb({
    id: "FB-NUC-006",
    sourceSubtopic: "Baz istiflenmesi ve UV soğurma",
    sourcePages: [26, 31],
    difficulty: "Orta",
    promptText:
      "DNA çift sarmalında aromatik bazların eksene dik biçimde üst üste dizilmesi _____ olarak adlandırılır.",
    blankAnswer: "Baz istiflenmesi",
    acceptedAnswers: ["baz istiflenme", "base stacking"],
    explanation:
      "Baz istiflenmesi, düzlemsel baz halkalarının çift sarmalın içinde istiflenerek yapısal kararlılığa katkı vermesidir.",
    learningObjective:
      "Baz özelliklerinin DNA'nın üç boyutlu yapısına katkısını açıklamak.",
    tags: ["Baz istiflenmesi", "DNA yapısı", "UV soğurma"]
  }),
  fb({
    id: "FB-NUC-007",
    sourceSubtopic: "Chargaff kuralları ve DNA kanıtları",
    sourcePages: [28, 29],
    difficulty: "Orta",
    promptText:
      "Çift sarmallı DNA'da adenin miktarının timine, guaninin sitozine eşit olduğunu ifade eden nicel ilişki _____ kuralı olarak bilinir.",
    blankAnswer: "Chargaff",
    acceptedAnswers: ["Chargaff kuralı", "chargaff kurali"],
    explanation:
      "A=T ve G=C oranları, Chargaff'ın DNA baz bileşimi üzerine ortaya koyduğu temel ilişkidir.",
    learningObjective:
      "Chargaff kurallarını çift sarmal DNA ile ilişkilendirmek.",
    tags: ["Chargaff", "DNA kanıtı", "Baz oranı"]
  }),
  fb({
    id: "FB-NUC-008",
    sourceSubtopic: "Chargaff kuralları ve DNA kanıtları",
    sourcePages: [29, 30],
    difficulty: "Orta",
    promptText:
      "A=T ve G=C oranlarından çıkarılan ana sonuç, DNA zincirlerinin _____ baz eşleşmesiyle bir arada tutulduğudur.",
    blankAnswer: "Tamamlayıcı",
    acceptedAnswers: ["tamamlayici", "tamamlayıcı baz eşleşmesi", "complementary"],
    explanation:
      "Baz oranlarının eşitliği, iki zincirin tamamlayıcı baz eşleşmesi mantığıyla düzenlendiğini destekler.",
    learningObjective:
      "Chargaff oranlarının tamamlayıcı baz eşleşmesi sonucunu nasıl desteklediğini açıklamak.",
    tags: ["Chargaff", "Tamamlayıcı baz eşleşmesi", "DNA"]
  }),
  fb({
    id: "FB-NUC-009",
    sourceSubtopic: "Watson-Crick modeli",
    sourcePages: [31, 32],
    difficulty: "Kolay",
    promptText:
      "Watson-Crick modeline göre DNA'nın iki zinciri birbirine göre _____ düzenlenmiştir.",
    blankAnswer: "Antiparalel",
    acceptedAnswers: ["antiparalel dizilim", "antiparallel"],
    explanation:
      "DNA çift sarmalında zincirler zıt yönlülükte ilerler; bu ilişki antiparalellik olarak adlandırılır.",
    learningObjective:
      "Watson-Crick modelinde DNA zincirlerinin birbirine göre konumunu tanımlamak.",
    tags: ["Watson-Crick", "Antiparalel", "DNA yapısı"]
  }),
  fb({
    id: "FB-NUC-010",
    sourceSubtopic: "Watson-Crick modeli",
    sourcePages: [31, 32],
    difficulty: "Orta",
    promptText:
      "Watson-Crick modelinde hidrofobik baz halkaları çift sarmalın _____ kısmında istiflenir.",
    blankAnswer: "İç",
    acceptedAnswers: ["iç kısmında", "ic kisimda", "içinde"],
    explanation:
      "Pürin ve pirimidin halkaları hidrofobik yapıları nedeniyle çift sarmalın içinde istiflenir; şeker-fosfat omurgası dıştadır.",
    learningObjective:
      "Watson-Crick modelinde bazların uzaysal yerleşimini açıklamak.",
    tags: ["Watson-Crick", "Baz istiflenmesi", "DNA yapısı"]
  }),
  fb({
    id: "FB-NUC-011",
    sourceSubtopic: "mRNA ve diğer RNA tipleri",
    sourcePages: [36, 38],
    difficulty: "Kolay",
    promptText:
      "Polipeptit dizisini doğrudan şifreleyen RNA türü _____dır.",
    blankAnswer: "mRNA",
    acceptedAnswers: ["mesajcı RNA", "mesajci RNA", "messenger RNA"],
    explanation:
      "Mesajcı RNA, genetik bilginin protein dizisine çevrilmesinde doğrudan şablon görevi görür.",
    learningObjective:
      "mRNA'nın diğer RNA türleri içindeki işlevini tanımlamak.",
    tags: ["mRNA", "RNA", "Protein sentezi"]
  }),
  fb({
    id: "FB-NUC-012",
    sourceSubtopic: "mRNA ve diğer RNA tipleri",
    sourcePages: [38],
    difficulty: "Orta",
    promptText:
      "Ökaryotlarda çoğu mesajcı RNA, tek bir polipeptidi kodladığı için _____ olarak tanımlanır.",
    blankAnswer: "Monosistronik",
    acceptedAnswers: ["monocistronic", "mono-sistronik"],
    explanation:
      "Ökaryotik mRNA çoğunlukla bir tek polipeptit zinciri için bilgi taşıdığı için monosistronik kabul edilir.",
    learningObjective:
      "Ökaryotik mRNA'nın organizasyon mantığını tanımlamak.",
    tags: ["mRNA", "Monosistronik", "Ökaryot"]
  }),
  fb({
    id: "FB-NUC-013",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [42, 43],
    difficulty: "Kolay",
    promptText:
      "Çift sarmal DNA'nın ısı veya pH etkisiyle zincirlerine ayrılmasına _____ denir.",
    blankAnswer: "Denatürasyon",
    acceptedAnswers: ["denaturasyon"],
    explanation:
      "Denatürasyon, baz eşleşmeleri ve istiflenmenin bozulmasıyla çift sarmalın açılmasıdır.",
    learningObjective:
      "Nükleik asit denatürasyonunu çift sarmalın çözülmesiyle ilişkilendirmek.",
    tags: ["Denatürasyon", "DNA", "Çift sarmal"]
  }),
  fb({
    id: "FB-NUC-014",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [43],
    difficulty: "Kolay",
    promptText:
      "Ayrılmış iki tamamlayıcı zincirin yeniden çift sarmal oluşturmasına _____ denir.",
    blankAnswer: "Renatürasyon",
    acceptedAnswers: ["renaturasyon", "tavlama", "annealing"],
    explanation:
      "Renatürasyon, tamamlayıcı zincirlerin uygun koşullar geri geldiğinde yeniden eşleşmesidir.",
    learningObjective:
      "Tamamlayıcı zincirlerin yeniden eşleşmesini renatürasyon kavramıyla açıklamak.",
    tags: ["Renatürasyon", "DNA", "Tamamlayıcı zincir"]
  }),
  fb({
    id: "FB-NUC-015",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [46],
    difficulty: "Orta",
    promptText:
      "Bir DNA örneğinin yarısının denatüre olduğu sıcaklık _____ ile gösterilir.",
    blankAnswer: "Tm",
    acceptedAnswers: ["tm", "T_m", "erime noktası", "erime sicakligi"],
    explanation:
      "Tm, DNA parçasının yarısının çözülmüş durumda olduğu sıcaklığı ifade eder.",
    learningObjective:
      "DNA erime sıcaklığını Tm kavramıyla tanımlamak.",
    tags: ["Tm", "Denatürasyon", "Erime sıcaklığı"]
  }),
  fb({
    id: "FB-NUC-016",
    sourceSubtopic: "Hibritleşme",
    sourcePages: [48, 49],
    difficulty: "Orta",
    promptText:
      "Nükleik asitlerde dizi benzerliğini tamamlayıcı baz eşleşmesi üzerinden sınayan süreç _____ olarak adlandırılır.",
    blankAnswer: "Hibritleşme",
    acceptedAnswers: ["hibritlesme", "hybridization", "hibridizasyon"],
    explanation:
      "Hibritleşme, tamamlayıcı nükleik asit dizilerinin birbirini tanıyıp eşleşmesine dayanır.",
    learningObjective:
      "Hibritleşmeyi tamamlayıcı baz eşleşmesi ve dizi benzerliğiyle ilişkilendirmek.",
    tags: ["Hibritleşme", "Dizi benzerliği", "Tamamlayıcı baz eşleşmesi"]
  }),
  fb({
    id: "FB-NUC-017",
    sourceSubtopic: "Deaminasyon ve AP lezyonları",
    sourcePages: [51, 52],
    difficulty: "Orta",
    promptText:
      "Sitozinin spontan deaminasyonu sonucu oluşan baz _____dir.",
    blankAnswer: "Urasil",
    acceptedAnswers: ["Uracil", "urasil", "uracil"],
    explanation:
      "Deaminasyon sonucunda sitozin amino grubunu kaybeder ve urasile dönüşür.",
    learningObjective:
      "Spontan deaminasyonun baz düzeyindeki sonucunu tanımak.",
    tags: ["Deaminasyon", "Urasil", "Sitozin"]
  }),
  fb({
    id: "FB-NUC-018",
    sourceSubtopic: "Deaminasyon ve AP lezyonları",
    sourcePages: [52, 53],
    difficulty: "Orta",
    promptText:
      "Azotlu bazın hidrolitik olarak kaybedilmesiyle oluşan abazik DNA bölgesi kısaca _____ lezyonu olarak anılır.",
    blankAnswer: "AP",
    acceptedAnswers: ["ap", "abazik", "abazik bölge"],
    explanation:
      "AP lezyonu, apürinik/apirimidin yani bazını kaybetmiş abazik DNA bölgesini ifade eder.",
    learningObjective:
      "Baz kaybı sonrası oluşan abazik bölgeyi AP lezyonu kavramıyla ilişkilendirmek.",
    tags: ["AP lezyonu", "Abazik bölge", "DNA hasarı"]
  }),
  fb({
    id: "FB-NUC-019",
    sourceSubtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    sourcePages: [54],
    difficulty: "Orta",
    promptText:
      "UV ışınlarının DNA'da oluşturduğu tipik lezyon _____ dimeridir.",
    blankAnswer: "Pirimidin",
    acceptedAnswers: ["pirimidin dimeri", "pyrimidine dimer"],
    explanation:
      "UV ışınları bakteri ve insan DNA'sında tipik olarak pirimidin dimerleri oluşturur.",
    learningObjective:
      "UV hasarının DNA'daki tipik lezyonunu tanımak.",
    tags: ["UV", "Pirimidin dimeri", "DNA hasarı"]
  }),
  fb({
    id: "FB-NUC-020",
    sourceSubtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    sourcePages: [58],
    difficulty: "Orta",
    promptText:
      "DNA'daki mutajenik değişimlerin en önemli iç kaynaklarından biri _____ hasardır.",
    blankAnswer: "Oksidatif",
    acceptedAnswers: ["oksidatif hasar"],
    explanation:
      "DNA'daki mutajenik değişimlerin en önemli kaynaklarından biri oksidatif hasardır.",
    learningObjective:
      "Nükleik asit hasarında oksidatif süreçlerin önemini tanımak.",
    tags: ["Oksidatif hasar", "DNA hasarı", "Mutasyon"]
  }),
  fb({
    id: "FB-NUC-021",
    sourceSubtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    sourcePages: [58, 59],
    difficulty: "Zor",
    promptText:
      "Hidroksil radikali, süperoksit ve H2O2 gibi uyarılmış oksijen kaynaklı bileşikler topluca _____ olarak anılır.",
    blankAnswer: "ROS",
    acceptedAnswers: ["reaktif oksijen türleri", "reaktif oksijen turleri", "reactive oxygen species"],
    explanation:
      "Bu reaktif oksijen türleri DNA dahil çok sayıda biyomolekülde oksidatif hasar oluşturabilir.",
    learningObjective:
      "Oksidatif DNA hasarıyla ilişkili reaktif oksijen türlerini ortak başlık altında tanımak.",
    tags: ["ROS", "Oksidatif hasar", "Reaktif oksijen türleri"]
  }),
  fb({
    id: "FB-NUC-022",
    sourceSubtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    sourcePages: [61],
    difficulty: "Orta",
    promptText:
      "Protein sentezi gibi enerji gerektiren süreçlerde ATP'ye ek olarak sık kullanılan guanin nükleotidi _____dir.",
    blankAnswer: "GTP",
    acceptedAnswers: ["guanozin trifosfat", "guanosine triphosphate"],
    explanation:
      "GTP, ATP dışında enerji aktarımında görev yapan önemli bir nükleotiddir.",
    learningObjective:
      "Enerji aktarımında ATP dışındaki temel nükleotid örneğini tanımak.",
    tags: ["GTP", "Enerji", "Nükleotid"]
  }),
  fb({
    id: "FB-NUC-023",
    sourceSubtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    sourcePages: [61, 62],
    difficulty: "Orta",
    promptText:
      "Elektron taşınmasına katılan nükleotid türevli kofaktörlerden nikotinamid adenin dinükleotid kısaca _____ olarak yazılır.",
    blankAnswer: "NAD",
    acceptedAnswers: ["nikotinamid adenin dinükleotid", "nicotinamide adenine dinucleotide"],
    explanation:
      "NAD, adenin nükleotidlerini içeren kofaktörler arasında en temel örneklerden biridir.",
    learningObjective:
      "Nükleotid türevli kofaktörlere temel örnek vermek.",
    tags: ["NAD", "Kofaktör", "Elektron taşınması"]
  })
];
