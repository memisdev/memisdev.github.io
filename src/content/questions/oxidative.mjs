import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Oksidatif Fosforillenme.pdf";

export const oxidativeQuestions = [
  makeQuestion({
    id: "OXP-001",
    sourcePdf,
    sourceTopic: "Oksidatif fosforillenmenin genel rolü",
    sourcePages: [1, 2],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Slaytlara göre oksidatif fosforillenme enerji metabolizmasında hangi konumda yer alır?",
    options: {
      A: "Aerobik organizmalarda hücresel solunumun son basamağıdır.",
      B: "Yalnızca glikolizin sitozolik ilk basamağıdır.",
      C: "Sadece amino asit biyosentezine ait bir yan yoldur.",
      D: "Karbohidrat sentezinin ışığa bağımlı olmayan kısmıdır.",
      E: "Sadece bakteriyel fermentasyonda görülür."
    },
    correctAnswer: "A",
    correctExplanation:
      "PDF, oksidatif fosforillenmeyi aerobik organizmalarda enerji metabolizmasının yani hücresel solunumun son basamağı olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Glikoliz sitozolde gerçekleşir; oksidatif fosforillenme onunla aynı basamak değildir.",
      C: "Bu kadar dar bir rol tanımlanmaz.",
      D: "Bu ifade fotosentezin karanlık tepkimelerine gider.",
      E: "Fermentasyon oksidatif fosforillenme değildir."
    },
    learningObjective: "Oksidatif fosforillenmenin hücresel solunum içindeki yerini bilmek.",
    tags: ["oksidatif fosforillenme", "hücresel solunum", "enerji metabolizması"]
  }),
  makeQuestion({
    id: "OXP-002",
    sourcePdf,
    sourceTopic: "NADH ve NADPH'nin rolleri",
    sourcePages: [5],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Aşağıdaki ifadelerden hangisi NADH ve NADPH için slaytlarda verilen ayrımı doğru yansıtır?",
    options: {
      A: "NADH daha çok anabolik, NADPH ise katabolik tepkimelerde kullanılır.",
      B: "NADH katabolik tepkimelerden elektron taşır; NADPH genellikle anabolik tepkimelere elektron sağlar.",
      C: "Her ikisi de mitokondri iç zarını serbestçe geçer.",
      D: "NADH ve NADPH hücrede tek ortak havuzda tutulur.",
      E: "NADPH doğrudan solunum zincirinin ana giriş noktasıdır."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda NADH'nin katabolik tepkimelerden getirdiği elektronları solunum zincirine verdiği, NADPH'nin ise genellikle anabolik tepkimelerde kullanıldığı belirtilir.",
    distractorExplanations: {
      A: "Rol dağılımı ters verilmiştir.",
      B: "Doğru seçenek.",
      C: "Her ikisinin de iç zarı geçemediği söylenir.",
      D: "Ayrı NADPH ve NADH havuzlarından söz edilir.",
      E: "Ana giriş noktası olarak NADH dehidrogenaz kompleksi vurgulanır."
    },
    learningObjective: "NADH ve NADPH'nin metabolik görevlerini karşılaştırmak.",
    tags: ["NADH", "NADPH", "katabolizma", "anabolizma"]
  }),
  makeQuestion({
    id: "OXP-003",
    sourcePdf,
    sourceTopic: "İç zar geçirgenliği ve mekik sistemleri",
    sourcePages: [5],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "NADH ve NADPH ile ilgili aşağıdaki ifadelerden hangisi slayta uygundur?",
    options: {
      A: "Mitokondri iç zarını doğrudan geçebilirler.",
      B: "İç zarı geçemedikleri için taşıdıkları elektronlar mekik sistemleriyle dolaylı aktarılabilir.",
      C: "Yalnızca bakterilerde bulunurlar.",
      D: "İç zarın ana yapısal lipitleridir.",
      E: "Elektron taşıma yerine su geçişi sağlarlar."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF’de hem NADH hem NADPH'nin mitokondri iç zarından geçemediği, fakat taşıdıkları elektronların mekik sistemleriyle dolaylı aktarılabildiği açıkça belirtilir.",
    distractorExplanations: {
      A: "Slayt bunun tersini söyler.",
      B: "Doğru seçenek.",
      C: "Bu kofaktörler yalnızca bakterilere özgü değildir.",
      D: "Bunlar lipit değil, çözünür elektron taşıyıcılardır.",
      E: "Su geçişi akuaporinlerle ilgilidir."
    },
    learningObjective: "İç zar geçirgenlik kısıtı ile mekik sistemleri arasındaki ilişkiyi açıklamak.",
    tags: ["mekik sistemi", "mitokondri", "NADH", "NADPH"]
  }),
  makeQuestion({
    id: "OXP-004",
    sourcePdf,
    sourceTopic: "Flavoproteinler",
    sourcePages: [7],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Flavoproteinler için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Yapılarında bağlı flavin nükleotidi bulundurabilirler.",
      B: "Sadece DNA tamirinde görev yaparlar.",
      C: "Elektron taşıma ile ilişkileri yoktur.",
      D: "Her zaman serbest çözünür karbonhidratlardır.",
      E: "Yalnızca klorofilden oluşurlar."
    },
    correctAnswer: "A",
    correctExplanation:
      "Sunumda flavoproteinlerin kuvvetli etkileşimlerle ve bazen kovalent olarak bağlı flavin nükleotidi içerdiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Slayt onları elektron aktarım tepkimeleri bağlamında anlatır.",
      C: "Tam tersine, elektron aktarımında görevli olarak sunulurlar.",
      D: "Protein yapısındadırlar; karbonhidrat değildirler.",
      E: "Klorofil farklı bir pigment grubudur."
    },
    learningObjective: "Flavoproteinlerin temel yapısal özelliğini bilmek.",
    tags: ["flavoprotein", "flavin nükleotidi", "elektron aktarımı"]
  }),
  makeQuestion({
    id: "OXP-005",
    sourcePdf,
    sourceTopic: "Solunum zinciri taşıyıcıları",
    sourcePages: [9, 10],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "NAD ve flavoproteinlere ek olarak slaytta solunum zincirinde görev yaptığı belirtilen taşıyıcı gruplardan biri aşağıdakilerden hangisidir?",
    options: {
      A: "Ubikinon",
      B: "Trehaloz",
      C: "Hiyaluronan",
      D: "Kitin",
      E: "Peptidoglikan"
    },
    correctAnswer: "A",
    correctExplanation:
      "PDF, NAD ve flavoproteinlere ek olarak hidrofobik kinon olan ubikinon ile sitokromlar ve demir-kükürt proteinlerini zincirin diğer taşıyıcıları olarak verir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Trehaloz bir disakkarittir.",
      C: "Hiyaluronan ECM glikozaminoglikanıdır.",
      D: "Kitin yapısal polisakkarittir.",
      E: "Peptidoglikan bakteri hücre duvarı bileşenidir."
    },
    learningObjective: "Solunum zincirindeki başlıca taşıyıcı türlerini tanımak.",
    tags: ["ubikinon", "solunum zinciri", "sitokrom", "demir-kükürt"]
  }),
  makeQuestion({
    id: "OXP-006",
    sourcePdf,
    sourceTopic: "Fotofosforillenme",
    sourcePages: [27],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Slayta göre ATP oluşumu ışıkta gerçekleşiyorsa bu olaya ne ad verilir?",
    options: {
      A: "Glikoliz",
      B: "Fermentasyon",
      C: "Fotofosforilasyon",
      D: "Glukoneogenez",
      E: "Depürinizasyon"
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda ADP'ye inorganik fosfat eklenmesiyle ATP oluşmasının fosforilasyon olduğu, olay ışıkta gerçekleşiyorsa fotofosforilasyon dendiği belirtilir.",
    distractorExplanations: {
      A: "Glikoliz şeker yıkımıdır.",
      B: "Fermentasyon anaerobik enerji kazanımıdır.",
      C: "Doğru seçenek.",
      D: "Glukoneogenez glukoz sentezidir.",
      E: "Depürinizasyon nükleik asit hasarıdır."
    },
    learningObjective: "Fotofosforilasyon terimini doğru tanımlamak.",
    tags: ["fotofosforilasyon", "ATP", "ışık"]
  }),
  makeQuestion({
    id: "OXP-007",
    sourcePdf,
    sourceTopic: "Fotosentezde pigmentlerin işlevi",
    sourcePages: [19, 20, 21],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Karotenoid pigmentlerle ilgili aşağıdaki ifadelerden hangisi slaytlardaki bilgiyle uyumludur?",
    options: {
      A: "Fotosentezde işlevleri yoktur; yalnızca hayvan dokularında bulunurlar.",
      B: "Işığı absorbe ederek klorofil a'ya aktarabilir ve klorofilleri fotooksidasyondan koruyabilirler.",
      C: "Mg ve fitol halkası taşımayan bilin pigmentlerin diğer adıdır.",
      D: "Sadece karanlık tepkimelerde görev yaparlar.",
      E: "Yalnızca DNA zincirleri arasında köprü kurarlar."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda karotenoidlerin ışık enerjisinin klorofil a'ya aktarılmasına katkı verdiği ve kendileri fotooksidasyona uğrayarak klorofilleri koruyabildiği anlatılır.",
    distractorExplanations: {
      A: "Karotenoidler tüm fotosentetik hücrelerde bulunur diye verilir.",
      B: "Doğru seçenek.",
      C: "Mg ve fitol halkası içermeme özelliği bilin pigmentler için belirtilir.",
      D: "Karanlık tepkimelere özgü olarak tanımlanmazlar.",
      E: "Bu ifade pigmentlerle ilgili değildir."
    },
    learningObjective: "Fotosentetik pigmentlerin işlevlerini karşılaştırmak.",
    tags: ["karotenoid", "klorofil", "fotooksidasyon", "pigment"]
  }),
  makeQuestion({
    id: "OXP-008",
    sourcePdf,
    sourceTopic: "Kloroplast bölmeleri ve tepkimeler",
    sourcePages: [23, 24],
    difficulty: "Zor",
    questionType: "süreç",
    question:
      "Aşağıdaki eşleştirmelerden hangisi kloroplastta gerçekleşen olaylarla doğru verilmiştir?",
    options: {
      A: "Stroma: CO2'den karbohidrat sentezinin öncü basamakları; ışıkla oluşan ATP ve NADPH burada kullanılır.",
      B: "Stroma: yalnızca DNA denatürasyonu; granum: sitrik asit çevrimi",
      C: "Lümen: glikoliz; stroma: laktik asit fermentasyonu",
      D: "Tilakoitler: yalnızca protein sindirimi; stroma: yağ asidi beta-oksidasyonu",
      E: "Kloroplast içinde hiçbir bölümleşme yoktur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Slaytlarda stromanin enzimce zengin sıvı olduğu, karanlık tepkimelerin ve CO2'den CHO/nişasta sentezinin burada gerçekleştiği; ışıkla oluşan ATP ve NADPH'nin de burada kullanıldığı belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu olaylar kloroplast bölmeleriyle ilişkili değildir.",
      C: "Glikoliz ve fermentasyon kloroplast stroma/lümeni için verilmez.",
      D: "Bu eşleştirmeler slaytta yer almaz.",
      E: "Granum, tilakoit, stroma ve lümen gibi bölmeler anlatılır."
    },
    learningObjective: "Kloroplast bölmeleri ile temel fotosentetik olayları eşleştirmek.",
    tags: ["kloroplast", "stroma", "granum", "NADPH", "ATP", "fotosentez"]
  }),
  makeQuestion({
    id: "OXP-009",
    sourcePdf,
    sourceTopic: "Oksidatif fosforillenmenin genel rolü",
    sourcePages: [3, 4],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Dehidrogenazların topladığı elektronları verdiği genel alıcı gruplardan biri aşağıdakilerden hangisidir?",
    options: {
      A: "Flavin nükleotitleri",
      B: "Selüloz lifleri",
      C: "Glikozaminoglikanlar",
      D: "Triaçilgliseroller",
      E: "Peptidoglikanlar"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik dehidrogenazların elektronları nikotinamid nükleotitlerine veya flavin nükleotitlerine verdiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Karbohidrat yapısıdır; elektron alıcısı olarak verilmez.",
      C: "ECM heteropolisakkaritidir.",
      D: "Depo lipididir.",
      E: "Hücre duvarı bileşenidir."
    },
    learningObjective: "Solunum zinciri öncesi genel elektron alıcı gruplarını tanımak.",
    tags: ["dehidrogenaz", "flavin", "NAD", "elektron alıcısı"]
  }),
  makeQuestion({
    id: "OXP-010",
    sourcePdf,
    sourceTopic: "Solunum zinciri taşıyıcıları",
    sourcePages: [8],
    difficulty: "Zor",
    questionType: "sınıflandırma",
    question:
      "Kaynak içerikte oksidatif fosforillenmede geçen elektron aktarım tiplerinden biri aşağıdakilerden hangisidir?",
    options: {
      A: "Hidrür iyonu şeklinde iki elektron aktarımı",
      B: "Yalnız tam karbon iskeleti aktarımı",
      C: "Yalnız fosfat zinciri aktarımı",
      D: "Sadece peptit bağı aktarımı",
      E: "Yalnız metil grubu aktarımı"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik elektronların doğrudan, hidrojen atomu şeklinde veya iki elektron taşıyan hidrür iyonu şeklinde aktarılabildiğini açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Elektron aktarımı bu şekilde tanımlanmaz.",
      C: "Fosfat aktarımı değil, elektron aktarımı anlatılır.",
      D: "Peptit bağıyla ilişkili değildir.",
      E: "Metil grubu aktarımı burada konu edilmez."
    },
    learningObjective: "Solunum zincirindeki elektron aktarım biçimlerini ayırt etmek.",
    tags: ["elektron aktarımı", "hidrür", "solunum zinciri", "oksidatif fosforillenme"]
  }),
  makeQuestion({
    id: "OXP-011",
    sourcePdf,
    sourceTopic: "Fotofosforillenme",
    sourcePages: [12],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Fotosentez ile kemosentez arasındaki temel fark aşağıdakilerden hangisidir?",
    options: {
      A: "Fotosentezde gerekli enerji güneşten, kemosentezde ise başka bir kimyasal enerji kaynağından sağlanır.",
      B: "Kemosentezde CO2 kullanılmaz.",
      C: "Fotosentezde hiçbir zaman su kullanılmaz.",
      D: "Kemosentez yalnız hayvan eritrositlerinde gerçekleşir.",
      E: "İki süreç arasında enerji kaynağı açısından fark yoktur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik karbondioksit özümlemesi için gerekli enerji güneşten geliyorsa sürecin fotosentez, başka bir enerji kaynağından geliyorsa kemosentez olarak adlandırıldığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Karbon özümleme bağlamında CO2 kullanımı anlatılır.",
      C: "Kaynak içerik fotosentezde su kullanımını da vurgular.",
      D: "Böyle bir bilgi verilmez.",
      E: "Enerji kaynağı temel ayrımdır."
    },
    learningObjective: "Fotosentez ile kemosentezi enerji kaynağı bakımından karşılaştırmak.",
    tags: ["fotosentez", "kemosentez", "enerji kaynağı", "CO2 özümlemesi"]
  }),
  makeQuestion({
    id: "OXP-012",
    sourcePdf,
    sourceTopic: "Fotofosforillenme",
    sourcePages: [14],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Fotosentezin redoks mantığı için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "CO2 indirgenir, su yükseltgenir.",
      B: "CO2 yükseltgenir, su indirgenir.",
      C: "Her iki bileşik de yalnız hidrolize uğrar.",
      D: "Süreçte hiçbir elektron aktarımı yoktur.",
      E: "Yalnız oksijen indirgenir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik fotosentezde suda bulunan hidrojen atomlarının karbondioksite taşındığını; bu nedenle CO2'nin indirgenip suyun yükseltgendiğini açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Redoks yönü ters verilmiştir.",
      C: "Bu süreç yükseltgenme-indirgenme tepkimesi olarak tanımlanır.",
      D: "Elektron aktarımı temel unsurdur.",
      E: "Temel redoks çifti CO2 ve sudur."
    },
    learningObjective: "Fotosentezde hangi molekülün indirgenip hangisinin yükseltgendiğini açıklamak.",
    tags: ["fotosentez", "redoks", "CO2", "su", "indirgenme"]
  }),
  makeQuestion({
    id: "OXP-013",
    sourcePdf,
    sourceTopic: "Fotosentezde pigmentlerin işlevi",
    sourcePages: [16],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Klorofil b için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Mavi-yeşil, kahverengi ve kırmızı alglerde bulunmadığı belirtilir.",
      B: "Yalnız fotosentetik bakterilerde bulunan tek klorofildir.",
      C: "Mg ve fitol halkası içermez.",
      D: "Çözeltide mavi-siyah değil yalnız renksiz görünür.",
      E: "Tüm organizmalarda zorunlu olarak bulunan tek pigmenttir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik klorofil b'nin mavi-yeşil, kahverengi ve kırmızı alglerde bulunmadığını; klorofil a ile birlikte bitkilerde temel pigmentlerden biri olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu ifade bakteriyoklorofillere yaklaşır; klorofil b için verilmez.",
      C: "Mg ve fitol içermeme özelliği bilin pigmentler için belirtilir.",
      D: "Çözeltide yeşilimsi-siyah olarak verilir.",
      E: "Bu şekilde mutlak tanım yapılmaz."
    },
    learningObjective: "Klorofil tipleri arasındaki dağılım farklarını ayırt etmek.",
    tags: ["klorofil b", "algler", "pigment", "fotosentez"]
  }),
  makeQuestion({
    id: "OXP-014",
    sourcePdf,
    sourceTopic: "Fotosentezde pigmentlerin işlevi",
    sourcePages: [19],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "Karotenoidler içinde yalnız C ve H içeren grup aşağıdakilerden hangisidir?",
    options: {
      A: "Hidrojen karotenoidleri",
      B: "Ksantofiller",
      C: "Fikobilinler",
      D: "Steroller",
      E: "Galaktolipitler"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik karotenoidler içinde yalnız karbon ve hidrojen içerenlerin hidrojen karotenoidleri; oksijen içerenlerin ise ksantofil olarak adlandırıldığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Ksantofiller oksijen içerir.",
      C: "Bunlar ayrı pigment grubudur.",
      D: "Sterol sınıfıdır.",
      E: "Zar lipididir."
    },
    learningObjective: "Karotenoid alt sınıflarını bileşimlerine göre ayırmak.",
    tags: ["karotenoid", "ksantofil", "hidrojen karotenoidi", "pigment"]
  }),
  makeQuestion({
    id: "OXP-015",
    sourcePdf,
    sourceTopic: "Fotosentezde pigmentlerin işlevi",
    sourcePages: [21],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Bilin pigmentler için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Açık pirol yapıları taşırlar ve Mg ile fitol halkası içermezler.",
      B: "Yalnız kolesterol türevleridir.",
      C: "Su geçişi için kanal oluştururlar.",
      D: "Sadece karanlık tepkimelerde ATP hidrolizi yaparlar.",
      E: "DNA baz eşleşmesini katalizlerler."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik bilin pigmentlerin açık pirol yapısına sahip olduğunu ve Mg ile fitol halkası içermediğini; buna rağmen ışık enerjisini absorbe edip klorofil a'ya aktarabildiklerini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Sterol değildir.",
      C: "Kanal proteini değildir.",
      D: "Böyle bir işlev verilmez.",
      E: "Nükleik asitle ilişkili değildir."
    },
    learningObjective: "Bilin pigmentleri klorofillerden ayıran yapısal özelliği tanımak.",
    tags: ["bilin pigment", "fikobilin", "Mg", "fitol", "pigment"]
  }),
  makeQuestion({
    id: "OXP-016",
    sourcePdf,
    sourceTopic: "Kloroplast bölmeleri ve tepkimeler",
    sourcePages: [25],
    difficulty: "Kolay",
    questionType: "neden-sonuç",
    question:
      "Klorofil çözeltisinin yeşil görünmesinin temel nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Yeşil bandın absorbe edilmeyip yansıması veya çözeltiden geçmesi",
      B: "Tüm görünür ışığın tamamen soğurulması",
      C: "Yalnız UV ışığının görünür hale dönüştürülmesi",
      D: "Fosfat gruplarının yeşil ışık yayması",
      E: "Suyun kendiliğinden klorofile bağlanması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik klorofilin mavi ve kırmızı ışığı absorbe ettiğini; yeşil bandın ise absorbe edilmeden geçtiğini veya yansıdığını, bu yüzden çözeltinin yeşil göründüğünü açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Yeşil görünüm bunun tersini gösterir.",
      C: "Bu şekilde açıklanmaz.",
      D: "Fosfat gruplarıyla ilgili değildir.",
      E: "Böyle bir neden verilmez."
    },
    learningObjective: "Pigment rengini seçici absorpsiyon üzerinden açıklamak.",
    tags: ["klorofil", "yeşil renk", "absorpsiyon", "görünür ışık"]
  }),
  makeQuestion({
    id: "OXP-017",
    sourcePdf,
    sourceTopic: "Kloroplast bölmeleri ve tepkimeler",
    sourcePages: [24, 27],
    difficulty: "Orta",
    questionType: "süreç",
    question:
      "Işık tepkimelerinin doğrudan ürün kombinasyonu aşağıdakilerden hangisidir?",
    options: {
      A: "ATP ve NADPH",
      B: "Laktat ve etanol",
      C: "Yalnız glukoz",
      D: "Süksinat ve FADH2",
      E: "Urasil ve riboz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik ışık enerjisiyle suyun fotolizi sonucu açığa çıkan elektronların aktarımı sırasında ATP'nin depolandığını ve NADP+'nın indirgenerek NADPH oluşturduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu fermentasyon ürünleridir.",
      C: "Karbohidrat sentezinde ATP ve NADPH kullanılır; doğrudan ışık ürünü olarak yalnız glukoz verilmez.",
      D: "Bu sitrik asit çevrimi bağlamıdır.",
      E: "Nükleik asit bileşenleridir."
    },
    learningObjective: "Işık tepkimelerinin ana enerji ve indirgen güç ürünlerini tanımak.",
    tags: ["ışık tepkimeleri", "ATP", "NADPH", "fotoliz", "fotosentez"]
  }),
  makeQuestion({
    id: "OXP-018",
    sourcePdf,
    sourceTopic: "Klorofil pigmentleri",
    sourcePages: [16],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Klorofiller için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Bitkilere karakteristik yeşil rengi veren temel fotosentetik pigmentlerdir.",
      B: "Yalnız hayvan dokularında bulunan steroid türevleridir.",
      C: "Suda çözünmeyen nükleotid depolarıdır.",
      D: "DNA onarımında görev yapan tek enzim grubudur.",
      E: "Yalnız karanlık tepkimelerde görev yaparlar."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik klorofilleri bitkilere yeşil rengi veren ve fotosentezdeki temel pigmentler olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu tanım klorofiller için geçerli değildir.",
      C: "Nükleotid depo molekülü değildir.",
      D: "Enzim değildirler.",
      E: "Işık yakalama ile ilişkilidirler."
    },
    learningObjective: "Klorofilin temel biyolojik rolünü tanımlamak.",
    tags: ["klorofil", "yeşil pigment", "fotosentez", "temel pigment"]
  })
];
