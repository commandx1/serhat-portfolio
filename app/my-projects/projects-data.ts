export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
    featured: boolean;
    category: 'frontend' | 'fullstack' | 'other';
    screenshots: string[];
    challenges: string[];
    solutions: string[];
}

export const projects: Project[] = [
    {
        id: 'project1',
        title: 'Kalem Kulübü',
        description: 'Full-featured blog platform built with React, NestJS, and MongoDB.',
        longDescription:
            'Kalem Kulübü, ReactJS frontend ve NestJS backend ile geliştirilmiş kapsamlı bir blog platformudur. JWT tabanlı güvenli kullanıcı doğrulama, e-posta onayı ve Google OAuth entegrasyonu sağlar. Kullanıcılar profil oluşturabilir, profilleri düzenleyebilir ve başkalarının profil sayfalarını ziyaret edebilir. Blog gönderilerine yorum yapabilir, yanıtlayabilir, beğenip beğenmemeyi yönetebilir. Kategorilere göre filtreleme yapabilir ve gelişmiş arama motoru ile içeriklere kolayca erişebilir. Tüm medya dosyaları AWS S3 üzerinde güvenle saklanır.',
        image: '/blog/blog4.png',
        technologies: [
            'React',
            'TypeScript',
            'NestJS',
            'MongoDB',
            'Redux',
            'NodeMailer',
            'JsonWebToken',
            'Multer',
            'AWS S3',
            'Google OAuth'
        ],
        github: 'https://github.com/commandx1/blogverse',
        live: 'https://blogverse-dun.vercel.app/',
        featured: true,
        category: 'fullstack',
        screenshots: [
            '/blog/blog-login.png',
            '/blog/blog1.png',
            '/blog/blog2.png',
            '/blog/blog3.png',
            '/blog/blog4.png',
            '/blog/blog5.png',
            '/blog/blog6.png',
            '/blog/blog7.png',
            '/blog/blog8.png',
            '/blog/blog9.png'
        ],
        challenges: [
            'JWT tabanlı güvenli ve ölçeklenebilir kullanıcı doğrulama ve yetkilendirme sistemi geliştirmek.',
            'E-posta doğrulama ve Google OAuth entegrasyonu ile güvenilir kullanıcı kaydı sağlamak.',
            'Profil yönetimi ve başkalarının profillerini görüntüleme özelliklerini senkronize etmek.',
            'Blog gönderileri için yorum, yanıt ve beğeni sistemlerini gerçekçi ve kullanıcı dostu kılmak.',
            'Kategorilere göre post filtreleme ve güçlü arama motoru optimizasyonu yapmak.',
            'AWS S3 üzerinde güvenli, hızlı ve ölçeklenebilir dosya yükleme süreçleri oluşturmak.'
        ],
        solutions: [
            'JWT ile güvenli kimlik doğrulama ve yetkilendirme mekanizmaları oluşturuldu, refresh token sistemi uygulandı.',
            'NodeMailer ile e-posta doğrulama süreçleri otomatize edildi, Google OAuth ile sosyal giriş desteği eklendi.',
            'React state yönetimi ve API optimizasyonu ile profil işlemleri ve erişimleri efektif hale getirildi.',
            'Yorum, yanıt ve beğeni işlemleri için backend’de optimize edilmiş veri modelleri ve API endpointleri geliştirildi.',
            'Kategori filtreleme ve arama motoru için MongoDB text indeksleri ve uygun sorgu teknikleri kullanıldı.',
            'Multer ile dosyalar AWS S3’e yükleniyor; yüksek performans ve güvenlik için S3 SDK kullanıldı.'
        ]
    },
    {
        id: 'project2',
        title: 'Plant Healthy',
        description: 'Bitki sağlığını takip eden, hava durumu ve bakım önerileri sunan React + NestJS uygulaması.',
        longDescription:
            'Plant Healthy, ReactJS frontend ve NestJS backend ile geliştirilmiş, bitki sağlığına odaklanan kapsamlı bir uygulamadır. Kullanıcılar Google OAuth ve e-posta doğrulama ile güvenle giriş yapabilir. Bitki listesi ve detayları görüntülenebilir, bölgesel hava durumu verileri Open-Meteo API’den çekilerek sulama ve bakım önerileri sunulur. Ayrıca kullanıcılar harita üzerinden konum seçerek bitkilerinin bulunduğu alanın hava durumunu daha doğru takip edebilir. Kullanıcı dostu arayüz ile bitkilerin sağlığı her zaman kontrol altındadır.',
        image: '/plant/plant1.png',
        technologies: [
            'React',
            'NestJS',
            'MongoDB',
            'Redux',
            'Open-Meteo API',
            'TypeScript',
            'JsonWebToken',
            'NodeMailer',
            'Google OAuth',
            'Leaflet',
            'React-Leaflet'
        ],
        github: 'https://github.com/commandx1/plant-healthy-app',
        live: 'https://plant-healthy-app.vercel.app/',
        featured: true,
        category: 'fullstack',
        screenshots: [
            '/plant/plant1.png',
            '/plant/plant2.png',
            '/plant/plant3.png',
            '/plant/plant4.png',
            '/plant/plant5.png'
        ],
        challenges: [
            'Google OAuth ve e-posta doğrulama ile güvenli kullanıcı kimlik doğrulaması sağlamak.',
            'Open-Meteo API ile gerçek zamanlı ve bölgesel hava durumu verilerini doğru şekilde almak.',
            'Harita üzerinden kullanıcıların lokasyon seçimini entegre etmek ve veriyi backend ile senkronize etmek.',
            'Karmaşık state yönetimini Redux ile senkronize ve performanslı hale getirmek.',
            'MongoDB optimizasyonları ile büyük veri setlerinde hızlı sorgulama yapmak.',
            'Responsive tasarım ile tüm cihazlarda estetik ve kullanılabilir arayüz sunmak.'
        ],
        solutions: [
            'JWT tabanlı güvenlik ve NodeMailer ile e-posta doğrulama süreçleri uygulandı, Google OAuth entegre edildi.',
            'Open-Meteo API kullanılarak doğru ve güncel hava durumu verileri sunuldu.',
            'Leaflet ve React-Leaflet kütüphaneleri ile interaktif harita entegrasyonu gerçekleştirildi.',
            'Kullanıcıların seçtiği lokasyon bilgisi backend ile senkronize edilerek kişiselleştirilmiş bakım önerileri sağlandı.',
            'React ve Redux ile etkili state yönetimi sağlandı, performans iyileştirildi.',
            'MongoDB’de indeksleme ve sorgu optimizasyonları yapıldı.',
            'CSS Grid ve Flexbox kullanılarak responsive ve modern UI tasarlandı.'
        ]
    },
    {
        id: 'project3',
        title: 'Invent AI MovieApp',
        description:
            'React + Redux + TypeScript ile yapılmış, OMDb API kullanarak film ve dizileri yıla, türe göre filtreleyen, detaylı ve animasyonlu keşif uygulaması.',
        longDescription:
            'Invent AI MovieApp, OMDb API ile entegre, React ve Redux ile performanslı, TypeScript ile sağlam yapıda bir film/dizi keşif platformu. Yıl ve türe göre filtreleme, detay sayfaları ve dizi bölümleri özelliklerine ek olarak, Framer Motion kullanılarak sayfa geçişleri ve component animasyonlarıyla kullanıcı deneyimi doruklarda. Hem göze hem performansa hitap eden modern bir uygulama.',
        image: '/movieapp/movie1.png',
        technologies: [
            'React',
            'Redux',
            'TypeScript',
            'OMDb API',
            'Axios',
            'React Router',
            'Framer Motion',
            'CSS Modules'
        ],
        github: 'https://github.com/YNS-JNS/Movie-App-React-Redux',
        live: 'https://invent-ai-movieapp.vercel.app/',
        featured: false,
        category: 'frontend',
        screenshots: ['/movieapp/movie1.png', '/movieapp/movie2.png', '/movieapp/movie3.png', '/movieapp/movie4.png'],
        challenges: [
            'OMDb API’den güncel ve doğru film/dizi verilerini çekmek.',
            'Yıl ve türe göre etkin filtreleme sistemi oluşturmak.',
            'Dizi bölümlerini ve her bölümün detaylarını göstermek.',
            'Redux ile global state yönetimini sağlamak.',
            'Framer Motion ile sayfa geçişleri ve component animasyonlarını entegre etmek.',
            'Responsive ve kullanıcı dostu arayüz tasarlamak.'
        ],
        solutions: [
            'Axios ile OMDb API çağrıları yapıldı ve veri yönetimi sağlandı.',
            'Redux kullanılarak filtreleme işlemleri optimize edildi.',
            'React Router ile dinamik sayfa geçişleri ve bölüm detayları uygulandı.',
            'Framer Motion kullanılarak pürüzsüz animasyonlar ve geçişler sağlandı.',
            'CSS Modules ile stil yönetimi yapıldı, responsive tasarım geliştirildi.'
        ]
    }
];
