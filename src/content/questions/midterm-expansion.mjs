import { makeQuestion } from "./helpers.mjs";

export const midtermExpansionQuestions = [
  makeQuestion({
    id: "LIP-043",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Yağ asidi yapısı ve X:Y gösterimi",
    sourcePages: [5, 8],
    difficulty: "Kolay",
    questionType: "tanım",
    question: "Yağ asidi gösteriminde 18:2 ifadesindeki ilk sayı aşağıdakilerden hangisini belirtir?",
    options: {
      A: "Karbon atomu sayısını",
      B: "Toplam çift bağ sayısını",
      C: "Omega ailesini",
      D: "Metil ucundan ilk çift bağın konumunu",
      E: "Gliserole bağlanan zincir sayısını"
    },
    correctAnswer: "A",
    correctExplanation:
      "X:Y gösteriminde ilk sayı zincirdeki toplam karbon atomu sayısını, ikinci sayı ise çift bağ sayısını ifade eder.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Çift bağ sayısı ikinci sayı ile gösterilir.",
      C: "Omega sınıflaması ayrı bir gösterim eksenidir; 18:2 ifadesinin ilk sayısı değildir.",
      D: "İlk çift bağın konumu omega ya da delta gösterimiyle belirtilir.",
      E: "Bu gösterim yağ asidi zincirini tanımlar; gliserole bağlanan zincir sayısını vermez."
    },
    learningObjective:
      "Yağ asidi kısaltma gösteriminde karbon sayısı ile çift bağ sayısını ayırt etmek.",
    tags: ["Lipitler", "Yağ asidi yapısı ve X:Y gösterimi", "X:Y gösterimi"]
  }),
  makeQuestion({
    id: "LIP-044",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Yapısal lipitlerin genel mantığı",
    sourcePages: [28, 31],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Yapısal zar lipitlerini depo triaçilgliserollerinden ayıran temel özellik aşağıdakilerden hangisidir?",
    options: {
      A: "Amfipatik yapıları sayesinde çift tabaka oluşturabilmeleri",
      B: "Tamamen apolar olmaları",
      C: "Yalnız enerji depolamak için kullanılmaları",
      D: "Her zaman üç yağ asidi zinciri taşımaları",
      E: "Suda tam çözünür olmaları"
    },
    correctAnswer: "A",
    correctExplanation:
      "Yapısal zar lipitleri hidrofilik baş grup ve hidrofobik kuyrukları birlikte taşıdıkları için amfipatiktir ve zar çift tabakası oluşturabilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Tamamen apolar yapı daha çok depo lipit mantığıyla ilişkilidir.",
      C: "Bu özellik triaçilgliserollerin ana işlevidir; yapısal zar lipitlerinin değil.",
      D: "Üç yağ asidi zinciri triaçilgliserollere özgüdür.",
      E: "Yapısal zar lipitleri amfipatiktir; tamamen suda çözünen moleküller değildir."
    },
    learningObjective:
      "Yapısal zar lipitlerini amfipatik özellik ve çift tabaka oluşumu üzerinden ayırt etmek.",
    tags: ["Lipitler", "Yapısal lipitlerin genel mantığı", "Amfipatik yapı"]
  }),
  makeQuestion({
    id: "LIP-045",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Gliserofosfolipitler",
    sourcePages: [32, 37],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Bir gliserofosfolipidi triaçilgliserolden ayıran yapısal özellik aşağıdakilerden hangisidir?",
    options: {
      A: "Üçüncü karbon üzerinde fosfat içeren polar baş grup bulunması",
      B: "Sfingozin omurgası taşıması",
      C: "Dört kaynaşmış halkadan oluşması",
      D: "Baz ve pentoz içeren nükleotid başlığı taşıması",
      E: "İki zincir yerine tek hidrokarbon zinciri taşıması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Gliserofosfolipitlerde gliserol omurgasının üçüncü karbonuna fosfat ve buna bağlı polar bir baş grup bağlanır; bu yapı onları triaçilgliserollerden ayırır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Sfingozin omurgası sfingolipitlerle ilişkilidir.",
      C: "Dört halka sterollerin ayırt edici özelliğidir.",
      D: "Bu yapı nükleotid veya kofaktör mantığına aittir; gliserofosfolipit tanımı değildir.",
      E: "Gliserofosfolipitler genellikle iki hidrofobik zincir taşır."
    },
    learningObjective:
      "Gliserofosfolipitlerde fosfatlı polar baş grubun ayırt edici rolünü tanımak.",
    tags: ["Lipitler", "Gliserofosfolipitler", "Polar baş grup"]
  }),
  makeQuestion({
    id: "LIP-046",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Galaktolipitler ve sülfolipitler",
    sourcePages: [38],
    difficulty: "Orta",
    questionType: "uygulama",
    question:
      "Bitki kloroplast tilakoit zarlarında öne çıkan, şeker baş grubu taşıyan yapısal lipit sınıfı aşağıdakilerden hangisidir?",
    options: {
      A: "Galaktolipitler",
      B: "Triaçilgliseroller",
      C: "Steroller",
      D: "Nükleotidler",
      E: "Peptidoglikanlar"
    },
    correctAnswer: "A",
    correctExplanation:
      "Galaktolipitler özellikle kloroplast zarlarında bulunan, baş grubunda şeker taşıyan yapısal lipitlerdir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Triaçilgliseroller depo lipitidir; tilakoit zarın temel yapısal lipidi değildir.",
      C: "Steroller zarla ilişkili olabilir ancak bu bitkisel şeker baş gruplu lipit sınıfını tanımlamaz.",
      D: "Nükleotidler zarın yapısal lipit sınıfı değildir.",
      E: "Peptidoglikan bakteri hücre duvarı polimeridir."
    },
    learningObjective:
      "Galaktolipitleri kloroplast zarı bağlamında diğer lipit sınıflarından ayırt etmek.",
    tags: ["Lipitler", "Galaktolipitler ve sülfolipitler", "Kloroplast"]
  }),
  makeQuestion({
    id: "LIP-047",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Arke zar lipitleri",
    sourcePages: [39, 41],
    difficulty: "Orta",
    questionType: "kavramsal ayrım",
    question:
      "Arke zar lipitlerini bakteriyel ve ökaryotik zar lipitlerinden ayıran temel bağ özelliği aşağıdakilerden hangisidir?",
    options: {
      A: "Hidrokarbon zincirlerinin gliserole eter bağlarıyla bağlanması",
      B: "Yağ asitlerinin gliserole ester bağlarıyla bağlanması",
      C: "Yağ asidi zincirlerinin yalnız amid bağıyla bağlanması",
      D: "Bazların pentoza fosfodiester bağlarıyla bağlanması",
      E: "Sterol halkalarının disülfid köprüleriyle tutulması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Arke zar lipitlerinde hidrokarbon zincirleri gliserole tipik olarak eter bağlarıyla bağlanır; bu özellik onları klasik ester bağlı zar lipitlerinden ayırır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu özellik daha çok bakteri ve ökaryot zar lipitleri için tipiktir.",
      C: "Amid bağı sfingolipit bağlamında görülebilir; arke zar lipitlerinin temel ayırıcı özelliği değildir.",
      D: "Bu bağ tipi nükleik asit omurgasıyla ilişkilidir.",
      E: "Steroller böyle tanımlanmaz."
    },
    learningObjective:
      "Arke zar lipitlerinde eter bağının ayırt edici rolünü tanımak.",
    tags: ["Lipitler", "Arke zar lipitleri", "Eter bağı"]
  }),
  makeQuestion({
    id: "LIP-048",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Arke zar lipitleri",
    sourcePages: [39, 41],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Arke zar lipitlerinde hidrofobik kısım için tipik olarak aşağıdaki yapılardan hangisi bulunur?",
    options: {
      A: "Dallanmış izoprenoid zincirler",
      B: "Yalnız doğrusal glukoz polimerleri",
      C: "Pürin bazlarından oluşan zincirler",
      D: "Steroid halkası içermeyen kısa peptitler",
      E: "Sadece doymamış serbest yağ asitleri"
    },
    correctAnswer: "A",
    correctExplanation:
      "Arke zar lipitlerinin hidrofobik kısmı çoğu kez dallanmış izoprenoid zincirlerden oluşur; bu yapı klasik doğrusal yağ asidi zincirlerinden farklıdır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Glukoz polimerleri karbonhidrat sınıfındadır; zarın hidrofobik kısmını oluşturmaz.",
      C: "Pürin bazları nükleotid bileşenidir; zar lipidi zinciri değildir.",
      D: "Peptit yapılar zar lipit zinciri olarak kullanılmaz.",
      E: "Arke lipitlerinin ayırıcı yanı serbest yağ asidi değil izoprenoid zincir ve eter bağıdır."
    },
    learningObjective:
      "Arke zar lipitlerinde izoprenoid zincirlerin ayırt edici rolünü açıklamak.",
    tags: ["Lipitler", "Arke zar lipitleri", "İzoprenoid zincir"]
  }),
  makeQuestion({
    id: "LIP-049",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Sfingolipitler",
    sourcePages: [42, 44],
    difficulty: "Orta",
    questionType: "tanım",
    question: "Seramid aşağıdakilerden hangisinin birleşmesiyle oluşur?",
    options: {
      A: "Sfingozin ile bir yağ asidinin amid bağıyla birleşmesiyle",
      B: "Gliserol ile üç yağ asidinin esterleşmesiyle",
      C: "Kolesterol ile fosfatın kovalent birleşmesiyle",
      D: "Riboz ile pürin bazının glikozit bağı kurmasıyla",
      E: "Galaktoz ile glukozun alfa(1→4) bağı kurmasıyla"
    },
    correctAnswer: "A",
    correctExplanation:
      "Seramid, sfingozin omurgasına bir yağ asidinin amid bağıyla bağlanması sonucu oluşan temel sfingolipit çekirdeğidir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu tanım triaçilgliserole aittir.",
      C: "Kolesterol böyle bir temel sfingolipit çekirdeği oluşturmaz.",
      D: "Bu yapı nükleozid oluşumuyla ilişkilidir.",
      E: "Bu bir disakkarit bağını anlatır; seramid tanımı değildir."
    },
    learningObjective:
      "Seramidin sfingozin ve yağ asidi bileşenlerinden oluştuğunu tanımak.",
    tags: ["Lipitler", "Sfingolipitler", "Seramid"]
  }),
  makeQuestion({
    id: "LIP-050",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Sfingolipitler",
    sourcePages: [45, 47],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Sfingomiyelini glikosfingolipitlerden ayıran baş grup özelliği aşağıdakilerden hangisidir?",
    options: {
      A: "Fosfokolin ya da fosfoetanolamin içermesi",
      B: "Anomerik karbon üzerinden polisakkarit zinciri taşıması",
      C: "Üç yağ asidi zinciri bulundurması",
      D: "Sterol çekirdeği taşıması",
      E: "Mutlaka serbest gliserol içermesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Sfingomiyelin, sfingolipitler içinde fosfokolin ya da fosfoetanolamin taşıyan fosforlu baş gruba sahip olmasıyla glikosfingolipitlerden ayrılır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu özellik daha çok glikosfingolipitlerin karbonhidrat baş gruplarıyla ilişkilidir.",
      C: "Üç zincirli yapı triaçilgliserollere özgüdür.",
      D: "Sterol çekirdeği kolesterol benzeri yapılarda görülür; sfingomiyelinin ayırt edici baş grubu değildir.",
      E: "Sfingomiyelin gliserol değil sfingozin omurgası taşır."
    },
    learningObjective:
      "Sfingomiyelini, fosforlu baş grubu üzerinden glikosfingolipitlerden ayırt etmek.",
    tags: ["Lipitler", "Sfingolipitler", "Sfingomiyelin"]
  }),
  makeQuestion({
    id: "NUC-040",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Watson-Crick modeli",
    sourcePages: [32, 35],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Watson-Crick çift sarmalında heliks çapının büyük ölçüde sabit kalmasının temel nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Bir pürinin karşısında bir pirimidinin eşleşmesi",
      B: "Her bazın kendiyle eşleşmesi",
      C: "Fosfat gruplarının heliksin iç kısmında yer alması",
      D: "DNA zincirlerinden birinin RNA olması",
      E: "Şeker-fosfat omurgasının bazlar arasında bulunması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Watson-Crick modelinde bir pürinin karşısına bir pirimidin gelmesi heliks çapının yaklaşık sabit kalmasını sağlar; iki pürin ya da iki pirimidin eşleşmeleri bu geometriyi bozardı.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bazlar kendiyle değil tamamlayıcı bazla eşleşir.",
      C: "Fosfatlar heliksin dış kısmında yer alır; sabit çapın temel nedeni bu değildir.",
      D: "Çift sarmal modeli iki DNA zinciri için kurulmuştur.",
      E: "Şeker-fosfat omurga dışta bulunur; bazlar iç kısımda eşleşir."
    },
    learningObjective:
      "Watson-Crick modelinde purin-pirimidin eşleşmesinin geometriye katkısını açıklamak.",
    tags: ["Nükleotidler ve nükleik asitler", "Watson-Crick modeli", "Heliks geometrisi"]
  }),
  makeQuestion({
    id: "NUC-041",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Watson-Crick modeli",
    sourcePages: [32, 35],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Watson-Crick modeline göre iki DNA zincirinin antiparalel olması aşağıdakilerden hangisini ifade eder?",
    options: {
      A: "Bir zincirin 5'→3', diğerinin 3'→5' yönünde uzanması",
      B: "İki zincirin de aynı uçtan başlaması",
      C: "Bir zincirin yalnız pürin, diğerinin yalnız pirimidin taşıması",
      D: "Zincirlerden birinin sağ elli, diğerinin sol elli sarmal yapması",
      E: "Bazların heliksin dış yüzeyine bakması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Antiparalellik, iki DNA zincirinin omurga yönlülüklerinin zıt olması; yani birinin 5'ten 3'e giderken diğerinin 3'ten 5'e uzanması demektir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Antiparalellik aynı yönü değil zıt yönlülüğü tanımlar.",
      C: "Her zincirde hem pürin hem pirimidin bazları bulunabilir.",
      D: "Antiparalellik sarmal yönünden değil omurga yönlülüğünden söz eder.",
      E: "Bazlar çift sarmalın iç kısmında yer alır."
    },
    learningObjective:
      "DNA zincirlerinde antiparalel yönlülüğün ne anlama geldiğini tanımlamak.",
    tags: ["Nükleotidler ve nükleik asitler", "Watson-Crick modeli", "Antiparalellik"]
  }),
  makeQuestion({
    id: "NUC-042",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [43, 46],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "DNA denatürasyonu sırasında 260 nm civarındaki absorbansın artması hangi terimle ifade edilir?",
    options: {
      A: "Hiperkromik etki",
      B: "Hipokromik etki",
      C: "Depurinasyon",
      D: "Hibritleşme",
      E: "Alkilleme"
    },
    correctAnswer: "A",
    correctExplanation:
      "Baz istiflenmesinin bozulduğu denatürasyonda UV absorbansı artar; bu artış hiperkromik etki olarak adlandırılır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Hipokromik etki çift sarmal yapıdaki istiflenme ile ilişkili daha düşük absorbans durumunu anlatır.",
      C: "Depurinasyon bir hasar tipidir; absorbans artışının adı değildir.",
      D: "Hibritleşme tamamlayıcı ipliklerin yeniden eşleşmesidir.",
      E: "Alkilleme kimyasal hasar türlerinden biridir."
    },
    learningObjective:
      "DNA denatürasyonundaki hiperkromik etkiyi UV absorbans değişimiyle ilişkilendirmek.",
    tags: ["Nükleotidler ve nükleik asitler", "Denatürasyon, renatürasyon ve Tm", "Hiperkromik etki"]
  }),
  makeQuestion({
    id: "NUC-043",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    sourcePages: [60, 61],
    difficulty: "Orta",
    questionType: "uygulama",
    question:
      "Nükleotid türevi ikinci haberci olarak hücre içi sinyal iletiminde görev yapan molekül aşağıdakilerden hangisidir?",
    options: {
      A: "cAMP",
      B: "Kolesterol",
      C: "Heparin",
      D: "Sfingomiyelin",
      E: "Selüloz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Siklik AMP, nükleotid türevli bir ikinci haberci olarak sinyal iletiminde görev yapan klasik örneklerden biridir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kolesterol bir steroldür; ikinci haberci nükleotid değildir.",
      C: "Heparin glikozaminoglikandır; bu sinyal nükleotidi değildir.",
      D: "Sfingomiyelin yapısal bir zar lipididir.",
      E: "Selüloz yapısal bir polisakkarittir."
    },
    learningObjective:
      "cAMP'yi, nükleotid türevi ikinci haberci olarak tanımak.",
    tags: ["Nükleotidler ve nükleik asitler", "Nükleotidlerin enerji ve kofaktör rolleri", "cAMP"]
  }),
  makeQuestion({
    id: "NUC-044",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    sourcePages: [60, 61],
    difficulty: "Zor",
    questionType: "sınıflandırma",
    question:
      "Aşağıdaki kofaktörlerden hangisi nükleotid türevli elektron taşıyıcısına örnektir?",
    options: {
      A: "FAD",
      B: "Biyotin",
      C: "Lipoat",
      D: "Piridoksal fosfat",
      E: "Tiyamin pirofosfat"
    },
    correctAnswer: "A",
    correctExplanation:
      "FAD, flavin adenine dinucleotide yapısında bir nükleotid türevli kofaktördür ve redoks tepkimelerinde elektron taşıyıcısı olarak görev yapar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Biyotin karboksilasyon tepkimeleriyle ilişkili bir vitamindir; dinükleotid elektron taşıyıcısı değildir.",
      C: "Lipoat elektron aktarımında rol oynayabilir ancak nükleotid türevli bir dinükleotid değildir.",
      D: "Piridoksal fosfat amino asit metabolizmasında görev yapar; nükleotid türevli elektron taşıyıcısı değildir.",
      E: "Tiyamin pirofosfat dekarboksilasyon kofaktörüdür; dinükleotid redoks taşıyıcısı değildir."
    },
    learningObjective:
      "FAD'ı, nükleotid türevli redoks kofaktörü olarak diğer vitamin kofaktörlerinden ayırt etmek.",
    tags: ["Nükleotidler ve nükleik asitler", "Nükleotidlerin enerji ve kofaktör rolleri", "FAD"]
  })
];
