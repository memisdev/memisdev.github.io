import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Sitrik Asit Çevrimi.pdf";

export const citricCycleQuestions = [
  makeQuestion({
    id: "CAC-001",
    sourcePdf,
    sourceTopic: "Pirüvatın asetil-KoA'ya dönüşümü",
    sourcePages: [5],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Pirüvat dehidrogenaz kompleksinin katalizlediği temel dönüşüm aşağıdakilerden hangisidir?",
    options: {
      A: "Pirüvatın laktata indirgenmesi",
      B: "Pirüvatın asetil-KoA ve CO2'ye oksidatif dekarboksillenmesi",
      C: "Pirüvatın doğrudan oksaloasetata çevrilmesi",
      D: "Pirüvatın fruktoz 1,6-bisfosfata dönüştürülmesi",
      E: "Pirüvatın etanole indirgenmesi"
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta PDH kompleksinin pirüvatı asetil-KoA ve CO2'ye dönüştüren, esasen oksidatif dekarboksillenme yapan enzim sistemi olduğu belirtilir.",
    distractorExplanations: {
      A: "Bu laktik asit fermentasyonunda görülür.",
      B: "Doğru seçenek.",
      C: "Bu dönüşüm glukoneogenez yan geçişiyle ilişkilidir.",
      D: "Pirüvatın böyle bir dönüşümü sitrik asit çevrimi konusu değildir.",
      E: "Etanol oluşumu fermentasyonla ilgilidir."
    },
    learningObjective: "Pirüvat dehidrogenaz kompleksinin genel işlevini tanımlamak.",
    tags: ["PDH", "asetil-KoA", "oksidatif dekarboksillenme"]
  }),
  makeQuestion({
    id: "CAC-002",
    sourcePdf,
    sourceTopic: "Pirüvat dehidrogenaz kompleksinin koenzimleri",
    sourcePages: [8],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Aşağıdakilerden hangisi pirüvat dehidrogenaz kompleksinin gerektirdiği beş koenzim/prostetik gruptan biridir?",
    options: {
      A: "Biotin",
      B: "Tiyamin pirofosfat (TPP)",
      C: "Tetrahidrofolat",
      D: "S-adenozilmetiyonin",
      E: "Kreatin fosfat"
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda PDH kompleksi için TPP, FAD, koenzim A, NAD ve lipoat gerektiği belirtilir; seçenekler içinde doğrudan verilen koenzim TPP'dir.",
    distractorExplanations: {
      A: "Biotin bu slaytta PDH koenzimleri arasında verilmez.",
      B: "Doğru seçenek.",
      C: "Tetrahidrofolat farklı tepkime tipleriyle ilişkilidir.",
      D: "SAM bu kompleksin bileşeni olarak verilmez.",
      E: "Kreatin fosfat enerji tamponudur; PDH koenzimi değildir."
    },
    learningObjective: "PDH kompleksinin koenzim gereksinimlerini tanımak.",
    tags: ["PDH", "koenzim", "TPP", "lipoat", "FAD"]
  }),
  makeQuestion({
    id: "CAC-003",
    sourcePdf,
    sourceTopic: "Pirüvat dehidrogenaz kompleksinin enzimleri",
    sourcePages: [9, 11, 13, 15],
    difficulty: "Zor",
    questionType: "eşleştirme",
    question:
      "Pirüvat dehidrogenaz kompleksi içindeki enzim-alt basamak eşleşmelerinden hangisi doğrudur?",
    options: {
      A: "E1, hidroksietil grubunu asetil-KoA'ya aktaran dihidrolipoil transasetilazdır.",
      B: "E2, elektronları FAD üzerinden NAD+'a aktaran dihidrolipoil dehidrogenazdır.",
      C: "E3, yükseltgenmiş lipoamidi yeniden oluşturan dihidrolipoil dehidrogenazdır.",
      D: "E1, süksinatı fumarata oksitleyen enzimdir.",
      E: "E2, sitrat sentazın alternatif adıdır."
    },
    correctAnswer: "C",
    correctExplanation:
      "Slaytlarda E1'in pirüvat dehidrogenaz, E2'nin dihidrolipoil transasetilaz, E3'ün ise dihidrolipoil dehidrogenaz olduğu; özellikle 4 ve 5. basamaklarda E3'ün elektronları FAD üzerinden NAD+'a aktararak kompleksin yükseltgenmiş durumunu yenilediği anlatılır.",
    distractorExplanations: {
      A: "Bu tanım E2'ye aittir, E1'e değil.",
      B: "Elektronların FAD üzerinden NAD+'a aktarılması E3 ile ilişkilidir.",
      C: "Doğru seçenek.",
      D: "Süksinat dehidrogenaz sitrik asit çevrimi enzimidir, PDH alt birimi değildir.",
      E: "Sitrat sentaz çevrimdeki ayrı bir enzimdir."
    },
    learningObjective: "PDH kompleksinin alt birimlerinin görevlerini ayırt etmek.",
    tags: ["PDH", "E1", "E2", "E3", "enzim"]
  }),
  makeQuestion({
    id: "CAC-004",
    sourcePdf,
    sourceTopic: "Substrat yönlendirilmesi",
    sourcePages: [16],
    difficulty: "Orta",
    questionType: "mekanizma",
    question:
      "PDF'de PDH kompleksindeki çok basamaklı dizinin ara ürünleri için hangi ilke özellikle vurgulanır?",
    options: {
      A: "Ara ürünler kompleksten ayrılır ve sitozolde dağılır.",
      B: "Ara ürünler kompleksi terk etmez; bölgesel derişim yüksek tutulur.",
      C: "Ara ürünlerin tümü ATP'ye dönüştürülür.",
      D: "Ara ürünler yalnızca ribozom üzerinde taşınır.",
      E: "Ara ürünlerin oluşumu enzimsizdir."
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta PDH'nin beş tepkimelik dizisinin substrat yönlendirilmesine örnek olduğu, ara ürünlerin kompleksi asla terk etmediği ve E2 substratının yerel derişimini yüksek tuttuğu belirtilir.",
    distractorExplanations: {
      A: "Sunum bunun tersini söyler.",
      B: "Doğru seçenek.",
      C: "Ara ürünlerin hepsi ATP'ye çevrilmez.",
      D: "Ribozomun bu süreçle ilgisi yoktur.",
      E: "Tüm basamaklar enzimatik olarak yürür."
    },
    learningObjective: "Substrat yönlendirilmesinin çok enzimli komplekslerdeki avantajını açıklamak.",
    tags: ["substrat yönlendirilmesi", "PDH", "ara ürün"]
  }),
  makeQuestion({
    id: "CAC-005",
    sourcePdf,
    sourceTopic: "Sitrik asit çevriminin ilk basamağı",
    sourcePages: [19],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Sitrik asit çevriminin ilk tepkimesinde aşağıdaki olaylardan hangisi gerçekleşir?",
    options: {
      A: "Süksinatın fumarata oksitlenmesi",
      B: "Asetil-KoA'nın oksaloasetat ile kondensasyonu sonucu sitrat oluşması",
      C: "Malatın oksaloasetata indirgenmesi",
      D: "Pirüvatın laktata dönüşmesi",
      E: "Fruktoz 6-fosfatın fosforillenmesi"
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta çevrimin ilk basamağının sitrat sentaz kataliziyle asetil-KoA ve oksaloasetatın kondensasyonu olduğu belirtilir.",
    distractorExplanations: {
      A: "Bu çevrimin daha ileri bir basamağıdır.",
      B: "Doğru seçenek.",
      C: "Malat dehidrogenaz oksidasyon yapar; indirgenme değil.",
      D: "Bu fermentasyon örneğidir.",
      E: "Bu glikolize aittir."
    },
    learningObjective: "Sitrik asit çevriminin giriş tepkimesini tanımak.",
    tags: ["sitrat sentaz", "oksaloasetat", "asetil-KoA", "sitrat"]
  }),
  makeQuestion({
    id: "CAC-006",
    sourcePdf,
    sourceTopic: "İzositrat dehidrogenaz",
    sourcePages: [21, 22],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "İzositrat dehidrogenaz hakkında aşağıdaki ifadelerden hangisi slaytlarla uyumludur?",
    options: {
      A: "Tüm hücrelerde yalnızca FAD kullanan tek bir şekli vardır.",
      B: "NADP+-bağımlı formun ana işlevi indirgeyici anabolik tepkimeler için NADPH üretmektir.",
      C: "Yalnızca sitozolde bulunur ve sitrik asit çevrimine katılmaz.",
      D: "İzositratı süksinata doğrudan dönüştürür.",
      E: "Hiçbir metal iyonuna gereksinim duymaz."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda izositrat dehidrogenazın NAD+-bağımlı ve NADP+-bağımlı iki formu olduğu; özellikle sitozol ve mitokondride bulunan NADP+-bağımlı formun ana işlevinin NADPH üretmek olduğu belirtilir.",
    distractorExplanations: {
      A: "Slayt iki farklı formdan söz eder ve FAD verilmez.",
      B: "Doğru seçenek.",
      C: "NAD+-bağımlı form mitokondri matriksinde sitrik asit çevrimiyle ilişkilidir.",
      D: "İzositrat önce α-ketoglutarata oksidatif dekarboksillenir.",
      E: "Mn2+ kullanımından söz edilir."
    },
    learningObjective: "İzositrat dehidrogenazın iki formu arasındaki işlev farkını ayırt etmek.",
    tags: ["izositrat dehidrogenaz", "NADPH", "NADP", "NAD"]
  }),
  makeQuestion({
    id: "CAC-007",
    sourcePdf,
    sourceTopic: "Enerjinin korunumu",
    sourcePages: [24, 28],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Sitrik asit çevriminde doğrudan ATP eşdeğeri oluşumunun gerçekleştiği basamak aşağıdakilerden hangisidir?",
    options: {
      A: "Sitratın izositrata dönüşümü",
      B: "İzositratın α-ketoglutarata yükseltgenmesi",
      C: "Süksinil-KoA'nın süksinata dönüşümü",
      D: "Süksinatın fumarata yükseltgenmesi",
      E: "Malatın oksaloasetata yükseltgenmesi"
    },
    correctAnswer: "C",
    correctExplanation:
      "PDF'de çevrimin her devrinde doğrudan yalnızca bir ATP eşdeğerinin, süksinil-KoA'dan süksinat oluşurken korunduğu belirtilir.",
    distractorExplanations: {
      A: "Bu basamak ATP üretmez.",
      B: "Bu basamak NADH üretimiyle ilişkilidir.",
      C: "Doğru seçenek.",
      D: "Bu basamak FADH2 oluşumu ile ilişkilidir.",
      E: "Bu basamak NADH oluşumuna katkı verir."
    },
    learningObjective: "Sitrik asit çevrimindeki substrat düzeyinde fosforilasyonu tanımak.",
    tags: ["süksinil-KoA", "ATP", "enerji korunumu"]
  }),
  makeQuestion({
    id: "CAC-008",
    sourcePdf,
    sourceTopic: "Amfibolik yolak ve anapleroz",
    sourcePages: [32, 34],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Sitrik asit çevriminin amfibolik olarak tanımlanmasının temel nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Yalnızca ATP tüketen bir biyosentetik yolak olması",
      B: "Hem katabolik enerji elde etmede hem de biyosentetik öncül sağlamada görev alması",
      C: "Sadece bitkilerde bulunması",
      D: "Çevrim ara ürünlerinin hiçbir zaman dışarı alınmaması",
      E: "Tüm ara ürünlerinin yalnızca bir kez kullanılması"
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytlarda sitrik asit çevriminin hem katabolik hem anabolik süreçlerde görev aldığı, ara ürünlerinin biyosentetik öncüller olarak kullanılabildiği ve anaplerotik tepkimelerle yeniden yerine konduğu belirtilir.",
    distractorExplanations: {
      A: "Çevrim yalnızca ATP tüketen bir yolak olarak verilmez.",
      B: "Doğru seçenek.",
      C: "Sadece bitkilere özgü olduğu söylenmez.",
      D: "Ara ürünler biyosentetik yolaklara ayrılabilir.",
      E: "Ara ürünler çevrim boyunca tekrar kullanılır."
    },
    learningObjective: "Amfibolik yolak kavramını anaplerotik tepkimelerle ilişkilendirmek.",
    tags: ["amfibolik", "anaplerotik", "biyosentetik öncül", "sitrik asit çevrimi"]
  }),
  makeQuestion({
    id: "CAC-009",
    sourcePdf,
    sourceTopic: "Pirüvat dehidrogenaz kompleksinin enzimleri",
    sourcePages: [9],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Pirüvat dehidrogenaz kompleksi aşağıdaki alt enzimlerden hangisini içerir?",
    options: {
      A: "Dihidrolipoil transasetilaz",
      B: "Akonitaz",
      C: "Fumaraz",
      D: "Sitrat sentaz",
      E: "Pirüvat karboksilaz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik PDH kompleksinin E1 pirüvat dehidrogenaz, E2 dihidrolipoil transasetilaz ve E3 dihidrolipoil dehidrogenazdan oluştuğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu sitrik asit çevrimi enzimidir.",
      C: "Bu da çevrim enzimidir.",
      D: "Bu çevrimin ilk basamağını katalizler.",
      E: "Bu glukoneogenez/PDH öncesi yan basamakla ilgilidir."
    },
    learningObjective: "PDH kompleksinin alt enzimlerinden birini tanımak.",
    tags: ["PDH", "E2", "dihidrolipoil transasetilaz", "enzim"]
  }),
  makeQuestion({
    id: "CAC-010",
    sourcePdf,
    sourceTopic: "Substrat yönlendirilmesi",
    sourcePages: [10, 16],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "PDH kompleksinde ara ürünlerin enzim yüzeyini terk etmemesi için aşağıdakilerden hangisi beklenen sonuçtur?",
    options: {
      A: "Yerel substrat derişiminin yüksek tutulması",
      B: "Bütün ara ürünlerin sitozole dağılması",
      C: "Çevrimin ATP tüketiminin zorunlu hale gelmesi",
      D: "Ara ürünlerin yalnız DNA'ya bağlanması",
      E: "Fosfodiester bağlarının oluşması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, substrat yönlendirilmesi sayesinde ara ürünlerin kompleksi terk etmediğini ve E2 substratı için yerel derişimin yüksek tutulduğunu vurgular.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kaynak içerik bunun tersini söyler.",
      C: "Bu etki anlatılmaz.",
      D: "DNA ile ilgisi yoktur.",
      E: "Nükleik asit bağlarıyla ilgili değildir."
    },
    learningObjective: "Substrat yönlendirilmesinin işlevsel sonucunu açıklamak.",
    tags: ["substrat yönlendirilmesi", "PDH", "yerel derişim", "ara ürün"]
  }),
  makeQuestion({
    id: "CAC-011",
    sourcePdf,
    sourceTopic: "Sitrik asit çevriminin ilk basamağı",
    sourcePages: [20],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Akonitazın katalizlediği dönüşüm için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Sitratın cis-akonitat ara ürünü üzerinden izositrata tersinir dönüşümünü katalizler.",
      B: "Süksinatı fumarata oksitler.",
      C: "Malatı oksaloasetata indirger.",
      D: "Pirüvatı asetil-KoA'ya çevirir.",
      E: "Alfa-ketoglutaratı süksinata hidroliz eder."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik akonitazın sitratın cis-akonitat ara ürünü üzerinden izositrata tersinir dönüşümünü katalizlediğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu süksinat dehidrogenaz basamağıdır.",
      C: "Malat dehidrogenaz oksidasyon yapar.",
      D: "Bu PDH kompleksidir.",
      E: "Bu ifade yanlıştır."
    },
    learningObjective: "Akonitaz basamağını diğer çevrim basamaklarından ayırmak.",
    tags: ["akonitaz", "cis-akonitat", "izositat", "sitrat"]
  }),
  makeQuestion({
    id: "CAC-012",
    sourcePdf,
    sourceTopic: "Alfa-ketoglutarat dehidrogenaz",
    sourcePages: [23],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Alfa-ketoglutaratın süksinil-KoA'ya dönüşümünde aşağıdakilerden hangisi doğru eşleşmedir?",
    options: {
      A: "Elektron alıcısı NAD+, taşıyıcı KoA",
      B: "Elektron alıcısı FADH2, taşıyıcı glikojen",
      C: "Elektron alıcısı ATP, taşıyıcı riboz",
      D: "Elektron alıcısı O2, taşıyıcı gliserol",
      E: "Elektron alıcısı NADPH, taşıyıcı sitrat"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik alfa-ketoglutarat dehidrogenaz basamağında NAD+'nın elektron alıcısı, KoA'nın ise süksinil grubunun taşıyıcısı olarak görev yaptığını açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "FADH2 elektron alıcısı olarak verilmez; glikojen taşıyıcı değildir.",
      C: "Bu eşleşme çevrim basamağıyla ilgisizdir.",
      D: "Bu taşıyıcı çifti kaynak içerikte yoktur.",
      E: "NADPH ve sitrat bu şekilde rol almaz."
    },
    learningObjective: "Alfa-ketoglutarat dehidrogenaz basamağının kofaktör mantığını tanımak.",
    tags: ["alfa-ketoglutarat dehidrogenaz", "NAD+", "KoA", "süksinil-KoA"]
  }),
  makeQuestion({
    id: "CAC-013",
    sourcePdf,
    sourceTopic: "Enerjinin korunumu",
    sourcePages: [24],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Süksinil-KoA'nın süksinata dönüşümünde GTP veya ATP eşdeğerinin oluşabilmesi aşağıdakilerden hangisiyle ilişkilidir?",
    options: {
      A: "Tiyoester bağının yüksek hidroliz enerjisi",
      B: "DNA bazları arasındaki hidrojen bağları",
      C: "Triasilgliserollerin hidrolizi",
      D: "Glukoz 6-fosfataz etkinliği",
      E: "Pirimidin dimeri oluşumu"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik süksinil-KoA'nın tiyoester bağının kırılmasıyla açığa çıkan enerjinin GTP veya ATP düzeyinde korunabildiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Nükleik asitlerle ilgilidir.",
      C: "Bu başka bir enerji deposudur.",
      D: "Glukoneogenez enzimidir.",
      E: "DNA hasarıdır."
    },
    learningObjective: "Süksinil-KoA basamağındaki enerji korunumunu bağ tipiyle ilişkilendirmek.",
    tags: ["süksinil-KoA", "tiyoester", "GTP", "ATP", "enerji"]
  }),
  makeQuestion({
    id: "CAC-014",
    sourcePdf,
    sourceTopic: "Süksinat dehidrogenaz",
    sourcePages: [25],
    difficulty: "Kolay",
    questionType: "süreç",
    question:
      "Süksinat dehidrogenazın katalizlediği dönüşüm aşağıdakilerden hangisidir?",
    options: {
      A: "Süksinatın fumarata oksitlenmesi",
      B: "Fumaratın malata hidrasyonu",
      C: "Malatın sitrata indirgenmesi",
      D: "Pirüvatın asetil-KoA'ya çevrilmesi",
      E: "Sitratın oksaloasetata hidrolizi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik süksinat dehidrogenazın süksinatı fumarata oksitlediğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu fumaraz basamağıdır.",
      C: "Bu dönüşüm yoktur.",
      D: "Bu PDH kompleksidir.",
      E: "Bu çevrimde yer alan bir basamak değildir."
    },
    learningObjective: "Süksinat dehidrogenaz basamağını tanımak.",
    tags: ["süksinat dehidrogenaz", "fumarat", "oksidasyon", "CAC"]
  }),
  makeQuestion({
    id: "CAC-015",
    sourcePdf,
    sourceTopic: "Fumaraz ve malat dehidrogenaz",
    sourcePages: [26, 27],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Malat dehidrogenaz tepkimesinin hücre içinde ürün yönüne kayabilmesi aşağıdakilerden hangisiyle açıklanır?",
    options: {
      A: "Oksaloasetatın hücre içinde sürekli uzaklaştırılması",
      B: "Fumarazın tümüyle inhibe olması",
      C: "Pirüvatın laktata indirgenmesi",
      D: "Kolesterol sentezinin artması",
      E: "AP lezyonlarının oluşması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik malat dehidrogenaz basamağında oksaloasetatın hücre içinde sürekli uzaklaştırılması nedeniyle dengenin ürün oluşumu yönüne kaydığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu denge açıklaması olarak verilmez.",
      C: "Bu başka bir yolaktır.",
      D: "Sterol senteziyle ilişkili değildir.",
      E: "DNA hasarıyla ilgilidir."
    },
    learningObjective: "Malat dehidrogenaz tepkimesinin hücresel koşullarla nasıl yönlendirildiğini açıklamak.",
    tags: ["malat dehidrogenaz", "oksaloasetat", "denge", "çevrim"]
  }),
  makeQuestion({
    id: "CAC-016",
    sourcePdf,
    sourceTopic: "Amfibolik yolak ve anapleroz",
    sourcePages: [33, 34],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Sitrik asit çevrimi ara ürünlerinin biyosentetik yolaklara ayrılması durumunda aşağıdakilerden hangisi gereklidir?",
    options: {
      A: "Ara ürünlerin anaplerotik tepkimelerle yeniden yerine konması",
      B: "Çevrimin bütünüyle geri dönüşsüz kapanması",
      C: "Yalnız glikolizin durdurulması",
      D: "DNA denatürasyonu",
      E: "Pentoz fosfat yolağının tamamen kapanması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik çevrim ara ürünlerinin biyosentetik öncül olarak uzaklaştırılabildiğini ve bunların anaplerotik tepkimelerle yeniden yerine konduğunu açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Çevrim bu nedenle kapanmaz; desteklenir.",
      C: "Böyle bir zorunluluk verilmez.",
      D: "İlgisizdir.",
      E: "İlgisizdir."
    },
    learningObjective: "Anaplerotik tepkimelerin neden gerekli olduğunu açıklamak.",
    tags: ["anaplerotik", "amfibolik", "biyosentetik öncül", "CAC"]
  }),
  makeQuestion({
    id: "CAC-017",
    sourcePdf,
    sourceTopic: "Pirüvatın asetil-KoA'ya dönüşümü",
    sourcePages: [5],
    difficulty: "Orta",
    questionType: "kavramsal ayrım",
    question:
      "Pirüvat dehidrogenaz tepkimesi için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Tersinmezdir ve pirüvatın kalan iki karbonu asetil-KoA'nın asetil grubunu oluşturur.",
      B: "Tam tersinirdir ve yalnız sitozolde gerçekleşir.",
      C: "Karboksil grubu korunur ve hiçbir CO2 çıkmaz.",
      D: "Yalnız FADH2 üretir, NADH üretmez.",
      E: "Pirüvatı doğrudan malata çevirir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik PDH tepkimesinin tersinmez olduğunu; pirüvatın karboksil grubunun CO2 olarak uzaklaştığını ve kalan iki karbonun asetil-KoA'nın asetil grubunu oluşturduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Tersinmez olarak verilir.",
      C: "CO2 çıkışı temel özelliktir.",
      D: "NADH oluşumu özellikle vurgulanır.",
      E: "Bu dönüşüm anlatılmaz."
    },
    learningObjective: "PDH tepkimesinin geri dönüşsüz ve iki karbonlu ürün mantığını açıklamak.",
    tags: ["PDH", "tersinmez", "asetil-KoA", "CO2", "oksidatif dekarboksillenme"]
  })
];
