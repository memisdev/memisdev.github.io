export const EXTERNAL_SOURCE_CONFIG = {
  biyokimya_karbonhidratlar: {
    sourcePdf: "Karbonhidratlar ve Glikobiyoloji.pdf",
    sourceTopic: "Karbohidratlar ve glikobiyoloji"
  },
  biyokimya_lipitler: {
    sourcePdf: "Lipitler.pdf",
    sourceTopic: "Lipitler"
  },
  biyokimya_nukleik_asitler: {
    sourcePdf: "Nükleotidler Ve Nükleik Asitler.pdf",
    sourceTopic: "Nükleotidler ve nükleik asitler"
  }
};

export const MANUAL_EXTERNAL_REVIEW = {
  k1: {
    decision: "quality_reject",
    inferredSubtopic: "Monosakkaritlerin temel sınıflandırılması",
    reason:
      "Giriş düzeyi tek-adımlı recall sorusu; çeldiricileri zayıf ve mevcut bankanın akademik ayrım gücünü yükseltmiyor.",
    notes: "Kaynakta yer alsa da profesör düzeyinde ayrım üretmiyor."
  },
  k6: {
    decision: "quality_reject",
    inferredSubtopic: "D/L izomerleri ve kiralite",
    reason:
      "Bilgi doğru olsa da soru kökü ve dört şıklı yapı aşırı doğrudan; üst düzey ayırt edicilik sağlamıyor.",
    notes: "Dihidroksiaseton ayrıntısı açıklamalarda zaten destekleniyor."
  },
  k11: {
    decision: "quality_reject",
    inferredSubtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    reason:
      "Piranoz adlandırmasını tek başına soran, çok düşük zorlukta bir terminoloji recall sorusu.",
    notes: "Alt başlık için yeni ama katkı değeri düşük."
  },
  k12: {
    decision: "quality_reject",
    inferredSubtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    reason:
      "Furanoz adlandırmasını tek başına soran, çeldirici gücü zayıf bir terminoloji recall sorusu.",
    notes: "k11 ile aynı bilgi ailesinde ikinci bir düşük değerli varyasyon."
  },
  k14: {
    decision: "exact_duplicate",
    inferredSubtopic: "Halkalı yapı, anomerler ve mutarotasyon",
    matchIds: ["CHO-004"],
    reason:
      "Mutarotasyon sorusu kanonik sette CHO-004 ile zaten neredeyse aynı biçimde yer alıyor.",
    notes: "Soru kökü ve doğru cevap mantığı birebir örtüşüyor."
  },
  k15: {
    decision: "quality_reject",
    inferredSubtopic: "Heksoz türevleri",
    reason:
      "Glukonik asit bilgisini çok düşük bilişsel düzeyde soruyor; zayıf çeldiriciler nedeniyle kolay tahmin ediliyor.",
    notes: "Heksoz türevleri alt başlığında mevcut soru seti zaten daha güçlü ayrım kuruyor."
  },
  k16: {
    decision: "quality_reject",
    inferredSubtopic: "Heksoz türevleri",
    reason:
      "Uronik asit bilgisini tek adımlı recall ile ölçüyor; akademik seviye ve şık dengesi yetersiz.",
    notes: "Mevcut bankadaki şeker türevi sorularına kıyasla daha zayıf."
  },
  k18: {
    decision: "quality_reject",
    inferredSubtopic: "Disakkarit adlandırması ve bağ tipleri",
    reason:
      "O-glikozit bağı bilgisini çok temel terminoloji düzeyinde soruyor; çeldiriciler belirgin biçimde zayıf.",
    notes: "Yeni görünse de bankaya anlamlı ayırt edicilik eklemiyor."
  },
  k19: {
    decision: "quality_reject",
    inferredSubtopic: "Disakkarit adlandırması ve bağ tipleri",
    reason:
      "Glikozit bağının baza direnci tek başına sorulmuş; soru formatı tahmine açık ve fazla yüzeysel.",
    notes: "Bu bilgi daha güçlü bir kavramsal soru halinde anlamlı olurdu."
  },
  k23: {
    decision: "quality_reject",
    inferredSubtopic: "Depo polisakkaritleri",
    reason:
      "Polisakkaritlerin belirli molekül ağırlığı taşımaması bilgisini çok kaba ve düşük ayırt edicilikle ölçüyor.",
    notes: "Kalite eşiği açısından mevcut bankanın altında."
  },
  k28: {
    decision: "scope_reject",
    inferredSubtopic: "Yapısal homopolisakkaritler",
    reason:
      "Dekstran bilgisi mevcut PDF extract ve current curriculum map içinde güvenli biçimde doğrulanamıyor.",
    notes: "Kapsam dışı veya en azından yeterince dayanaklanmamış kabul edildi."
  },
  k35: {
    decision: "accept_unique",
    inferredSubtopic: "Peptidoglikan ve heteropolisakkaritler",
    matchIds: ["CHO-020", "CHO-043", "CHO-056"],
    acceptedQuestionId: "CHO-058",
    reason:
      "Agarozun agar içindeki düşük yüklü jel bileşeni olarak kullanımı mevcut bankada doğrudan sorulmuyor; analitik kullanım ile heteropolisakkarit bilgisini yeni bir eksende bağlıyor.",
    notes:
      "CHO-020 ve CHO-043 bakteriyel hücre duvarına, CHO-056 ise analitik yöntemlere odaklanıyor; agarozun elektroforez bağı bu üçüyle örtüşmeden yeni kalıyor."
  },
  k39: {
    decision: "quality_reject",
    inferredSubtopic: "Glikozaminoglikanlar",
    reason:
      "Keratan sülfatı saç/toynak/tırnak örneği üzerinden soran format fazla yüzeysel ve örnek ezberine dayanıyor.",
    notes: "Alt konu için daha güçlü, mekanizma-temelli ayrım tercih edildi."
  },
  k40: {
    decision: "accept_unique",
    inferredSubtopic: "Glikozaminoglikanlar",
    matchIds: ["CHO-011", "CHO-019", "CHO-025"],
    acceptedQuestionId: "CHO-059",
    reason:
      "Heparinin çok yüksek negatif yük ve antikoagülan kullanım ilişkisi mevcut glikozaminoglikan sorularında doğrudan temsil edilmiyor.",
    notes:
      "Hiyaluronan, ECM ve tekrarlayan disakkarit bileşimi zaten sorulmuş durumda; heparin istisnası ayrı bir öğrenme hedefi ekliyor."
  },
  k42: {
    decision: "scope_reject",
    inferredSubtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    reason:
      "Müsin vurgusu dış sette geçse de PDF extract ve mevcut curriculum map içinde açık, güvenli bir hedef olarak sabitlenemiyor.",
    notes: "Muhafazakâr merge politikası gereği dışarıda bırakıldı."
  },
  k43: {
    decision: "accept_unique",
    inferredSubtopic: "Peptidoglikan ve heteropolisakkaritler",
    matchIds: ["CHO-020", "CHO-043", "CHO-021"],
    acceptedQuestionId: "CHO-060",
    reason:
      "Gram-negatif LPS içindeki endotoksik lipid A ayrımı kanonik sette doğrudan sorulmuyor; bakteriyel yüzey heteropolisakkaritleri içinde yeni ve anlamlı bir hedef.",
    notes:
      "Mevcut sorular lizozim ve peptidoglikan üstünden gidiyor; lipid A bilgisi aynı öğrenme hedefi değil."
  },
  k45: {
    decision: "accept_unique",
    inferredSubtopic: "Şeker kodu ve lektinler",
    matchIds: ["CHO-012", "CHO-022", "CHO-054"],
    acceptedQuestionId: "CHO-061",
    reason:
      "Selektin ailesi ve lökosit adezyonu bağı mevcut lektin sorularından farklı, daha spesifik bir biyolojik sonuç ilişkisi sunuyor.",
    notes:
      "Lektinlerin genel özgüllüğü zaten var; selektin-aracılı hücre göçü ise yeni bir uygulama düzeyi."
  },
  k46: {
    decision: "quality_reject",
    inferredSubtopic: "Monosakkaritlerin temel sınıflandırılması",
    reason:
      "D-ribozun sınıfını soran kök fazla temel ve çeldiricileri ayırt edici değil.",
    notes: "Yeni görünse de kalite eşiği altında."
  },
  k47: {
    decision: "accept_unique",
    inferredSubtopic: "Proteoglikanlar, glikoproteinler ve glikolipitler",
    matchIds: ["CHO-021", "CHO-026", "CHO-027"],
    acceptedQuestionId: "CHO-062",
    reason:
      "N-bağlı ve O-bağlı glikozilasyonun bağlanma merkezleri mevcut glikoprotein sorularında doğrudan sorulmuyor.",
    notes:
      "Mevcut set glikokonjugat sınıfları ve bilgi taşıma rolünü kapsıyor; bağ kimyası düzeyi yeni kalıyor."
  },
  l1: {
    decision: "exact_duplicate",
    inferredSubtopic: "Lipitlerin genel özelliği",
    matchIds: ["LIP-001", "LIP-021"],
    reason:
      "Lipitlerin ortak belirleyici özelliğini soran kök kanonik sette LIP-001/LIP-021 ile zaten karşılanıyor.",
    notes: "Aynı doğru cevap ve aynı ayırt edici bilgi noktası."
  },
  l3: {
    decision: "quality_reject",
    inferredSubtopic: "Yağ asidi yapısı ve gösterimi",
    reason:
      "Doğal doymamış yağ asitlerinin cis düzenlenişini tek başına soran çok temel bir recall maddesi.",
    notes: "Kalite ve ayırt edicilik bankanın gerisinde."
  },
  l4: {
    decision: "quality_reject",
    inferredSubtopic: "Yağ asidi yapısı ve gösterimi",
    reason:
      "Dış setteki doğru cevap kaynağın vurguladığı ALA ekseniyle uyumsuz; içerik güvenilir değil.",
    notes: "Kaynak tutarlılığı sorunu nedeniyle eklenmedi."
  },
  l5: {
    decision: "scope_reject",
    inferredSubtopic: "Yağ asidi yapısı ve gösterimi",
    reason:
      "Sağlıklı omega-6/omega-3 oranı gibi sayısal beslenme önerisi PDF extract ve current curriculum map içinde yer almıyor.",
    notes: "Diyet önerisi niteliği taşıdığı için kapsam dışı bırakıldı."
  },
  l6: {
    decision: "quality_reject",
    inferredSubtopic: "Yağ asidi yapısı ve gösterimi",
    reason:
      "Çözünürlük eğilimini doğrudan soruyor; kök ve seçenekler zayıf, ayırt edicilik sınırlı.",
    notes: "Yeni olsa da bankaya yeterli kalite artışı sağlamıyor."
  },
  l9: {
    decision: "accept_unique",
    inferredSubtopic: "Triaçilgliseroller ve depolama mantığı",
    matchIds: ["LIP-005", "LIP-006", "LIP-023"],
    acceptedQuestionId: "LIP-032",
    reason:
      "Depo lipit mobilizasyonunda lipaz aracılı hidroliz mevcut triaçilgliserol sorularında doğrudan ölçülmüyor.",
    notes:
      "Mevcut set yapı ve enerji yoğunluğuna odaklanıyor; mobilizasyon basamağı yeni bir öğrenme hedefi."
  },
  l14: {
    decision: "quality_reject",
    inferredSubtopic: "Gliserofosfolipitler ve diğer zar lipitleri",
    reason:
      "Amfipatiklik bilgisini çok düşük zorlukta ve zayıf seçeneklerle soruyor.",
    notes: "Daha güçlü zar lipidi sorularıyla kıyaslandığında katkı değeri düşük."
  },
  l19: {
    decision: "quality_reject",
    inferredSubtopic: "Gliserofosfolipitler ve diğer zar lipitleri",
    reason:
      "Sfingolipit sınıf adını doğrudan soran çok temel bir terminoloji maddesi.",
    notes: "Kanonik bankanın ayrım gücünü artırmıyor."
  },
  l20: {
    decision: "quality_reject",
    inferredSubtopic: "Gliserofosfolipitler ve diğer zar lipitleri",
    reason:
      "Seramit oluşumunu tek bağ türü recall'ına indirgediği için düşük ayırt edicilik taşıyor.",
    notes: "Sfingozin/seramit mantığı mevcut zar lipidi sorularında zaten dolaylı olarak temsil ediliyor."
  },
  l24: {
    decision: "quality_reject",
    inferredSubtopic: "Steroller",
    reason:
      "Bakterilerin sterol sentezleyememesi yararlı bir istisna olsa da soru formatı aşırı doğrudan ve düşük seviyede kalıyor.",
    notes: "Yeni fakat bankaya eklenecek kadar güçlü değil."
  },
  l25: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Steroid hormon etkisini çok genel ve düşük zorlukta soruyor; daha güçlü biyokimyasal ayrım üretmiyor.",
    notes: "Son bölüm için daha kuvvetli adaylar tercih edildi."
  },
  l26: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-033",
    reason:
      "Eikosanoidlerin parakrin etki mantığı mevcut son-bölüm lipit sorularında temsil edilmiyor.",
    notes:
      "Vitamin/kinon ağırlıklı mevcut soru setine yeni bir sinyal lipidi ekseni ekliyor."
  },
  l27: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Eikosanoid sınıflarını yalnız liste ezberi olarak soruyor; aynı alan için daha güçlü adaylar mevcut.",
    notes: "l28-l30 daha yüksek ayırt edicilik sunduğu için bu madde reddedildi."
  },
  l28: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-034",
    reason:
      "NSAID-COX bağlantılı prostaglandin bilgisi mevcut bankada doğrudan sorulmuyor ve klinik-biokimyasal ayrım değeri taşıyor.",
    notes:
      "Var olan vitamin/kinon sorularıyla öğrenme hedefi çakışmıyor."
  },
  l29: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-035",
    reason:
      "Tromboksanın pıhtılaşma ile ilişkisi kanonik sette yok; eikosanoid alt ailesini özgül işleviyle temsil ediyor.",
    notes: "Yakın çakışma oluşturmadan yeni alt ayrım ekliyor."
  },
  l30: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-036",
    reason:
      "Lökotrienlerin astım/anafilaksi ve NSAID-duyarsızlık ilişkisi mevcut bankada temsil edilmiyor.",
    notes: "Eikosanoid kümesinde prostaglandin/tromboksandan ayrışan özgül sonuç bilgisi."
  },
  l31: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-037",
    reason:
      "7-dehidrokolesterolden vitamin D3 oluşumu mevcut bankadaki genel vitamin D maddelerinden daha özgül ve yeni.",
    notes: "Var olan sorular hormon öncüsü temasında; sentez öncülü bilgisi ayrı kalıyor."
  },
  l32: {
    decision: "near_duplicate",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    reason:
      "Aktif D vitamini formu ve hormon etkisi kanonik sette zaten aynı öğrenme hedefi altında temsil ediliyor.",
    notes: "Aynı doğru cevap mantığını daha dar adlandırma ile tekrar ediyor."
  },
  l33: {
    decision: "scope_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "D vitamini eksikliğinin klinik hastalık adı current curriculum map içinde açık hedef olarak yer almıyor.",
    notes: "Biyokimya odaklı set için klinik sonuç ezberi fazla dışarı taşıyor."
  },
  l34: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Vitamin A'nın genel rolünü çok doğrudan soruyor; çeldiriciler yetersiz ve ayrım gücü düşük.",
    notes: "Son bölüm için daha güçlü maddeler tercih edildi."
  },
  l35: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-038",
    reason:
      "11-cis retinalin all-trans forma izomerleşmesi mevcut bankada doğrudan yok; görme pigmenti bağlamında anlamlı yeni katkı sağlıyor.",
    notes: "Genel vitamin rolü sorularıyla near-duplicate değil."
  },
  l36: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Vitamin E antioksidanlığı tek cümlelik recall olarak kalıyor; seçenek dengesi zayıf.",
    notes: "Yeni olsa bile kalite standardı için yetersiz bulundu."
  },
  l37: {
    decision: "scope_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Vitamin E eksikliğinin nadir klinik bulgusu source text/current map'te değerlendirme hedefi olarak yer almıyor.",
    notes: "Klinik ezber niteliği nedeniyle dışarıda bırakıldı."
  },
  l38: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-039",
    reason:
      "Vitamin K'nın protrombin oluşumu ile ilişkisi mevcut bankada doğrudan temsil edilmiyor.",
    notes: "Son bölümde yeni ve anlamlı bir işlev ekseni ekliyor."
  },
  l39: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Varfarin maddesi kaynakta geçse de soru düzeyi farmakolojik ezbere çok yakın ve biyokimyasal ayrım gücü sınırlı.",
    notes: "Muhafazakâr kalite filtresinde elendi."
  },
  l41: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Pigmentlerin izoprenoid temeline dair soru çok genel; daha güçlü l48 maddesi aynı bilgi alanını daha iyi temsil ediyor.",
    notes: "Daha zayıf varyasyon olduğu için reddedildi."
  },
  l42: {
    decision: "accept_unique",
    inferredSubtopic: "Triaçilgliseroller ve depolama mantığı",
    matchIds: ["LIP-005", "LIP-006", "LIP-023"],
    acceptedQuestionId: "LIP-040",
    reason:
      "Serbest yağ asitlerinin kanda albümin ile taşınması mevcut triaçilgliserol sorularında yok.",
    notes: "Depo lipit mobilizasyonunun dolaşım boyutunu yeni olarak ekliyor."
  },
  l43: {
    decision: "quality_reject",
    inferredSubtopic: "Triaçilgliseroller ve depolama mantığı",
    reason:
      "Enerji deposu ve su iticilik bilgisini aşırı genel ve düşük seviyede soruyor.",
    notes: "Mevcut TAG sorularına kıyasla yeni değer üretmiyor."
  },
  l45: {
    decision: "quality_reject",
    inferredSubtopic: "Triaçilgliseroller ve depolama mantığı",
    reason:
      "Adiposit adını doğrudan soran basit terminoloji maddesi; akademik kalite eşiği altında.",
    notes: "Yeni görünse de katkı değeri düşük."
  },
  l46: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-019", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-041",
    reason:
      "Safra asitlerinin deterjan etkisi ve lipaz erişimine katkısı kanonik sette doğrudan yok.",
    notes: "Son bölüm için açık ve yeni biyokimyasal işlev bilgisi sağlıyor."
  },
  l48: {
    decision: "accept_unique",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    matchIds: ["LIP-020", "LIP-030", "LIP-031"],
    acceptedQuestionId: "LIP-042",
    reason:
      "İzopren birimlerinin vitamin/pigment biyosentezindeki yapısal rolü mevcut bankada temsil edilmiyor.",
    notes: "Übikinon ve vitamin sorularından farklı, üst düzey bir kimyasal iskelet bilgisi ekliyor."
  },
  l49: {
    decision: "scope_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Prostaglandin adının etimolojik kökeni source text/current curriculum map içinde değerlendirme hedefi olarak yer almıyor.",
    notes: "Etimoloji, biyokimyasal öğrenme hedefi olarak görülmedi."
  },
  l50: {
    decision: "quality_reject",
    inferredSubtopic: "Lipit türevli vitaminler, kinonlar ve pigmentler",
    reason:
      "Steroid hormon sınıfını doğrudan adlandıran soru çok temel kalıyor ve zayıf çeldiricilere sahip.",
    notes: "Bankanın ayırt ediciliğini artırmıyor."
  },
  n2: {
    decision: "scope_reject",
    inferredSubtopic: "mRNA ve diğer RNA tipleri",
    reason:
      "Gen tanımı PDF girişinde geçse de mevcut curriculum map bunu ölçülebilir biyokimya hedefi olarak ayrılaştırmıyor.",
    notes: "Muhafazakâr kapsam filtresi nedeniyle eklenmedi."
  },
  n8: {
    decision: "near_duplicate",
    inferredSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    matchIds: ["NUC-003", "NUC-011", "NUC-024"],
    reason:
      "RNA/DNA bileşen ayrımı kanonik sette zaten aynı temel öğrenme hedefi altında temsil ediliyor.",
    notes: "Urasil bilgisi aynı bileşen sınıflandırmasının yüzey varyasyonu."
  },
  n9: {
    decision: "accept_unique",
    inferredSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    matchIds: ["NUC-003", "NUC-011", "NUC-024"],
    acceptedQuestionId: "NUC-034",
    reason:
      "Nükleozid-nükleotid ayrımı mevcut sette doğrudan sorulmuyor; temel yapı bilgisinde gerçek bir boşluğu dolduruyor.",
    notes: "Aynı alt başlıkta yeni ama anlamlı bir kavramsal ayrım ekliyor."
  },
  n12: {
    decision: "accept_unique",
    inferredSubtopic: "Fosfodiester bağları ve yönlülük",
    matchIds: ["NUC-004", "NUC-012", "NUC-025"],
    acceptedQuestionId: "NUC-035",
    reason:
      "Nükleik asit omurgasının fizyolojik pH'daki negatif yükü mevcut yönlülük sorularında doğrudan yok.",
    notes: "Omurga kimyasını yeni bir açıdan ölçüyor."
  },
  n14: {
    decision: "exact_duplicate",
    inferredSubtopic: "Baz istiflenmesi ve UV soğurma",
    matchIds: ["NUC-021", "NUC-027"],
    reason:
      "260 nm UV soğurma bilgisi NUC-021 ve bağlı maddelerde zaten neredeyse aynı biçimde yer alıyor.",
    notes: "Aynı alt konu ve aynı doğru cevap."
  },
  n15: {
    decision: "accept_unique",
    inferredSubtopic: "Baz istiflenmesi ve UV soğurma",
    matchIds: ["NUC-021", "NUC-027", "NUC-029"],
    acceptedQuestionId: "NUC-036",
    reason:
      "DNA kararlılığında baz istiflenmesi/hidrofobik katkı vurgusu mevcut bankada doğrudan ölçülmüyor.",
    notes: "260 nm veya antiparalellik sorularından farklı bir yapısal gerekçe soruyor."
  },
  n19: {
    decision: "scope_reject",
    inferredSubtopic: "DNA çift sarmalının kanıtları ve yapısı",
    reason:
      "Replikasyonda mevcut ipliklerin kalıp görevi current curriculum map dışında kalıyor.",
    notes: "Replikasyon başlığı mevcut değerlendirme haritasında ayrı hedef değil."
  },
  n20: {
    decision: "scope_reject",
    inferredSubtopic: "mRNA ve diğer RNA tipleri",
    reason:
      "Transkripsiyonun adlandırılması mevcut haritada ayrı bir ölçme hedefi olarak tutulmuyor.",
    notes: "Kapsam genişlemesi yaratacağı için alınmadı."
  },
  n31: {
    decision: "accept_unique",
    inferredSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    matchIds: ["NUC-010", "NUC-020", "NUC-032"],
    acceptedQuestionId: "NUC-037",
    reason:
      "İyonlaştırıcı radyasyonun DNA iplik kırıklarıyla ilişkisi mevcut hasar sorularında doğrudan temsil edilmiyor.",
    notes: "UV, AP lezyonu ve oksidatif hasardan ayrı bir dış etken-hasar eşleşmesi getiriyor."
  },
  n32: {
    decision: "accept_unique",
    inferredSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    matchIds: ["NUC-009", "NUC-010", "NUC-032"],
    acceptedQuestionId: "NUC-038",
    reason:
      "Nitröz asidin deaminasyonu hızlandırması kanonik sette doğrudan yok; kaynak hasar ajanı düzeyinde yeni bilgi değeri taşıyor.",
    notes: "Deaminasyon sonucu sorularından farklı olarak ajan-hasar ilişkisini ölçüyor."
  },
  n33: {
    decision: "quality_reject",
    inferredSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    reason:
      "Mutajenik değişimin en önemli kaynağı ifadesi fazla geniş ve tartışmaya açık; ölçme güvenilirliği zayıf.",
    notes: "Belirsizlik taşıdığı için eklenmedi."
  },
  n34: {
    decision: "scope_reject",
    inferredSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    reason:
      "Makromoleküller arasında onarım sistemleri kullanımı şeklindeki meta ifade mevcut curriculum map içinde ayrı hedef değil.",
    notes: "Harita dışı genelleme olarak değerlendirildi."
  },
  n35: {
    decision: "scope_reject",
    inferredSubtopic: "mRNA ve diğer RNA tipleri",
    reason:
      "Merkezi dogma ifadesi mevcut soru haritasının dışına taşan daha geniş bir moleküler biyoloji çerçevesi kuruyor.",
    notes: "Muhafazakâr kapsam filtresi uygulandı."
  },
  n36: {
    decision: "scope_reject",
    inferredSubtopic: "DNA çift sarmalının kanıtları ve yapısı",
    reason:
      "Semi-konservatif replikasyon yöntemi mevcut curriculum map'te ayrı hedef olarak tutulmuyor.",
    notes: "Replikasyon ayrıntısı kapsam dışında bırakıldı."
  },
  n37: {
    decision: "quality_reject",
    inferredSubtopic: "DNA çift sarmalının kanıtları ve yapısı",
    reason:
      "A-T arasındaki hidrojen bağı sayısını doğrudan soran kök fazla düşük seviyeli ve zayıf seçenekli.",
    notes: "Yeni olsa da kalite artışı sunmuyor."
  },
  n39: {
    decision: "quality_reject",
    inferredSubtopic: "Enzimatik olmayan nükleik asit hasarı",
    reason:
      "Kanserojenlerin etkisini fazla genel ve muğlak biçimde soruyor; güvenilir ölçme üretmiyor.",
    notes: "Belirsizlik nedeniyle dışarıda bırakıldı."
  },
  n41: {
    decision: "quality_reject",
    inferredSubtopic: "Fosfodiester bağları ve yönlülük",
    reason:
      "Oligonükleotid tanımını tek sayısal eşik recall'ına indirgediği için düşük ayırt edicilik taşıyor.",
    notes: "Terminoloji düzeyinde kaldığı için reddedildi."
  },
  n42: {
    decision: "quality_reject",
    inferredSubtopic: "Fosfodiester bağları ve yönlülük",
    reason:
      "Polinükleotid tanımını tek sayısal eşik recall'ı olarak soruyor; katkı değeri sınırlı.",
    notes: "n41 ile aynı düşük değerli bilgi ailesi."
  },
  n43: {
    decision: "accept_unique",
    inferredSubtopic: "Denatürasyon, renatürasyon, Tm ve hibritleşme",
    matchIds: ["NUC-016", "NUC-017", "NUC-018"],
    acceptedQuestionId: "NUC-039",
    reason:
      "Renatürasyonun ilk nükleasyon basamağı mevcut denatürasyon/Tm sorularında doğrudan sorulmuyor.",
    notes: "Aynı alt başlıkta yeni ve teknik bir süreç ayrımı ekliyor."
  },
  n44: {
    decision: "quality_reject",
    inferredSubtopic: "Denatürasyon, renatürasyon, Tm ve hibritleşme",
    reason:
      "Renatürasyonun ikinci basamağı dış sette çok doğrudan ve düşük ayırt edicilikte verilmiş; aynı süreç ailesinde daha güçlü n43 maddesi tercih edildi.",
    notes: "Aynı iki basamaklı süreç için daha zayıf varyasyon."
  },
  n47: {
    decision: "scope_reject",
    inferredSubtopic: "mRNA ve diğer RNA tipleri",
    reason:
      "Kodon üçlüsü ve genetik kod bilgisi mevcut curriculum map dışında kalıyor.",
    notes: "Harita dışı moleküler biyoloji ayrıntısı olarak değerlendirildi."
  },
  n48: {
    decision: "scope_reject",
    inferredSubtopic: "mRNA ve diğer RNA tipleri",
    reason:
      "Kodlamayan mRNA dizilerinin düzenleyici rolü mevcut map'te ayrı hedef olarak yer almıyor.",
    notes: "Kapsamı genişleteceği için eklenmedi."
  },
  n50: {
    decision: "scope_reject",
    inferredSubtopic: "DNA çift sarmalının kanıtları ve yapısı",
    reason:
      "Semi-konservatif replikasyonun açıklaması current curriculum map dışında kalıyor.",
    notes: "Replikasyon başlığının kapsam dışı tutulmasıyla uyumlu."
  }
};

export function getManualExternalReview(externalId) {
  return MANUAL_EXTERNAL_REVIEW[externalId] || null;
}
