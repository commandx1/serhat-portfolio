import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Gizlilik Politikasi - Zikirmatik Asistan',
  description:
    'Zikirmatik Asistan mobil uygulamasinin Google Play uyumlu gizlilik politikasi: toplanan veriler, kullanim amaci, ucuncu taraf servisler, reklam ve abonelik islemleri.',
  path: '/privacy/zikirmatik-asistan',
  keywords: [
    'zikirmatik asistan gizlilik politikasi',
    'google play privacy policy',
    'admob revenuecat privacy',
  ],
})

const effectiveDate = '15 Mayis 2026'

export default function ZikirmatikPrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ide-accent)]">Privacy Policy</p>
      <h1 className="mt-2 text-3xl font-semibold text-[var(--ide-text-bright)] sm:text-4xl">
        Zikirmatik Asistan Gizlilik Politikasi
      </h1>
      <p className="mt-3 text-[var(--ide-text-soft)]">
        Yurutme tarihi: <span className="text-[var(--ide-text-main)]">{effectiveDate}</span>
      </p>

      <section className="mt-8 space-y-3 text-[var(--ide-text-soft)] leading-7">
        <p>
          Bu politika, <strong className="text-[var(--ide-text-main)]">Zikirmatik Asistan</strong> mobil uygulamasini
          kullanirken hangi verilerin toplandigini, bu verilerin hangi amaclarla kullanildigini ve nasil
          korundugunu aciklar. Uygulamayi kullanarak bu politikada belirtilen islemleri kabul etmis olursunuz.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-[var(--ide-border)] bg-[var(--ide-bg-card)] p-5">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Veri Sorumlusu</h2>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">
          Uygulama sahibi: <span className="text-[var(--ide-text-main)]">Serhat Belen</span>
          <br />
          Iletisim: <a className="text-[var(--ide-accent-soft)] hover:text-[var(--ide-text-bright)]" href="mailto:serhatbelen7@gmail.com">serhatbelen7@gmail.com</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Toplanan Veriler</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--ide-text-soft)]">
          <li>Hesap verileri: ad-soyad, e-posta adresi, profil fotografi (Google ile giris durumunda) ve teknik kullanici ID'si.</li>
          <li>Profil verileri: secilen sehir, tema tercihi, yazi tipi tercihi, onboarding tercihleri.</li>
          <li>Icerik verileri: zikir hedefleri, zikir loglari, tamamlanma ve seri bilgileri.</li>
          <li>Asistan giris verisi: kullanicinin yazdigi metin ve buna bagli oneriler.</li>
          <li>Odeme/abonelik verisi: paket tipi, durum, baslangic ve bitis tarihleri (RevenueCat/Play Billing uzerinden).</li>
          <li>Reklam verileri: odullu reklam etkinlikleri ve reklam performansina iliskin teknik veriler (AdMob).</li>
          <li>Cihaz ve teknik veriler: cihaz modeli, uygulama surumu, hata ve performans kayitlari.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Verileri Kullanma Amaclari</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--ide-text-soft)]">
          <li>Uygulama ozelliklerini sunmak ve kullanici deneyimini kisisellestirmek.</li>
          <li>Zikir ilerlemesi, seri ve istatistiklerin dogru hesaplanmasini saglamak.</li>
          <li>Sehir bilgisine gore namaz vakitleri ve ilgili icerikleri gostermek.</li>
          <li>Asistan onerileri uretmek ve ilgili ekran iceriklerini olusturmak.</li>
          <li>Abonelik durumunu yonetmek, satin alma dogrulamasi yapmak.</li>
          <li>Odullu reklam akislarini calistirmak ve suistimali engellemek.</li>
          <li>Guvenlik, hata analizi ve yasal yukumlulukleri yerine getirmek.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Ucuncu Taraf Servisler</h2>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">Uygulama asagidaki servisleri kullanabilir:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--ide-text-soft)]">
          <li>Google Sign-In / Firebase Authentication (kimlik dogrulama)</li>
          <li>Google Play Services ve Google Play Billing (odeme ve sistem servisleri)</li>
          <li>Google AdMob (odullu reklam gosterimi)</li>
          <li>RevenueCat (abonelik yonetimi ve dogrulama)</li>
          <li>Yapay zeka servisleri (asistan onerileri olusturma)</li>
        </ul>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">
          Bu servisler kendi gizlilik politikalarina gore veri isleyebilir. Ucuncu taraf servislerin veri isleme
          pratikleri ilgili saglayicilarin sorumlulugundadir.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Konum ve Sehir Bilgisi</h2>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">
          Uygulama zorunlu olarak arka plan GPS takibi yapmaz. Namaz vakti ve bazi icerikler icin kullanicinin
          onboarding veya profil ekraninda secmis oldugu <strong className="text-[var(--ide-text-main)]">sehir</strong> bilgisi kullanilir.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Veri Saklama ve Guvenlik</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--ide-text-soft)]">
          <li>Veriler, hizmet sunumu icin gerekli sure boyunca saklanir.</li>
          <li>Yasal yukumluluk veya uyusmazlik durumunda gerekli kayitlar daha uzun sure tutulabilir.</li>
          <li>Yetkisiz erisimi onlemek icin makul idari ve teknik guvenlik onlemleri uygulanir.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Kullanici Haklari</h2>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">
          Veri erisim, duzeltme veya silme taleplerinizi ve gizlilikle ilgili sorularinizi
          <a className="ml-1 text-[var(--ide-accent-soft)] hover:text-[var(--ide-text-bright)]" href="mailto:serhatbelen7@gmail.com">serhatbelen7@gmail.com</a>{' '}
          adresine iletebilirsiniz.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Cocuklarin Gizliligi</h2>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">
          Uygulama 13 yas alti cocuklara yonelik olarak tasarlanmamistir. Bilincli olarak 13 yas altindan kisisel
          veri toplandigi tespit edilirse ilgili veriler silinir.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Politika Guncellemeleri</h2>
        <p className="mt-3 text-[var(--ide-text-soft)] leading-7">
          Bu politika zaman zaman guncellenebilir. Onemli degisikliklerde yurutme tarihi guncellenir ve uygun
          oldugunda uygulama icinden bilgilendirme yapilir.
        </p>
      </section>
    </main>
  )
}
