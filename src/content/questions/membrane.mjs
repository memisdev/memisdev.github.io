import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Hücre Zarından Madde Geçişi.pdf";

export const membraneQuestions = [
  makeQuestion({
    id: "MEM-001",
    sourcePdf,
    sourceTopic: "Bütün biyolojik zarların ortak özellikleri",
    sourcePages: [8],
    difficulty: "Kolay",
    questionType: "tanım",
    question: "Aşağıdakilerden hangisi slaytlarda bütün biyolojik zarlar için ortak temel özelliklerden biri olarak vurgulanmıştır?",
    options: {
      A: "Polar veya yüklü çoğu çözünmüş maddeye karşı geçirgen olmaları",
      B: "Her türlü iyonu ATP harcamadan geçirebilmeleri",
      C: "Tüm çözünmüş maddeleri eşit hızla geçirmeleri",
      D: "Protein içermeden de bütün taşınma olaylarını gerçekleştirmeleri",
      E: "Sadece iç zar sistemlerinde bulunmaları"
    },
    correctAnswer: "A",
    correctExplanation:
      "PDF’de bütün biyolojik zarların polar veya yüklü çoğu çözünmüş maddeye geçirgen olmadığı, buna karşılık bazı polar olmayan bileşiklere geçirgen olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Slaytlar iyon geçişi için çoğu zaman kanal ya da taşıyıcı protein gerektiğini vurgular.",
      C: "Seçici geçirgenlik varken tüm maddelerin eşit hızla geçmesi beklenmez.",
      D: "Zar proteinleri taşınma ve diğer işlevler için temel bileşen olarak sunulur.",
      E: "Biyolojik zarlar hücrenin dış sınırlarında ve organellerde bulunabilir."
    },
    learningObjective: "Biyolojik zarların seçici geçirgenlik özelliğini tanımak.",
    tags: ["zar", "seçici geçirgenlik", "temel özellik"]
  }),
  makeQuestion({
    id: "MEM-002",
    sourcePdf,
    sourceTopic: "Sıvı-mozaik modeli",
    sourcePages: [9],
    difficulty: "Kolay",
    questionType: "kavramsal ayrım",
    question: "Sıvı-mozaik modele göre aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Fosfolipitlerin polar olmayan kısımları sulu ortama bakar.",
      B: "Zardaki her lipit ve protein birimi sabitlenmiş, hareketsiz bir yapıdadır.",
      C: "Fosfolipitler çift tabaka oluşturur; polar baş grupları sulu ortama, apolar kısımlar merkeze yönelir.",
      D: "Model yalnızca prokaryot zarları için geçerlidir.",
      E: "Model, proteinlerin zarda bulunmadığını varsayar."
    },
    correctAnswer: "C",
    correctExplanation:
      "Slaytta sıvı-mozaik modele göre fosfolipitlerin çift tabaka oluşturduğu, apolar bölgelerin merkeze, polar baş gruplarının sulu ortama baktığı belirtilir.",
    distractorExplanations: {
      A: "Bu ifade tersidir; apolar kuyruklar çift tabakanın merkezine yönelir.",
      B: "Model, zar bileşenlerinin yanal hareket edebildiğini söyler.",
      C: "Doğru seçenek.",
      D: "Slayt modelin genel biyolojik zar mimarisini açıkladığını anlatır.",
      E: "Model mozaik yapının önemli parçası olarak zar proteinlerini de içerir."
    },
    learningObjective: "Sıvı-mozaik modelin temel düzenlenişini açıklamak.",
    tags: ["sıvı-mozaik", "fosfolipit", "zar mimarisi"]
  }),
  makeQuestion({
    id: "MEM-003",
    sourcePdf,
    sourceTopic: "Zar asimetrisi",
    sourcePages: [16],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Plazma zarı lipitlerinin iki yaprakçık arasında asimetrik dağılmasıyla ilgili aşağıdaki sonuçlardan hangisi slaytta özellikle örneklenmiştir?",
    options: {
      A: "Fosfatidilserinin trombositlerde dış yaprakçığa geçmesi kan pıhtısı oluşumunu destekleyebilir.",
      B: "Fosfatidilserinin dış yaprakçıkta bulunması tüm hücrelerde bölünmeyi başlatır.",
      C: "Asimetri yalnızca bakterilerde görülen önemsiz bir özelliktir.",
      D: "Asimetri, zar proteinlerinin her zaman eşit dağıldığını kanıtlar.",
      E: "Asimetri yalnızca glikoproteinlerin sitozole bakmasıyla açıklanır."
    },
    correctAnswer: "A",
    correctExplanation:
      "PDF’de fosfatidilserinin dış yaprakçığa doğru hareketinin trombositlerde kan pıhtısı oluşumuyla, diğer birçok hücrede ise apoptoz işaretiyle ilişkili olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Slaytta böyle genel bir hücre bölünmesi etkisi anlatılmaz.",
      C: "Asimetrinin biyolojik sonuçları olduğu özellikle vurgulanır.",
      D: "Lipit asimetrisi ile proteinlerin her zaman eşit dağılması aynı şey değildir.",
      E: "Asimetri yalnızca glikoprotein yönelimiyle sınırlandırılmaz."
    },
    learningObjective: "Zar asimetrisinin biyolojik sonuçlarını yorumlamak.",
    tags: ["zar asimetrisi", "fosfatidilserin", "apoptoz", "pıhtılaşma"]
  }),
  makeQuestion({
    id: "MEM-004",
    sourcePdf,
    sourceTopic: "Zar proteinlerinin sınıflandırılması",
    sourcePages: [17],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Bir zar proteininiň zardan uzaklaştırılması için deterjan, organik çözücü veya denatüre edici kullanılması gerekiyorsa bu protein en olası hangi gruptadır?",
    options: {
      A: "Periferik zar proteini",
      B: "İntegral zar proteini",
      C: "Geçici sitozolik protein",
      D: "Sadece nükleer protein",
      E: "Çözünür enzim"
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta integral zar proteinlerinin lipit çift tabakaya sıkı hidrofobik etkileşimlerle bağlandığı ve ancak deterjan, organik çözücü veya denatüranlarla uzaklaştırılabildiği belirtilir.",
    distractorExplanations: {
      A: "Periferik proteinler daha zayıf etkileşimlerle bağlanır.",
      B: "Doğru seçenek.",
      C: "Geçici sitozolik protein tanımı bu bağlanma tipini açıklamaz.",
      D: "Nükleer protein olmak zara sıkı gömülü olmayı göstermez.",
      E: "Çözünür enzimler zaten zar çift tabakasına bu şekilde gömülü değildir."
    },
    learningObjective: "İntegral ve diğer zar proteinlerini bağlanma biçimine göre ayırt etmek.",
    tags: ["zar proteini", "integral protein", "deterjan"]
  }),
  makeQuestion({
    id: "MEM-005",
    sourcePdf,
    sourceTopic: "Zar dinamikleri ve akışkanlık",
    sourcePages: [18, 19],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Memeliler için fizyolojik sıcaklık aralığında zar akışkanlığını etkileyen lipit bileşimiyle ilgili aşağıdaki ifadelerden hangisi slaytlarla uyumludur?",
    options: {
      A: "Uzun zincirli doymuş yağ asitleri sıvı-düzenli paketlenmeyi teşvik eder.",
      B: "Tüm biyolojik zarlar sıcaklık değişimine karşı aynı keskin faz geçişini gösterir.",
      C: "Hücreler zar akışkanlığını düzenleyemez.",
      D: "Doymuş yağ asitleri her koşulda akışkanlığı maksimuma çıkarır.",
      E: "Zar akışkanlığı yalnızca protein miktarıyla belirlenir."
    },
    correctAnswer: "A",
    correctExplanation:
      "PDF’de 16:0 ve 18:0 gibi uzun zincirli doymuş yağ asitlerinin sıvı-düzenli dizi şeklinde paketlenmeyi teşvik ettiği, hücrelerin de sabit akışkanlık için lipit bileşimini düzenlediği anlatılır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Slaytta çok çeşitli açil zincirleri nedeniyle keskin faz değişiminin görülmediği vurgulanır.",
      C: "Hücrelerin lipit bileşimlerini düzenlediği özellikle belirtilir.",
      D: "Akışkanlık tek bir yönde ve koşulsuz açıklanmaz; bileşim ve sıcaklık birlikte önemlidir.",
      E: "Proteinler önemli olsa da akışkanlıkta lipit bileşimi açıkça belirleyicidir."
    },
    learningObjective: "Zar akışkanlığında lipit bileşiminin rolünü değerlendirmek.",
    tags: ["zar akışkanlığı", "doymuş yağ asidi", "lipit bileşimi"]
  }),
  makeQuestion({
    id: "MEM-006",
    sourcePdf,
    sourceTopic: "Zar füzyonu",
    sourcePages: [25, 26],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Sinapslarda nörotransmiter dolu veziküllerin plazma zarı ile birleşmesinde görev alan protein ailesi aşağıdakilerden hangisidir?",
    options: {
      A: "GLUT",
      B: "SNARE",
      C: "Akuaporin",
      D: "Akonitaz",
      E: "Transketolaz"
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta sinaptik vezikül füzyonu örneğinde SNARE ailesinin görev aldığı açıkça verilir.",
    distractorExplanations: {
      A: "GLUT glukoz taşınmasıyla ilişkilidir.",
      B: "Doğru seçenek.",
      C: "Akuaporinler su geçiş kanallarıdır.",
      D: "Akonitaz sitrik asit çevriminde görevli bir enzimdir.",
      E: "Transketolaz pentoz fosfat yolağı ile ilişkilidir."
    },
    learningObjective: "Zar füzyonunun özgül protein aracılığı gerektirdiğini bilmek.",
    tags: ["zar füzyonu", "SNARE", "sinaps"]
  }),
  makeQuestion({
    id: "MEM-007",
    sourcePdf,
    sourceTopic: "Kolaylaştırılmış difüzyon ve GLUT",
    sourcePages: [34],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Eritrosit glukoz taşıyıcıları (GLUT) için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Glukozu daima ATP hidroliziyle hücre içine pompalar.",
      B: "Glukozun hücre içi ve dışı derişim farkına bağlı pasif taşınmasına aracılık eder.",
      C: "Yalnızca anyon taşır, glukoz taşımaz.",
      D: "Su geçişi için özgül por oluşturur.",
      E: "Sadece çekirdek zarında bulunur."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF’de eritrositlerdeki glukoz taşıyıcılarının kolaylaştırılmış difüzyonla, yani konsantrasyon farkına bağlı pasif taşınmaya aracılık ettiği belirtilir.",
    distractorExplanations: {
      A: "Bu aktif taşıma olurdu; slaytta pasif taşınma vurgulanır.",
      B: "Doğru seçenek.",
      C: "Anyon değiştiricisi ayrı bir örnektir.",
      D: "Bu tanım akuaporinlere aittir.",
      E: "Sunum eritrosit plazma zarı örneğini verir."
    },
    learningObjective: "GLUT taşıyıcılarının pasif taşınma mantığını tanımak.",
    tags: ["GLUT", "kolaylaştırılmış difüzyon", "eritrosit"]
  }),
  makeQuestion({
    id: "MEM-008",
    sourcePdf,
    sourceTopic: "Anyon değişimi",
    sourcePages: [36, 37],
    difficulty: "Orta",
    question:
      "Klorür-bikarbonat değiştiricisiyle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    questionType: "karşılaştırma",
    options: {
      A: "Her iki anyonu aynı yönde taşıyan bir simport sistemidir.",
      B: "HCO3- taşınırken zıt yönde Cl- taşınır ve net yük aktarımı olmaz.",
      C: "Yalnızca ATP hidrolizi ile çalışır.",
      D: "Glukoz ve bikarbonatı birlikte taşır.",
      E: "Sadece mitokondri iç zarında bulunur."
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta klorür-bikarbonat değiştiricisinin elektronötr antiport yaptığı, bir HCO3- hareketine karşılık zıt yönde bir Cl- taşıdığı belirtilir.",
    distractorExplanations: {
      A: "Aynı yönde taşıma değil, zıt yönde değişim söz konusudur.",
      B: "Doğru seçenek.",
      C: "Bu örnek ATP’ye doğrudan bağlanan bir pompa olarak verilmez.",
      D: "Glukoz taşıyıcısı ayrı bir sistemdir.",
      E: "Örnek eritrosit plazma zarından verilir."
    },
    learningObjective: "Elektronötr antiport mekanizmasını açıklayabilmek.",
    tags: ["anyon değiştirici", "antiport", "bikarbonat", "klorür"]
  }),
  makeQuestion({
    id: "MEM-009",
    sourcePdf,
    sourceTopic: "Aktif taşınma",
    sourcePages: [38, 39],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Aşağıdaki ifadelerden hangisi aktif taşınmanın slaytlardaki tanımıyla en uyumludur?",
    options: {
      A: "Taşınan türler her zaman elektrokimyasal fark yönünde hareket eder.",
      B: "Endergonik taşınma, yalnızca egzergonik bir işle eşleştiğinde gerçekleşebilir.",
      C: "Aktif taşınma ve pasif taşınma arasında enerji ilişkisi yoktur.",
      D: "Aktif taşınmada çözünmüş maddeler denge derişiminin üstünde birikemez.",
      E: "Birincil aktif taşınmada enerji mutlaka başka bir iyon gradyanından gelir."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF’de aktif taşınmanın termodinamik olarak tercih edilmeyen, yani endergonik bir süreç olduğu; ancak doğrudan ya da dolaylı biçimde egzergonik işlemlerle eşleştiğinde gerçekleşebildiği vurgulanır.",
    distractorExplanations: {
      A: "Bu pasif taşınmanın yönüyle ilgilidir.",
      B: "Doğru seçenek.",
      C: "Slaytta aktif taşınmanın enerji eşleşmesine bağlı olduğu açıkça anlatılır.",
      D: "Aktif taşınma tam da denge üstünde birikime yol açabilir.",
      E: "Bu ikincil aktif taşınma için tipik olabilir; birincil aktif taşınma doğrudan kimyasal tepkimeye bağlanır."
    },
    learningObjective: "Aktif taşınmanın enerji eşleşmesi mantığını ayırt etmek.",
    tags: ["aktif taşınma", "endergonik", "egzergonik", "birincil", "ikincil"]
  }),
  makeQuestion({
    id: "MEM-010",
    sourcePdf,
    sourceTopic: "Akuaporinler ve iyon kanalları",
    sourcePages: [40, 41, 42],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Akuaporinlerle ilgili aşağıdaki ifadelerden hangisi slaytlarda verilen bilgiye uygundur?",
    options: {
      A: "Hidrate iyonların suyla aynı hızda geçişine izin verirler.",
      B: "Sadece böbrek hücrelerinde bulunurlar.",
      C: "Su geçişi için hidrofilik por oluştururlar; bazı tipleri gliserol veya üreyi de geçirebilir.",
      D: "Net yük aktarımı olmadan yalnızca klorür-bikarbonat değişimi yaparlar.",
      E: "Görevleri, iyon seçici kanalların ATP kullanmasını sağlamaktır."
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda akuaporinlerin hidrofilik por oluşturarak suyu hızla geçirdiği, bazı AQP'lerin gliserol veya üre geçişine de izin verdiği; buna karşın hidrate iyonları geçirmediği belirtilir.",
    distractorExplanations: {
      A: "Tam tersine, hidrate iyonların geçişine izin verilmediği vurgulanır.",
      B: "Akuaporinlerin bütün organizmalarda bulunduğu ifade edilir.",
      C: "Doğru seçenek.",
      D: "Bu özellik klorür-bikarbonat değiştiricisine aittir.",
      E: "Akuaporinler iyon kanallarının enerji kaynağı değildir."
    },
    learningObjective: "Akuaporinleri diğer zar taşıma sistemlerinden ayırt etmek.",
    tags: ["akuaporin", "su taşıma", "iyon kanalı", "seçicilik"]
  }),
  makeQuestion({
    id: "MEM-011",
    sourcePdf,
    sourceTopic: "Sıvı-mozaik modeli",
    sourcePages: [12, 13],
    difficulty: "Kolay",
    questionType: "karşılaştırma",
    question:
      "Aşağıdakilerden hangisi misel ile çift tabaka arasındaki temel farkı en doğru yansıtır?",
    options: {
      A: "Misel iki yaprakçıklı, çift tabaka ise tek yaprakçıklıdır.",
      B: "Misel küresel amfipatik düzenlenme; çift tabaka ise iki tekli tabakanın oluşturduğu iki boyutlu yapıdır.",
      C: "Misel yalnız proteinlerden, çift tabaka yalnız karbonhidratlardan oluşur.",
      D: "Çift tabaka yalnız suda çözünür bileşiklerde görülür, misel biyolojik zarlarda görülür.",
      E: "Her ikisi de yalnızca iyon kanalları varlığında oluşur."
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerikte misel birkaç düzine veya daha çok amfipatik molekülün oluşturduğu küresel yapı olarak; çift tabaka ise iki lipit tek tabakasının oluşturduğu iki boyutlu yapı olarak tanımlanır.",
    distractorExplanations: {
      A: "Yaprakçık sayısı ters verilmiştir.",
      B: "Doğru seçenek.",
      C: "Her iki yapı da amfipatik lipitlerle ilişkilidir.",
      D: "Biyolojik zarların temel yapısal unsuru çift tabakadır.",
      E: "Bu yapılar kanal varlığına bağlı değildir."
    },
    learningObjective: "Misel ve çift tabaka kavramlarını ayırt etmek.",
    tags: ["misel", "çift tabaka", "sıvı-mozaik", "amfipatik"]
  }),
  makeQuestion({
    id: "MEM-012",
    sourcePdf,
    sourceTopic: "Zar asimetrisi",
    sourcePages: [16],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Plazma zarında fosfatidilserinin dış yaprakçıkta görülmesi için aşağıdakilerden hangisi beklenir?",
    options: {
      A: "Hücrenin apoptoz için işaretlenmesi veya trombositte pıhtılaşma ile ilişkili bir sonuç",
      B: "Glikolizin doğrudan durması",
      C: "Akuaporinlerin yalnız su yerine iyon taşıması",
      D: "GLUT taşıyıcılarının ATP kullanmaya başlaması",
      E: "Klorür-bikarbonat değiştiricisinin yük taşıyan simporte dönüşmesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, fosfatidilserinin dış yaprakçığa hareketinin trombositlerde pıhtı oluşumuyla ve diğer birçok hücrede apoptoz işaretlenmesiyle ilişkili olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu sonuç zar asimetrisi bağlamında verilmez.",
      C: "Akuaporin seçiciliği bununla ilişkili değildir.",
      D: "GLUT pasif taşıyıcıdır; bu değişim anlatılmaz.",
      E: "Anyon değiştiricinin çalışma tipi bu olaya bağlı olarak verilmez."
    },
    learningObjective: "Lipit asimetrisinin biyolojik sonuçlarını açıklamak.",
    tags: ["fosfatidilserin", "zar asimetrisi", "apoptoz", "pıhtılaşma"]
  }),
  makeQuestion({
    id: "MEM-013",
    sourcePdf,
    sourceTopic: "Zar dinamikleri ve akışkanlık",
    sourcePages: [18, 19],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Memeli zarında uzun zincirli doymuş yağ asitlerinin artması için aşağıdakilerden hangisi beklenir?",
    options: {
      A: "Daha düzensiz paketlenme ve akışkanlığın belirgin artması",
      B: "Sıvı-düzenli paketlenmenin teşvik edilmesi",
      C: "Fosfolipitlerin yalnız misel oluşturması",
      D: "Çift tabaka kalınlığının tamamen yok olması",
      E: "Zar proteinlerinin kovalen olarak lipitlere bağlanması"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerik, uzun zincirli doymuş yağ asitlerinin sıvı-düzenli dizi şeklinde paketlenmeyi teşvik ettiğini; doymamış ve kısa zincirli grupların ise bunu engellediğini açıklar.",
    distractorExplanations: {
      A: "Bu daha çok doymamış veya kısa zincirli yağ açil gruplarıyla ilişkilidir.",
      B: "Doğru seçenek.",
      C: "Böyle bir sonuç verilmez.",
      D: "Kalınlığın tamamen yok olması söz konusu değildir.",
      E: "Bu, akışkanlık değişiminin doğrudan sonucu olarak anlatılmaz."
    },
    learningObjective: "Zar akışkanlığını lipit bileşimiyle ilişkilendirmek.",
    tags: ["zar akışkanlığı", "doymuş yağ asidi", "sıvı-düzenli", "paketlenme"]
  }),
  makeQuestion({
    id: "MEM-014",
    sourcePdf,
    sourceTopic: "Zar füzyonu",
    sourcePages: [24, 25],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "İki zarın özgül biçimde kaynaşması için gerekli olaylardan biri aşağıdakilerden hangisidir?",
    options: {
      A: "Yaprakçıkların birbirinden bağımsız olarak uzaklaşması",
      B: "Zar yüzeylerinin birbirine çok yaklaşması ve dış yaprakçıklarda bölgesel bozulma oluşması",
      C: "Tüm zar proteinlerinin çözeltide serbest hale geçmesi",
      D: "Zarın yalnız tek yaprakçığının kalması",
      E: "Zarların temas etmeden uzaktan sinyal ile kaynaşması"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerik, özgül füzyon için tanıma, yüzeylerin yakınlaşması, dış yaprakçıklarda yarı-füzyona yol açan bölgesel bozulma ve ardından sürekli bir çift tabaka oluşumunu gerekli görür.",
    distractorExplanations: {
      A: "Yakınlaşma gerekir; uzaklaşma değil.",
      B: "Doğru seçenek.",
      C: "Füzyon için böyle bir olay anlatılmaz.",
      D: "Çift tabaka bütünlüğü kaynaşarak korunur.",
      E: "Fiziksel yakınlaşma zorunludur."
    },
    learningObjective: "Zar füzyonunun basamaklı doğasını açıklamak.",
    tags: ["zar füzyonu", "yarı-füzyon", "yakınlaşma", "füzyon proteinleri"]
  }),
  makeQuestion({
    id: "MEM-015",
    sourcePdf,
    sourceTopic: "Taşıyıcılar ve kanallar",
    sourcePages: [32, 33],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Kolaylaştırılmış difüzyonda zar proteinlerinin temel katkısı aşağıdakilerden hangisidir?",
    options: {
      A: "Substratı kimyasal olarak değiştirip yeni bir ürün oluşturmak",
      B: "Polar bileşik ve iyonlar için alternatif yol sağlayarak aktifleşme enerjisini düşürmek",
      C: "Daima ATP hidrolizini zorunlu kılmak",
      D: "Substratın stereoözgünlüğünü tamamen ortadan kaldırmak",
      E: "Derişim farkı yönünü tersine çevirmek"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerikte taşıyıcıların ve kanalların polar bileşikler ile iyonların zardan geçişi için alternatif yol sağladığı, böylece aktifleşme enerjisini düşürdüğü belirtilir.",
    distractorExplanations: {
      A: "Kolaylaştırılmış difüzyonda substrat kimyasal olarak değişmez.",
      B: "Doğru seçenek.",
      C: "Bu pasif taşınmadır; ATP zorunlu değildir.",
      D: "Taşıyıcılar aksine stereoözgün bağlanma gösterebilir.",
      E: "Kolaylaştırılmış difüzyon derişim farkı yönünde ilerler."
    },
    learningObjective: "Kolaylaştırılmış difüzyonun enerji bariyeri mantığını açıklamak.",
    tags: ["kolaylaştırılmış difüzyon", "aktifleşme enerjisi", "taşıyıcı", "kanal"]
  }),
  makeQuestion({
    id: "MEM-016",
    sourcePdf,
    sourceTopic: "Taşıyıcılar ve kanallar",
    sourcePages: [33],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Taşıyıcılar ile kanallar karşılaştırıldığında aşağıdakilerden hangisi doğrudur?",
    options: {
      A: "Kanallar daha yüksek hız sağlar, genellikle daha az stereoözgünlük gösterir ve çoğu zaman doyurulamaz.",
      B: "Taşıyıcılar her durumda doyurulamaz, kanallar ise enzimler gibi doygunluğa ulaşır.",
      C: "Kanallar yalnız aktif taşınma yapar, taşıyıcılar yalnız pasif taşır.",
      D: "Taşıyıcılar substrata bağlanmaz, kanallar yüksek stereoözgünlükle bağlanır.",
      E: "Bu iki sınıf arasında işlevsel fark yoktur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, taşıyıcıların substrata yüksek stereoözgünlükle bağlanıp doygunluğa ulaşabildiğini; kanalların ise daha yüksek hız sağladığını, daha az stereoözgünlük gösterdiğini ve genellikle doyurulamadığını vurgular.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Doygunluk davranışı ters verilmiştir.",
      C: "Her iki sınıfta da pasif ve aktif örnekler farklı bağlamlarda bulunabilir; verilen mutlak ayrım yanlıştır.",
      D: "Taşıyıcılar substrata bağlanır.",
      E: "Kaynak içerik açık işlevsel farklar verir."
    },
    learningObjective: "Taşıyıcı ve kanal sistemlerini hız, özgüllük ve doyma açısından ayırt etmek.",
    tags: ["taşıyıcı", "kanal", "doygunluk", "stereoözgünlük"]
  }),
  makeQuestion({
    id: "MEM-017",
    sourcePdf,
    sourceTopic: "Akuaporinler ve iyon kanalları",
    sourcePages: [40, 41],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Eritrosit plazma zarlarında akuaporinlerin yüksek yoğunlukta bulunmasının başlıca nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "CO2'yi kovalent olarak bağlamak",
      B: "Dış osmolaritedeki ani değişimlere hızla hacim yanıtı verebilmek",
      C: "ATP sentezlemek",
      D: "Glukozu fosforillemek",
      E: "Steroid hormon sentezlemek"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerikte eritrositlerin özellikle böbrek medullasında hücre dışı osmolaritedeki ani değişimlere yanıt olarak hızlı şişme-büzüşme yaşayabildiği ve bu nedenle zarlarında yüksek yoğunlukta akuaporin bulunduğu belirtilir.",
    distractorExplanations: {
      A: "Akuaporinlerin görevi bu değildir.",
      B: "Doğru seçenek.",
      C: "ATP sentezi akuaporin işlevi değildir.",
      D: "Glukoz fosforillenmesi sitozolik enzimlerle ilişkilidir.",
      E: "Akuaporinler steroid sentezi yapmaz."
    },
    learningObjective: "Akuaporinlerin fizyolojik bağlamını örnek üzerinden açıklamak.",
    tags: ["akuaporin", "eritrosit", "osmolarite", "su taşınması"]
  }),
  makeQuestion({
    id: "MEM-018",
    sourcePdf,
    sourceTopic: "İyon seçici kanallar",
    sourcePages: [42],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "İyon seçici kanalların plazma zarındaki temel işlevlerinden biri aşağıdakilerden hangisidir?",
    options: {
      A: "Şekerleri polimerleştirmek",
      B: "Belirli iyonlara geçirgenliği belirleyip sitozol iyon derişimi ile zar potansiyelini düzenlemek",
      C: "Fosfolipitleri detarjan gibi çözmek",
      D: "Nükleik asit sentezlemek",
      E: "Doymuş yağ asitlerini çift bağ içeren hale getirmek"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerik, iyon seçici kanalların ve iyon pompalarının birlikte belirli iyonlar için plazma zar geçirgenliğini belirlediğini; sitozol iyon derişimi ile zar potansiyelini düzenlediğini ifade eder.",
    distractorExplanations: {
      A: "İyon kanallarının böyle bir görevi yoktur.",
      B: "Doğru seçenek.",
      C: "Bu kanalların işlevi değildir.",
      D: "Nükleik asit senteziyle ilişkili değildir.",
      E: "Yağ asidi yapısını değiştirmez."
    },
    learningObjective: "İyon seçici kanalların hücresel iyon dengesiyle ilişkisini açıklamak.",
    tags: ["iyon kanalı", "zar potansiyeli", "iyon dengesi", "geçirgenlik"]
  })
];
