# biyokimya-vize

AHBVU Biyokimya 2 icin hazirlanmis GitHub Pages uyumlu statik soru bankasi.

## Bu Repo Neyi Icerir

- `docs/`: dogrudan yayinlanacak statik site
- `docs/data/`: sitenin kullandigi yayin verileri
- `output/`: uretilmis analiz ve soru artefaktlari
- `src/` ve `scripts/`: icerik yapisini ve onceki uretim akisini belgeleyen kaynak dosyalar

## Onemli Not

Bu repo publish-only snapshot olarak hazirlandi.

- Kaynak PDF klasoru repoya dahil degil
- Dis merge kaynak klasoru repoya dahil degil
- Bu nedenle tam yeniden uretim akisi bu repoda garantili degil
- GitHub Pages yayini icin gerekli dosyalar `docs/` altinda hazir durumdadir

## Yerelde Acmak

Herhangi bir statik sunucu yeterlidir. Ornek:

```bash
python3 -m http.server 8000 -d docs
```

Ardindan:

- `http://localhost:8000`

## GitHub Pages

Bu repo `main` branch altindaki `/docs` klasorunden yayinlanacak sekilde hazirlanmistir.
