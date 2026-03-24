import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf";

export const metabolismQuestions = [
  makeQuestion({
    id: "MET-001",
    sourcePdf,
    sourceTopic: "Glikolizin genel çıktısı",
    sourcePages: [4],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Slayta göre glikolizde bir molekül glukozun parçalanmasıyla doğrudan hangi temel karbonlu ürün oluşur?",
    options: {
      A: "Bir molekül sitrat",
      B: "İki molekül pirüvat",
      C: "Bir molekül asetil-KoA",
      D: "İki molekül laktat",
      E: "Bir molekül riboz 5-fosfat"
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunum, glikolizin bir molekül glukozu iki adet üç karbonlu pirüvata dönüştürdüğünü vurgular.",
    distractorExplanations: {
      A: "Sitrat sitrik asit çevrimi ürünüdür.",
      B: "Doğru seçenek.",
      C: "Asetil-KoA pirüvattan sonra oluşur.",
      D: "Laktat yalnızca belirli koşullarda fermentasyon ürünüdür.",
      E: "Riboz 5-fosfat PPP ile ilişkilidir."
    },
    learningObjective: "Glikolizin temel ürününü doğru tanımlamak.",
    tags: ["glikoliz", "pirüvat", "karbonhidrat metabolizması"]
  }),
  makeQuestion({
    id: "MET-002",
    sourcePdf,
    sourceTopic: "Glikolizin iki evresi",
    sourcePages: [6, 9, 10],
    difficulty: "Kolay",
    questionType: "süreç",
    question:
      "Glikolizin hazırlık ve sonlanma evreleri için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Hazırlık evresi ATP üretir, sonlanma evresi ATP tüketir.",
      B: "Hazırlık evresi ATP gerektirir; sonlanma evresi ATP ve NADH sağlar.",
      C: "Her iki evre de yalnızca NADPH üretir.",
      D: "Hazırlık evresi yalnızca mitokondride gerçekleşir.",
      E: "Sonlanma evresinde hiçbir oksidasyon basamağı yoktur."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF’de ilk beş basamağın ATP gerektiren hazırlık evresi olduğu; sonlanma evresinin ise ATP ve NADH sağlayarak enerji korunumunu gerçekleştirdiği anlatılır.",
    distractorExplanations: {
      A: "Evrelerin enerji yönü ters verilmiştir.",
      B: "Doğru seçenek.",
      C: "Glikolizde NADPH değil NADH vurgulanır.",
      D: "Glikoliz sitozolde gerçekleşir.",
      E: "Gliseraldehit 3-fosfatın yükseltgenmesi önemli bir basamaktır."
    },
    learningObjective: "Glikolizin iki evresinin enerji mantığını ayırt etmek.",
    tags: ["glikoliz", "hazırlık evresi", "sonlanma evresi", "ATP", "NADH"]
  }),
  makeQuestion({
    id: "MET-003",
    sourcePdf,
    sourceTopic: "Pirüvatın akıbetleri",
    sourcePages: [12, 13, 14],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Slaytlarda glikolizle oluşan pirüvat için verilen üç temel katabolik akıbetten biri aşağıdakilerden hangisidir?",
    options: {
      A: "Doğrudan kitine polimerleşmesi",
      B: "Asetil-KoA oluşturarak sitrik asit çevrimine girmesi",
      C: "DNA'ya fosfodiester bağlarıyla eklenmesi",
      D: "Mutlaka her durumda etanole dönüşmesi",
      E: "Yalnızca glikojene çevrilmesi"
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunum, pirüvatın asetil-KoA'ya oksidatif dönüşümü, laktata indirgenmesi veya etanol ve CO2'ye fermentasyonu olmak üzere üç temel katabolik akıbetini verir.",
    distractorExplanations: {
      A: "Kitin oluşumu pirüvatın doğrudan akıbeti değildir.",
      B: "Doğru seçenek.",
      C: "Bu nükleik asit biyosentezine aittir.",
      D: "Etanol yalnızca bazı organizma ve koşullarda son üründür.",
      E: "Sunumda böyle zorunlu tek akıbet verilmez."
    },
    learningObjective: "Pirüvatın başlıca katabolik akıbetlerini listelemek.",
    tags: ["pirüvat", "asetil-KoA", "fermentasyon"]
  }),
  makeQuestion({
    id: "MET-004",
    sourcePdf,
    sourceTopic: "Glikolizin enerji bilançosu",
    sourcePages: [17, 18, 42],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Slayta göre glikolizde bir glukoz molekülü başına net enerji korunumunu en iyi ifade eden seçenek hangisidir?",
    options: {
      A: "Net 2 ATP ve 2 NADH oluşur.",
      B: "Net 4 ATP ve 0 NADH oluşur.",
      C: "Net 1 ATP ve 1 FADH2 oluşur.",
      D: "Hiç ATP oluşmaz, yalnızca ısı açığa çıkar.",
      E: "Net 6 GTP oluşur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Sunumun toplam bilanço slaytları, glikolizden net 2 ATP kazancı ve 2 NADH oluştuğunu gösterir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "4 ATP brüt oluşur; net kazanç 2 ATP'dir ve NADH de üretilir.",
      C: "FADH2 glikolizin net ürünü olarak verilmez.",
      D: "ATP ve NADH oluşumu açıkça anlatılır.",
      E: "GTP glikolizin net ürünü değildir."
    },
    learningObjective: "Glikolizin net enerji bilançosunu hatırlamak.",
    tags: ["glikoliz", "ATP", "NADH", "bilanço"]
  }),
  makeQuestion({
    id: "MET-005",
    sourcePdf,
    sourceTopic: "Fosforillenmiş ara ürünlerin önemi",
    sourcePages: [20],
    difficulty: "Kolay",
    questionType: "neden-sonuç",
    question:
      "Glikolitik ara ürünlerin fosforillenmiş halde bulunmasının slaytlarda verilen nedenlerinden biri aşağıdakilerden hangisidir?",
    options: {
      A: "Plazma zarında fosforillenmiş şekerler için taşıyıcı bulunmaması nedeniyle hücre içinde tutulmaları",
      B: "Şekerlerin DNA'ya dönüşmesini engellemesi",
      C: "Tüm glikolitik enzimleri devre dışı bırakması",
      D: "Molekülün daima elektron vermesini sağlaması",
      E: "Mitokondri içine difüzyonu artırması"
    },
    correctAnswer: "A",
    correctExplanation:
      "PDF, fosforil gruplarının şekerleri hücre içinde tuttuğunu; çünkü plazma zarında fosforillenmiş şekerleri taşıyan sistem bulunmadığını açıklar. Ayrıca bağlanma özgüllüğü ve enerji korunumu da vurgulanır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu, verilen işlevler arasında değildir.",
      C: "Tersine, enzimler ara ürünleri özgül olarak tanır.",
      D: "Fosforillenme tek başına daima elektron verme anlamına gelmez.",
      E: "Mitokondri difüzyonunu artırdığı belirtilmez."
    },
    learningObjective: "Glikolizde fosforillenmiş ara ürünlerin işlevlerini açıklamak.",
    tags: ["fosforillenmiş ara ürün", "glikoliz", "hücre içi tutulum"]
  }),
  makeQuestion({
    id: "MET-006",
    sourcePdf,
    sourceTopic: "Fosfofruktokinaz-1",
    sourcePages: [25],
    difficulty: "Kolay",
    questionType: "süreç",
    question:
      "Fosfofruktokinaz-1 tarafından katalizlenen basamak aşağıdakilerden hangisidir?",
    options: {
      A: "Glukozun glukoz 6-fosfata dönüşümü",
      B: "Fruktoz 6-fosfatın fruktoz 1,6-bisfosfata fosforillenmesi",
      C: "PEP'in pirüvata dönüşümü",
      D: "Pirüvatın laktata indirgenmesi",
      E: "Glukoz 6-fosfatın riboz 5-fosfata dönüşümü"
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda PFK-1'in ATP'den bir fosforil grubunu fruktoz 6-fosfata aktararak fruktoz 1,6-bisfosfat oluşturduğu ve bu basamağın hücresel koşullarda tersinmez olduğu belirtilir.",
    distractorExplanations: {
      A: "Bu ilk fosforilasyon basamağıdır ve başka enzimle ilişkilidir.",
      B: "Doğru seçenek.",
      C: "Bu pirüvat kinaz basamağıdır.",
      D: "Bu laktat dehidrogenaz tepkimesidir.",
      E: "Bu pentoz fosfat yolağıyla ilgilidir."
    },
    learningObjective: "Glikolizdeki kritik fosforilasyon basamaklarını doğru enzimle eşleştirmek.",
    tags: ["PFK-1", "fruktoz 6-fosfat", "fruktoz 1,6-bisfosfat"]
  }),
  makeQuestion({
    id: "MET-007",
    sourcePdf,
    sourceTopic: "Pirüvat kinaz",
    sourcePages: [41],
    difficulty: "Kolay",
    questionType: "süreç",
    question:
      "Pirüvat kinaz basamağında aşağıdaki olaylardan hangisi gerçekleşir?",
    options: {
      A: "Pirüvat, fosfoenolpirüvata çevrilir.",
      B: "Fosfoenolpirüvattan ADP'ye fosforil grubu aktarılarak pirüvat ve ATP oluşur.",
      C: "Fruktoz 1,6-bisfosfat hidroliz edilir.",
      D: "NADPH harcanarak laktat oluşur.",
      E: "Asetil-KoA sitratla kondense olur."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, PEP'tan fosforil grubunun ADP'ye pirüvat kinaz ile aktarılması sonucu ATP oluştuğunu açıklar.",
    distractorExplanations: {
      A: "Bu glukoneogenez yönündeki by-pass ile ilgilidir.",
      B: "Doğru seçenek.",
      C: "Bu FBPaz-1 basamağıdır.",
      D: "Laktik asit fermentasyonu NADH ile ilişkilidir.",
      E: "Bu sitrik asit çevrimine aittir."
    },
    learningObjective: "Glikolizde ATP oluşturan son basamağı tanımak.",
    tags: ["pirüvat kinaz", "PEP", "ATP", "substrat düzeyinde fosforilasyon"]
  }),
  makeQuestion({
    id: "MET-008",
    sourcePdf,
    sourceTopic: "Laktik asit fermentasyonu",
    sourcePages: [48, 49],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Laktik asit fermentasyonunun glikoliz için temel işlevi aşağıdakilerden hangisidir?",
    options: {
      A: "FADH2 üretimini artırmak",
      B: "Pirüvatı sitrata dönüştürmek",
      C: "NADH'ı NAD+'ye geri yükseltgeyerek glikolizin sürmesini sağlamak",
      D: "Glikojen dallanmasını artırmak",
      E: "Riboz 5-fosfat üretmek"
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda anaerobik koşullarda pirüvatın laktata indirgenmesi sırasında NADH'ın NAD+'ye geri dönüştüğü ve böylece glikolizin devam edebildiği belirtilir.",
    distractorExplanations: {
      A: "Laktat fermentasyonunun ana rolü bu değildir.",
      B: "Sitrat oluşumu ayrı bir yoldur.",
      C: "Doğru seçenek.",
      D: "Glikojen dallanmasıyla ilişkili değildir.",
      E: "Riboz 5-fosfat PPP ürünüdür."
    },
    learningObjective: "Laktat fermentasyonunun redoks dengesindeki rolünü açıklamak.",
    tags: ["laktik asit fermentasyonu", "NADH", "NAD+", "anaerobik glikoliz"]
  }),
  makeQuestion({
    id: "MET-009",
    sourcePdf,
    sourceTopic: "Etanol fermentasyonu",
    sourcePages: [52],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Etanol fermentasyonu için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Son indirgenmiş ürün laktattır.",
      B: "Pirüvat iki basamakta etanol ve CO2'ye dönüştürülür.",
      C: "Yalnızca memeli eritrositlerinde görülür.",
      D: "Doğrudan pentoz fosfat yolağının oksidatif evresidir.",
      E: "NAD+'yi tüketip glikolizi durdurur."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, mayalarda ve bazı mikroorganizmalarda pirüvatın iki basamaklı bir süreçle etanol ve CO2'ye dönüştürüldüğünü açıklar.",
    distractorExplanations: {
      A: "Bu laktik asit fermentasyonudur.",
      B: "Doğru seçenek.",
      C: "Sunum bunu maya ve bazı mikroorganizmalar için verir.",
      D: "Pentoz fosfat yolağıyla ilişkili değildir.",
      E: "Amaç NAD+'yi yeniden kazandırmaktır; glikolizi durdurmak değil."
    },
    learningObjective: "Etanol fermentasyonunu laktat fermentasyonundan ayırt etmek.",
    tags: ["etanol fermentasyonu", "maya", "pirüvat", "CO2"]
  }),
  makeQuestion({
    id: "MET-010",
    sourcePdf,
    sourceTopic: "Glukoneogenez by-pass basamakları",
    sourcePages: [58, 60, 67],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Glukoneogenez için aşağıdaki ifadelerden hangisi slaytlarla uyumludur?",
    options: {
      A: "Glikolizin tüm basamaklarının basit tersidir; ayrı enzime gerek yoktur.",
      B: "Glikolizin üç tersinmez basamağı glukoneogenezde by-pass tepkimeleriyle aşılır.",
      C: "Yalnızca tek bir enzimle pirüvattan glukoza dönülür.",
      D: "Sadece eritrosit sitozolünde gerçekleşir.",
      E: "Hiç enerji gerektirmez."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunum, glikolizin üç tersinmez basamağının glukoneogenezde farklı enzimlerle by-pass edildiğini; dolayısıyla iki yolun birbirinin basit tersi olmadığını vurgular.",
    distractorExplanations: {
      A: "Sunum açıkça bunun doğru olmadığını söyler.",
      B: "Doğru seçenek.",
      C: "Birden fazla enzim ve by-pass basamağı gerekir.",
      D: "Başlıca karaciğer, daha az böbrek korteksi ve ince bağırsak epitelinde anlatılır.",
      E: "Enerji açısından masraflı olduğu belirtilir."
    },
    learningObjective: "Glukoneogenezin glikolizin basit tersi olmadığını göstermek.",
    tags: ["glukoneogenez", "by-pass", "tersinmez basamaklar"]
  }),
  makeQuestion({
    id: "MET-011",
    sourcePdf,
    sourceTopic: "Glukoneogenezin enerji maliyeti",
    sourcePages: [69, 71],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "PDF'ye göre iki pirüvattan bir glukoz oluşumu için glukoneogenezde kaç yüksek enerjili fosfat grubu gerekir?",
    options: {
      A: "2 ATP",
      B: "4 ATP",
      C: "2 ATP + 2 GTP",
      D: "4 ATP + 2 GTP",
      E: "Yalnızca 6 GTP"
    },
    correctAnswer: "D",
    correctExplanation:
      "Sunumda piruvattan glukoz sentezi için her glukoz başına 6 yüksek enerjili fosfat gerektiği; bunun 4'ünün ATP, 2'sinin GTP kaynaklı olduğu belirtilir.",
    distractorExplanations: {
      A: "Bu değer yetersizdir.",
      B: "GTP gereksinimini dışarıda bırakır.",
      C: "Toplam enerji maliyetini eksik verir.",
      D: "Doğru seçenek.",
      E: "ATP katkısı da vardır."
    },
    learningObjective: "Glukoneogenezin enerji maliyetini doğru hatırlamak.",
    tags: ["glukoneogenez", "ATP", "GTP", "enerji maliyeti"]
  }),
  makeQuestion({
    id: "MET-012",
    sourcePdf,
    sourceTopic: "Pentoz fosfat yolağının yönlendirilmesi",
    sourcePages: [78, 82, 83, 84, 85],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Glukoz 6-fosfatın glikolize mi yoksa pentoz fosfat yolağına mı gireceğini belirleyen ana etken olarak slaytta ne vurgulanır?",
    options: {
      A: "Yalnızca ATP/ADP oranı",
      B: "Yalnızca sitrik asit çevrimi ara ürünleri",
      C: "Hücrenin ihtiyacı ve sitozoldeki NADP+ düzeyi",
      D: "Mutlaka DNA sentezi hızı",
      E: "Sadece oksijenin varlığı"
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda G6FD basamağının NADP+'ye bağlı olduğu, NADPH ihtiyacı arttığında NADP+ düzeyinin yükselip pentoz fosfat yolağı akışını artırdığı belirtilir.",
    distractorExplanations: {
      A: "Slaytta belirleyici olarak bu tek parametre verilmez.",
      B: "Ana düzenleyici olarak bu vurgulanmaz.",
      C: "Doğru seçenek.",
      D: "DNA sentezi bazı durumlarda riboz ihtiyacını etkileyebilir ama slaytta ana vurgu NADP+ düzeyidir.",
      E: "PPP seçimi yalnızca oksijene bağlanmaz."
    },
    learningObjective: "Pentoz fosfat yolağına akışın NADP+ ve hücresel ihtiyaçla düzenlendiğini açıklamak.",
    tags: ["pentoz fosfat yolağı", "G6FD", "NADP+", "NADPH", "metabolik akış"]
  }),
  makeQuestion({
    id: "MET-013",
    sourcePdf,
    sourceTopic: "Fosfoheksoz izomeraz",
    sourcePages: [23],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Fosfoheksoz izomeraz basamağında aşağıdaki dönüşümlerden hangisi gerçekleşir?",
    options: {
      A: "Glukoz 6-fosfatın fruktoz 6-fosfata tersinir izomerleşmesi",
      B: "Fruktoz 6-fosfatın fruktoz 1,6-bisfosfata tersinmez fosforillenmesi",
      C: "Pirüvatın oksaloasetata karboksillenmesi",
      D: "1,3-bisfosfogliserattan ATP oluşumu",
      E: "Ribuloz 5-fosfatın glukoz 6-fosfata dönüşmesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, fosfoheksoz izomerazın aldoz olan glukoz 6-fosfatı ketoz olan fruktoz 6-fosfata tersinir olarak dönüştürdüğünü belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu PFK-1 basamağıdır.",
      C: "Bu glukoneogenez by-pass'ında görülür.",
      D: "Bu fosfogliserat kinaz basamağıdır.",
      E: "Bu ifade pentoz fosfat yolağının yeniden düzenleme tarafını çağrıştırır; burada olan dönüşüm bu değildir."
    },
    learningObjective: "Glikolizin erken izomerizasyon basamağını doğru enzimle eşleştirmek.",
    tags: ["fosfoheksoz izomeraz", "glukoz 6-fosfat", "fruktoz 6-fosfat", "glikoliz"]
  }),
  makeQuestion({
    id: "MET-014",
    sourcePdf,
    sourceTopic: "Fosfofruktokinaz-1",
    sourcePages: [25],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Fruktoz 6-fosfatın fruktoz 1,6-bisfosfata dönüşümü için aşağıdakilerden hangisi doğrudur?",
    options: {
      A: "Glikolitik yolağın ilk adanmış basamağıdır.",
      B: "Her iki yönde eşit kolaylıkla ilerler ve herhangi bir yolak özgüllüğü yoktur.",
      C: "Sadece pentoz fosfat yolağında kullanılır.",
      D: "ATP değil yalnız GTP gerektirir.",
      E: "Son ürün olarak glukoz açığa çıkarır."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, PFK-1 basamağını hücresel koşullarda tersinmez olan ve fruktoz 1,6-bisfosfatı glikolize adayan ilk basamak olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu basamak tersinmez olarak verilir.",
      C: "Glikolize adanmış bir basamaktır.",
      D: "ATP kullanıldığı anlatılır.",
      E: "Bu basamak glukoz oluşturmaz."
    },
    learningObjective: "PFK-1 basamağının yolak taahhüdündeki önemini açıklamak.",
    tags: ["PFK-1", "adanmış basamak", "glikoliz", "fruktoz 1,6-bisfosfat"]
  }),
  makeQuestion({
    id: "MET-015",
    sourcePdf,
    sourceTopic: "Aldolaz ve trioz fosfatlar",
    sourcePages: [30, 31],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Aldolaz tepkimesinin doğrudan ürünleri aşağıdakilerden hangisidir?",
    options: {
      A: "Gliseraldehit 3-fosfat ve dihidroksiaseton fosfat",
      B: "Pirüvat ve laktat",
      C: "Glukoz 6-fosfat ve fruktoz 6-fosfat",
      D: "Riboz 5-fosfat ve ksülüloz 5-fosfat",
      E: "Malat ve oksaloasetat"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, fruktoz 1,6-bisfosfatın aldolaz ile iki farklı trioz fosfata, yani gliseraldehit 3-fosfat ile dihidroksiaseton fosfata bölündüğünü belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu fermentasyonla ilgilidir.",
      C: "Bu daha erken basamaklardır.",
      D: "Bunlar pentoz fosfat yolağındadır.",
      E: "Bu sitrik asit çevrimi/glukoneogenez bağlamıdır."
    },
    learningObjective: "Aldolaz basamağının ürünlerini tanımak.",
    tags: ["aldolaz", "trioz fosfat", "G3P", "DHAP", "glikoliz"]
  }),
  makeQuestion({
    id: "MET-016",
    sourcePdf,
    sourceTopic: "Aldolaz ve trioz fosfatlar",
    sourcePages: [31],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Trioz fosfat izomeraz basamağının glikoliz için gerekli olmasının başlıca nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Dihidroksiaseton fosfatın doğrudan yıkılamaması ve gliseraldehit 3-fosfata çevrilmesi gereği",
      B: "Pirüvatı asetil-KoA'ya dönüştürmesi",
      C: "ATP sentezini doğrudan gerçekleştirmesi",
      D: "Glukozu hücre içine taşıması",
      E: "NADPH üretmesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, trioz fosfatlardan yalnız gliseraldehit 3-fosfatın glikoliz tepkimelerinde doğrudan yıkılabildiğini; DHAP'nin trioz fosfat izomeraz ile G3P'ye çevrilerek yolağa katıldığını anlatır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu PDH ile ilişkilidir.",
      C: "Bu basamak ATP üretmez.",
      D: "Taşıma basamağı değildir.",
      E: "NADPH pentoz fosfat yolağıyla ilişkilidir."
    },
    learningObjective: "Trioz fosfat izomerazın akı devamlılığındaki rolünü açıklamak.",
    tags: ["trioz fosfat izomeraz", "DHAP", "G3P", "glikoliz"]
  }),
  makeQuestion({
    id: "MET-017",
    sourcePdf,
    sourceTopic: "Gliseraldehit 3-fosfat dehidrogenaz",
    sourcePages: [36],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Glikolizin sürmesi için NAD+'nın yeniden kazanılması gereksinimi en doğrudan hangi basamakla ilişkilidir?",
    options: {
      A: "Gliseraldehit 3-fosfatın 1,3-bisfosfogliserata yükseltgenmesi",
      B: "Glukoz 6-fosfatın fruktoz 6-fosfata dönüşümü",
      C: "Fosfoenolpirüvatın pirüvata dönüşümü",
      D: "Glukoz 6-fosfatın serbest glukoza hidrolizi",
      E: "Riboz 5-fosfatın ksülüloz 5-fosfata izomerizasyonu"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, gliseraldehit 3-fosfat dehidrogenaz basamağında NADH oluştuğunu ve NAD+ havuzunun küçük olması nedeniyle NADH'nin yeniden yükseltgenerek geri kazanılmaması durumunda glikolizin duracağını vurgular.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu basamak NAD+ gereksiniminin kritik noktası olarak verilmez.",
      C: "Bu ATP oluşturan son basamaktır.",
      D: "Bu glukoneogeneze aittir.",
      E: "Bu pentoz fosfat yolağıyla ilgilidir."
    },
    learningObjective: "NAD+ yenilenmesinin glikolizde hangi basamak için kritik olduğunu açıklamak.",
    tags: ["GAPDH", "NAD+", "NADH", "glikoliz", "fermentasyon"]
  }),
  makeQuestion({
    id: "MET-018",
    sourcePdf,
    sourceTopic: "Fosfogliserat kinaz",
    sourcePages: [37],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "1,3-Bisfosfogliserattan ADP'ye fosforil grubunun aktarılmasıyla hangi iki ürün oluşur?",
    options: {
      A: "ATP ve 3-fosfogliserat",
      B: "NADPH ve ribuloz 5-fosfat",
      C: "GTP ve süksinat",
      D: "Laktat ve NAD+",
      E: "Glukoz ve Pi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, fosfogliserat kinazın 1,3-bisfosfogliserattaki yüksek enerjili fosforil grubunu ADP'ye aktararak ATP ve 3-fosfogliserat oluşturduğunu açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bunlar pentoz fosfat yolağı ürünleridir.",
      C: "Bu sitrik asit çevrimi bağlamıdır.",
      D: "Bu fermentasyon sonucudur.",
      E: "Bu basamakta glukoz oluşmaz."
    },
    learningObjective: "Fosfogliserat kinaz basamağının ürünlerini tanımak.",
    tags: ["fosfogliserat kinaz", "1,3-BPG", "ATP", "3-fosfogliserat"]
  }),
  makeQuestion({
    id: "MET-019",
    sourcePdf,
    sourceTopic: "Enolaz",
    sourcePages: [40],
    difficulty: "Orta",
    questionType: "mekanizma",
    question:
      "Enolaz basamağı için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "2-fosfogliserattan bir su çıkarılarak fosfoenolpirüvat oluşturulur.",
      B: "Pirüvat karboksilaz ile biyotin kullanılır.",
      C: "Fruktoz 1,6-bisfosfat hidrolize edilir.",
      D: "NADP+ indirgenerek NADPH oluşur.",
      E: "Glukoz 6-fosfat sitozolden dışarı taşınır."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, enolazın 2-fosfogliserattan suyu tersinir olarak uzaklaştırıp yüksek fosforil transfer potansiyelli fosfoenolpirüvatı oluşturduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu glukoneogenez başlangıcındadır.",
      C: "Bu FBPaz-1 ile ilişkilidir.",
      D: "Bu PPP oksidatif evresidir.",
      E: "Böyle bir mekanizma verilmez."
    },
    learningObjective: "Enolaz basamağının dehidrasyon mantığını açıklamak.",
    tags: ["enolaz", "PEP", "dehidrasyon", "glikoliz"]
  }),
  makeQuestion({
    id: "MET-020",
    sourcePdf,
    sourceTopic: "Laktik asit fermentasyonu",
    sourcePages: [48],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Eritrositlerin aerobik koşullarda bile laktat oluşturabilmesi için kaynak içerikte verilen temel gerekçe aşağıdakilerden hangisidir?",
    options: {
      A: "Mitokondrilerinin bulunmaması",
      B: "Glikoliz enzimlerinden yoksun olmaları",
      C: "Yalnız yağ asidi kullanabilmeleri",
      D: "Pentoz fosfat yolağının hiç çalışmaması",
      E: "Kloroplast taşımaları"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik eritrositlerde mitokondri bulunmadığını, bu nedenle pirüvatı CO2'ye kadar yükseltgeyemediklerini ve glukozdan laktat oluşturduklarını vurgular.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Tam tersine glikoliz yürür.",
      C: "Böyle bir bilgi verilmez.",
      D: "Bu temel gerekçe olarak verilmez.",
      E: "Eritrositlerde kloroplast bulunmaz."
    },
    learningObjective: "Laktat oluşumunun hücresel organel eksikliğiyle ilişkisini açıklamak.",
    tags: ["eritrosit", "laktat", "mitokondri", "fermentasyon"]
  }),
  makeQuestion({
    id: "MET-021",
    sourcePdf,
    sourceTopic: "Glukoneogenez by-pass basamakları",
    sourcePages: [60, 62],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Glukoneogenezde oksaloasetatın önce malata dönüştürülmesinin başlıca nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Mitokondri zarında oksaloasetat için taşıyıcı olmaması",
      B: "Malatın ATP üretimini doğrudan sağlaması",
      C: "Oksaloasetatın glikolizde kullanılmaması",
      D: "PEP'in mitokondriye girememesi",
      E: "Malatın nükleik asit sentezinin öncülü olması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, mitokondri zarında oksaloasetat için taşıyıcı bulunmadığını; bu yüzden oksaloasetatın malata indirgenip taşıyıcıyla sitozole çıkarıldığını ve burada yeniden oksaloasetata yükseltildiğini açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu dönüşümün temel amacı taşıma ve redoks eşlemesidir.",
      C: "Bu, malata dönüştürmenin nedeni olarak verilmez.",
      D: "Asıl sorun oksaloasetatın taşınamamasıdır.",
      E: "Böyle bir gerekçe anlatılmaz."
    },
    learningObjective: "Malat ara basamağını mitokondri-sitozol taşınmasıyla ilişkilendirmek.",
    tags: ["glukoneogenez", "oksaloasetat", "malat", "mitokondri taşıma"]
  }),
  makeQuestion({
    id: "MET-022",
    sourcePdf,
    sourceTopic: "Pentoz fosfat yolağının yönlendirilmesi",
    sourcePages: [83, 84],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Pentoz fosfat yolağının oksidatif olmayan evresi için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Başlıca transketolaz ve transaldolaz enzimleriyle yeniden düzenlemeler içerir.",
      B: "Yalnız ATP üretmek için çalışır.",
      C: "G6FD tarafından başlatılır ve doğrudan NADPH oluşturur.",
      D: "Fruktoz 1,6-bisfosfatazın zorunlu olduğu tek evredir.",
      E: "Mitokondri iç zarında gerçekleşir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, PPP'nin oksidatif olmayan evresinde pentoz fosfatların yeniden düzenlenmesinde başlıca transketolaz ve transaldolaz enzimlerinin görev yaptığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu evre ATP üretim odaklı olarak tanımlanmaz.",
      C: "Bu, oksidatif evreye aittir.",
      D: "FBPaz-1 glukoneogenezdedir.",
      E: "Kaynak içerik bunu sitozolik bağlamda anlatır."
    },
    learningObjective: "PPP'nin oksidatif olmayan evresini oksidatif evreden ayırt etmek.",
    tags: ["PPP", "oksidatif olmayan evre", "transketolaz", "transaldolaz"]
  }),
  makeQuestion({
    id: "MET-023",
    sourcePdf,
    sourceTopic: "Pirüvatın akıbetleri",
    sourcePages: [12],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Pirüvatın aerobik katabolik akıbeti için aşağıdakilerden hangisi doğrudur?",
    options: {
      A: "Karboksil grubunu CO2 olarak kaybedip asetil-KoA'nın asetil grubunu oluşturabilir.",
      B: "Yalnız doğrudan riboz 5-fosfata dönüştürülür.",
      C: "Daima etanole dönüşür.",
      D: "Yalnız çekirdekte ATP sentezler.",
      E: "Mutlaka peptidoglikana katılır."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik pirüvatın bir kaderinin karboksil grubunu CO2 olarak kaybedip asetil-koenzim A'nın asetil grubunu oluşturmak olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu PPP ürünüyle ilgili yanlış bir ifadedir.",
      C: "Etanol yalnız belirli anaerobik koşullarda oluşur.",
      D: "Bu şekilde bir kader verilmez.",
      E: "Peptidoglikanla ilgisi yoktur."
    },
    learningObjective: "Pirüvatın aerobik oksidatif kaderini tanımak.",
    tags: ["pirüvat", "asetil-KoA", "CO2", "aerobik metabolizma"]
  }),
  makeQuestion({
    id: "MET-024",
    sourcePdf,
    sourceTopic: "Pirüvatın akıbetleri",
    sourcePages: [16],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Pirüvatın anabolik kaderleri için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Alanin amino asidi ve yağ asidi sentezi için karbon iskeleti sağlayabilir.",
      B: "Yalnız laktata indirgenebilir; başka öncül rolü yoktur.",
      C: "Sadece nükleik asit bazına dönüşür.",
      D: "Yalnız oksidatif fosforillenmede son elektron alıcısıdır.",
      E: "Her zaman glikojene doğrudan polimerleşir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik pirüvatın yalnız katabolik bir ara ürün olmadığını; alanin ve yağ asidi sentezi için de karbon iskeleti sağlayabildiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Anabolik kaderleri de vardır.",
      C: "Bu şekilde sınırlanmaz.",
      D: "Elektron alıcısı değildir.",
      E: "Doğrudan böyle bir polimerleşme anlatılmaz."
    },
    learningObjective: "Pirüvatın anabolik kullanımını katabolik akıbetlerinden ayırt etmek.",
    tags: ["pirüvat", "anabolik", "alanin", "yağ asidi", "karbon iskeleti"]
  }),
  makeQuestion({
    id: "MET-025",
    sourcePdf,
    sourceTopic: "Glukoneogenez by-pass basamakları",
    sourcePages: [60, 61],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Piruvat karboksilaz için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Biyotin bağımlıdır ve pozitif efektör olarak asetil-KoA'ya ihtiyaç duyar.",
      B: "Yalnız sitozolde çalışır ve NADPH kullanır.",
      C: "Fruktoz 6-fosfatı doğrudan glukoza çevirir.",
      D: "G6FD'nin diğer adıdır.",
      E: "Laktatı etanole dönüştürür."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik piruvat karboksilazın biyotin koenzimine bağımlı olduğunu ve glukoneogenik yolaktaki ilk düzenleyici enzim olarak asetil-KoA tarafından pozitif etkilenmeye ihtiyaç duyduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Mitokondri bağlamında ve farklı kofaktör mantığıyla anlatılır.",
      C: "Bu G6Paz ile ilişkilidir.",
      D: "G6FD PPP enzimidir.",
      E: "Bu fermentasyonla ilgilidir."
    },
    learningObjective: "Piruvat karboksilazın kofaktör ve düzenleme özelliklerini açıklamak.",
    tags: ["piruvat karboksilaz", "biyotin", "asetil-KoA", "glukoneogenez"]
  }),
  makeQuestion({
    id: "MET-026",
    sourcePdf,
    sourceTopic: "Glukoneogenezin enerji maliyeti",
    sourcePages: [69, 74],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Glikoliz ve glukoneogenezin karşılıklı düzenlenmesi için kaynak içerikte aşağıdakilerden hangisi vurgulanır?",
    options: {
      A: "Bazı basamakların allosterik ve kovalent değişimlerle karşılıklı düzenlenmesi",
      B: "İki yolak arasında hiçbir düzenleyici ilişki olmaması",
      C: "Her iki yolakta da aynı tersinmez basamakların aynı anda eşit hızda çalışması",
      D: "Düzenlemenin yalnız DNA metilasyonu ile sağlanması",
      E: "Yalnız oksijen varlığıyla açıklanması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik glikoliz ve glukoneogenezdeki bazı tepkimelerin allosterik ve kovalent değişimlerle karşılıklı biçimde düzenlendiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Tam tersine karşılıklı düzenleme vurgulanır.",
      C: "Bu verimsiz bir döngü olurdu; kaynak içerik karşılıklı kontrolü anlatır.",
      D: "Bu düzeyde bir düzenleme bu slaytta verilmez.",
      E: "Düzenleme yalnız oksijene indirgenmez."
    },
    learningObjective: "Glikoliz ve glukoneogenezin karşılıklı düzenleme mantığını açıklamak.",
    tags: ["karşılıklı düzenleme", "glikoliz", "glukoneogenez", "allosterik", "kovalent"]
  })
];
