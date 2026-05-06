export const agentResponses: Record<string, string> = {
  merhaba:
    "Merhaba! Ben Serhat'ın AI portfolio asistanıyım. Size deneyimleri, projeleri veya teknik becerileri hakkında bilgi verebilirim. Ne öğrenmek istersiniz?",
  hello:
    "Hello! I'm Serhat's AI portfolio assistant. I can tell you about his experience, projects, or technical skills. What would you like to know?",
  deneyim:
    "Serhat'ın iş deneyimi:\n\n🏢 **Onlay AI** (Jun 2025 - Present)\nSenior Full Stack Developer\n- Modüler plugin mimarisi tasarımı\n- LLM API entegrasyonları\n- RabbitMQ ile event-driven işlemler\n\n🏢 **Avena – Retrace** (Apr 2021 - May 2025)\nFull Stack Developer\n- Healthcare EDI servisleri\n- MongoDB optimizasyonları\n- Redis caching stratejileri\n\n🏢 **Bynogame** (Sep 2020 - Apr 2021)\nFrontend Developer\n- E-ticaret platformu UI geliştirme",
  experience:
    "Serhat's work experience:\n\n🏢 **Onlay AI** (Jun 2025 - Present)\nSenior Full Stack Developer\n- Modular plugin architecture design\n- LLM API integrations\n- Event-driven processing with RabbitMQ\n\n🏢 **Avena – Retrace** (Apr 2021 - May 2025)\nFull Stack Developer\n- Healthcare EDI services\n- MongoDB optimizations\n- Redis caching strategies\n\n🏢 **Bynogame** (Sep 2020 - Apr 2021)\nFrontend Developer\n- E-commerce platform UI development",
  proje:
    "Serhat'ın öne çıkan projeleri:\n\n📱 **Ciftopia - Couples App**\nReact Native/Expo, NestJS, AWS S3\nÇiftler için real-time quiz, AI hikaye üretimi, 3D space explorer\n\n🦷 **Dental B2B Marketplace**\nNext.js, .NET/ASP.NET Core, PostgreSQL\n50,000+ ürün, 8+ kategori, SEO odaklı\n\n🎮 **Time Heroes - Idle RPG**\nReact, TypeScript, Jotai\nOyun içi UI ve client-side logic geliştirme",
  projects:
    "Serhat's featured projects:\n\n📱 **Ciftopia - Couples App**\nReact Native/Expo, NestJS, AWS S3\nReal-time quiz for couples, AI story generation, 3D space explorer\n\n🦷 **Dental B2B Marketplace**\nNext.js, .NET/ASP.NET Core, PostgreSQL\n50,000+ products, 8+ categories, SEO focused\n\n🎮 **Time Heroes - Idle RPG**\nReact, TypeScript, Jotai\nIn-game UI and client-side logic development",
  beceri:
    "Serhat'ın teknik becerileri:\n\n**Backend:** Node.js, NestJS, Express, .NET/C#, Java, Spring Boot, RabbitMQ\n\n**Frontend:** React, Next.js, React Native, Vue.js, TypeScript, Tailwind CSS\n\n**Database:** MongoDB, PostgreSQL, Redis\n\n**AI:** LLM API Integration, Prompt Engineering\n\n**Infra:** Docker, AWS (EC2, S3, Lightsail), CI/CD, Nginx",
  skills:
    "Serhat's technical skills:\n\n**Backend:** Node.js, NestJS, Express, .NET/C#, Java, Spring Boot, RabbitMQ\n\n**Frontend:** React, Next.js, React Native, Vue.js, TypeScript, Tailwind CSS\n\n**Database:** MongoDB, PostgreSQL, Redis\n\n**AI:** LLM API Integration, Prompt Engineering\n\n**Infra:** Docker, AWS (EC2, S3, Lightsail), CI/CD, Nginx",
  iletişim:
    "Serhat ile iletişime geçin:\n\n📧 Email: serhatbelen7@gmail.com\n📱 Phone: +90 534 420 0038\n🔗 LinkedIn: linkedin.com/in/serhat-belen\n💻 GitHub: github.com/commandx1\n🌐 Website: serhatbelen.dev",
  contact:
    "Get in touch with Serhat:\n\n📧 Email: serhatbelen7@gmail.com\n📱 Phone: +90 534 420 0038\n🔗 LinkedIn: linkedin.com/in/serhat-belen\n💻 GitHub: github.com/commandx1\n🌐 Website: serhatbelen.dev",
  default:
    'Serhat hakkında bilgi almak için şunları sorabilirsiniz:\n\n- "deneyim" veya "experience"\n- "projeler" veya "projects"\n- "beceriler" veya "skills"\n- "iletişim" veya "contact"\n\nNasıl yardımcı olabilirim?',
}

export const getAgentResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()

  for (const [key, response] of Object.entries(agentResponses)) {
    if (lowerMessage.includes(key)) {
      return response
    }
  }

  return agentResponses.default
}
