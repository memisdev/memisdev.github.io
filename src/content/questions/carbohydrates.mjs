import { makeQuestion } from "./helpers.mjs";

const sourcePdf = "Karbonhidratlar ve Glikobiyoloji.pdf";

export const carbohydrateQuestions = [
  makeQuestion({
    id: "CHO-001",
    sourcePdf,
    sourceTopic: "Monosakkaritlerin temel sınıflandırılması",
    sourcePages: [7],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Slayttaki sınıflandırmaya göre aşağıdaki eşleştirmelerden hangisi doğrudur?",
    options: {
      A: "Gliseraldehit: ketotrioz",
      B: "Dihidroksiaseton: aldotrioz",
      C: "Gliseraldehit: aldotrioz",
      D: "Riboz: ketoheksoz",
      E: "Fruktoz: aldoheksoz"
    },
    correctAnswer: "C",
    correctExplanation:
      "Sunumda en basit monosakkarit örnekleri olarak gliseraldehitin aldotrioz, dihidroksiasetonun ise ketotrioz olduğu verilir.",
    distractorExplanations: {
      A: "Gliseraldehit ketotrioz değil, aldotriozdur.",
      B: "Dihidroksiaseton ketotriozdur.",
      C: "Doğru seçenek.",
      D: "Riboz pentozdur.",
      E: "Fruktoz ketoheksoz olarak verilir."
    },
    learningObjective: "Monosakkaritleri aldoz/ketoz ve karbon sayısına göre sınıflandırmak.",
    tags: ["monosakkarit", "aldoz", "ketoz", "trioz"]
  }),
  makeQuestion({
    id: "CHO-002",
    sourcePdf,
    sourceTopic: "D ve L izomerleri",
    sourcePages: [11, 12],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Monosakkaritlerde D veya L tanımı slayta göre hangi ölçüte dayanır?",
    options: {
      A: "Karbonil grubunun sayısına",
      B: "Karbonil grubuna en uzak kiral merkezdeki düzenlenişin gliseraldehide benzerliğine",
      C: "Molekülün halka açıp açmamasına",
      D: "Mutlak optik dönme yönüne",
      E: "Yalnızca molekül kütlesine"
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunum, D/L ayrımının karbonil grubuna en uzak kiral merkezdeki -OH düzenlenişinin D- veya L-gliseraldehide benzerliğine göre yapıldığını belirtir.",
    distractorExplanations: {
      A: "Karbonil sayısı D/L ayrımını vermez.",
      B: "Doğru seçenek.",
      C: "Halka oluşumu ayrı bir konudur.",
      D: "D/L ile sağa-sola çevirme aynı kavram değildir.",
      E: "Molekül kütlesi belirleyici değildir."
    },
    learningObjective: "D/L izomer tanımının referans noktasını açıklamak.",
    tags: ["D-L", "stereoizomer", "gliseraldehit"]
  }),
  makeQuestion({
    id: "CHO-003",
    sourcePdf,
    sourceTopic: "Anomer kavramı",
    sourcePages: [17, 20],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Aşağıdakilerden hangisi anomerleri en doğru biçimde tanımlar?",
    options: {
      A: "Karbon sayıları farklı monosakkarit çiftleri",
      B: "Sadece zincir uzunluğu farklı şekerler",
      C: "Yalnızca yarı asetal veya yarı ketal karbondaki düzenlenişi farklı izomerler",
      D: "Aldoz ve ketoz arasındaki tüm farklar",
      E: "Birbirinin ayna görüntüsü olan tüm şekerler"
    },
    correctAnswer: "C",
    correctExplanation:
      "PDF’de anomerlerin yalnızca yarı asetal/yarı ketal karbonundaki yani anomerik karbondaki düzenleniş farkıyla ayrılan izomerler olduğu belirtilir.",
    distractorExplanations: {
      A: "Karbon sayısı farkı anomer tanımı değildir.",
      B: "Zincir uzunluğu farkı yoktur.",
      C: "Doğru seçenek.",
      D: "Aldoz-ketoz farkı çok daha farklı bir sınıflamadır.",
      E: "Bu tanım enantiyomerleri anlatır."
    },
    learningObjective: "Anomer kavramını diğer stereokimyasal ayrımlardan ayırt etmek.",
    tags: ["anomer", "anomerik karbon", "stereoizomer"]
  }),
  makeQuestion({
    id: "CHO-004",
    sourcePdf,
    sourceTopic: "Mutarotasyon",
    sourcePages: [21],
    difficulty: "Kolay",
    questionType: "süreç",
    question:
      "Glukozun α ve β izomerlerinin sulu çözeltide birbirine dönüşmesine ne ad verilir?",
    options: {
      A: "Denatürasyon",
      B: "Mutarotasyon",
      C: "Depürinizasyon",
      D: "Transaminasyon",
      E: "Fosforilasyon"
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta glukozun α ve β izomerlerinin sulu çözeltide mutarotasyon ile birbirine dönüştüğü ifade edilir.",
    distractorExplanations: {
      A: "Denatürasyon nükleik asit ve protein bağlamında kullanılır.",
      B: "Doğru seçenek.",
      C: "Depürinizasyon baz kaybıdır.",
      D: "Transaminasyon amino asit metabolizmasıyla ilgilidir.",
      E: "Fosforilasyon farklı bir kimyasal işlemdir."
    },
    learningObjective: "Mutarotasyon kavramını tanımlamak.",
    tags: ["mutarotasyon", "glukoz", "anomer"]
  }),
  makeQuestion({
    id: "CHO-005",
    sourcePdf,
    sourceTopic: "Heksoz türevleri",
    sourcePages: [27, 28],
    difficulty: "Orta",
    questionType: "eşleştirme",
    question:
      "Aşağıdaki ifadelerden hangisi slayttaki heksoz türevleri bilgisiyle uyumludur?",
    options: {
      A: "N-asetilglukozamin bakteriyel hücre duvarı gibi yapısal polimerlerin parçası olabilir.",
      B: "Muramik asit, glukozun tüm karbonlarının indirgenmesiyle oluşur.",
      C: "Glukozamin, C-6'daki -OH yerine amino grup taşıyan şekerdir.",
      D: "Uronik asitler karbonil karbonunun indirgenmesiyle oluşur.",
      E: "Fukoz, glukozun C-2 aminasyonu ile oluşur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Sunum, N-asetilglukozaminin bakteriyel hücre duvarı dahil yapısal polimerlerde bulunduğunu; muramik asidin ise N-asetilglukozamine C-3 üzerinden laktik asit eklenmesiyle ilişkili olduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Muramik asit böyle tanımlanmaz.",
      C: "Amino grup değişimi C-2 için verilir.",
      D: "Uronik asitler zincirin diğer ucundaki karbonun yükseltgenmesiyle anlatılır.",
      E: "Fukoz, galaktoz türevi bağlamında C-6'daki -OH yerine -H ile açıklanır."
    },
    learningObjective: "Başlıca şeker türevlerini yapısal değişiklikleriyle tanımak.",
    tags: ["N-asetilglukozamin", "muramik asit", "heksoz türevleri"]
  }),
  makeQuestion({
    id: "CHO-006",
    sourcePdf,
    sourceTopic: "İndirgen ve indirgen olmayan disakkaritler",
    sourcePages: [34, 35, 44, 45],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Bir disakkaritin indirgen olmayan şeker olması için slaytlara göre hangi durum gereklidir?",
    options: {
      A: "En az bir serbest aldehit grubu taşıması",
      B: "Yalnızca β bağları içermesi",
      C: "Anomerik karbonlardan en az birinin serbest kalması",
      D: "Anomerik karbonların bağ oluşumuna katılması ve çizgisel formun oluşamaması",
      E: "Molekülün mutlaka glukoz ve fruktozdan oluşması"
    },
    correctAnswer: "D",
    correctExplanation:
      "PDF’de bir anomerik karbon glikozit bağı yaptığında çizgisel forma geçemeyeceği, iki anomerik karbon da bağa katılmışsa şekerin indirgen olmayan özellik göstereceği açıklanır.",
    distractorExplanations: {
      A: "Bu, indirgen şeker lehine bir durumdur.",
      B: "Bağın α ya da β oluşu tek başına yeterli değildir.",
      C: "Serbest anomerik karbon indirgenlik sağlar; indirgen olmayan için tersi gerekir.",
      D: "Doğru seçenek.",
      E: "Sükroz bir örnektir ama tek olasılık değildir."
    },
    learningObjective: "İndirgen ve indirgen olmayan şeker ayrımını anomerik karbon üzerinden yorumlamak.",
    tags: ["disakkarit", "indirgen şeker", "anomerik karbon", "glikozit bağı"]
  }),
  makeQuestion({
    id: "CHO-007",
    sourcePdf,
    sourceTopic: "Trehaloz",
    sourcePages: [45],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Trehaloz için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Glc(α1→4)Glc yapısındadır ve maltozla aynıdır.",
      B: "Her iki anomerik karbon da bağa katıldığı için özel olarak belirtilir.",
      C: "Galaktoz ve glukozdan oluşur.",
      D: "Hayvan hücrelerinde ana yapısal polisakkarittir.",
      E: "Yalnızca proteinlere kovalent bağlı bulunur."
    },
    correctAnswer: "B",
    correctExplanation:
      "Slaytta trehalozun Glc(α1→1α)Glc yapısında olduğu ve iki anomerik karbonun da bağa katılması nedeniyle özel olarak gösterildiği vurgulanır.",
    distractorExplanations: {
      A: "Bu trehaloz değil, maltoz tipinde bir bağ olurdu.",
      B: "Doğru seçenek.",
      C: "Bu tanım trehaloz için verilmez.",
      D: "Trehaloz polisakkarit değil disakkarittir.",
      E: "Trehaloz serbest disakkarit örneğidir."
    },
    learningObjective: "Trehalozun bağ düzenini maltozdan ayırmak.",
    tags: ["trehaloz", "disakkarit", "anomerik karbon"]
  }),
  makeQuestion({
    id: "CHO-008",
    sourcePdf,
    sourceTopic: "Depo polisakkaritleri",
    sourcePages: [47, 51, 52, 53],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Nişasta ve glikojen karşılaştırması için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Glikojen, nişastaya göre daha az dallanmıştır.",
      B: "Nişasta hayvanların, glikojen bitkilerin ana depo polisakkaritidir.",
      C: "Glikojen hayvanların ana depo polisakkaritidir ve nişastadan daha sık dallanmıştır.",
      D: "Her ikisi de β(1→4) bağlarıyla tamamen doğrusal yapıdadır.",
      E: "Hiçbirinde indirgen olmayan uç bulunmaz."
    },
    correctAnswer: "C",
    correctExplanation:
      "PDF, nişastayı bitkilerin, glikojeni hayvanların ana depo polisakkariti olarak verir ve glikojenin nişastaya göre daha sık dallanmış olduğunu belirtir.",
    distractorExplanations: {
      A: "Tam tersine, glikojen daha sık dallanmıştır.",
      B: "Organizma eşleşmesi ters verilmiştir.",
      C: "Doğru seçenek.",
      D: "Depo polisakkaritleri α bağlarıyla anılır; tamamen doğrusal değildirler.",
      E: "Dallanma nedeniyle çok sayıda indirgen olmayan uç bulunur."
    },
    learningObjective: "Başlıca depo polisakkaritlerini yapı ve organizma düzeyinde karşılaştırmak.",
    tags: ["nişasta", "glikojen", "depo polisakkariti", "dallanma"]
  }),
  makeQuestion({
    id: "CHO-009",
    sourcePdf,
    sourceTopic: "Glukozun monomer olarak depolanmaması",
    sourcePages: [54],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Slayta göre hücrelerin glukozu monomer halde depolamaması için temel gerekçe aşağıdakilerden hangisidir?",
    options: {
      A: "Glukozun kovalent bağ kuramaması",
      B: "Monomer glukozun aşırı yüksek osmolarite oluşturması",
      C: "Glukozun ATP üretememesi",
      D: "Glukozun yalnızca çekirdekte bulunabilmesi",
      E: "Glukozun suda hiç çözünmemesi"
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, eşdeğer miktardaki glukozun monomer halde tutulmasının çok yüksek osmolarite oluşturacağını, bu nedenle glikojen/polisakkarit halinde depolanmanın avantajlı olduğunu açıklar.",
    distractorExplanations: {
      A: "Glukoz glikozit bağları kurabilir.",
      B: "Doğru seçenek.",
      C: "Glukoz enerji metabolizmasının temel yakıtıdır.",
      D: "Böyle bir sınırlama anlatılmaz.",
      E: "Glukoz suda çözünebilir."
    },
    learningObjective: "Polimer depolamanın ozmotik avantajını açıklamak.",
    tags: ["glukoz", "osmolarite", "glikojen", "depolama"]
  }),
  makeQuestion({
    id: "CHO-010",
    sourcePdf,
    sourceTopic: "Yapısal homopolisakkaritler",
    sourcePages: [56, 57, 59],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Aşağıdaki ifadelerden hangisi selüloz ile kitin arasındaki farkı doğru verir?",
    options: {
      A: "Her ikisi de glikojenin dallanmış formlarıdır.",
      B: "Kitin, selülozdan C-2'deki -OH yerine asetillenmiş amino grup taşımasıyla ayrılır.",
      C: "Selüloz α(1→4), kitin ise α(1→6) bağları taşır.",
      D: "Hayvanlar her ikisini de kolaylıkla sindirir.",
      E: "Selüloz yalnızca bakterilerde, kitin yalnızca bitkilerde bulunur."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunumda kitinin N-asetilglukozamin kalıntılarından oluştuğu ve selülozdan temel farkının C-2'deki -OH yerine asetillenmiş amino grup taşıması olduğu belirtilir.",
    distractorExplanations: {
      A: "Bu tanım ikisine de uymaz.",
      B: "Doğru seçenek.",
      C: "Selüloz ve kitin β(1→4) bağlarıyla anlatılır.",
      D: "Omurgalılar selülozu ve kitini sindiremez.",
      E: "Dağılım böyle verilmez."
    },
    learningObjective: "Selüloz ve kitini yapı düzeyinde ayırt etmek.",
    tags: ["selüloz", "kitin", "N-asetilglukozamin", "yapısal polisakkarit"]
  }),
  makeQuestion({
    id: "CHO-011",
    sourcePdf,
    sourceTopic: "Glikozaminoglikanlar",
    sourcePages: [70, 73, 75],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Hiyaluronan ile ilgili aşağıdaki ifadelerden hangisi slayta uygundur?",
    options: {
      A: "Tekrarlanan glukoz ve fruktoz birimlerinden oluşur.",
      B: "D-glukuronik asit ve N-asetilglukozamin içeren bir glikozaminoglikandır.",
      C: "Sadece bitki hücre duvarında bulunur.",
      D: "Ana işlevi elektron taşıma zincirinde görev almaktır.",
      E: "Protein çekirdeği zorunlu olarak taşır, bu yüzden proteoglikandır."
    },
    correctAnswer: "B",
    correctExplanation:
      "Sunum, hiyaluronanın D-glukuronik asit ve N-asetilglukozamin kalıntılarından oluşan bir glikozaminoglikan olduğunu ve proteoglikanlardan ayrı düşünülmesi gerektiğini anlatır.",
    distractorExplanations: {
      A: "Bu bileşim verilmez.",
      B: "Doğru seçenek.",
      C: "ECM bağlamında anlatılır; sadece bitki hücre duvarı değildir.",
      D: "Elektron taşıma ile ilişkili değildir.",
      E: "Hiyaluronan protein çekirdeği taşımadan da bulunabilir; bu yönüyle tipik proteoglikandan ayrılır."
    },
    learningObjective: "Başlıca glikozaminoglikan örneklerinden hiyaluronanı tanımlamak.",
    tags: ["hiyaluronan", "glikozaminoglikan", "ECM"]
  }),
  makeQuestion({
    id: "CHO-012",
    sourcePdf,
    sourceTopic: "Şeker kodu ve lektinler",
    sourcePages: [101, 102, 108],
    difficulty: "Zor",
    questionType: "kavramsal ayrım",
    question:
      "Lektinler için aşağıdaki ifadelerden hangisi slaytlarla uyumludur?",
    options: {
      A: "Karbohidratları özgül olarak tanımayan yapısal lipitlerdir.",
      B: "Şeker kodunu okuyan ve karbohidratları yüksek özgüllükle bağlayan proteinlerdir.",
      C: "Yalnızca glikojeni sentezleyen enzimlerdir.",
      D: "DNA çift sarmalını açan helikazların diğer adıdır.",
      E: "Sadece bakterilerde bulunan taşıyıcı RNA'lardır."
    },
    correctAnswer: "B",
    correctExplanation:
      "PDF, lektinleri şeker kodunu okuyan; karbohidratları yüksek özgüllükle bağlayarak hücre-hücre tanınması gibi pek çok biyolojik olaya aracılık eden proteinler olarak tanımlar.",
    distractorExplanations: {
      A: "Lektinler lipit değil proteindir.",
      B: "Doğru seçenek.",
      C: "Bu tanım slayttaki lektin kavramını karşılamaz.",
      D: "Helikazlarla ilgisi yoktur.",
      E: "Taşıyıcı RNA değildir."
    },
    learningObjective: "Şeker kodu kavramını lektinlerin özgül bağlanması üzerinden açıklamak.",
    tags: ["lektin", "şeker kodu", "glikobiyoloji", "özgüllük"]
  }),
  makeQuestion({
    id: "CHO-013",
    sourcePdf,
    sourceTopic: "D ve L izomerleri",
    sourcePages: [15],
    difficulty: "Kolay",
    questionType: "tanım",
    question:
      "Epimer için aşağıdaki tanımlardan hangisi doğrudur?",
    options: {
      A: "Bütün kiral merkezlerde farklılık gösteren şeker çifti",
      B: "Sadece bir karbon atomu etrafındaki düzenlenişi farklı olan şeker çifti",
      C: "Yalnız karbon sayıları farklı olan monosakkaritler",
      D: "Biri aldoz biri ketoz olan her şeker çifti",
      E: "Yalnız anomerik karbonları farklı olan halkalı şekerler"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerik, yalnız bir karbon atomu etrafındaki düzenlenişi farklı olan iki şekeri epimer olarak tanımlar; D-glukoz/D-mannoz ve D-glukoz/D-galaktoz örnekleri verilir.",
    distractorExplanations: {
      A: "Bu tanım tüm kiral merkezleri farklı izomerleri anlatır.",
      B: "Doğru seçenek.",
      C: "Karbon sayısı farkı epimer tanımı değildir.",
      D: "Aldoz-ketoz ayrımı epimer olmayı tek başına belirlemez.",
      E: "Bu durum anomerlerle ilişkilidir."
    },
    learningObjective: "Epimer kavramını diğer stereoizomer ayrımlarından ayırt etmek.",
    tags: ["epimer", "stereoizomer", "glukoz", "mannoz", "galaktoz"]
  }),
  makeQuestion({
    id: "CHO-014",
    sourcePdf,
    sourceTopic: "D ve L izomerleri",
    sourcePages: [14],
    difficulty: "Orta",
    questionType: "sınıflandırma",
    question:
      "D-riboz ile karşılık ketozun adlandırılmasına ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "D-ribozun karşılık ketozu D-ribulozdur.",
      B: "D-ribozun karşılık ketozu D-ribonattır.",
      C: "D-ribozun karşılık ketozu D-ribozamindir.",
      D: "D-ribozun karşılık ketozu D-ribofuranozdur.",
      E: "Ketozlar ilgili aldozdan tamamen farklı ad alır; ortak kök kullanılmaz."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerikte 4 ve 5 karbonlu ketozların ilgili aldozların adına '-ul' eki getirilerek adlandırıldığı; örnek olarak D-ribozdan D-ribuloz adı verildiği belirtilir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu bir asit türevi adlandırmasını çağrıştırır.",
      C: "Bu aminasyonla ilgili bir ad olurdu.",
      D: "Bu halka formunu anlatır; karşılık ketoz adı değildir.",
      E: "Kaynak içerik ortak kökün korunduğunu söyler."
    },
    learningObjective: "Ketoz adlandırmasında ilgili aldoz kökünün nasıl kullanıldığını açıklamak.",
    tags: ["ketoz", "adlandırma", "riboz", "ribuloz"]
  }),
  makeQuestion({
    id: "CHO-015",
    sourcePdf,
    sourceTopic: "İndirgen ve indirgen olmayan disakkaritler",
    sourcePages: [33],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Bir şekerin Fehling benzeri bir deneyde indirgen davranış göstermesi aşağıdakilerden hangisiyle en iyi açıklanır?",
    options: {
      A: "Karbonil grubunun yükseltgenebilmesi",
      B: "Yalnızca β bağ içermesi",
      C: "Mutlaka polisakkarit olması",
      D: "Suda çözünmemesi",
      E: "Yalnız proteinlere kovalent bağlı bulunması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerikte monosakkaritlerin ılımlı yükseltgen ajanlarla yükseltgenebildiği, karbonil grubunun karboksil grubuna dönüşebildiği ve Cu2+ gibi iyonları indirgediği anlatılır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bağın yalnız β olması indirgenlik için yeterli değildir.",
      C: "Polisakkarit olması gerekmez.",
      D: "Çözünürlük indirgenliğin açıklaması değildir.",
      E: "Bu durum indirgen davranış için tanımlayıcı değildir."
    },
    learningObjective: "İndirgen şeker davranışını karbonil kimyası üzerinden yorumlamak.",
    tags: ["indirgen şeker", "Fehling", "karbonil", "yükseltgenme"]
  }),
  makeQuestion({
    id: "CHO-016",
    sourcePdf,
    sourceTopic: "İndirgen ve indirgen olmayan disakkaritler",
    sourcePages: [36],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Disakkarit adlandırılırken ilk olarak aşağıdakilerden hangisi yazılır?",
    options: {
      A: "İndirgen uçtaki monosakkarit",
      B: "Sola yerleştirilen indirgen olmayan uç",
      C: "Molekülün toplam karbon sayısı",
      D: "Sadece anomerik karbonun numarası",
      E: "Önce yalnız bağın α veya β oluşu"
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerikte disakkarit ve oligosakkaritleri adlandırırken önce sola indirgen olmayan ucun yazıldığı, ardından bu uçtaki anomerik karbonun düzenlenişinin belirtildiği açıklanır.",
    distractorExplanations: {
      A: "İlk yazılan uç olarak bu verilmez.",
      B: "Doğru seçenek.",
      C: "Toplam karbon sayısı başlangıç kuralı değildir.",
      D: "Bağ bilgisi sonrasında verilir; ilk adım bu değildir.",
      E: "Önce uç seçimi yapılır."
    },
    learningObjective: "Disakkarit adlandırmasında temel sıralama kuralını tanımak.",
    tags: ["disakkarit", "adlandırma", "indirgen uç", "glikozit bağı"]
  }),
  makeQuestion({
    id: "CHO-017",
    sourcePdf,
    sourceTopic: "Depo polisakkaritleri",
    sourcePages: [46],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Aşağıdakilerden hangisi homopolisakkarit örneğidir?",
    options: {
      A: "Glikojen",
      B: "Peptidoglikan",
      C: "Hiyaluronan",
      D: "Bazal zar",
      E: "Heparan sülfat"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik homopolisakkaritleri tek monomer türünden oluşan polisakkaritler olarak verir; glikojen ve nişasta bu gruptadır. Peptidoglikan ve glikozaminoglikanlar heteropolisakkarit yapıdadır.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "N-asetilglukozamin ve N-asetilmuramik asit içerir.",
      C: "Tekrarlayan disakkaritlerden oluşan heteropolisakkarittir.",
      D: "Bu bir yapı/bölge tanımıdır; tek bir polisakkarit türü değildir.",
      E: "Glikozaminoglikandır."
    },
    learningObjective: "Homopolisakkarit ve heteropolisakkarit ayrımını örneklerle yapmak.",
    tags: ["homopolisakkarit", "glikojen", "heteropolisakkarit", "peptidoglikan"]
  }),
  makeQuestion({
    id: "CHO-018",
    sourcePdf,
    sourceTopic: "Yapısal homopolisakkaritler",
    sourcePages: [56],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Selüloz ile amiloz arasındaki temel yapısal fark aşağıdakilerden hangisidir?",
    options: {
      A: "Selüloz β(1→4), amiloz ise α bağ düzeni içerir.",
      B: "Selüloz yalnız fruktozdan, amiloz yalnız ribozdan oluşur.",
      C: "Amiloz dallanmamış, selüloz ise yoğun dallanmıştır.",
      D: "Selüloz protein çekirdeğine bağlıdır, amiloz serbesttir.",
      E: "İkisi de aynı glikozit bağını taşır; yalnız çözünürlükleri değişir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, selülozun uzun doğrusal D-glukoz zincirlerinde β(1→4) glikozit bağları taşıdığını; amilozun ise α bağ düzeni nedeniyle farklı fiziksel ve kimyasal özellik gösterdiğini vurgular.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Her ikisi de glukoz temelli yapılardır.",
      C: "Selüloz için yoğun dallanma verilmez.",
      D: "Protein çekirdeğiyle ilişkili değildir.",
      E: "Bağ düzeni farkı temel ayrımdır."
    },
    learningObjective: "Selüloz ve amilozun bağ tipine bağlı özellik farkını açıklamak.",
    tags: ["selüloz", "amiloz", "beta 1-4", "alfa bağ", "yapısal polisakkarit"]
  }),
  makeQuestion({
    id: "CHO-019",
    sourcePdf,
    sourceTopic: "Glikozaminoglikanlar",
    sourcePages: [69, 70, 71],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Glikozaminoglikanlar için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Hücre dışı matriste dolgu ve destek sağlayan heteropolisakkaritlerdir.",
      B: "Yalnız mitokondride bulunan nükleotit depolarıdır.",
      C: "DNA çift sarmalının baz istiflenmesini sağlarlar.",
      D: "Sadece bitki nişastasının dallanma enzimleridir.",
      E: "Hücre içi ribozomların yapısal proteinleridir."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, glikozaminoglikanların çok hücreli hayvanlarda hücre dışı matriste yer alan heteropolisakkaritler olduğunu; hücreleri bir arada tutan ve difüzyona olanak veren dolgu/destek matrisi oluşturduklarını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Nükleotit deposu değildir.",
      C: "Bu görev nükleik asit yapısıyla ilgilidir.",
      D: "Nişasta enzimleriyle ilişkili değildir.",
      E: "Protein değildirler."
    },
    learningObjective: "Glikozaminoglikanların ECM içindeki yerini açıklamak.",
    tags: ["glikozaminoglikan", "ECM", "heteropolisakkarit", "destek matrisi"]
  }),
  makeQuestion({
    id: "CHO-020",
    sourcePdf,
    sourceTopic: "Polisakkaritler",
    sourcePages: [66],
    difficulty: "Zor",
    questionType: "neden-sonuç",
    question:
      "Lizozimin bakterileri öldürücü etkisi aşağıdakilerden hangisiyle en iyi açıklanır?",
    options: {
      A: "N-asetilglukozamin ile N-asetilmuramik asit arasındaki glikozit bağını hidroliz etmesi",
      B: "Kloroplastta ATP sentezini durdurması",
      C: "DNA bazları arasında kovalent çapraz bağ oluşturması",
      D: "Triaçilgliserolleri serbest yağ asitlerine hidroliz etmesi",
      E: "Selüloz liflerini dallandırması"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik, peptidoglikanda N-asetilglukozamin ile N-asetilmuramik asit arasında bulunan glikozit bağının lizozim tarafından hidrolizlenmesiyle bakteri hücre duvarının zayıfladığını belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Lizozim etkisi bununla ilişkili değildir.",
      C: "Bu DNA hasarı örneği olurdu.",
      D: "Bu lipaz etkinliğine benzer.",
      E: "Selüloz üzerinde böyle bir rol anlatılmaz."
    },
    learningObjective: "Peptidoglikan yapısını lizozim duyarlılığıyla ilişkilendirmek.",
    tags: ["peptidoglikan", "lizozim", "N-asetilglukozamin", "N-asetilmuramik asit"]
  }),
  makeQuestion({
    id: "CHO-021",
    sourcePdf,
    sourceTopic: "Glikokonjugatlar",
    sourcePages: [83, 84, 87],
    difficulty: "Zor",
    questionType: "karşılaştırma",
    question:
      "Proteoglikanlar ile glikoproteinler karşılaştırıldığında aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Proteoglikanlar çoğunlukla ≥1 glikozaminoglikan zinciri taşır; glikoproteinler ise proteine bağlı karmaşık oligosakkaritler içerir.",
      B: "Glikoproteinler yalnız ECM'de bulunur, proteoglikanlar yalnız sitozolde bulunur.",
      C: "Her iki sınıf da yalnızca depo polisakkarittir.",
      D: "Proteoglikanlarda karbohidrat kısmı hiç kovalent bağlı değildir.",
      E: "Glikoproteinlerin oligosakkarit kısımları biyolojik bilgi taşımaz."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik proteoglikanları hücre yüzeyi veya ECM'nin GAG içeren makromolekülleri olarak; glikoproteinleri ise proteine kovalent bağlı bir veya daha çok karmaşık oligosakkarit taşıyan yapılar olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Her iki sınıf için de daha geniş yerleşimler anlatılır.",
      C: "Depo polisakkaritleri değildir.",
      D: "Proteoglikanlarda zincirler proteine kovalent bağlıdır.",
      E: "Kaynak içerik glikoprotein oligosakkaritlerini bilgice zengin olarak niteler."
    },
    learningObjective: "Proteoglikan ve glikoprotein ayrımını yapı temelli yapmak.",
    tags: ["proteoglikan", "glikoprotein", "glikokonjugat", "GAG", "oligosakkarit"]
  }),
  makeQuestion({
    id: "CHO-022",
    sourcePdf,
    sourceTopic: "Şeker kodu ve lektinler",
    sourcePages: [103, 109, 111, 112],
    difficulty: "Orta",
    questionType: "karşılaştırma",
    question:
      "Aşağıdakilerden hangisi lektin-karbohidrat etkileşimleri için doğrudur?",
    options: {
      A: "Etkileşimler özgül değildir ve yalnız tek değerli bağlanma gösterir.",
      B: "Etkileşimler çoğunlukla çok değerliklidir ve özgüllüğe başka moleküller arası etkileşimler de katkı verebilir.",
      C: "Lektinler yalnız nişasta granüllerine bağlanan lipitlerdir.",
      D: "Bu etkileşimler yalnız nükleik asit denatürasyonunda görülür.",
      E: "Karbohidrat analizinde hiçbir afinite yöntemi kullanılmaz."
    },
    correctAnswer: "B",
    correctExplanation:
      "Kaynak içerik, lektin-karbohidrat etkileşimlerinin son derece özgül ve çoğunlukla çok değerlikli olduğunu; hidrofobik etkileşimler gibi ek moleküller arası katkıların da bağlanmayı etkileyebildiğini belirtir.",
    distractorExplanations: {
      A: "Kaynak içerik bunun tersini söyler.",
      B: "Doğru seçenek.",
      C: "Lektinler proteindir; lipit değildir.",
      D: "Bu, lektin-karbohidrat işleviyle ilgili değildir.",
      E: "Lektin afinite kromatografisi açıkça verilir."
    },
    learningObjective: "Lektin-karbohidrat etkileşimlerinin özgüllük özelliklerini yorumlamak.",
    tags: ["lektin", "çok değerlik", "özgüllük", "şeker kodu", "afinite kromatografisi"]
  }),
  makeQuestion({
    id: "CHO-023",
    sourcePdf,
    sourceTopic: "Monosakkaritlerin temel sınıflandırılması",
    sourcePages: [8, 9],
    difficulty: "Kolay",
    questionType: "sınıflandırma",
    question:
      "Aşağıdakilerden hangisi kaynak içerikte ketoheksoz örneği olarak verilir?",
    options: {
      A: "Fruktoz",
      B: "Riboz",
      C: "Gliseraldehit",
      D: "Dihidroksiaseton",
      E: "Arabinoz"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik D-fruktozu ketoheksoz örneği olarak verir; riboz pentoz, gliseraldehit aldotrioz ve dihidroksiaseton ketotriozdur.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Riboz pentozdur.",
      C: "Gliseraldehit aldotriozdur.",
      D: "Dihidroksiaseton ketotriozdur.",
      E: "Arabinoz pentoz grubunda değerlendirilir."
    },
    learningObjective: "Karbon sayısı ile aldoz/ketoz sınıflamasını örnekler üzerinden yapmak.",
    tags: ["ketoheksoz", "fruktoz", "monosakkarit", "sınıflandırma"]
  }),
  makeQuestion({
    id: "CHO-024",
    sourcePdf,
    sourceTopic: "Heksoz türevleri",
    sourcePages: [25],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Şeker türevleri için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Bir karbon atomu karboksil grubuna yükseltgenmiş olabilir.",
      B: "Şeker türevlerinde hiçbir zaman -OH grubu yer değiştirmez.",
      C: "Tüm türevler yalnız indirgenme ile oluşur.",
      D: "Heksoz türevleri yalnız fosfolipitlerde bulunur.",
      E: "Şeker türevleri için amino şeker veya uronik asit ayrımı yapılamaz."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik şeker türevlerinde -OH grubunun başka bir grup ile yer değiştirebileceğini ve bir karbon atomunun karboksil grubuna yükseltgenmiş olabileceğini belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Kaynak içerik bunun mümkün olduğunu belirtir.",
      C: "Yalnız indirgenme değil farklı dönüşümler anlatılır.",
      D: "Çok daha geniş bir biyolojik dağılım söz konusudur.",
      E: "Amino şeker ve uronik asit gibi ayrımlar yapılır."
    },
    learningObjective: "Şeker türevlerinin temel dönüşüm mantıklarını tanımak.",
    tags: ["şeker türevi", "uronik asit", "yükseltgenme", "heksoz"]
  }),
  makeQuestion({
    id: "CHO-025",
    sourcePdf,
    sourceTopic: "Glikozaminoglikanlar",
    sourcePages: [70],
    difficulty: "Orta",
    questionType: "tanım",
    question:
      "Glikozaminoglikanların tekrarlayan disakkarit birimleri için aşağıdakilerden hangisi doğrudur?",
    options: {
      A: "Monosakkaritlerden biri daima N-asetilglukozamin veya N-asetilgalaktozamin, diğeri çoğunlukla uronik asittir.",
      B: "Her iki birim de daima yalnız ribozdur.",
      C: "Tekrarlayan birim mutlaka üç amino asit içerir.",
      D: "Karbohidrat birimleri hiçbir zaman N-asetil türevi taşımaz.",
      E: "Bu polimerler yalnız bitkilerde bulunur."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik glikozaminoglikanlarda tekrarlayan disakkarit biriminin bir amino şeker ve çoğunlukla bir uronik asitten oluştuğunu açıkça belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Riboz temelli tanım doğru değildir.",
      C: "Amino asit değil, monosakkarit birimler söz konusudur.",
      D: "N-asetilli şekerler temel bileşenlerdendir.",
      E: "Kaynak içerik hayvan ve bakteri bağlamını vurgular."
    },
    learningObjective: "GAG tekrarlayan disakkarit biriminin tipik bileşimini açıklamak.",
    tags: ["glikozaminoglikan", "N-asetilglukozamin", "uronik asit", "disakkarit"]
  }),
  makeQuestion({
    id: "CHO-026",
    sourcePdf,
    sourceTopic: "Glikokonjugatlar",
    sourcePages: [86],
    difficulty: "Zor",
    questionType: "tanım",
    question:
      "Temel bir proteoglikan birimi için aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      A: "Glikozaminoglikan(lar)a kovalent bağlı çekirdek proteinden oluşur.",
      B: "Yalnız serbest oligosakkaritlerden oluşur; protein kısmı yoktur.",
      C: "Sadece DNA'ya bağlanan lipit çapasıdır.",
      D: "Üç yağ asidi ve gliserolden oluşan nötral yağdır.",
      E: "Yalnız mitokondri zarında bulunan elektron taşıyıcısıdır."
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik temel proteoglikan birimini glikozaminoglikanlara kovalent bağlı bir çekirdek protein olarak tanımlar.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Proteoglikanlarda protein çekirdeği vardır.",
      C: "Bu tanım proteoglikanı açıklamaz.",
      D: "Bu triaçilgliserol tanımıdır.",
      E: "Elektron taşıyıcı değildir."
    },
    learningObjective: "Proteoglikanın çekirdek protein + GAG organizasyonunu tanımlamak.",
    tags: ["proteoglikan", "çekirdek protein", "GAG", "kovalent bağ"]
  }),
  makeQuestion({
    id: "CHO-027",
    sourcePdf,
    sourceTopic: "Glikokonjugatlar",
    sourcePages: [84],
    difficulty: "Orta",
    questionType: "neden-sonuç",
    question:
      "Glikoproteinlerin oligosakkarit kısımlarının bilgice zengin kabul edilmesinin başlıca nedeni aşağıdakilerden hangisidir?",
    options: {
      A: "Lektinler tarafından özgül biçimde tanınan bağlanma bölgeleri oluşturabilmeleri",
      B: "Yalnız enerji depolamaları",
      C: "Sadece nişasta sentezlemeleri",
      D: "Her zaman DNA çift sarmalını stabilize etmeleri",
      E: "Hiçbir hücre yüzeyi olayına katılmamaları"
    },
    correctAnswer: "A",
    correctExplanation:
      "Kaynak içerik glikoprotein oligosakkaritlerinin heterojen ve bilgice zengin olduğunu; lektinler tarafından özgül biçimde tanınan bağlanma bölgeleri oluşturduğunu belirtir.",
    distractorExplanations: {
      A: "Doğru seçenek.",
      B: "Bu temel işlev olarak verilmez.",
      C: "Nişasta senteziyle ilgili değildir.",
      D: "DNA yapısı ile ilişkili değildir.",
      E: "Glikokaliks ve hücre tanınmasıyla ilişkileri özellikle vurgulanır."
    },
    learningObjective: "Glikoprotein karbohidratlarının bilgi taşıyıcı rolünü açıklamak.",
    tags: ["glikoprotein", "lektin", "glikokaliks", "bilgi taşıma"]
  })
];
