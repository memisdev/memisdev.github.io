import { makeFillBlank } from "./helpers.mjs";

const sourcePdf = "Karbonhidratlar ve Glikobiyoloji.pdf";
const sourceTopic = "Karbohidratlar ve glikobiyoloji";

const fb = (config) =>
  makeFillBlank({
    sourcePdf,
    sourceTopic,
    ...config
  });

export const carbohydrateFillBlanks = [
  fb({
    id: "FB-CHO-001",
    sourceSubtopic: "Monosakkaritlerin temel sınıflandırılması",
    sourcePages: [7],
    difficulty: "Kolay",
    promptText:
      "Üç karbonlu ve aldehit grubu taşıyan en basit monosakkarit örneği _____ olarak adlandırılır.",
    blankAnswer: "Gliseraldehit",
    explanation:
      "Trioz örnekleri verilirken aldotrioz için gliseraldehit, ketotrioz için dihidroksiaseton kullanılır.",
    learningObjective:
      "Monosakkaritleri karbon sayısı ve aldoz/ketoz özelliğine göre sınıflandırmak.",
    tags: ["Monosakkarit", "Aldotrioz", "Sınıflandırma"]
  }),
  fb({
    id: "FB-CHO-002",
    sourceSubtopic: "Monosakkaritlerin temel sınıflandırılması",
    sourcePages: [7],
    difficulty: "Kolay",
    promptText:
      "Keton grubu taşıyan en basit trioz monosakkarit, biyokimya terminolojisinde _____ olarak adlandırılır.",
    blankAnswer: "Dihidroksiaseton",
    explanation:
      "Karbonhidratların temel sınıflandırılmasında dihidroksiaseton ketotriozun tipik örneği olarak verilir.",
    learningObjective:
      "Monosakkaritleri karbon sayısı ve aldoz/ketoz özelliğine göre sınıflandırmak.",
    tags: ["Monosakkarit", "Ketotrioz", "Sınıflandırma"]
  }),
  fb({
    id: "FB-CHO-003",
    sourceSubtopic: "D/L izomerleri ve kiralite",
    sourcePages: [11, 12],
    difficulty: "Orta",
    promptText:
      "Karbonil grubuna en uzak kiral merkezdeki -OH grubunun sağda bulunması, monosakkaritin _____ konfigürasyonunda olduğunu gösterir.",
    blankAnswer: "D-izomer",
    acceptedAnswers: ["D izomer", "D-izomeri", "D izomeri"],
    explanation:
      "D/L ayrımı, karbonil grubuna en uzak kiral merkezdeki düzenlenişin D- veya L-gliseraldehide benzerliğine göre yapılır.",
    learningObjective:
      "D/L izomer tanımının hangi referans merkeze göre yapıldığını açıklamak.",
    tags: ["D/L", "Kiralite", "Stereoizomer"]
  }),
  fb({
    id: "FB-CHO-004",
    sourceSubtopic: "D/L izomerleri ve kiralite",
    sourcePages: [11, 12],
    difficulty: "Orta",
    promptText:
      "Monosakkaritlerde D/L sınıflaması, referans olarak _____ molekülünün konfigürasyonuyla karşılaştırma yapılarak kurulur.",
    blankAnswer: "Gliseraldehit",
    explanation:
      "D ve L gösterimi, D- veya L-gliseraldehit düzenlenişine benzerlikle belirlenir.",
    learningObjective:
      "D/L izomer tanımında kullanılan referans molekülü tanımak.",
    tags: ["D/L", "Gliseraldehit", "Kiralite"]
  }),
  fb({
    id: "FB-CHO-005",
    sourceSubtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    sourcePages: [17],
    difficulty: "Kolay",
    promptText:
      "Halkalı monosakkaritlerde halka oluşumuyla yeni stereomerkez haline gelen karbona _____ karbon denir.",
    blankAnswer: "Anomerik",
    acceptedAnswers: ["Anomerik karbon"],
    explanation:
      "Halka kapanmasıyla oluşan yeni yarı asetal/yarı ketal merkezi anomerik karbon olarak adlandırılır.",
    learningObjective:
      "Halkalı monosakkaritlerde anomerik karbonun hangi karbon olduğunu tanımlamak.",
    tags: ["Anomerik karbon", "Halkalı yapı", "Anomer"]
  }),
  fb({
    id: "FB-CHO-006",
    sourceSubtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    sourcePages: [17, 18],
    difficulty: "Orta",
    promptText:
      "Anomerik merkezdeki -OH grubu CH2OH ile ters yöndeyse ilgili anomer _____ olarak adlandırılır.",
    blankAnswer: "Alfa",
    acceptedAnswers: ["alpha", "α", "alfa anomer", "alpha anomer"],
    explanation:
      "Alfa anomer, anomerik merkezdeki -OH grubunun CH2OH ile ters yönde bulunmasıyla tanımlanır.",
    learningObjective:
      "Alfa ve beta anomer ayrımını anomerik merkez düzenlenişi üzerinden kurmak.",
    tags: ["Alfa", "Anomer", "Halkalı yapı"]
  }),
  fb({
    id: "FB-CHO-007",
    sourceSubtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    sourcePages: [21],
    difficulty: "Kolay",
    promptText:
      "Sulu çözeltide bir şekerin alfa ve beta anomerleri arasında denge kurulmasına _____ denir.",
    blankAnswer: "Mutarotasyon",
    explanation:
      "Mutarotasyon, halka açılıp kapanması üzerinden alfa ve beta anomerleri arasında dönüşümün kurulmasıdır.",
    learningObjective:
      "Mutarotasyon kavramını anomerler arası dengeyle ilişkilendirmek.",
    tags: ["Mutarotasyon", "Anomer", "Halkalı yapı"]
  }),
  fb({
    id: "FB-CHO-008",
    sourceSubtopic: "Heksoz türevleri",
    sourcePages: [24, 25],
    difficulty: "Orta",
    promptText:
      "Bir hidroksil grubunun amino grupla yer değiştirdiği heksoz türevleri _____ olarak adlandırılır.",
    blankAnswer: "Amino şekerler",
    acceptedAnswers: ["Amino sekerler", "amino şeker", "amino seker"],
    explanation:
      "Glukozamin ve galaktozamin gibi örnekler amino şeker sınıfında değerlendirilir.",
    learningObjective:
      "Heksoz türevlerinden amino şeker grubunu tanımak.",
    tags: ["Heksoz türevi", "Amino şeker", "Glukozamin"]
  }),
  fb({
    id: "FB-CHO-009",
    sourceSubtopic: "Heksoz türevleri",
    sourcePages: [29, 30],
    difficulty: "Orta",
    promptText:
      "Glukuronik asit gibi karboksilleşmiş heksoz türevleri _____ asit sınıfına girer.",
    blankAnswer: "Uronik",
    acceptedAnswers: ["Uronik asit"],
    explanation:
      "Heksozların yükseltgenmiş türevleri arasında glukuronik asit gibi uronik asitler bulunur.",
    learningObjective:
      "Uronik asitlerin hangi tip şeker türevi olduğunu tanımlamak.",
    tags: ["Uronik asit", "Heksoz türevi", "Glukuronik asit"]
  }),
  fb({
    id: "FB-CHO-010",
    sourceSubtopic: "İndirgen şeker mantığı",
    sourcePages: [33],
    difficulty: "Orta",
    promptText:
      "Serbest anomerik karbon taşıyan disakkaritler biyokimyada _____ şekerler olarak tanımlanır.",
    blankAnswer: "İndirgen",
    acceptedAnswers: ["İndirgen şekerler", "indirgen şeker"],
    explanation:
      "İndirgenlik, anomerik merkezin halka-zincir dengesi kurabilecek biçimde serbest kalmasına bağlıdır.",
    learningObjective:
      "İndirgen şeker kavramını serbest anomerik karbonla ilişkilendirmek.",
    tags: ["İndirgen şeker", "Anomerik karbon", "Disakkarit"]
  }),
  fb({
    id: "FB-CHO-011",
    sourceSubtopic: "İndirgen şeker mantığı",
    sourcePages: [35],
    difficulty: "Zor",
    promptText:
      "Trehalozun indirgen olmamasının temel nedeni, iki monosakkaritin de _____ karbonlarının glikozidik bağa katılmasıdır.",
    blankAnswer: "Anomerik",
    acceptedAnswers: ["Anomerik karbon", "anomerik karbonlar"],
    explanation:
      "Trehalozda her iki anomerik karbon bağ oluşumuna katıldığı için halka-zincir dengesi kuracak serbest merkez kalmaz.",
    learningObjective:
      "İndirgen olmayan disakkaritlerde anomerik karbonların bağa katılmasının sonucunu açıklamak.",
    tags: ["Trehaloz", "İndirgen olmayan şeker", "Anomerik karbon"]
  }),
  fb({
    id: "FB-CHO-012",
    sourceSubtopic: "Disakkarit adlandırması ve bağ tipleri",
    sourcePages: [34, 35],
    difficulty: "Orta",
    promptText:
      "Bir monosakkaritin anomerik karbonu ile diğer şekerin hidroksil grubu arasında kurulan bağ, disakkaritlerde _____ bağı olarak adlandırılır.",
    blankAnswer: "O-glikozit",
    acceptedAnswers: ["O glikozit", "O-glikozit bağı", "O glikozit bağı", "O-glikozidik bağ"],
    explanation:
      "Disakkarit oluşumunda bir şekerin anomerik karbonu ile diğer şekerin -OH grubu arasında O-glikozit bağı kurulur.",
    learningObjective:
      "Disakkaritlerde kurulan temel kovalent bağ tipini tanımak.",
    tags: ["Disakkarit", "Glikozit bağı", "Adlandırma"]
  }),
  fb({
    id: "FB-CHO-013",
    sourceSubtopic: "Disakkarit adlandırması ve bağ tipleri",
    sourcePages: [38, 39],
    difficulty: "Zor",
    promptText:
      "α-glukopiranozil-(1→4) adlandırmasında bağın ikinci şekerde yöneldiği karbon, _____ numaralı karbondur.",
    blankAnswer: "4",
    acceptedAnswers: ["Dört", "Dördüncü", "4. karbon", "4 numaralı karbon"],
    explanation:
      "Parantez içindeki (1→4) gösterimi, bağın birinci şekerin anomerik karbonundan ikinci şekerin 4 numaralı karbonuna uzandığını gösterir.",
    learningObjective:
      "Disakkarit adlandırmasında karbon numarası notasyonunu yorumlamak.",
    tags: ["Disakkarit", "Adlandırma", "Karbon numarası"]
  }),
  fb({
    id: "FB-CHO-014",
    sourceSubtopic: "Depo polisakkaritleri",
    sourcePages: [48],
    difficulty: "Kolay",
    promptText:
      "Bitkilerde başlıca depo polisakkarit _____ olarak adlandırılır.",
    blankAnswer: "Nişasta",
    explanation:
      "Bitkisel depo polisakkariti nişastadır ve amiloz ile amilopektinden oluşur.",
    learningObjective:
      "Bitkilerdeki temel depo polisakkariti tanımak.",
    tags: ["Depo polisakkariti", "Nişasta", "Bitki"]
  }),
  fb({
    id: "FB-CHO-015",
    sourceSubtopic: "Depo polisakkaritleri",
    sourcePages: [50],
    difficulty: "Kolay",
    promptText:
      "Hayvan hücrelerinde yüksek dallanma gösteren başlıca depo polisakkarit _____dir.",
    blankAnswer: "Glikojen",
    explanation:
      "Glikojen, hayvanlarda depo amacıyla kullanılan ve sık dallanan glukoz polimeridir.",
    learningObjective:
      "Hayvanlarda bulunan temel depo polisakkariti tanımak.",
    tags: ["Depo polisakkariti", "Glikojen", "Dallanma"]
  }),
  fb({
    id: "FB-CHO-016",
    sourceSubtopic: "Yapısal homopolisakkaritler",
    sourcePages: [57, 58],
    difficulty: "Orta",
    promptText:
      "Hayvanlarda β(1→4) bağlarını parçalayan enzim bulunmadığı için yapısal homopolisakkaritlerden _____ sindirilemez.",
    blankAnswer: "Selüloz",
    explanation:
      "Bağırsak enzimleri alfa bağlarını hidroliz eder; beta(1→4) bağları içeren selüloz ise hayvanlarda sindirilemez.",
    learningObjective:
      "Selülozun neden sindirilemeyen yapısal polisakkarit olduğunu açıklamak.",
    tags: ["Selüloz", "Yapısal homopolisakkarit", "Beta 1-4"]
  }),
  fb({
    id: "FB-CHO-017",
    sourceSubtopic: "Yapısal homopolisakkaritler",
    sourcePages: [61, 62],
    difficulty: "Orta",
    promptText:
      "Eklem bacaklı dış iskeleti ile bazı mantar yapılarında bulunan azotlu yapısal homopolisakkarit _____dir.",
    blankAnswer: "Kitin",
    explanation:
      "Kitin, N-asetilglukozamin türevlerinden oluşan yapısal homopolisakkarit olarak verilir.",
    learningObjective:
      "Kitini diğer yapısal homopolisakkaritlerden ayırt etmek.",
    tags: ["Kitin", "Yapısal homopolisakkarit", "N-asetilglukozamin"]
  }),
  fb({
    id: "FB-CHO-018",
    sourceSubtopic: "Peptidoglikan ve hücre duvarı heteropolisakkaritleri",
    sourcePages: [66],
    difficulty: "Orta",
    promptText:
      "Bakteri hücre duvarında tekrarlayan heteropolisakkarit birimleri peptit köprüleriyle birleştiren yapı _____ olarak adlandırılır.",
    blankAnswer: "Peptidoglikan",
    explanation:
      "Bakteri hücre duvarının temel heteropolisakkarit yapısı peptidoglikandır.",
    learningObjective:
      "Bakteri hücre duvarındaki temel heteropolisakkarit yapıyı tanımak.",
    tags: ["Peptidoglikan", "Hücre duvarı", "Bakteri"]
  }),
  fb({
    id: "FB-CHO-019",
    sourceSubtopic: "Peptidoglikan ve hücre duvarı heteropolisakkaritleri",
    sourcePages: [66],
    difficulty: "Orta",
    promptText:
      "Peptidoglikandaki tekrar eden disakkarit birimlerinden biri N-asetilglukozamin ise diğeri N-asetil_____ asittir.",
    blankAnswer: "Muramik",
    acceptedAnswers: ["Muramik asit"],
    explanation:
      "Peptidoglikan, beta(1→4) bağıyla bağlanan N-asetilglukozamin ve N-asetilmuramik asit kalıntılarından oluşur.",
    learningObjective:
      "Peptidoglikanın tekrarlayan disakkarit bileşenlerini tanımak.",
    tags: ["Peptidoglikan", "N-asetilmuramik asit", "Hücre duvarı"]
  }),
  fb({
    id: "FB-CHO-020",
    sourceSubtopic: "Glikozaminoglikanlar",
    sourcePages: [70],
    difficulty: "Orta",
    promptText:
      "Glikozaminoglikanlar, hücre dışı matriste tekrarlayan _____ birimlerinden oluşan doğrusal heteropolisakkaritlerdir.",
    blankAnswer: "Disakkarit",
    acceptedAnswers: ["Disakkarit birimleri", "disakkaritler"],
    explanation:
      "GAG'ler, tekrar eden disakkarit birimleri içeren doğrusal heteropolisakkarit ailesi olarak tanımlanır.",
    learningObjective:
      "Glikozaminoglikanların temel yapısal tekrar birimini tanımlamak.",
    tags: ["GAG", "Disakkarit", "ECM"]
  }),
  fb({
    id: "FB-CHO-021",
    sourceSubtopic: "Glikozaminoglikanlar",
    sourcePages: [74],
    difficulty: "Zor",
    promptText:
      "Sülfat içermemesiyle istisna oluşturan glikozaminoglikan _____dır.",
    blankAnswer: "Hiyaluronan",
    acceptedAnswers: ["Hyaluronan", "hiyalüronan", "hyaluronan"],
    explanation:
      "Hiyaluronan, sülfat içermeyen GAG örneği olduğu için bu grupta istisna kabul edilir.",
    learningObjective:
      "Hiyaluronanı diğer glikozaminoglikanlardan ayıran istisna özelliği tanımak.",
    tags: ["Hiyaluronan", "GAG", "İstisna"]
  }),
  fb({
    id: "FB-CHO-022",
    sourceSubtopic: "Glikozaminoglikanlar",
    sourcePages: [70, 71],
    difficulty: "Orta",
    promptText:
      "GAG tekrar biriminde amino şekere eşlik eden ikinci monosakkarit tipi çoğunlukla bir _____ asittir.",
    blankAnswer: "Uronik",
    acceptedAnswers: ["Uronik asit"],
    explanation:
      "Glikozaminoglikan tekrar birimlerinde amino şekere sıklıkla glukuronik veya iduronik gibi uronik asitler eşlik eder.",
    learningObjective:
      "Glikozaminoglikan tekrar birimindeki temel monosakkarit eşleşmesini tanımak.",
    tags: ["GAG", "Uronik asit", "Tekrar birimi"]
  }),
  fb({
    id: "FB-CHO-023",
    sourceSubtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    sourcePages: [83],
    difficulty: "Orta",
    promptText:
      "Bir veya daha fazla glikozaminoglikan zinciri taşıyan makromoleküller _____ olarak adlandırılır.",
    blankAnswer: "Proteoglikanlar",
    acceptedAnswers: ["Proteoglikan", "proteoglycan", "proteoglycans"],
    explanation:
      "Proteoglikanlar, hücre yüzeyi veya ECM'de yer alan ve bir ya da daha fazla GAG zinciri taşıyan makromoleküllerdir.",
    learningObjective:
      "Proteoglikanları diğer glikokonjugat sınıflarından ayırmak.",
    tags: ["Proteoglikan", "GAG", "ECM"]
  }),
  fb({
    id: "FB-CHO-024",
    sourceSubtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    sourcePages: [89, 90],
    difficulty: "Orta",
    promptText:
      "Karbohidrat kısmı göreceli olarak kısa ve dallanmış olan protein konjugatları _____ sınıfına girer.",
    blankAnswer: "Glikoprotein",
    acceptedAnswers: ["Glikoproteinler"],
    explanation:
      "Glikoproteinlerde karbonhidrat kısmı proteoglikanlara göre daha kısa ve daha dallı yapıdadır.",
    learningObjective:
      "Glikoproteinleri proteoglikanlardan yapı bakımından ayırt etmek.",
    tags: ["Glikoprotein", "Glikokonjugat", "Yapı"]
  }),
  fb({
    id: "FB-CHO-025",
    sourceSubtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    sourcePages: [96, 97],
    difficulty: "Orta",
    promptText:
      "Karbohidrat zincirinin lipide kovalent bağlandığı hücre yüzeyi bileşikleri _____ olarak adlandırılır.",
    blankAnswer: "Glikolipitler",
    acceptedAnswers: ["Glikolipit", "glycolipid", "glycolipids"],
    explanation:
      "Glikolipitler, karbohidrat zincirlerini lipit omurgasına kovalent olarak bağlayan glikokonjugat sınıfıdır.",
    learningObjective:
      "Glikolipitleri diğer glikokonjugat sınıflarından ayırt etmek.",
    tags: ["Glikolipit", "Glikokonjugat", "Hücre yüzeyi"]
  }),
  fb({
    id: "FB-CHO-026",
    sourceSubtopic: "Şeker kodu ve lektinler",
    sourcePages: [101, 104],
    difficulty: "Kolay",
    promptText:
      "Özgül oligosakkarit dizilerini tanıyan proteinler _____ olarak adlandırılır.",
    blankAnswer: "Lektinler",
    acceptedAnswers: ["Lektin"],
    explanation:
      "Şeker kodunu okuyan protein ailesi lektinlerdir; özgül oligosakkarit motiflerini tanırlar.",
    learningObjective:
      "Şeker kodunun hücresel okuyucuları olan protein ailesini tanımak.",
    tags: ["Lektin", "Şeker kodu", "Tanıma"]
  }),
  fb({
    id: "FB-CHO-027",
    sourceSubtopic: "Şeker kodu ve lektinler",
    sourcePages: [101],
    difficulty: "Orta",
    promptText:
      "Hücrelerin özgül oligosakkarit düzenleriyle biyolojik bilgi kodlaması biyokimyada _____ kavramıyla açıklanır.",
    blankAnswer: "Şeker kodu",
    acceptedAnswers: ["Seker kodu"],
    explanation:
      "Karbohidrat dizileri milyarlarca olası kombinasyonla bilgi taşıyabildiği için bu olgu şeker kodu kavramıyla açıklanır.",
    learningObjective:
      "Karbohidratların bilgi molekülü olarak işlevini açıklayan temel kavramı tanımak.",
    tags: ["Şeker kodu", "Oligosakkarit", "Bilgi molekülü"]
  }),
  fb({
    id: "FB-CHO-028",
    sourceSubtopic: "Karbohidrat analitik yöntemleri",
    sourcePages: [112, 117],
    difficulty: "Zor",
    promptText:
      "Kuvvetli asit hidrolizi sonrası monosakkarit bileşimini belirlemede kullanılan yöntemlerden biri _____ kromatografisidir.",
    blankAnswer: "İyon değişim",
    acceptedAnswers: ["İyon değişim kromatografisi"],
    explanation:
      "Analitik bölümde, hidroliz sonrası monosakkarit bileşiminin iyon değişim kromatografisi gibi yöntemlerle çözümlenebileceği belirtilir.",
    learningObjective:
      "Karbohidrat analizi için kullanılan temel kromatografik yöntem örneklerini tanımak.",
    tags: ["Analitik yöntem", "Kromatografi", "Monosakkarit analizi"]
  })
];
