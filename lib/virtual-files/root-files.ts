import type { FileTab } from '../ide-types'

export const rootPortfolioFiles: FileTab[] = [
  {
      id: 'readme',
      name: 'README.md',
      path: 'serhat-belen/README.md',
      icon: '📘',
      content: `# Serhat Belen Portfolio IDE Simulation

Bu dosya, IDE icinde simule edilen frontend/backend proje deneyimini aciklar.

## Genel Yapi

- Klasorler:
  - frontend
  - backend
- Kisisel dokumanlar:
  - OZGECMIS.md (Turkce)
  - RESUME.md (English)

## IDE Ozellikleri

- Sol panelde dosya gezgini
- Ustte tab yonetimi (Close / Close Others / Close All / Copy Path)
- Ortada kod editoru ve syntax highlight
- Sagda Agent paneli
- Altta terminal paneli

## Terminal Simulasyonu

Iki terminal oturumu bulunur:

1. frontend (:5173)
2. backend (:3001)

Desteklenen komutlar:

- help
- npm -v
- node -v
- npm run dev
- ps
- logs
- clear

Calisan surec varken Ctrl + C ile sonlandirma simulasyonu vardir.

## Browser Simulasyonu

- Frontend terminalde npm run dev calistirildiginda Show in Browser butonu aktif olur.
- Butona basinca React uygulamasinin render simulasyonu acilir.
- experience, projects, contact sayfalarinda gecis sirasinda loading simulasyonu vardir.

## API Bagli Sayfalar

Frontend sayfalari backend endpointlerini kullanir:

- GET /api/experiences
- GET /api/projects
- GET /api/contact

Bu sayfalarda loading/error/data state yonetimi simule edilir.

## Backend Tarafi

Backend icinde route/controller/service/data katmanlari bulunur.
Ornek endpointler:

- /api/profile
- /api/contact
- /api/experiences
- /api/projects

Backend terminalde logs komutu ile ornek API loglarini gorebilirsiniz.

## Agent Paneli

Sag paneldeki Agent ile basit sorular sorabilirsiniz:

- experience
- projects
- skills
- contact

Agent onceden tanimli cevaplari dondurur.`
    },
  {
      id: 'ozgecmis',
      name: 'OZGECMIS.md',
      path: 'serhat-belen/OZGECMIS.md',
      icon: '📄',
      content: `# Serhat Belen

## Full Stack Developer

Bu dokuman, teknik detaylara girmeden Serhat Belen'in profesyonel gecmisini, uzmanlik alanlarini ve projelerini ozetler.

## Iletisim
- Konum: Turkey
- E-posta: serhatbelen7@gmail.com
- Telefon: +90 534 420 0038
- LinkedIn: linkedin.com/in/serhat-belen
- GitHub: github.com/commandx1
- Website: serhatbelen.dev

## Profesyonel Ozet
5+ yillik deneyime sahip bir Full Stack Developer. Olceklenebilir backend sistemleri, modern web/mobil uygulamalar ve AI destekli urun gelistirme konularinda calisir. Node.js ekosistemi, .NET/C# ve event-driven mimarilerde gucludur.

## Teknik Uzmanliklar

### Backend
Node.js, NestJS, Express, .NET (C# / ASP.NET Core), Java, Spring Boot, Event-Driven Architecture, RabbitMQ, REST APIs

### Frontend
React, Next.js, React Native, Vue.js, TypeScript, Tailwind CSS, Shadcn UI, Redux, Zustand, Jotai

### Veritabani
MongoDB, PostgreSQL, Redis, SQL Optimization, NoSQL Schema Design, MongoDB Aggregation Pipeline Optimization, Indexing Strategies, Query Performance Analysis, Data Denormalization

### AI
LLM API Integration, Prompt Engineering, AI Workflow Automation

### Altyapi ve Muhendislik
Docker, Dockerized Monorepo Deployments, AWS (EC2, S3, Lightsail), CI/CD Pipelines, Ubuntu Server Administration, Nginx, System Design, Plugin Architecture, Performance Optimization, Memory Profiling, Unit Testing (Jest)

## Is Deneyimi

### Full Stack Developer - Onlay AI
Jun 2025 - Present

Kullanilan teknolojiler: Next.js, NestJS, TypeScript, MongoDB, PostgreSQL, RabbitMQ, Redis, AWS, LLM APIs

Baslica katki ve sorumluluklar:
- Dinamik AI entegrasyonlarini kolaylastiran moduler plugin mimarisi tasarladi ve uyguladi.
- LLM API kullanan AI ozellikleri ve asenkron isleme pipeline'lari gelistirdi.
- RabbitMQ tabanli event-driven sureclerle sigorta uygunluk sureclerinde gecikmeyi yaklasik %50 azaltti.
- Sistem sagligi, servis metrikleri ve LLM kullanimini izleyen operasyon panellerine liderlik etti.
- Kritik Node.js memory leak problemlerini memory profiling ve debug surecleriyle cozdu.
- Olceklenebilir AI entegrasyonlari icin backend mimari kararlarini yonetti.

### Full Stack Developer - Avena / Retrace
Apr 2021 - May 2025

Kullanilan teknolojiler: React, Node.js, .NET (C#), MongoDB, Redis, RabbitMQ, Puppeteer, Docker

Baslica katki ve sorumluluklar:
- Dagitik klinik sistemleri icin yillik milyonlarca kaydi isleyen yuksek hacimli EDI servisleri gelistirdi.
- MongoDB aggregation pipeline performansini optimize ederek raporlama ve analiz sorgularini hizlandirdi.
- Redis cache stratejileriyle dashboard yanit surelerini yaklasik %40 iyilestirdi.
- Puppeteer tabanli sigorta uygunluk otomasyonlariyla manuel is yukunu azaltti.
- 50+ saglik kurulusuna surekli dagitim yapan CI/CD sureclerini yonetti ve iyilestirdi.
- Dockerized monorepo mimarilerini AWS EC2/Lightsail uzerinde Nginx ve Ubuntu ile yonetti.
- Operasyonel karar almaya destek veren raporlama ve analitik araclari gelistirdi.

### Frontend Developer - Bynogame
Sep 2020 - Apr 2021

Kullanilan teknolojiler: React, JavaScript, Laravel APIs, SCSS

Baslica katki ve sorumluluklar:
- Yuksek trafik alan e-ticaret platformu icin performans odakli arayuzler gelistirdi.
- Figma tasarim sistemlerini responsive, production-ready bilesenlere donusturdu.
- Frontend performans ve SEO iyilestirmeleri yaparak sayfa acilis surelerini dusurdu.

## One Cikan Projeler

### Ciftopia - Couples App
Stack: React Native / Expo, NestJS, AWS S3

Ciftler icin gelistirilmis full-stack mobil uygulama. Socket.io tabanli real-time quiz, OpenAI/Gemini destekli TTS hikaye uretimi ve React Three Fiber ile 3D deneyim iceren ozellikler barindirir.

### Dental B2B Marketplace
Stack: Next.js, Zustand, .NET (C# / ASP.NET Core), PostgreSQL

Klinikleri onayli tedarikcilerle bulusturan, 8+ kategoride 50,000+ urunu kapsayan kapsamli bir B2B pazar yeri. Performans, SEO ve responsive deneyim odakli frontend mimarisiyle gelistirildi.

### Time Heroes - Idle Pet-Collecting RPG
Stack: React, TypeScript, Jotai

Oyunun UI katmani ve client-side logic'i gelistirildi. Ekranlar ve interaktif arayuzler React/TypeScript ile kuruldu; durum yonetimi Jotai ile yapildi.

## Egitim ve Diller
- Cukurova University - Bachelor's in Computer Engineering (2013 - 2019)
- Turkish: Native
- English: Professional Working Proficiency`
    },
  {
      id: 'resume',
      name: 'RESUME.md',
      path: 'serhat-belen/RESUME.md',
      icon: '📄',
      content: `# Serhat Belen

## Full Stack Developer

This document summarizes Serhat Belen's professional background, expertise, and projects for non-technical readers.

## Contact
- Location: Turkey
- Email: serhatbelen7@gmail.com
- Phone: +90 534 420 0038
- LinkedIn: linkedin.com/in/serhat-belen
- GitHub: github.com/commandx1
- Website: serhatbelen.dev

## Professional Summary
Full Stack Developer with 5+ years of experience building scalable backend systems and modern web/mobile applications. Strong in Node.js ecosystem technologies, .NET/C#, and event-driven architectures.

## Technical Expertise

### Backend
Node.js, NestJS, Express, .NET (C# / ASP.NET Core), Java, Spring Boot, Event-Driven Architecture, RabbitMQ, REST APIs

### Frontend
React, Next.js, React Native, Vue.js, TypeScript, Tailwind CSS, Shadcn UI, Redux, Zustand, Jotai

### Databases
MongoDB, PostgreSQL, Redis, SQL Optimization, NoSQL Schema Design, MongoDB Aggregation Pipeline Optimization, Indexing Strategies, Query Performance Analysis, Data Denormalization

### AI
LLM API Integration, Prompt Engineering, AI Workflow Automation

### Infrastructure and Engineering
Docker, Dockerized Monorepo Deployments, AWS (EC2, S3, Lightsail), CI/CD Pipelines, Ubuntu Server Administration, Nginx, System Design, Plugin Architecture, Performance Optimization, Memory Profiling, Unit Testing (Jest)

## Work Experience

### Full Stack Developer - Onlay AI
Jun 2025 - Present

Technologies: Next.js, NestJS, TypeScript, MongoDB, PostgreSQL, RabbitMQ, Redis, AWS, LLM APIs

Key contributions:
- Designed and implemented a modular plugin architecture for dynamic AI integrations.
- Built AI features using LLM APIs and asynchronous processing pipelines.
- Designed RabbitMQ-based event-driven workflows and reduced insurance eligibility processing latency by about 50%.
- Led internal operational dashboards for system health, service metrics, and LLM usage.
- Resolved critical production memory leaks through deep Node.js memory profiling and debugging.
- Led backend architecture decisions for scalable AI integrations.

### Full Stack Developer - Avena / Retrace
Apr 2021 - May 2025

Technologies: React, Node.js, .NET (C#), MongoDB, Redis, RabbitMQ, Puppeteer, Docker

Key contributions:
- Developed high-throughput EDI services processing millions of healthcare records annually.
- Optimized complex MongoDB aggregation pipelines for faster reporting and analytics.
- Improved dashboard response times by about 40% using Redis caching strategies.
- Automated insurance eligibility verification with Puppeteer, reducing manual workload.
- Managed and optimized CI/CD pipelines delivering updates to 50+ healthcare organizations.
- Deployed Dockerized monorepo architectures on AWS EC2/Lightsail and managed operations with Nginx and Ubuntu.
- Built reporting and analytics tools for operational decision-making.

### Frontend Developer - Bynogame
Sep 2020 - Apr 2021

Technologies: React, JavaScript, Laravel APIs, SCSS

Key contributions:
- Built performance-focused user interfaces for a high-traffic e-commerce platform.
- Converted Figma design systems into responsive, production-ready components.
- Contributed to frontend performance and SEO improvements to reduce page load times.

## Featured Projects

### Ciftopia - Couples App
Stack: React Native / Expo, NestJS, AWS S3

Full-stack mobile app for couples with real-time quizzes via Socket.io, AI-generated stories with OpenAI/Gemini-powered TTS, and 3D experiences using React Three Fiber.

### Dental B2B Marketplace
Stack: Next.js, Zustand, .NET (C# / ASP.NET Core), PostgreSQL

Comprehensive B2B dental marketplace connecting clinics and approved suppliers, covering 50,000+ products across 8+ categories, with a performance- and SEO-focused frontend.

### Time Heroes - Idle Pet-Collecting RPG
Stack: React, TypeScript, Jotai

Built game UI and client-side logic, including interactive screens with React/TypeScript and cross-component state management with Jotai.

## Education and Languages
- Cukurova University - Bachelor's in Computer Engineering (2013 - 2019)
- Turkish: Native
- English: Professional Working Proficiency`
    }
]
