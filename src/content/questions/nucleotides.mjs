import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Nükleotidler Ve Nükleik Asitler.pdf";

export const nucleotideQuestions = [
  makeQuestion({
    id: "NUC-001",
    sourcePdf,
    sourceTopic: "Nükleotidlerin işlevleri",
    sourcePages: [1, 2, 60],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Aşağıdakilerden hangisi slayta göre nükleotidlerin hücrede üstlendiği görevlerden biridir?",
    options: {
      A: "Yalnızca zar lipidi olarak görev yapma",
      B: "Metabolik dönüşümlerde enerji birimi olarak görev yapma",
      C: "Sadece yapısal polisakkarit sentezleme",
      D: "Yalnızca pigment olarak iş görme",
      E: "Hiçbir kofaktörle ilişki kurmama"
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, nükleotidlerin enerji birimi, kofaktör bileşeni, ara bileşik bileşeni ve nükleik asit yapı taşı olarak birçok görev üstlendiğini belirtir.",
    distractorExplanations: {
      A: "Zar lipidi olarak tanımlanmazlar.",
      B: "Doğru seçenek.",
      C: "Bu onların temel rolü değildir.",
      D: "Pigment olarak anlatılmazlar.",
      E: "Birçok enzimin kofaktörleriyle ilişkili oldukları söylenir."
    },
    learningObjective: "Nükleotidlerin temel hücresel işlevlerini hatırlamak.",
    tags: ["nükleotid", "ATP", "kofaktör", "işlev"]
  }),
  makeQuestion({
    id: "NUC-002",
    sourcePdf,
    sourceTopic: "Azotlu baz sınıfları",
    sourcePages: [6, 9],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Aşağıdaki bazlardan hangisi pürin sınıfına girer?",
    options: {
      A: "Sitozin",
      B: "Urasil",
      C: "Timin",
      D: "Adenin",
      E: "Hepsi pirimidindir"
    },
    correctAnswer: "D",
    correctExplanation:
      "Sunumda pürin bazları adenin ve guanin; pirimidin bazları ise sitozin, timin ve urasil olarak verilir.",
    distractorExplanations: {
      A: "Sitozin pirimidindir.",
      B: "Urasil pirimidindir.",
      C: "Timin pirimidindir.",
      D: "Doğru seçenek.",
      E: "Adenin ve guanin pürindir."
    },
    learningObjective: "Pürin ve pirimidin bazlarını ayırt etmek.",
    tags: ["pürin", "pirimidin", "adenin", "baz"]
  }),
  makeQuestion({
    id: "NUC-003",
    sourcePdf,
    sourceTopic: "DNA ve RNA ayrımı",
    sourcePages: [12, 13],
    difficulty: "Orta",
    questionType: "kavramsal ayrım",
    question:
      "Slayta göre bir nükleotidin DNA mı RNA mı olduğuna karar verirken temel belirleyici aşağıdakilerden hangisidir?",
    options: {
      A: "Mutlaka timin içermesi",
      B: "Yalnızca urasil içermesi",
      C: "İçerdiği pentozun riboz mu 2'-deoksiriboz mu olduğu",
      D: "Fosfat sayısının tek ya da çift oluşu",
      E: "Molekülün halkalı olup olmaması"
    },
    correctAnswer: "C",
    correctExplanation:
      "PDF, DNA ve RNA'nın U veya T taşımalarıyla değil, nükleotidin taşıdığı pentozla ayırt edilmesi gerektiğini özellikle vurgular.",
    distractorExplanations: {
      A: "Nadir durumlar nedeniyle bu tek başına yeterli değildir.",
      B: "Tek başına güvenilir ölçüt olarak verilmez.",
      C: "Doğru seçenek.",
      D: "Fosfat sayısı temel ayırıcı değildir.",
      E: "Her iki nükleik asitte de furanoz formu bulunabilir."
    },
    learningObjective: "DNA/RNA ayrımında pentoz tipinin belirleyici olduğunu kavramak.",
    tags: ["DNA", "RNA", "riboz", "deoksiriboz"]
  }),
  makeQuestion({
    id: "NUC-004",
    sourcePdf,
    sourceTopic: "Fosfodiester bağı",
    sourcePages: [16, 19],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "DNA veya RNA zincirinde ardışık nükleotitler arasındaki fosfodiester bağ nasıl kurulur?",
    options: {
      A: "Bir nükleotidin 5'-fosfatı ile diğerinin 3'-hidroksili arasında",
      B: "İki bazın amino grupları arasında",
      C: "İki pentozun 1' karbonları arasında",
      D: "Yalnızca iki timin bazı arasında",
      E: "Bir fosfat ile bir metil grubu arasında"
    },
    correctAnswer: "A",
    correctExplanation:
      "Sunumda zincirdeki ardışık nükleotitlerin birinin 5'-fosfat grubu ile diğerinin 3'-hidroksil grubu arasında fosfat köprüsüyle bağlandığı anlatılır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Baz eşleşmesi hidrojen bağlarıyla olur; fosfodiester bağı değildir.",
      C: "Zincir omurgası bu şekilde kurulmaz.",
      D: "Bu çok özel ve yanlış bir tanımdır.",
      E: "Metil grubu burada rol almaz."
    },
    learningObjective: "Nükleik asit omurgasını oluşturan bağ tipini tanımlamak.",
    tags: ["fosfodiester", "5 uç", "3 uç", "DNA", "RNA"]
  }),
  makeQuestion({
    id: "NUC-005",
    sourcePdf,
    sourceTopic: "DNA çift sarmalı",
    sourcePages: [30, 32, 34, 35],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Watson-Crick modeline göre aşağıdakilerden hangisi DNA çift sarmalı için doğrudur?",
    options: {
      A: "İki zincir paraleldir ve bazlar dış yüzeydedir.",
      B: "Zincirler antiparaleldir ve bazlar sarmalın içinde istiflenir.",
      C: "Baz eşleşmesi rastgeledir; tamamlayıcılık yoktur.",
      D: "DNA yalnızca tek zincirli halde kalıcıdır.",
      E: "Şeker-fosfat iskeleti sarmalın iç kısmında yer alır."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, iki DNA zincirinin antiparalel olduğunu; hidrofilik şeker-fosfat iskeletinin dışta, bazların ise içeride istiflenmiş halde bulunduğunu açıklar.",
    distractorExplanations: {
      A: "Zincirler paralel değil antiparaleldir.",
      B: "Doğru seçenek.",
      C: "A=T ve G≡C tamamlayıcılığı vurgulanır.",
      D: "Çift sarmal kararlı yapıdır.",
      E: "Şeker-fosfat iskeleti dış yüzeye bakar."
    },
    learningObjective: "Watson-Crick modelinin temel yapısal ilkelerini tanımlamak.",
    tags: ["DNA", "çift sarmal", "antiparalel", "baz eşleşmesi"]
  }),
  makeQuestion({
    id: "NUC-006",
    sourcePdf,
    sourceTopic: "Chargaff kuralları",
    sourcePages: [28],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Chargaff yasalarına göre çift sarmallı DNA için aşağıdaki eşitliklerden hangisi beklenir?",
    options: {
      A: "A = G",
      B: "T = C",
      C: "A = T ve G = C",
      D: "A + T = 0",
      E: "Baz içeriği tüm türlerde aynıdır"
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunum, DNA'da baz içeriğinin türden türe değişebildiğini ama belirli bir türde A=T ve G=C oranlarının sağlandığını anlatır.",
    distractorExplanations: {
      A: "Chargaff eşitliği bu değildir.",
      B: "Bu da doğru eşleşme kuralı değildir.",
      C: "Doğru seçenek.",
      D: "Anlamsızdır.",
      E: "Türler arasında farklılık olduğu özellikle belirtilir."
    },
    learningObjective: "Chargaff kurallarını doğru ifade etmek.",
    tags: ["Chargaff", "DNA", "baz bileşimi"]
  }),
  makeQuestion({
    id: "NUC-007",
    sourcePdf,
    sourceTopic: "Monosistronik ve polisistronik mRNA",
    sourcePages: [37, 38],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Slayta göre hangi ifade doğrudur?",
    options: {
      A: "Ökaryotik mRNA'lar çoğunlukla polisistroniktir.",
      B: "Bakteri ve arkelerde bir mRNA birden fazla polipeptidi kodlayabilir; buna polisistronik mRNA denir.",
      C: "Monosistronik mRNA en az iki farklı geni kodlar.",
      D: "Sistron, yalnızca ribozomal RNA için kullanılan bir terimdir.",
      E: "mRNA uzunluğu kodlanan polipeptit zinciriyle ilişkili değildir."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, bakteri ve arkelerde bir mRNA'nın bir veya daha çok polipeptidi kodlayabildiğini; çoklu kodlama durumunda bunun polisistronik mRNA olarak adlandırıldığını, ökaryotlarda ise çoğunlukla monosistronik olduğunu belirtir.",
    distractorExplanations: {
      A: "Ökaryotlar için ters yönde bilgi verilir.",
      B: "Doğru seçenek.",
      C: "Monosistronik tek polipeptidi anlatır.",
      D: "Sistron gen anlamında kullanılır.",
      E: "Minimum uzunluğun polipeptit boyuyla ilişkili olduğu anlatılır."
    },
    learningObjective: "Monosistronik ve polisistronik mRNA ayrımını yapmak.",
    tags: ["mRNA", "monosistronik", "polisistronik", "prokaryot", "ökaryot"]
  }),
  makeQuestion({
    id: "NUC-008",
    sourcePdf,
    sourceTopic: "DNA denatürasyonu ve Tm",
    sourcePages: [42, 45, 46],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "DNA'nın erime sıcaklığı (Tm) ile ilgili aşağıdaki ifadelerden hangisi slayttaki bilgiyle uyumludur?",
    options: {
      A: "Tm, DNA'nın tamamen parçalandığı sıcaklıktır ve baz içeriğinden bağımsızdır.",
      B: "G-C çiftleri arttıkça Tm düşer.",
      C: "Tm, DNA parçasının yarısının çözülmüş olduğu sıcaklıktır; G-C içeriği arttıkça yükselir.",
      D: "Tm yalnızca RNA için kullanılır.",
      E: "Tm, fosfodiester bağlarının hidrolizi anlamına gelir."
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda Tm'nin DNA'nın yarısının çözülmüş olduğu sıcaklık olduğu ve G-C çiftlerindeki üç hidrojen bağının daha yüksek ısı gerektirmesi nedeniyle G-C içeriği arttıkça Tm'nin yükseldiği belirtilir.",
    distractorExplanations: {
      A: "Tm baz içeriği hakkında bilgi verir.",
      B: "Yön ters verilmiştir.",
      C: "Doğru seçenek.",
      D: "DNA için açıkça kullanılır.",
      E: "Denatürasyon kovalent bağ kırılması olmadan tanımlanır."
    },
    learningObjective: "DNA denatürasyonu ile baz içeriği arasındaki ilişkiyi yorumlamak.",
    tags: ["Tm", "DNA denatürasyonu", "G-C içeriği"]
  }),
  makeQuestion({
    id: "NUC-009",
    sourcePdf,
    sourceTopic: "Deaminasyon ve timin/urasil ayrımı",
    sourcePages: [50],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "PDF'de DNA'nın timin kullanıp urasil kullanmamasına getirilen gerekçe aşağıdakilerden hangisidir?",
    options: {
      A: "Urasil çok büyük olduğu için çift sarmala sığmaz.",
      B: "Sitozinin deaminasyon ürünü urasildir; DNA'da urasil bulunması hasarı tanımayı zorlaştırır.",
      C: "Urasil yalnızca proteinlerde bulunur.",
      D: "Timin enerji taşıyıcı, urasil ise lipittir.",
      E: "Urasil yalnızca bitkilerde sentezlenir."
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta sitozinin kendiliğinden deaminasyonla urasile dönüşebildiği, DNA'da normal baz olarak urasil bulunsaydı bu hasarın ayırt edilmesinin zorlaşacağı belirtilir.",
    distractorExplanations: {
      A: "Boyut gerekçesi verilmez.",
      B: "Doğru seçenek.",
      C: "Urasil RNA bazıdır.",
      D: "Bu sınıflandırma yanlıştır.",
      E: "Böyle bir bilgi verilmez."
    },
    learningObjective: "DNA'da timin kullanılmasının hasar tanıma açısından önemini açıklamak.",
    tags: ["deaminasyon", "timin", "urasil", "DNA hasarı"]
  }),
  makeQuestion({
    id: "NUC-010",
    sourcePdf,
    sourceTopic: "Mutajenik hasar kaynakları",
    sourcePages: [51, 52, 54, 58],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Aşağıdaki eşleştirmelerden hangisi slaytta verilen DNA hasarı örneklerinden biridir?",
    options: {
      A: "UV ışığı → bitişik pirimidinler arasında siklobütan dimerleri",
      B: "ATP hidrolizi → peptidoglikan sentezi",
      C: "Karotenoidler → DNA depürinizasyonu",
      D: "Glikojen yıkımı → pirimidin dimeri",
      E: "Hiyaluronan sentezi → oksidatif hasar"
    },
    correctAnswer: "A",
    correctExplanation:
      "Sunum, UV ışığının aynı DNA ipliğindeki bitişik pirimidinler arasında siklobütan pirimidin dimerleri oluşturabildiğini açıkça belirtir; ayrıca oksidatif hasarın da önemli mutasyon kaynağı olduğu eklenir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu DNA hasarı örneği değildir.",
      C: "Karotenoidler pigmenttir; bu rol verilmez.",
      D: "Glikojen yıkımı DNA hasarı üretmez.",
      E: "Bu eşleştirme slaytta yoktur."
    },
    learningObjective: "DNA hasarına yol açan başlıca etkenleri tanımak.",
    tags: ["DNA hasarı", "UV", "pirimidin dimeri", "oksidatif hasar"]
  }),
  makeQuestion({
    id: "NUC-011",
    sourcePdf,
    sourceTopic: "Azotlu baz sınıfları",
    sourcePages: [5],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Tipik bir nükleotidin bileşenleri aşağıdakilerden hangisidir?",
    options: {
      A: "Azotlu baz, pentoz ve fosfat",
      B: "Yağ asidi, gliserol ve fosfat",
      C: "Amino asit, tRNA ve ATP",
      D: "Sterol çekirdeği, fosfolipit ve şeker",
      E: "Sadece pürin bazı ve iki fosfat"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik nükleotidlerin üç tipik bileşenden oluştuğunu belirtir: azot içeren baz, pentoz ve fosfat.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu lipit yapısını anlatır.",
      C: "Bu bileşenler nükleotid tanımı değildir.",
      D: "Nükleotid yapısı böyle değildir.",
      E: "Pentoz da zorunlu bileşendir; fosfat sayısı değişebilir."
    },
    learningObjective: "Nükleotidin temel bileşenlerini tanımlamak.",
    tags: ["nükleotid", "baz", "pentoz", "fosfat"]
  }),
  makeQuestion({
    id: "NUC-012",
    sourcePdf,
    sourceTopic: "Fosfodiester bağı",
    sourcePages: [20],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Nükleotit dizilerinin şematik gösteriminde aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Fosfat grubu genellikle ℗ ile gösterilir.",
      B: "Deoksiribozun C-1'i altta, C-5'i üstte gösterilir.",
      C: "Bağlayıcı çizgiler yalnız bazlar arasındaki hidrojen bağlarını gösterir.",
      D: "Şematik gösterimde yönlülük kavramı yoktur.",
      E: "RNA ve DNA aynı şekilde yalnız amino asit dizisiyle gösterilir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik şematik gösterimde fosfat grubunun ℗ ile simgelendiğini, deoksiribozun belirli bir yönlenmeyle çizildiğini ve nükleotitleri bağlayan çizgilerin şeker-fosfat omurgasını temsil ettiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Yönlenme ters verilmiştir.",
      C: "Şematik çizgiler omurga bağlarını gösterir.",
      D: "5'-3' yönlülük korunur.",
      E: "Amino asit dizisi değil, nükleotit dizisi gösterilir."
    },
    learningObjective: "Nükleik asit dizilerinin şematik gösterimini okumak.",
    tags: ["şematik gösterim", "fosfat", "yönlülük", "DNA"]
  }),
  makeQuestion({
    id: "NUC-013",
    sourcePdf,
    sourceTopic: "DNA çift sarmalı",
    sourcePages: [28],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Chargaff kurallarından aşağıdaki sonuçlardan hangisi çıkarılabilir?",
    options: {
      A: "A + G = T + C",
      B: "A = G",
      C: "U = T",
      D: "Baz içeriği tüm türlerde aynıdır",
      E: "DNA tek zincirli olduğunda daha kararlıdır"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik A=T ve G=C eşitliklerinden A+G=T+C sonucunun çıkarılabildiğini açıkça belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Chargaff kuralı bunu vermez.",
      C: "Urasil RNA bazıdır.",
      D: "Türler arasında baz içeriği değişebilir.",
      E: "Bu, Chargaff kurallarının sonucu değildir."
    },
    learningObjective: "Chargaff kurallarından türetilen temel eşitliği yorumlamak.",
    tags: ["Chargaff", "A+G=T+C", "DNA", "baz bileşimi"]
  }),
  makeQuestion({
    id: "NUC-014",
    sourcePdf,
    sourceTopic: "Mesajcı RNA ve diğer RNA türleri",
    sourcePages: [36],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Mesajcı RNA'nın temel görevi aşağıdakilerden hangisidir?",
    options: {
      A: "DNA'daki genetik bilgiyi ribozoma taşımak",
      B: "Yalnız DNA onarımı için enerji sağlamak",
      C: "Fosfolipit sentezlemek",
      D: "Sadece sitozolik pH'ı düzenlemek",
      E: "Steroid hormonların öncülü olmak"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik mRNA'yı DNA'daki mesajı çekirdekten sitoplazmadaki ribozoma taşıyan RNA türü olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "mRNA'nın temel görevi bu değildir.",
      C: "Lipit senteziyle ilişkili değildir.",
      D: "Böyle bir işlev verilmez.",
      E: "Hormon öncülü değildir."
    },
    learningObjective: "mRNA'nın genetik bilgi akışındaki rolünü tanımak.",
    tags: ["mRNA", "ribozom", "transkripsiyon", "genetik bilgi"]
  }),
  makeQuestion({
    id: "NUC-015",
    sourcePdf,
    sourceTopic: "Mesajcı RNA ve diğer RNA türleri",
    sourcePages: [39],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "Aşağıdaki eşleştirmelerden hangisi RNA türü ile işlevini doğru verir?",
    options: {
      A: "tRNA - amino asitleri doğru sırayla taşımaya aracılık eden adaptör",
      B: "rRNA - yalnız glukoz taşıyan membran proteini",
      C: "mRNA - steroid çekirdeği sentezleyen kofaktör",
      D: "tRNA - DNA çift sarmalını stabilize eden sterol",
      E: "rRNA - yalnız çekirdek zarında bulunan fosfolipit"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik taşıyıcı RNA'ları protein sentezinde adaptör moleküller olarak; ribozomal RNA'ları ise ribozomun bileşenleri olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "rRNA'nın görevi bu değildir.",
      C: "mRNA kofaktör değildir.",
      D: "tRNA bir nükleik asittir; sterol değildir.",
      E: "rRNA lipit değildir."
    },
    learningObjective: "Başlıca RNA türlerini temel işlevleriyle eşleştirmek.",
    tags: ["tRNA", "rRNA", "RNA türleri", "adaptör", "ribozom"]
  }),
  makeQuestion({
    id: "NUC-016",
    sourcePdf,
    sourceTopic: "DNA denatürasyonu ve Tm",
    sourcePages: [42],
    difficulty: "Orta",
    questionType: "kavramsal ayrım",
    question:
      "DNA denatürasyonu için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Baz eşleşmeleri ve istiflenme bozulur, ancak omurgadaki kovalent bağlar kırılmaz.",
      B: "5'-3' fosfodiester bağlarının tamamen hidrolizi gerekir.",
      C: "Yalnız düşük sıcaklıkta gerçekleşir.",
      D: "Denatürasyon yalnız ribozomlarda olur.",
      E: "Denatürasyon sonrası UV soğurması daima azalır."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik sıcaklık veya uç pH ile denatürasyonda baz eşleşmeleri ve baz istiflenmesi bozulurken kovalent bağların kırılmadığını vurgular.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu omurganın parçalanması olur; denatürasyon tanımı değildir.",
      C: "Sıcaklık artışı da denatürasyona neden olabilir.",
      D: "Ribozomlara özgü değildir.",
      E: "Denatürasyonla soğurma artar."
    },
    learningObjective: "DNA denatürasyonunu kovalent yıkımdan ayırt etmek.",
    tags: ["denatürasyon", "DNA", "kovalent bağ", "baz eşleşmesi"]
  }),
  makeQuestion({
    id: "NUC-017",
    sourcePdf,
    sourceTopic: "DNA denatürasyonu ve Tm",
    sourcePages: [45],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Hipokromik etki aşağıdakilerden hangisini ifade eder?",
    options: {
      A: "Bazların istiflenmesi ve çift iplik oluşumu nedeniyle UV soğurmanın azalması",
      B: "Pirimidin dimerlerinin UV soğurmayı tamamen yok etmesi",
      C: "Proteinlerin 280 nm yerine 260 nm soğurması",
      D: "Yalnız serbest nükleotitlerin renksiz olması",
      E: "DNA kırıklarının floresan artışı"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik nükleik asitlerde baz istiflenmesi ve iplik eşleşmesi olduğunda 260 nm'deki UV soğurmanın azaldığını; bunun hipokromik etki olarak adlandırıldığını açıklar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Hipokromik etki böyle tanımlanmaz.",
      C: "Bu proteinlerle ilgili başka bir soğurma penceresidir.",
      D: "Hipokromik etki bu değildir.",
      E: "Kaynak içerikte böyle bir tanım verilmez."
    },
    learningObjective: "Hipokromik etki kavramını UV soğurma üzerinden açıklamak.",
    tags: ["hipokromik etki", "UV 260 nm", "baz istiflenmesi", "DNA"]
  }),
  makeQuestion({
    id: "NUC-018",
    sourcePdf,
    sourceTopic: "Farklı türlerin nükleik asitleri hibritler oluşturabilir",
    sourcePages: [47],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "İnsan ve fare DNA ipliklerinin karıştırılıp yeniden eşleşebilmesi aşağıdakilerden hangisini gösterir?",
    options: {
      A: "Benzer dizilerin hibrit çift sarmal oluşturabilecek kadar tamamlayıcılık taşıyabildiğini",
      B: "Bütün türlerin baz içeriklerinin aynı olduğunu",
      C: "DNA'nın yalnız tek zincirli halde bulunduğunu",
      D: "Hibritleşmenin yalnız RNA moleküllerinde görüldüğünü",
      E: "Fosfodiester bağlarının türler arası değiştiğini"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik farklı türlerden elde edilen tamamlayıcı dizilerin hibrit çift sarmallar oluşturabildiğini ve bunun benzer DNA dizilerini saptamada kullanılabildiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Baz içeriği türden türe değişebilir.",
      C: "DNA çift sarmal olarak da bulunur.",
      D: "Hibritleşme DNA için de anlatılır.",
      E: "Omurga türler arası bu şekilde ayrışmaz."
    },
    learningObjective: "Hibritleşmeyi dizi benzerliği ile ilişkilendirmek.",
    tags: ["hibritleşme", "DNA", "tamamlayıcılık", "türler arası"]
  }),
  makeQuestion({
    id: "NUC-019",
    sourcePdf,
    sourceTopic: "Mutajenik hasar kaynakları",
    sourcePages: [51],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "AP lezyonu için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Baz ile pentoz arasındaki N-β-glikozit bağının kırılması sonucu bazsız bölge oluşur.",
      B: "İki bitişik timin arasında siklobütan halkası oluşmasıdır.",
      C: "Yalnız RNA'da görülen bir deaminasyon ürünüdür.",
      D: "Yalnız glikojen zincirlerinin kırılmasıdır.",
      E: "Sterol halkasının oksitlenmesidir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik AP lezyonunu, baz ile pentoz arasındaki N-β-glikozit bağının kırılması sonucu apürinik/apirimidinik yani bazsız bölge oluşması olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu UV ile oluşan pirimidin dimeridir.",
      C: "AP lezyonu böyle tanımlanmaz.",
      D: "Karbohidrat yapısıyla ilgilidir.",
      E: "Lipit kimyasıyla ilgilidir."
    },
    learningObjective: "AP lezyonunu diğer DNA hasarlarından ayırt etmek.",
    tags: ["AP lezyonu", "N-beta-glikozit", "DNA hasarı", "depürinizasyon"]
  }),
  makeQuestion({
    id: "NUC-020",
    sourcePdf,
    sourceTopic: "Mutajenik hasar kaynakları",
    sourcePages: [58],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "Aşağıdakilerden hangisi kaynak içerikte oksidatif DNA hasarıyla ilişkilendirilen türlerden biridir?",
    options: {
      A: "Hidroksil radikali",
      B: "Glikojen sentaz",
      C: "Klorofil b",
      D: "Heparan sülfat",
      E: "Fosfatidilkolin"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik H2O2, hidroksil radikali ve süperoksit radikali gibi reaktif oksijen türlerinin DNA'da oksidatif hasar oluşturabildiğini; özellikle hidroksil radikallerinin büyük bölümden sorumlu olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu bir enzimdir; ROS değildir.",
      C: "Pigmenttir.",
      D: "Glikozaminoglikandır.",
      E: "Zar lipididir."
    },
    learningObjective: "Oksidatif DNA hasarıyla ilişkili ROS örneklerini tanımak.",
    tags: ["oksidatif hasar", "ROS", "hidroksil radikali", "DNA"]
  }),
  makeQuestion({
    id: "NUC-021",
    sourcePdf,
    sourceTopic: "Bazların özellikleri NA 3B yapısını etkiler",
    sourcePages: [24],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Nükleotitlerin yaklaşık hangi dalga boyunda kuvvetli UV soğurma gösterdiği belirtilir?",
    options: {
      A: "260 nm",
      B: "120 nm",
      C: "420 nm",
      D: "560 nm",
      E: "760 nm"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik tüm nükleotitlerin rezonans yapıları nedeniyle yaklaşık 260 nm civarında kuvvetli UV soğurma gösterdiğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kaynak içerikte bu dalga boyu verilmez.",
      C: "Görünür bölgeye yaklaşır; nükleotitlerin karakteristik UV piki değildir.",
      D: "Bu görünür bölgededir.",
      E: "Bu da görünür/IR sınırına yakındır."
    },
    learningObjective: "Nükleik asit bileşenlerinin karakteristik UV soğurma bölgesini tanımak.",
    tags: ["UV", "260 nm", "nükleotit", "baz istiflenmesi"]
  })
];
