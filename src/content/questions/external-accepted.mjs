import { makeQuestion } from "./helpers.mjs";

export const externalAcceptedQuestions = [
  makeQuestion({
    id: "CHO-058",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourceTopic: "Karbohidratlar ve glikobiyoloji",
    sourceSubtopic: "Peptidoglikan ve heteropolisakkaritler",
    sourcePages: [67, 68],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Agarın elektroforez jellerinde özellikle tercih edilen bileşeni aşağıdakilerden hangisidir?",
    options: {
      A: "Agaroz",
      B: "Peptidoglikan",
      C: "Hiyaluronan",
      D: "Glikojen",
      E: "Trehaloz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Agarozun, agar karışımının çok az yüklü ve güçlü jel oluşturan bileşeni olduğu; bu nedenle elektroforez ve kültür ortamlarında tercih edildiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bakteri hücre duvarı polimeridir; agarın jel bileşeni değildir.",
      C: "Bir glikozaminoglikandır; agar kökenli jel oluşturucu olarak verilmez.",
      D: "Depo polisakkaritidir; elektroforez jeli bileşeni değildir.",
      E: "Bir disakkarittir; agarın yapısal jel bileşeni değildir."
    },
    learningObjective:
      "Agarozu, heteropolisakkaritler içinde analitik kullanım açısından ayırt etmek.",
    tags: ["Agaroz", "Agar", "Elektroforez", "Heteropolisakkarit"]
  }),
  makeQuestion({
    id: "CHO-059",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourceTopic: "Karbohidratlar ve glikobiyoloji",
    sourceSubtopic: "Glikozaminoglikanlar",
    sourcePages: [76, 81],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Çok yüksek negatif yükü ve antikoagülan kullanımı ile öne çıkan glikozaminoglikan aşağıdakilerden hangisidir?",
    options: {
      A: "Hiyaluronan",
      B: "Keratan sülfat",
      C: "Heparin",
      D: "Peptidoglikan",
      E: "Selüloz"
    },
    correctAnswer: "C",
    correctExplanation:
      "Heparinin yoğun sülfat ve karboksilat içeriği nedeniyle çok yüksek negatif yük taşıdığı ve antikoagülan olarak kullanıldığı vurgulanır.",
    distractorExplanations: {
      A: "Hiyaluronan önemli bir GAG'dır ancak antikoagülan örneği olarak verilmez.",
      B: "Bir GAG'dır fakat bu ayırt edici kullanım heparine aittir.",
      C: "Doğru seçenek.",
      D: "Bakteri hücre duvarı heteropolimeridir; GAG değildir.",
      E: "Yapısal homopolisakkarittir; GAG değildir."
    },
    learningObjective:
      "Heparini, glikozaminoglikanlar içinde yük ve biyolojik kullanım açısından tanımak.",
    tags: ["Heparin", "Glikozaminoglikan", "Antikoagülan", "Negatif yük"]
  }),
  makeQuestion({
    id: "CHO-060",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourceTopic: "Karbohidratlar ve glikobiyoloji",
    sourceSubtopic: "Peptidoglikan ve heteropolisakkaritler",
    sourcePages: [66, 68],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Gram-negatif bakterilerin lipopolisakkaritlerinde endotoksik etkinin temel belirleyicisi aşağıdakilerden hangisidir?",
    options: {
      A: "Lipid A",
      B: "N-asetilmuramik asit",
      C: "Trehaloz",
      D: "Hiyaluronan",
      E: "Keratin"
    },
    correctAnswer: "A",
    correctExplanation:
      "Bazı bakterilerin lipopolisakkaritlerinde endotoksik etkinin lipid kısmı ile ilişkilendirildiği ve bu kısmın lipid A olarak anıldığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Peptidoglikanın yapı taşıdır; endotoksik LPS kısmı değildir.",
      C: "Disakkarittir; LPS endotoksin bileşeni değildir.",
      D: "Glikozaminoglikandır; Gram-negatif endotoksin bileşeni değildir.",
      E: "Protein yapılıdır; bakteriyel LPS ile ilişkili değildir."
    },
    learningObjective:
      "Gram-negatif lipopolisakkaritlerde endotoksik kısmı tanımlamak.",
    tags: ["Lipid A", "Lipopolisakkarit", "Endotoksin", "Gram-negatif bakteri"]
  }),
  makeQuestion({
    id: "CHO-061",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourceTopic: "Karbohidratlar ve glikobiyoloji",
    sourceSubtopic: "Şeker kodu ve lektinler",
    sourcePages: [104, 110],
    difficulty: "Zor",
    questionType: "uygulama",
    question:
      "Lökositlerin damar endoteline tutunup dokuya geçişini kolaylaştıran plazma zar lektin ailesi aşağıdakilerden hangisidir?",
    options: {
      A: "Selektinler",
      B: "Akuaporinler",
      C: "Ubikinonlar",
      D: "Glikojen sentazlar",
      E: "Sitozolik şaperonlar"
    },
    correctAnswer: "A",
    correctExplanation:
      "İnsan selektinlerinin hücre-hücre tanınması ve adezyon süreçlerine aracılık eden plazma zar lektinleri olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Su kanallarıdır; lektin ailesi değildir.",
      C: "Elektron taşıyıcı kinonlardır; adezyon lektini değildir.",
      D: "Metabolik enzimlerdir; hücre adezyon lektini değildir.",
      E: "Protein katlanmasıyla ilişkilidir; lektin ailesi değildir."
    },
    learningObjective:
      "Selektinleri, lektin ailesi içinde hücre adezyonu bağlamında tanımak.",
    tags: ["Selektin", "Lektin", "Şeker kodu", "Hücre adezyonu", "Lökosit göçü"]
  }),
  makeQuestion({
    id: "CHO-062",
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourceTopic: "Karbohidratlar ve glikobiyoloji",
    sourceSubtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    sourcePages: [96, 100],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "N-bağlı ve O-bağlı glikozilasyon karşılaştırıldığında aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "N-bağlı glikozilasyonda bağ Asn'nin amid azotuna, O-bağlı glikozilasyonda ise çoğunlukla Ser/Thr hidroksiline kurulur.",
      B: "Her iki glikozilasyon tipi de yalnız sisteinin sülfür atomu üzerinden kurulur.",
      C: "O-bağlı glikozilasyon yalnız nükleik asitlerde görülür.",
      D: "N-bağlı glikozilasyon fosfatidik asit türevlerinde gerçekleşir.",
      E: "İki tip arasında bağlanan atom merkezi bakımından hiçbir fark yoktur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Karbohidratların glikoproteinlerde anomerik karbon üzerinden ya serin/treonin hidroksiline O-bağlı, ya da asparajinin amid azotuna N-bağlı bağlanabildiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu bağlanma biçimi temel glikoprotein sınıflandırması için verilmez.",
      C: "O-bağlı glikozilasyon glikoprotein bağlamındadır; nükleik asitlerle sınırlı değildir.",
      D: "Fosfatidik asit gliserofosfolipitlerle ilişkilidir.",
      E: "N-bağlı ve O-bağlı glikozilasyonu ayıran temel fark tam da bağlanan atom merkezidir."
    },
    learningObjective:
      "Glikoproteinlerde N-bağlı ve O-bağlı glikozilasyonun bağlanma kimyasını ayırt etmek.",
    tags: ["Glikoprotein", "N-bağlı glikozilasyon", "O-bağlı glikozilasyon", "Asparajin", "Serin/Treonin"]
  }),
  makeQuestion({
    id: "LIP-032",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Triaçilgliseroller ve depolama mantığı",
    sourcePages: [23, 24],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Adipositlerde depolanmış triaçilgliserollerden serbest yağ asidi mobilizasyonu doğrudan hangi enzimatik işlemle başlar?",
    options: {
      A: "Lipaz aracılı ester bağlarının hidrolizi",
      B: "Fosfodiester bağının spontan kopması",
      C: "Ribozun oksidatif deaminasyonu",
      D: "Steroid çekirdeğinin aromatizasyonu",
      E: "Fosfatidik asidin karboksilasyonu"
    },
    correctAnswer: "A",
    correctExplanation:
      "Adipositlerde depo triaçilgliserollerin lipazlar tarafından hidrolize edildiği ve böylece serbest yağ asitlerinin açığa çıktığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Triaçilgliserollerin mobilizasyonu böyle açıklanmaz.",
      C: "Nükleik asit kimyasıyla ilişkilidir; yağ mobilizasyonu değildir.",
      D: "Steroid biyosenteziyle ilgilidir.",
      E: "Bu işlem depo triaçilgliserol yıkımını açıklamaz."
    },
    learningObjective:
      "Depo triaçilgliserollerinin lipaz aracılı mobilizasyonunu tanımlamak.",
    tags: ["Triaçilgliserol", "Lipaz", "Adiposit", "Serbest yağ asidi", "Mobilizasyon"]
  }),
  makeQuestion({
    id: "LIP-033",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [57, 60],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Eikosanoidlerin sinyal iletim biçimi için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Genellikle sentezlendikleri dokunun yakın çevresindeki hücrelere parakrin etki gösterirler.",
      B: "Yalnız çekirdek DNA'sına kovalent bağlanarak etki ederler.",
      C: "Sadece mitokondri iç zarında elektron taşırlar.",
      D: "Uzun süreli depo yakıtı olarak yağ dokusunda birikirler.",
      E: "Yalnız ribozomların yapısal bileşenidirler."
    },
    correctAnswer: "A",
    correctExplanation:
      "Eikosanoidlerin sentezlendikleri dokunun çevresinde kısa menzilli, çoğu kez parakrin sinyaller olarak etkili olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu zorunlu bir etki mekanizması değildir.",
      C: "Bu rol übikinon gibi taşıyıcılara aittir.",
      D: "Eikosanoidler depo lipiti olarak anlatılmaz.",
      E: "Nükleik asit ve ribozom yapısıyla ilgili değildir."
    },
    learningObjective:
      "Eikosanoidlerin temel sinyal iletim mantığını parakrin etki üzerinden açıklamak.",
    tags: ["Eikosanoid", "Parakrin", "Sinyal lipidi", "Lipit türevli sinyal"]
  }),
  makeQuestion({
    id: "LIP-034",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [59, 60],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Ateş, ağrı ve inflamasyon ile ilişkilendirilip COX baskılanması nedeniyle NSAİİ'lerle sentezi azalan eikosanoid grubu aşağıdakilerden hangisidir?",
    options: {
      A: "Prostaglandinler",
      B: "Sfingomiyelinler",
      C: "Triasilgliseroller",
      D: "Galaktolipitler",
      E: "Steroller"
    },
    correctAnswer: "A",
    correctExplanation:
      "Ağrı, ateş ve inflamasyonla ilişkili eikosanoidlerin prostaglandinler olduğu ve NSAİİ'lerin COX üzerinden bu sentezi azalttığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Zar lipididir; COX-bağımlı eikosanoid sınıfı değildir.",
      C: "Depo lipitidir; eikosanoid değildir.",
      D: "Bitki/zar lipidi sınıfındadır; ağrı-aracılı eikosanoid değildir.",
      E: "Steroid çekirdekli lipitlerdir; prostaglandin sınıfı değildir."
    },
    learningObjective:
      "Prostaglandinleri, COX ve NSAİİ ilişkisi üzerinden diğer lipit sınıflarından ayırt etmek.",
    tags: ["Prostaglandin", "NSAİİ", "COX", "İnflamasyon", "Eikosanoid"]
  }),
  makeQuestion({
    id: "LIP-035",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [60, 61],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Trombositler tarafından sentezlenip pıhtılaşma eğilimiyle ilişkilendirilen eikosanoid aşağıdakilerden hangisidir?",
    options: {
      A: "Tromboksan",
      B: "Ubikinon",
      C: "Kolesterol",
      D: "Hiyaluronan",
      E: "Trehaloz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Tromboksanların eikosanoidler içinde trombositlerle ve pıhtılaşma süreciyle ilişkilendirildiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Elektron taşıyıcı kinondur; eikosanoid değildir.",
      C: "Steroldür; trombosit eikosanoidi değildir.",
      D: "Glikozaminoglikandır.",
      E: "Disakkarittir."
    },
    learningObjective:
      "Tromboksanı, eikosanoidler içinde hemostazla ilişkili özgül ürün olarak tanımak.",
    tags: ["Tromboksan", "Eikosanoid", "Trombosit", "Pıhtılaşma"]
  }),
  makeQuestion({
    id: "LIP-036",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [60, 61],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Astım veya anafilaksi ile ilişkilendirilip NSAİİ'lerin doğrudan hedefi olmayan eikosanoid sınıfı aşağıdakilerden hangisidir?",
    options: {
      A: "Lökotrienler",
      B: "Prostaglandinler",
      C: "Steroller",
      D: "Galaktolipitler",
      E: "Mumlar"
    },
    correctAnswer: "A",
    correctExplanation:
      "Lökotrienlerin bronkokonstriksiyon ve anafilaktik yanıtlarla ilişkilendirildiği; NSAİİ etkisinin prostaglandin/tromboksan yönüne odaklandığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "NSAİİ-COX hattında daha doğrudan ilişkilidir.",
      C: "Steroid çekirdekli lipitlerdir; eikosanoid değildir.",
      D: "Zar lipitidir; eikosanoid değildir.",
      E: "Depo/koruyucu lipit sınıfıdır; eikosanoid değildir."
    },
    learningObjective:
      "Lökotrienleri, diğer eikosanoid sınıflarından klinik sonuç ve enzim hedefi bakımından ayırt etmek.",
    tags: ["Lökotrien", "Eikosanoid", "Astım", "Anafilaksi", "NSAİİ"]
  }),
  makeQuestion({
    id: "LIP-037",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [62, 63],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Deride UV etkisiyle kolekalsiferol oluşumuna giden yolakta doğrudan öncül olan sterol aşağıdakilerden hangisidir?",
    options: {
      A: "7-dehidrokolesterol",
      B: "Sfingozin",
      C: "Asetoasetat",
      D: "Hiyaluronan",
      E: "Fosfatidik asit"
    },
    correctAnswer: "A",
    correctExplanation:
      "Vitamin D3'ün, deride 7-dehidrokolesterol üzerinden UV ile başlatılan fotokimyasal süreç sonucu oluştuğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Sfingolipit omurgasıdır; D3 öncülü sterol değildir.",
      C: "Ketocisimdir; vitamin D öncülü değildir.",
      D: "Glikozaminoglikandır.",
      E: "Gliserofosfolipit öncülüdür; D3 sterol öncülü değildir."
    },
    learningObjective:
      "Vitamin D3 sentezinde 7-dehidrokolesterolün öncül rolünü tanımak.",
    tags: ["Vitamin D3", "7-dehidrokolesterol", "Kolekalsiferol", "UV", "Sterol"]
  }),
  makeQuestion({
    id: "LIP-038",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [65, 66],
    difficulty: "Zor",
    questionType: "süreç",
    question:
      "Rodopsin aracılı görme başlangıcında ışıkla tetiklenen temel izomerleşme aşağıdakilerden hangisidir?",
    options: {
      A: "11-cis retinalin all-trans retinale dönüşmesi",
      B: "Kolesterolün safra asidine oksidasyonu",
      C: "Asetil-KoA'nın malonil-KoA'ya karboksillenmesi",
      D: "Gliserolün üç yağ asidiyle esterleşmesi",
      E: "Ubikinonun plastokinona dönüşmesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Görme pigmenti rodopsinde ışıkla 11-cis retinalin all-trans retinale izomerleştiği ve bunun sinyalin başlangıcını oluşturduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Sterol metabolizmasıyla ilişkilidir; görme kromoforu değildir.",
      C: "Yağ asidi sentez basamağıdır.",
      D: "Depo lipiti sentezidir.",
      E: "Farklı kinon sistemleridir; rodopsin kromoforu değildir."
    },
    learningObjective:
      "Retinal izomerleşmesini görme pigmentlerinin işlevsel başlangıç olayı olarak açıklamak.",
    tags: ["Retinal", "11-cis", "All-trans", "Rodopsin", "Görme pigmenti"]
  }),
  makeQuestion({
    id: "LIP-039",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [67, 68],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Protrombin oluşumu ve pıhtılaşma ile ilişkilendirilen lipit türevli vitamin aşağıdakilerden hangisidir?",
    options: {
      A: "Vitamin K",
      B: "Vitamin C",
      C: "Biotin",
      D: "Folat",
      E: "Niasin"
    },
    correctAnswer: "A",
    correctExplanation:
      "Vitamin K'nın protrombin oluşumunda ve dolayısıyla pıhtılaşma süreçlerinde önemli olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu bağlamda protrombinle ilişkilendirilmez.",
      C: "Karboksilasyon kofaktörü olarak bilinse de burada doğru vitamin değildir.",
      D: "Tek-karbon metabolizmasıyla ilişkilidir.",
      E: "NAD/NADP öncülüdür; pıhtılaşma vitamini değildir."
    },
    learningObjective:
      "Vitamin K'yı, lipit türevli vitaminler içinde pıhtılaşma ile ilişkilendirmek.",
    tags: ["Vitamin K", "Protrombin", "Pıhtılaşma", "Lipit türevli vitamin"]
  }),
  makeQuestion({
    id: "LIP-040",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Triaçilgliseroller ve depolama mantığı",
    sourcePages: [24, 24],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Omurgalılarda serbest yağ asitlerinin kanda baskın taşıyıcısı aşağıdakilerden hangisidir?",
    options: {
      A: "Albümin",
      B: "Hemoglobin",
      C: "Aktin",
      D: "Pepsin",
      E: "Katalaz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Serbest yağ asitlerinin omurgalılarda kanda albümine kovalent olmayan biçimde bağlanarak taşındığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Başlıca oksijen taşıyıcısıdır; yağ asidi taşıyıcısı değildir.",
      C: "Yapısal proteindir.",
      D: "Sindirim enzimidir.",
      E: "Antioksidan enzimdir."
    },
    learningObjective:
      "Serbest yağ asitlerinin dolaşımdaki temel taşıyıcısını tanımak.",
    tags: ["Albümin", "Serbest yağ asidi", "Taşıma", "Dolaşım", "Triaçilgliserol mobilizasyonu"]
  }),
  makeQuestion({
    id: "LIP-041",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [49, 50],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Safra asitlerinin bağırsaktaki temel biyokimyasal etkisi aşağıdakilerden hangisidir?",
    options: {
      A: "Yağları deterjan benzeri biçimde çözündürerek lipaz erişimini kolaylaştırmak",
      B: "Glukozu glikojene dönüştürmek",
      C: "Nükleik asitlerin Tm değerini yükseltmek",
      D: "Elektron taşıma zincirinde proton pompalamak",
      E: "Peptid bağlarını hidroliz etmek"
    },
    correctAnswer: "A",
    correctExplanation:
      "Safra asitlerinin bağırsakta deterjan etkisi göstererek yağların yüzeyini erişilebilir kıldığı ve lipaz etkisini kolaylaştırdığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Karbohidrat metabolizmasıyla ilişkilidir.",
      C: "Nükleik asit denatürasyon parametresidir; safra asidi etkisi değildir.",
      D: "Mitokondriyel süreçtir.",
      E: "Proteazların görevidir; safra asitlerinin değil."
    },
    learningObjective:
      "Safra asitlerinin yağ sindirimine katkısını deterjan etkisi üzerinden açıklamak.",
    tags: ["Safra asidi", "Deterjan etkisi", "Lipaz", "Yağ sindirimi"]
  }),
  makeQuestion({
    id: "LIP-042",
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler",
    sourceSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    sourcePages: [69, 73],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "A, D, E, K vitaminleri ile birçok doğal pigment için tekrar eden yapısal temel aşağıdakilerden hangisidir?",
    options: {
      A: "İzopren birimleri",
      B: "Peptit bağları",
      C: "Riboz halkaları",
      D: "Pirüvat dimerleri",
      E: "Pürin bazları"
    },
    correctAnswer: "A",
    correctExplanation:
      "Birçok doğal pigmentin ve A, D, E, K vitaminlerinin izopren birimlerinin kondenzasyonundan türeyen izoprenoid yapılara dayandığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Protein omurgasıyla ilişkilidir.",
      C: "Nükleotit/nükleik asit bileşenidir.",
      D: "Bu şekilde tanımlanmaz.",
      E: "Nükleik asit bazlarıdır; izoprenoid temel oluşturmaz."
    },
    learningObjective:
      "İzopren birimlerini, lipit türevli vitamin ve pigmentlerin ortak yapısal temeli olarak tanımak.",
    tags: ["İzopren", "İzoprenoid", "Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K", "Pigment"]
  }),
  makeQuestion({
    id: "NUC-034",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    sourcePages: [5, 8],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Fosfat grubu içermeyen baz + pentoz bileşiği aşağıdakilerden hangisiyle adlandırılır?",
    options: {
      A: "Nükleozid",
      B: "Nükleotid",
      C: "Polipeptid",
      D: "Triasilgliserol",
      E: "Disakkarit"
    },
    correctAnswer: "A",
    correctExplanation:
      "Fosfat içermeyen, yalnız baz ve pentozdan oluşan yapının nükleozid olarak adlandırıldığı belirtilir; fosfat eklendiğinde nükleotid olur.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Fosfat içeren formu anlatır.",
      C: "Amino asit polimeridir.",
      D: "Depo lipitidir.",
      E: "Karbohidrat dimeridir."
    },
    learningObjective:
      "Nükleozid ile nükleotid ayrımını fosfat varlığı üzerinden yapmak.",
    tags: ["Nükleozid", "Nükleotid", "Pentoz", "Azotlu baz", "Fosfat"]
  }),
  makeQuestion({
    id: "NUC-035",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Fosfodiester bağları ve yönlülük",
    sourcePages: [16, 23],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Nükleik asit omurgalarının fizyolojik pH'ya yakın koşullarda genel yük özelliği aşağıdakilerden hangisidir?",
    options: {
      A: "Negatiftir; başlıca fosfat grupları nedeniyle anyoniktir.",
      B: "Tamamen nötrdür; iyonlaşabilir grup içermez.",
      C: "Kalıcı pozitif yüklüdür; lizin bakımından zengindir.",
      D: "Yük yalnız bazlarda bulunduğu için rastgele değişir.",
      E: "Zincir uzunluğundan bağımsız olarak mutlaka yüksüzdür."
    },
    correctAnswer: "A",
    correctExplanation:
      "Nükleik asit omurgalarının fosfat grupları nedeniyle fizyolojik pH civarında negatif yüklü olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Fosfat grupları iyonlaşabildiği için omurga nötr değildir.",
      C: "Nükleik asit omurgası amino asitlerden oluşmaz.",
      D: "Temel yük özelliğini fosfat omurga belirler.",
      E: "Yüksüz yapı anlatımı yanlıştır."
    },
    learningObjective:
      "Nükleik asit omurgasının negatif yükünü fosfat kimyasıyla ilişkilendirmek.",
    tags: ["Fosfat", "Negatif yük", "Omurga", "Fosfodiester", "Nükleik asit"]
  }),
  makeQuestion({
    id: "NUC-036",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Baz istiflenmesi ve UV soğurma",
    sourcePages: [24, 27],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "DNA çift sarmalının kararlılığına en büyük katkıyı sağlayan etkileşim kümesi aşağıdakilerden hangisidir?",
    options: {
      A: "İstiflenmiş bazlar arasındaki hidrofobik ve van der Waals etkileşimleri",
      B: "Yalnız fosfodiester bağlarının hidrolizi",
      C: "Serbest yağ asitlerinin albümine bağlanması",
      D: "Peptid bağlarının rezonansı",
      E: "Pirüvatın asetil-KoA'ya oksidatif dekarboksillenmesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "Baz halkalarının düzlemsel olarak üst üste istiflenmesiyle oluşan hidrofobik ve diğer zayıf etkileşimlerin DNA yapısal kararlılığına çok büyük katkı yaptığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu, omurga parçalanmasını anlatır; kararlılık katkısı değildir.",
      C: "Lipit taşınmasıyla ilgilidir.",
      D: "Protein omurgasıyla ilgilidir.",
      E: "Karbohidrat metabolizmasına aittir."
    },
    learningObjective:
      "Baz istiflenmesinin DNA kararlılığına katkısını hidrojen bağlarından ayırmak.",
    tags: ["Baz istiflenmesi", "DNA kararlılığı", "Hidrofobik etkileşim", "Van der Waals", "UV soğurma"]
  }),
  makeQuestion({
    id: "NUC-037",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    sourcePages: [52, 56],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "İyonlaştırıcı radyasyonun DNA üzerinde öne çıkan hasar sonucu aşağıdakilerden hangisidir?",
    options: {
      A: "İplik kırıkları ve ilişkili radikal hasarı",
      B: "Trehaloz oluşumu",
      C: "Pirüvatın laktata indirgenmesi",
      D: "Glikojen dallanmasının artması",
      E: "Fosfolipit baş grubunun galaktoza dönüşmesi"
    },
    correctAnswer: "A",
    correctExplanation:
      "İyonlaştırıcı ışınların DNA'da serbest radikal oluşumu ve buna bağlı iplik kırıkları gibi hasarlara yol açabildiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Karbohidrat kimyasıyla ilgilidir.",
      C: "Fermentasyon sürecidir.",
      D: "Polisakkarit metabolizmasıyla ilgilidir.",
      E: "Zar lipit sınıflandırmasıyla ilgilidir."
    },
    learningObjective:
      "İyonlaştırıcı radyasyonu, DNA hasarı tipleri içinde iplik kırığı ile ilişkilendirmek.",
    tags: ["İyonlaştırıcı radyasyon", "DNA hasarı", "İplik kırığı", "Serbest radikal"]
  }),
  makeQuestion({
    id: "NUC-038",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    sourcePages: [57, 59],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Nitröz asidin DNA üzerindeki temel kimyasal etkisi aşağıdakilerden hangisidir?",
    options: {
      A: "Bazların deaminasyonunu hızlandırmak",
      B: "Fosfodiester omurgayı doğrudan peptit bağlarına çevirmek",
      C: "Ubikinonu plastokinona dönüştürmek",
      D: "Triasilgliserolleri hidroliz etmek",
      E: "ATP sentezinde proton pompalamak"
    },
    correctAnswer: "A",
    correctExplanation:
      "Nitröz asidin dış etkenler arasında özellikle bazların deaminasyonunu hızlandıran bir kimyasal ajan olarak verildiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Nükleik asit kimyası böyle işlemez.",
      C: "Bu, farklı biyolojik sistemler arasında anlamsız bir dönüşümdür.",
      D: "Lipit yıkımıyla ilgilidir.",
      E: "Oksidatif fosforillenmeye aittir."
    },
    learningObjective:
      "Nitröz asidi, dış etkenlerle artan deaminasyon hasarıyla ilişkilendirmek.",
    tags: ["Nitröz asit", "Deaminasyon", "DNA hasarı", "Kimyasal mutajen"]
  }),
  makeQuestion({
    id: "NUC-039",
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler",
    sourceSubtopic: "Denatürasyon, renatürasyon, Tm ve hibritleşme",
    sourcePages: [43, 48],
    difficulty: "Zor",
    questionType: "süreç",
    question:
      "Tam ayrılmış iki tamamlayıcı DNA ipliği yeniden eşleşirken ilk basamak için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Kısa bir tamamlayıcı bölgenin yeniden eşleşmesiyle nükleasyon başlar.",
      B: "Önce tüm bazlar aynı anda ve tek adımda kusursuz kapanır.",
      C: "İlk adımda fosfodiester omurgası hidrolize edilir.",
      D: "Renatürasyonun başlaması için baz eşleşmesi gerekmez.",
      E: "Süreç ancak protein sentezi tamamlandıktan sonra başlayabilir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Tam ayrılmış iki iplik yeniden birleşirken ilk aşamanın, kısa tamamlayıcı bir bölgenin eşleşerek nükleasyon çekirdeği oluşturması olduğu belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Renatürasyon iki basamaklı ilerler; tek adımlı tam kapanma olarak anlatılmaz.",
      C: "Omurga hidrolizi renatürasyon değil yıkımdır.",
      D: "Renatürasyonun özü tamamlayıcı baz eşleşmesidir.",
      E: "Protein sentezi bu sürecin zorunlu koşulu değildir."
    },
    learningObjective:
      "DNA renatürasyonunda nükleasyon basamağını tamamlayıcı eşleşme mantığıyla açıklamak.",
    tags: ["Renatürasyon", "Nükleasyon", "DNA", "Hibritleşme", "Tm"]
  })
];
