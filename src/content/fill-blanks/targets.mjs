const MIDTERM_FILL_BLANK_TARGETS = [
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Monosakkaritlerin temel sınıflandırılması",
    targetCount: 2,
    fillBlankFocus: "aldoz/ketoz örnekleri ve temel trioz adları"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "D/L izomerleri ve kiralite",
    targetCount: 2,
    fillBlankFocus: "D/L tayini ve gliseraldehit referansı"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    targetCount: 3,
    fillBlankFocus: "anomerik karbon, alfa/beta ayrımı ve mutarotasyon"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Heksoz türevleri",
    targetCount: 2,
    fillBlankFocus: "amino şeker ve uronik asit türevleri"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "İndirgen şeker mantığı",
    targetCount: 2,
    fillBlankFocus: "serbest anomerik karbon ve indirgenlik sonucu"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Disakkarit adlandırması ve bağ tipleri",
    targetCount: 2,
    fillBlankFocus: "O-glikozit bağı ve karbon numarası notasyonu"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Depo polisakkaritleri",
    targetCount: 2,
    fillBlankFocus: "nişasta ve glikojenin depo rolü"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Yapısal homopolisakkaritler",
    targetCount: 2,
    fillBlankFocus: "selüloz ve kitinin yapısal işlevleri"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Peptidoglikan ve hücre duvarı heteropolisakkaritleri",
    targetCount: 2,
    fillBlankFocus: "peptidoglikan adı ve N-asetilmuramik asit bileşeni"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Glikozaminoglikanlar",
    targetCount: 3,
    fillBlankFocus: "tekrarlayan disakkarit yapısı, hiyaluronan ve uronik asit"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    targetCount: 3,
    fillBlankFocus: "glikokonjugat sınıfları ve kovalent bağlandıkları omurgalar"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Şeker kodu ve lektinler",
    targetCount: 2,
    fillBlankFocus: "şeker kodu kavramı ve lektin tanıması"
  },
  {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    subtopic: "Karbohidrat analitik yöntemleri",
    targetCount: 1,
    fillBlankFocus: "hidroliz sonrası monosakkarit bileşimi analizi"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Lipitlerin genel özelliği",
    targetCount: 1,
    fillBlankFocus: "su çözünmezliği"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Yağ asidi yapısı ve X:Y gösterimi",
    targetCount: 2,
    fillBlankFocus: "karbon sayısı ve çift bağ sayısı notasyonu"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Elzem omega-3 yağ asitleri",
    targetCount: 2,
    fillBlankFocus: "alfa-linolenik asit ve omega-3 sınıflaması"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Triaçilgliseroller",
    targetCount: 3,
    fillBlankFocus: "gliserol esterleri, basit triaçilgliserol ve tripalmitin"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Kısmi hidrojenleme ve trans yağlar",
    targetCount: 2,
    fillBlankFocus: "trans yağ oluşumu ve oksidatif bozulma"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Mumlar",
    targetCount: 1,
    fillBlankFocus: "uzun zincirli asit ve alkol esterleri"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Yapısal lipitlerin genel mantığı",
    targetCount: 1,
    fillBlankFocus: "amfipatik karakter ve çift tabaka mantığı"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Gliserofosfolipitler",
    targetCount: 2,
    fillBlankFocus: "fosfatidik asit ve polar alkol baş grubu"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Galaktolipitler ve sülfolipitler",
    targetCount: 1,
    fillBlankFocus: "kloroplast zarı lipit sınıfı"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Arke zar lipitleri",
    targetCount: 2,
    fillBlankFocus: "eter bağı ve hidrolize dayanıklılık"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Sfingolipitler",
    targetCount: 2,
    fillBlankFocus: "sfingozin omurgası ve seramid çekirdeği"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Steroller",
    targetCount: 2,
    fillBlankFocus: "steroid çekirdek ve kolesterol"
  },
  {
    sourcePdf: "Lipitler.pdf",
    subtopic: "Lipit türevli vitaminler ve kinonlar",
    targetCount: 2,
    fillBlankFocus: "eikosanoid sınıfları ve ubikinon"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Nükleotidlerin temel işlevleri",
    targetCount: 1,
    fillBlankFocus: "enerji taşıyan temel nükleotid"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Pürin, pirimidin ve pentoz yapısı",
    targetCount: 2,
    fillBlankFocus: "pürin sınıfı ve 2'-deoksi-D-riboz"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Fosfodiester bağları ve yönlülük",
    targetCount: 2,
    fillBlankFocus: "fosfodiester bağ ve 5'ten 3'e yönlülük"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Baz istiflenmesi ve UV soğurma",
    targetCount: 1,
    fillBlankFocus: "baz istiflenmesi"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Chargaff kuralları ve DNA kanıtları",
    targetCount: 2,
    fillBlankFocus: "Chargaff kuralı ve tamamlayıcı baz eşleşmesi"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Watson-Crick modeli",
    targetCount: 2,
    fillBlankFocus: "antiparalellik ve bazların çift sarmal içindeki konumu"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "mRNA ve diğer RNA tipleri",
    targetCount: 2,
    fillBlankFocus: "mRNA ve monosistronik organizasyon"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Denatürasyon, renatürasyon ve Tm",
    targetCount: 3,
    fillBlankFocus: "denatürasyon, renatürasyon ve erime sıcaklığı"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Hibritleşme",
    targetCount: 1,
    fillBlankFocus: "tamamlayıcı baz eşleşmesine dayalı hibritleşme"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Deaminasyon ve AP lezyonları",
    targetCount: 2,
    fillBlankFocus: "sitozin deaminasyonu ve AP lezyonu"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    targetCount: 3,
    fillBlankFocus: "pirimidin dimeri, oksidatif hasar ve ROS"
  },
  {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    subtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    targetCount: 2,
    fillBlankFocus: "GTP ve NAD gibi nükleotid türevli yardımcı moleküller"
  }
];

export { MIDTERM_FILL_BLANK_TARGETS };
