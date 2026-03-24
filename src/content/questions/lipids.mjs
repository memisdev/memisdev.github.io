import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Lipitler.pdf";

export const lipidQuestions = [
  makeQuestion({
    id: "LIP-001",
    sourcePdf,
    sourceTopic: "Lipitlerin genel özelliği",
    sourcePages: [2],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Slayta göre biyolojik lipitleri bir arada toplayan ortak ve belirleyici özellik aşağıdakilerden hangisidir?",
    options: {
      A: "Tamamının karbonhidrat olması",
      B: "Suda çözünmemeleri",
      C: "Tamamının fosfat içermesi",
      D: "Yalnızca enerji depolamaları",
      E: "Sadece bitkilerde bulunmaları"
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, biyolojik lipitlerin geniş bir grup olduğunu ve ortak belirleyici özelliklerinin suda çözünmemeleri olduğunu belirtir.",
    distractorExplanations: {
      A: "Lipitler karbonhidrat değildir.",
      B: "Doğru seçenek.",
      C: "Tüm lipitler fosfat içermez.",
      D: "İşlevleri enerji depolamanın ötesine geçer.",
      E: "Bitki ve hayvanlarda bulunurlar."
    },
    learningObjective: "Lipitlerin tanımlayıcı fizikokimyasal özelliğini hatırlamak.",
    tags: ["lipit", "çözünürlük", "genel özellik"]
  }),
  makeQuestion({
    id: "LIP-002",
    sourcePdf,
    sourceTopic: "Yağ asidi gösterimi",
    sourcePages: [6, 7],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Slayttaki X:Y gösteriminde yağ asitleri için Y neyi ifade eder?",
    options: {
      A: "Toplam oksijen sayısını",
      B: "Çift bağ sayısını",
      C: "Karbonil karbon numarasını",
      D: "Esterleşme derecesini",
      E: "Fosfat sayısını"
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda dallanmamış yağ asitleri için X:Y gösteriminde X'in zincir uzunluğunu, Y'nin ise çift bağ sayısını verdiği açıklanır.",
    distractorExplanations: {
      A: "Gösterim bunu ifade etmez.",
      B: "Doğru seçenek.",
      C: "Çift bağın yeri ayrıca Δ ile belirtilir.",
      D: "Esterleşme bilgisi içermez.",
      E: "Fosfat sayısıyla ilgisi yoktur."
    },
    learningObjective: "Yağ asidi kısaltma gösterimini doğru okumak.",
    tags: ["yağ asidi", "X:Y", "çift bağ"]
  }),
  makeQuestion({
    id: "LIP-003",
    sourcePdf,
    sourceTopic: "Omega-3 yağ asitleri",
    sourcePages: [9, 11],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "PDF'ye göre insanlar için elzem olarak vurgulanan omega-3 yağ asidi aşağıdakilerden hangisidir?",
    options: {
      A: "Arachidonik asit",
      B: "Palmitik asit",
      C: "α-linolenik asit (ALA)",
      D: "Stearik asit",
      E: "Oleik asit"
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda omega-3 PUFA'lardan α-linolenik asidin (ALA) insanlar için elzem olduğu ve diyetten alınması gerektiği belirtilir.",
    distractorExplanations: {
      A: "Bu seçenek slaytta elzem omega-3 olarak verilmez.",
      B: "Doymuş yağ asididir.",
      C: "Doğru seçenek.",
      D: "Doymuş yağ asididir.",
      E: "Tekli doymamış yağ asididir."
    },
    learningObjective: "Elzem omega-3 yağ asidini tanımak.",
    tags: ["omega-3", "ALA", "elzem yağ asidi"]
  }),
  makeQuestion({
    id: "LIP-004",
    sourcePdf,
    sourceTopic: "Doymuşluk ve fiziksel özellik",
    sourcePages: [12, 14, 15],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Aynı zincir uzunluğundaki yağ asitleri karşılaştırıldığında doymamışlığın artması için hangisi beklenir?",
    options: {
      A: "Moleküller daha iyi istiflenir ve erime noktası yükselir.",
      B: "Van der Waals etkileşimleri artar ve yapı daha katı olur.",
      C: "İstiflenme zorlaşır ve erime noktası düşer.",
      D: "Suda çözünürlük tamamen kaybolur.",
      E: "Karbon sayısı otomatik olarak artar."
    },
    correctAnswer: "C",
    correctExplanation:
      "Slaytta cis çift bağların düz zincirli sıkı paketlenmeyi bozduğu, bu yüzden aynı uzunlukta daha doymamış yağ asitlerinin daha düşük erime eğilimi gösterdiği anlatılır.",
    distractorExplanations: {
      A: "Bu daha çok doymuş zincirlere uyar.",
      B: "Doymamışlık sıkı istiflenmeyi azaltır.",
      C: "Doğru seçenek.",
      D: "Suda çözünürlük yalnızca buna indirgenmez.",
      E: "Doymamışlık karbon sayısını belirlemez."
    },
    learningObjective: "Doymuşluk derecesinin yağ asitlerinin fiziksel özelliklerine etkisini yorumlamak.",
    tags: ["doymamışlık", "erime noktası", "yağ asidi", "istiflenme"]
  }),
  makeQuestion({
    id: "LIP-005",
    sourcePdf,
    sourceTopic: "Triaçilgliseroller",
    sourcePages: [18, 19],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Triaçilgliseroller için aşağıdaki tanımlardan hangisi doğrudur?",
    options: {
      A: "Bir gliserole üç amino asidin bağlanmasıyla oluşurlar.",
      B: "Gliserolün üç yağ asidiyle esterleşmesi sonucu oluşurlar.",
      C: "Her zaman fosfat taşırlar.",
      D: "Yalnızca zarın iki yaprakçığı arasında bulunurlar.",
      E: "Suda çözünür polar moleküllerdir."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, triaçilgliserolleri gliserolün üç yağ asidiyle esterleşmesi sonucu oluşan basit depo lipitleri olarak tanımlar.",
    distractorExplanations: {
      A: "Amino asit değil yağ asidi gerekir.",
      B: "Doğru seçenek.",
      C: "Fosfat taşıma zorunluluğu yoktur.",
      D: "Bunlar temel depo lipitleridir, zar bileşeni olarak tanımlanmaz.",
      E: "Esterleşme sonucu hidrofobik özellik kazanırlar."
    },
    learningObjective: "Triaçilgliserolün yapısal tanımını bilmek.",
    tags: ["triaçilgliserol", "gliserol", "ester bağı", "depo lipiti"]
  }),
  makeQuestion({
    id: "LIP-006",
    sourcePdf,
    sourceTopic: "Depo lipitlerinin avantajı",
    sourcePages: [20, 23],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Triaçilgliserollerin depo yakıt olarak polisakkaritlere göre avantajlarından biri slaytta nasıl açıklanır?",
    options: {
      A: "Çok daha oksitlenmiş oldukları için daha az enerji verirler.",
      B: "Yoğun hidratlanmadıkları için aynı kütlede daha yoğun enerji depolarlar.",
      C: "Suda tamamen çözünebildikleri için daha az yer kaplarlar.",
      D: "Sadece çekirdek içinde depolanabildikleri için güvenlidirler.",
      E: "Hiç enzimatik yıkıma uğramazlar."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunum, triaçilgliserollerin yüksek derecede indirgenmiş olmaları ve polisakkaritler gibi yoğun hidratlanmamaları nedeniyle daha yoğun enerji depoladığını vurgular.",
    distractorExplanations: {
      A: "Depo lipitleri daha indirgenmiş durumdadır.",
      B: "Doğru seçenek.",
      C: "Suda çözünürlük bu avantajın nedeni değildir.",
      D: "Böyle bir açıklama yer almaz.",
      E: "Lipazlarla hidrolize uğrayabilirler."
    },
    learningObjective: "Triaçilgliserollerin enerji depolamadaki biyokimyasal avantajını açıklamak.",
    tags: ["triaçilgliserol", "enerji depolama", "hidratasyon", "indirgenmişlik"]
  }),
  makeQuestion({
    id: "LIP-007",
    sourcePdf,
    sourceTopic: "Trans yağlar",
    sourcePages: [25, 26],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Kısmi hidrojenleme sonucu oluşan trans yağ asitlerinin plazma lipitleri üzerindeki beklenen etkisi aşağıdakilerden hangisidir?",
    options: {
      A: "LDL ve triaçilgliserolleri artırıp HDL'yi düşürebilirler.",
      B: "Yalnız HDL'yi artırıp LDL'yi düşürürler.",
      C: "Sadece bitki hücre duvarında bulunurlar.",
      D: "Doğal olarak tek enerji kaynağıdırlar.",
      E: "Yalnızca suda çözünen vitaminlerden oluşurlar."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik kısmi hidrojenlemenin yan ürünü olan trans yağ asitlerinin kanda triaçilgliserol ve LDL düzeylerini artırıp HDL'yi düşürebildiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kaynak içerikte etkiler bunun ters yönünde verilir.",
      C: "Bu tanım uygun değildir.",
      D: "Kaynak içerikte böyle bir işlev verilmez.",
      E: "Trans yağlar vitamin değildir."
    },
    learningObjective: "Kısmi hidrojenlenmenin biyolojik sonuçlarını yorumlamak.",
    tags: ["trans yağ", "kısmi hidrojenleme", "LDL", "HDL"]
  }),
  makeQuestion({
    id: "LIP-008",
    sourcePdf,
    sourceTopic: "Mumlar",
    sourcePages: [27],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Biyolojik mumlar için aşağıdaki tanımlardan hangisi doğrudur?",
    options: {
      A: "Kısa zincirli yağ asitleri ile glukoz esterlerinden oluşurlar.",
      B: "Uzun zincirli yağ asitleri ile uzun zincirli alkollerin esterleridir.",
      C: "Yalnızca nükleotidlerden yapılırlar.",
      D: "Her zaman fosfatidik asit türevidirler.",
      E: "Sadece ribozom zarında görev alırlar."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, biyolojik mumları uzun zincirli yağ asitleri ile uzun zincirli alkollerin esterleri olarak verir ve su itici işlevlerini vurgular.",
    distractorExplanations: {
      A: "Sunumdaki yapı buna uymaz.",
      B: "Doğru seçenek.",
      C: "Mumlar nükleotid yapısında değildir.",
      D: "Fosfatidik asit türevi olarak verilmezler.",
      E: "Böyle özel bir yerleşim anlatılmaz."
    },
    learningObjective: "Biyolojik mumların yapısını ve işlevini tanımak.",
    tags: ["mum", "ester", "su itici", "depo lipiti"]
  }),
  makeQuestion({
    id: "LIP-009",
    sourcePdf,
    sourceTopic: "Gliserofosfolipitler",
    sourcePages: [29, 32, 36],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "Gliserofosfolipitlerle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Temel yapıları fosfatidik asit türevi olarak tanımlanır.",
      B: "Gliserol içermezler; sfingozin omurgasına dayanırlar.",
      C: "Tümünde şeker baş grubu bulunur, fosfat bulunmaz.",
      D: "Yalnızca depo lipiti olarak görev yaparlar.",
      E: "Her zaman nötr yüklüdürler."
    },
    correctAnswer: "A",
    correctExplanation:
      "Sunumda gliserofosfolipitlerin fosfatidik asit türevleri olduğu, gliserol iskeleti taşıdığı ve baş grubun fosfodiester bağı ile bağlandığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu tanım sfingolipitler için daha uygundur.",
      C: "Fosfat gliserofosfolipitlerin belirgin unsurudur.",
      D: "Asıl olarak yapısal zar lipitleri olarak anlatılır.",
      E: "Baş grubun niteliğine göre yük değişebilir."
    },
    learningObjective: "Gliserofosfolipitleri diğer zar lipitlerinden ayırt etmek.",
    tags: ["gliserofosfolipit", "fosfatidik asit", "zar lipiti"]
  }),
  makeQuestion({
    id: "LIP-010",
    sourcePdf,
    sourceTopic: "Sfingolipitler ve steroller",
    sourcePages: [42, 44, 48, 49, 70],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Aşağıdaki ifadelerden hangisi lipit sınıfları arasındaki ayrımı doğru verir?",
    options: {
      A: "Sfingolipitler gliserol temelli olup seramit içermez.",
      B: "Steroller kaynaşmış dört karbon halkalı steroid çekirdeği taşır ve birçok biyolojik aktif bileşiğin öncüsüdür.",
      C: "Sfingolipitler ile steroller tamamen aynı yapıya sahiptir.",
      D: "Steroller yalnızca enerji depolamak için bulunur.",
      E: "Übikinon bir polisakkarittir."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, sterollerin kaynaşmış dört karbon halkasından oluşan steroid çekirdek taşıdığını ve steroid hormonlar ile safra asitleri gibi birçok bileşiğin öncülü olduğunu belirtir.",
    distractorExplanations: {
      A: "Sfingolipitler gliserol değil, sfingozin ve seramit temeliyle anlatılır.",
      B: "Doğru seçenek.",
      C: "İki sınıf yapısal olarak farklıdır.",
      D: "Steroller yapısal ve öncül işlevleriyle anlatılır.",
      E: "Übikinon lipit kinondur."
    },
    learningObjective: "Sfingolipit ve sterol sınıflarını ayırt etmek.",
    tags: ["sfingolipit", "sterol", "steroid çekirdek", "seramit"]
  }),
  makeQuestion({
    id: "LIP-011",
    sourcePdf,
    sourceTopic: "Yağ asidi yapısı",
    sourcePages: [4],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Kaynak içerikte yağ asitleri için verilen tipik zincir uzunluğu aralığı aşağıdakilerden hangisidir?",
    options: {
      A: "C1-C3",
      B: "C4-C36",
      C: "C40-C60",
      D: "Sadece C16 ve C18",
      E: "Yalnız tek karbonlu zincirler"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerikte yağ asitleri uzunluğu 4 ile 36 karbon arasında değişebilen hidrokarbon zincirli karboksilik asitler olarak tanımlanır.",
    distractorExplanations: {
      A: "Bu aralık çok kısadır.",
      B: "Doğru seçenek.",
      C: "Kaynak içerikte böyle bir tipik aralık verilmez.",
      D: "C16 ve C18 yaygın örnekler olabilir, ancak verilen aralık bundan daha geniştir.",
      E: "Yağ asitleri bu şekilde tanımlanmaz."
    },
    learningObjective: "Yağ asitlerinin temel yapısal aralığını hatırlamak.",
    tags: ["yağ asidi", "zincir uzunluğu", "lipit"]
  }),
  makeQuestion({
    id: "LIP-012",
    sourcePdf,
    sourceTopic: "Omega-3 yağ asitleri",
    sourcePages: [9],
    difficulty: "Orta",
    questionType: "kavramsal ayrım",
    question:
      "Bir yağ asidinin omega-3 olarak adlandırılması aşağıdakilerden hangisine dayanır?",
    options: {
      A: "İlk çift bağın metil ucuna en yakın konumunun C-3 ile C-4 arasında olmasına",
      B: "Karboksil ucunda üç fosfat taşımasına",
      C: "Toplam üç karbon atomu içermesine",
      D: "Yalnız doymuş olmasına",
      E: "Mutlaka üç adet çift bağ taşımasına"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, omega sınıflamasını zincirin metil ucuna en yakın ilk çift bağın konumuna göre açıklar; C-3 ile C-4 arasındaki ilk çift bağ omega-3 olarak adlandırılır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Fosfat sayısıyla ilgili değildir.",
      C: "Toplam karbon sayısı bu sınıflamayı vermez.",
      D: "Omega-3 doymuş değil, doymamış yağ asidi ailesidir.",
      E: "Toplam çift bağ sayısı ile ilk çift bağ konumu aynı şey değildir."
    },
    learningObjective: "Omega sınıflamasını ilk çift bağ konumuyla ilişkilendirmek.",
    tags: ["omega-3", "PUFA", "metil ucu", "ilk çift bağ"]
  }),
  makeQuestion({
    id: "LIP-013",
    sourcePdf,
    sourceTopic: "Triaçilgliseroller",
    sourcePages: [18],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "Aşağıdakilerden hangisi basit triaçilgliserol örneğidir?",
    options: {
      A: "Gliserolün üç farklı yağ asidiyle esterleştiği yapı",
      B: "Gliserolün üç palmitik asitle esterleştiği tripalmitin",
      C: "Sfingozin ile bir yağ asidinin amid bağı yaptığı seramit",
      D: "Uzun zincirli alkol ile yağ asidinin esteri olan mum",
      E: "Kolesterolün serbest -OH grubu içeren formu"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerik, üç yağ asidi de aynı tür olduğunda yapının basit triaçilgliserol olarak adlandırıldığını ve tripalmitini örnek verdiğini belirtir.",
    distractorExplanations: {
      A: "Bu karışık triaçilgliserol olurdu.",
      B: "Doğru seçenek.",
      C: "Bu sfingolipit öncüsüdür.",
      D: "Bu mum tanımıdır.",
      E: "Bu sterol yapısıdır."
    },
    learningObjective: "Basit ve karışık triaçilgliserolleri ayırt etmek.",
    tags: ["triaçilgliserol", "tripalmitin", "basit TAG", "ester"]
  }),
  makeQuestion({
    id: "LIP-014",
    sourcePdf,
    sourceTopic: "Mumlar",
    sourcePages: [27],
    difficulty: "Orta",
    questionType: "kavramsal ayrım",
    question:
      "Biyolojik mumların triaçilgliserollerden daha yüksek erime sıcaklığı göstermesi en doğrudan hangi özellikleriyle ilişkilidir?",
    options: {
      A: "Uzun zincirli yağ asitleri ile uzun zincirli alkollerden oluşmaları",
      B: "Her zaman kısa zincirli şeker esterleri taşımaları",
      C: "Fosfatidik asit türevi zar lipidleri olmaları",
      D: "Yalnız sulu fazda çözünmeleri",
      E: "Çift sarmallı nükleik asit yapısına katılmaları"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik mumların uzun zincirli yağ asitleri ile uzun zincirli alkollerin esterleri olduğunu ve erime aralığının 60-100 °C ile triaçilgliserollerden daha yüksek olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kaynak içerikte kısa zincirli şeker esterlerinden söz edilmez.",
      C: "Bu gliserofosfolipitlere yaklaşan bir tanımdır.",
      D: "Kaynak içerik mumların su itici olduğunu vurgular.",
      E: "Mumların nükleik asit yapısıyla ilişkisi yoktur."
    },
    learningObjective: "Mumların uzun zincirli yapısını fiziksel özellikleriyle ilişkilendirmek.",
    tags: ["mum", "uzun zincirli alkol", "erime sıcaklığı", "ester"]
  }),
  makeQuestion({
    id: "LIP-015",
    sourcePdf,
    sourceTopic: "Gliserofosfolipitler",
    sourcePages: [37],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Eter lipitleri için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Gliserole bağlı zincirlerden biri ester yerine eter bağıyla bağlı olabilir.",
      B: "Yalnızca seramitten oluşurlar.",
      C: "Hiçbir zaman çift bağ içermezler.",
      D: "Yalnız bitki nişastasında bulunurlar.",
      E: "Fosfat taşıyamazlar."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik bazı gliserofosfolipitlerde gliserole bağlı açil zincirlerinden birinin ester yerine eter bağıyla bağlı olabildiğini; bu grubun eter lipitleri ve plazmojenler olarak anıldığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu sfingolipitlerle ilişkilidir.",
      C: "Kaynak içerik eter bağlı zincirde çift bağ bulunabileceğini belirtir.",
      D: "Nişastayla ilişkili değildir.",
      E: "Bu yapıların fosfolipit bağlamı vardır."
    },
    learningObjective: "Eter bağlı gliserofosfolipitleri standart ester bağlı yapılardan ayırt etmek.",
    tags: ["eter lipit", "plazmojen", "gliserofosfolipit", "eter bağı"]
  }),
  makeQuestion({
    id: "LIP-016",
    sourcePdf,
    sourceTopic: "Zarlardaki yapısal lipitler",
    sourcePages: [38, 39],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Aşağıdakilerden hangisi kloroplast galaktolipitleri ile arke zar lipitleri arasındaki farkı doğru verir?",
    options: {
      A: "Galaktolipitlerde baş grup olarak galaktoz bulunabilir; arke zar lipitlerinde dallanmış hidrokarbon zincirleri eter bağıyla gliserole bağlanır.",
      B: "Her ikisi de yalnız kolesterolden oluşur.",
      C: "Galaktolipitler gliserol içermez, arke lipitleri yalnız seramittir.",
      D: "Arke lipitleri yalnız fosfodiesterli, galaktolipitler ise yalnız amid bağlıdır.",
      E: "İki sınıf arasında yapısal fark yoktur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik galaktolipitlerde 1-2 galaktoz kalıntısının diaçilgliserole glikozit bağıyla bağlandığını; arke zar lipitlerinde ise dallanmış hidrokarbon zincirlerinin eter bağıyla gliserole bağlandığını açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kolesterol bu yapıların ortak bileşeni olarak verilmez.",
      C: "Galaktolipitler gliserol temelli olabilir.",
      D: "Bu mutlak ayrım kaynak içerikte verilmez.",
      E: "Belirgin yapısal farklar vardır."
    },
    learningObjective: "Galaktolipitler ile arkeal zar lipitlerini ayırt etmek.",
    tags: ["galaktolipit", "arke zar lipidi", "eter bağı", "galaktoz", "gliserol"]
  }),
  makeQuestion({
    id: "LIP-017",
    sourcePdf,
    sourceTopic: "Sfingolipitler ve steroller",
    sourcePages: [42, 45],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Hücre yüzeyindeki bazı sfingolipitlerin kan grubu belirteçleriyle ilişkilendirilmesinin temel nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Dış yüzeyde yoğunlaşıp biyolojik tanınma bölgeleri oluşturmaları",
      B: "Mitokondri matriksinde ATP sentezlemeleri",
      C: "Yalnız çekirdekte bulunmaları",
      D: "Glukoneogenezde by-pass enzimleri taşımaları",
      E: "Her zaman nötr trigliserit olmaları"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, birçok sfingolipidin hücre dış yüzeyinde yoğunlaştığını ve biyolojik tanınma bölgeleri oluşturduğunu; bazı karbonhidrat bölgelerinin insan kan gruplarını tanımladığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Sfingolipitlerin görevi bu değildir.",
      C: "Hücre yüzeyi vurgulanır.",
      D: "Metabolik by-pass ile ilgileri yoktur.",
      E: "Sfingolipitler trigliserit değildir."
    },
    learningObjective: "Sfingolipitleri hücre yüzeyi tanıma olaylarıyla ilişkilendirmek.",
    tags: ["sfingolipit", "kan grubu", "biyolojik tanınma", "hücre yüzeyi"]
  }),
  makeQuestion({
    id: "LIP-018",
    sourcePdf,
    sourceTopic: "Sfingolipitler ve steroller",
    sourcePages: [48],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Kolesterolün amfipatik olarak tanımlanmasının nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Steroid çekirdeğine ek olarak C-3'te polar bir -OH ve C-17'de apolar hidrokarbon kuyruk taşıması",
      B: "Yalnızca üç fosfat içermesi",
      C: "Tamamının yüklü şekerlerden oluşması",
      D: "Yalnız suda çözünmesi",
      E: "Gliserolün üç yağ asidiyle esterleşmiş olması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik kolesterolün steroid çekirdeğe ek olarak C-3'te polar bir hidroksil grubu ve C-17'ye bağlı apolar hidrokarbon parçası taşıdığını, bu nedenle amfipatik olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kolesterol için böyle bir yapı verilmez.",
      C: "Şeker temelli değildir.",
      D: "Tam tersine hidrofobik kısmı belirgindir.",
      E: "Bu triaçilgliserol tanımıdır."
    },
    learningObjective: "Kolesterolün amfipatik yapısını açıklamak.",
    tags: ["kolesterol", "amfipatik", "sterol", "hidroksil"]
  }),
  makeQuestion({
    id: "LIP-019",
    sourcePdf,
    sourceTopic: "Sinyal, kofaktör ve pigment olarak lipitler",
    sourcePages: [63],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Aşağıdakilerden hangisi kaynak içerikte hormon öncüsü olarak vurgulanan vitaminlerden biridir?",
    options: {
      A: "Vitamin D",
      B: "Vitamin B12",
      C: "Vitamin C",
      D: "Folat",
      E: "Biotin"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik A ve D vitaminlerini hormon öncüleri bağlamında işler; özellikle 1,25-dihidroksikalsiferolün özgül çekirdek proteinleriyle etkileşen hormonal bir ürün olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu PDF'de bu bağlamda verilmez.",
      C: "Burada hormon öncüsü olarak anlatılmaz.",
      D: "Bu bağlamda verilmez.",
      E: "Bu da bu slayt dizisinde hormon öncüsü olarak sunulmaz."
    },
    learningObjective: "Lipit türevli vitaminlerin biyolojik rollerini sınıflandırmak.",
    tags: ["vitamin D", "hormon öncüsü", "kalsiferol", "lipit vitamin"]
  }),
  makeQuestion({
    id: "LIP-020",
    sourcePdf,
    sourceTopic: "Sinyal, kofaktör ve pigment olarak lipitler",
    sourcePages: [70],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "Übikinon için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Mitokondride lipofilik elektron taşıyıcısı olarak görev yapan bir lipit kinondur.",
      B: "Selülozun dallanma enzimidir.",
      C: "DNA çift sarmalında baz eşleşmesi sağlar.",
      D: "Triaçilgliserollerin ortak adıdır.",
      E: "Yalnız çekirdek zarında bulunan yapısal steroldür."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik übikinonu mitokondride görev yapan, elektronu taşıyabilen lipofilik bir kinon olarak; plastokinonu ise kloroplast karşılığı olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Enzim değildir.",
      C: "Nükleik asitle ilgili değildir.",
      D: "Triaçilgliserol değildir.",
      E: "Sterol olarak sınıflandırılmaz."
    },
    learningObjective: "Lipit kinonları yapısal lipitlerden ayırt etmek.",
    tags: ["übikinon", "koenzim Q", "lipit kinon", "elektron taşıyıcı"]
  })
];
