require('dotenv').config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Firman Taruna Nugraha',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap-vue',
    'sweetalert2',
    '~/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/scrollto.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'UA-161599854-1'
  },

  pwa: {
    manifest: {
      name: 'Firman Taruna Nugraha',
      short_name: 'FTN',
      background_color: "#F7F9FB",
      theme_color: "#F7F9FB"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          "ok": "Ok",
          "cancel": "Cancel",
          "error_alert_title": "Oops...",
          "error_alert_text": "Something went wrong! Please try again.",
          "token_expired_alert_title": "Session Expired!",
          "token_expired_alert_text": "Please log in again to continue.",
          "login": "Log In",
          "register": "Register",
          "page_not_found": "Page Not Found",
          "go_home": "Go Home",
          "logout": "Logout",
          "email": "Email",
          "remember_me": "Remember Me",
          "password": "Password",
          "forgot_password": "Forgot Your Password?",
          "confirm_password": "Confirm Password",
          "name": "Name",
          "toggle_navigation": "Toggle navigation",
          "home": "Home",
          "you_are_logged_in": "You are logged in!",
          "reset_password": "Reset Password",
          "send_password_reset_link": "Send Password Reset Link",
          "settings": "Settings",
          "profile": "Profile",
          "your_info": "Your Info",
          "info_updated": "Your info has been updated!",
          "update": "Update",
          "your_password": "Your Password",
          "password_updated": "Your password has been updated!",
          "new_password": "New Password",
          "login_with": "Login with",
          "register_with": "Register with",
          "update_available": "New version is available.",
          "update_now": "Update now?",
          "portfolio": "Portfolio",
          "portfolio_details": "Portfolio Details",
          "contact_me": "Contact Me",
          "hi_my_name_is": "Welcome to my portfolio website! My name is",
          "short_intro": "I am a web developer with a focus on backend API development. I have been working as a professional software developer since 2014, and I have a passion for building dynamic and innovative web applications that help businesses meet their goals and engage with their audiences.\\n\\nWith years of experience in the industry, I have honed my skills in web development, including expertise in Laravel, VueJS, Nuxt, ReactJS, and React Native.This has enabled me to not only develop web applications but also mobile apps for both Android and iOS platforms.\\n\\nIn my current role at InsureDIY, my team and I have developed a website that utilizes Nuxt for the customer site, VueJS for the admin panel, and Laravel as the backend API.I am proud to have created an architecture that enables administrators to manage forms dynamically, which has been crucial in selling financial products effectively.Additionally, I developed a custom newsletter feature that integrated with our customer data, leading to increased customer engagement and sales growth.\\n\\nThroughout my career, I have used MongoDB in various projects and successfully integrated payment gateway services like Midtrans and paydollar.These integrations were crucial in enabling our clients to securely process transactions and improve their overall user experience.\\n\\nI am open to any project as my side job and always looking for new and exciting challenges.My first job in a company was as a programmer for PT Qyta Trans, where I worked from 2014 to 2019. After that, I joined InsureDIY as a software developer and have been working here since then.I have a stable record of working for companies and always strive to deliver high- quality work on time.\\n\\nThank you for taking the time to visit my website.If you have any questions or would like to discuss a potential project, please feel free to contact me.i'm a professional web application and services programmer since 2014. Proficiencies include PHP Laravel, MySQL, MongoDB, Vue JS, React JS, full stack and REST API.",
          "contact_me_via": "Contact me via",
          "find_me_on": "Thank you for visiting my portfolio site. If you have any questions, comments, or opportunities for collaboration, please feel free to reach out to me using any of the links below or send me an email at firmantr3[at]gmail.com. I am available for freelance work and open to discussing potential projects.\\n\\nYou can also find me on LinkedIn, GitHub, GitLab, Twitter, WhatsApp, and Facebook. Please don't hesitate to connect with me and start a conversation.\\n\\nThank you again for your interest, and I look forward to hearing from you!",
          "about": "About",
          "contact": "Contact",
          "screenshots": "Screenshots",
          "show_details": "Show Details",
          "category": "Category",
          "close_window": "Close Window",
          "visit_link": "Visit Link",

          "qytasik": {
            "title": "SIK (Partnership Information System) Qyta Trans",
            "intro": "During my time at PT Qyta Trans Group, I had the opportunity to contribute to the company's internal systems in several ways. One of my main accomplishments was the development of a ticketing system that included advanced vehicle management features. This system was created from scratch using my skills in full-stack development and PHP programming, and it played a crucial role in improving overall efficiency and customer satisfaction at Qyta Trans.\\n\\nAs part of this work, I also had the opportunity to create an app that allowed other parties with profit-sharing contracts to monitor their units within Qyta Trans' vehicle fleet. Since many of these vehicles were not owned directly by Qyta Trans, this app provided a valuable way for partners to stay informed about the status and location of their units. By integrating this app with the larger ticketing system, we were able to create a more comprehensive and efficient solution for managing Qyta Trans' entire fleet of vehicles. Overall, this project was a key contribution to the company's success, helping to improve operations and customer satisfaction across the board."
          },

          "mobiltravel": {
            "title": "Mobiltravel Mobile & Web App",
            "intro": "When I was working for PT Qyta Trans Group, I created a web-based ticketing system that was only used by our company's internal staff. However, I realized that we could expand our business by connecting our system with various online ticket providers.\\n\\nTogether with my team, we built a new API bridge that enabled Qyta Trans to sell tickets from multiple online providers. By using this API, we were able to expand our business reach and provide more ticketing options for our customers.\\n\\nAdditionally, I also created an API for our own provider, Mobiltravel, which allowed our customers to use the mobile app to book tickets, update order details, and track their travel schedules easily. By using this technology, we were able to provide a better experience for our customers and strengthen our business in an increasingly competitive market.\\n\\nThis system was a significant breakthrough for PT Qyta Trans Group, allowing us to expand our business reach and provide the best service for our customers. I am proud to be a part of this project and contribute to the success of our company."
          },

          "qytachecklist": {
            "title": "Qyta Trans Vehicle Checklist",
            "intro": "As part of my work at PT Qyta Trans Group, I developed a module for vehicle checklists that integrates seamlessly with the company's ticketing system. The purpose of this module is to provide an efficient and streamlined way to manage vehicle maintenance and safety checks, reducing the risk of issues and improving overall operations. Through this integration, employees can easily schedule and track vehicle checklists as part of their regular workflows, ensuring that vehicles are always in top condition and ready for use. Overall, this module has been a valuable addition to the company's internal systems, helping to improve efficiency and safety across the board."
          },

          "qytahris": {
            "title": "Human Resource Information System Qyta Trans",
            "intro": "During my time at PT Qyta Trans Group, I had the opportunity to contribute to the company's internal systems in several ways. One of my primary achievements was the creation of a ticketing system to help manage and track customer requests and support issues. This system was developed from scratch using my skills in full-stack development and PHP programming, and it played a key role in improving overall efficiency and customer satisfaction at Qyta Trans.\\n\\nIn addition to my work on the ticketing system, I also had the chance to collaborate with a colleague on the development of the company's HRIS system. While my colleague was responsible for the initial development of this system, I was able to contribute by making small updates and fixes to help ensure that the system was running smoothly and meeting the needs of Qyta Trans employees. Through this collaboration, we were able to create a more robust and effective HRIS system, helping to improve employee satisfaction and retention at the company."
          },

          "smanusa": {
            "title": "SMANUSA Kemranjen Highschool Website",
            "intro": "One of my notable projects was developing a school official website for SMA NU 1 Kemranjen using vanilla PHP and bootstrap UI. My focus was on creating a user-friendly interface that enables students, teachers, and parents to easily access relevant information and stay updated with the latest news and events.\\n\\nIn addition to web development, I also have expertise in database management, API integration, and version control systems. I am dedicated to delivering high-quality work that meets my clients' needs and exceeds their expectations."
          },

          "sum": {
            "title": "Syirkah Ummat Backend & Admin",
            "intro": "I worked on a project for Syirkah Ummat Cilacap where I developed a crowdfunding platform based on Sharia's law. My primary responsibility was developing the backend API for the client mobile application. Additionally, I worked on the full stack for the admin panel. This project allowed me to contribute my technical expertise while also supporting the client's mission of promoting ethical financial practices."
          },

          "qytaadmin": {
            "title": "Qyta Trans Travel Admin",
            "intro": "During my employment at PT Qyta Trans Group from 2016 to 2019, I took on the challenge of building a ticketing system for the company. With no existing framework to work with, I wrote the system from scratch using plain PHP and full-stack development skills, working independently to create a custom solution tailored specifically to the company's needs. The resulting system was designed to be used internally by Qyta Trans employees, providing a private and secure way to manage the company's ticketing processes."
          },

          "qytabot": {
            "title": "Qyta Trans Telegram Bot",
            "intro": "During my time at PT Qyta Trans Group, one of the challenges we faced with our ticketing system was that it was web-based, which made it difficult to access in remote areas with weak signals. To solve this problem, I created a Telegram Bot for our operations employees who were dispatched to remote areas, which allowed them to manage their tasks using text-based commands.\\n\\nThe Telegram Bot was a simple and effective solution that enabled our employees to stay connected even when they were working in areas with weak internet signals. With this tool, they could easily check and update their tasks, access important information, and communicate with our central team. By implementing this solution, we were able to improve our overall efficiency and ensure that our employees could do their jobs effectively in any location.\\n\\nIn addition to the Telegram Bot for operations, I also created another bot for our customers to book tickets. This bot allowed customers to book their tickets directly through Telegram, and our customer service team would then approve the booking and send the ticket information back to the customer. This was a convenient and user-friendly way for our customers to book their tickets, and it helped us to improve our customer satisfaction rates overall.\\n\\nOverall, these Telegram Bots were valuable additions to our ticketing system, allowing us to overcome the challenges of weak signals in remote areas and providing our employees and customers with new and more efficient ways to manage their tasks and bookings."
          },

          "idiymotor": {
            "title": "InsureDIY Malaysia's Car Insurance",
            "intro": "Makes it easy to buy & compare multiple insurance product for your car in Malaysia."
          },

          "jdihkemenpppa": {
            "title": "JDIH Kemen PPPA Mobile App",
            "intro": "I developed a mobile app version of the JDIH Kemenppa website for the Ministry of Women Empowerment and Child Protection. The app was built using React Native, a powerful framework for creating high-performance mobile applications. With this app, users can easily access important information and resources related to women's empowerment and child protection, all from the convenience of their mobile devices. As a result, the Ministry is better equipped to reach and engage with their audience, furthering their mission of promoting gender equality and protecting vulnerable populations."
          },

          "jdihkemenpppawebsite": {
            "title": "JDIH Kemen PPPA Website",
            "intro": "The Ministry of Women Empowerment and Child Protection approached me to rewrite their JDIH website by revamping its user interface to be clean and responsive, improving its SEO, and adding some additional features to facilitate data management. In this project, I made sure that the website not only had an attractive design but was also easy to navigate and searchable by search engines. With these enhancements, the Ministry can more easily publish important information and manage data efficiently, helping them achieve their goals of promoting gender equality and child protection."
          },

          "insurediy": {
            "title": "InsureDIY V2",
            "intro": "As a full-stack developer at InsureDIY, I've had the privilege of working on a dynamic website that empowers customers to purchase financial products with ease. Leveraging the latest web technologies, including Nuxt, VueJS, and Laravel, my team and I created a seamless user experience that is supported by a robust backend API.\\n\\nMy primary focus at InsureDIY has been on developing a flexible and scalable backend API that allows administrators to manage forms dynamically. This architecture enables us to offer a wide range of financial products, each of which can be linked to a custom form with unique functions and configurations. I've also integrated third-party APIs and automated email notifications to streamline the purchasing process.\\n\\nOne of my proudest achievements at InsureDIY was developing a custom newsletter feature that integrates seamlessly with our customer data. This feature allows us to create targeted marketing campaigns that can be tracked and analyzed with advanced statistics. Thanks to this feature, we've been able to improve our customer engagement and drive sales growth.\\n\\nThroughout my tenure at InsureDIY, I've honed my skills as a full-stack developer with a focus on backend API development. I've played a key role in developing a flexible and dynamic architecture that allows us to offer a wide range of financial products to our customers. Additionally, I've built custom features, including a newsletter platform, that have contributed to our success as a company."
          }
        },
        id: {
          "ok": "Ok",
          "cancel": "Batal",
          "error_alert_title": "Aduh...",
          "error_alert_text": "Terjadi kesalahan! Silakan ulangi.",
          "token_expired_alert_title": "Sesi Telah Kadaluarsa!",
          "token_expired_alert_text": "Mohon untuk login ulang.",
          "login": "Masuk",
          "register": "Daftar",
          "page_not_found": "Halaman Tidak Ditemukan",
          "go_home": "Ke Beranda",
          "logout": "Keluar",
          "email": "Email",
          "remember_me": "Ingat Saya",
          "password": "Password",
          "forgot_password": "Lupa Password Anda?",
          "confirm_password": "Konfirmasi Password",
          "name": "Nama",
          "toggle_navigation": "Menu navigasi",
          "home": "Beranda",
          "you_are_logged_in": "Anda telah login!",
          "reset_password": "Reset Password",
          "send_password_reset_link": "Kirim Link Reset Password",
          "settings": "Pengaturan",
          "profile": "Profil",
          "your_info": "Info Pribadi",
          "info_updated": "Info pribadi berhasil diperbarui!",
          "update": "Pembaruan",
          "your_password": "Password Anda",
          "password_updated": "Password anda berhasil diperbarui!",
          "new_password": "Password Baru",
          "login_with": "Masuk menggunakan",
          "register_with": "Daftar menggunakan",
          "update_available": "Versi baru tersedia",
          "update_now": "Update sekarang?",
          "portfolio": "Portofolio",
          "portfolio_details": "Detail Portofolio",
          "contact_me": "Kontak Saya",
          "hi_my_name_is": "Selamat datang, perkenalkan nama saya",
          "short_intro": "Saya seorang pengembang web dengan fokus pada pengembangan backend API. Saya telah bekerja sebagai pengembang perangkat lunak profesional sejak tahun 2014, dan saya memiliki hasrat untuk membangun aplikasi web yang dinamis dan inovatif yang membantu bisnis mencapai tujuan mereka dan berinteraksi dengan audiens mereka.\\n\\nDengan pengalaman bertahun-tahun di industri ini, saya telah mengasah keterampilan saya dalam pengembangan web, termasuk keahlian dalam Laravel, VueJS, Nuxt, ReactJS, dan React Native. Ini memungkinkan saya untuk tidak hanya mengembangkan aplikasi web tetapi juga aplikasi seluler untuk platform Android dan iOS.\\n\\nDalam peran saya saat ini di InsureDIY, tim saya dan saya telah mengembangkan situs web yang memanfaatkan Nuxt untuk situs pelanggan, VueJS untuk panel admin, dan Laravel sebagai backend API. Saya bangga telah menciptakan arsitektur yang memungkinkan administrator untuk mengelola formulir secara dinamis, yang sangat penting dalam menjual produk keuangan secara efektif. Selain itu, saya mengembangkan fitur newsletter kustom yang terintegrasi dengan data pelanggan kami, sehingga meningkatkan keterlibatan pelanggan dan pertumbuhan penjualan.\\n\\nSepanjang karir saya, saya telah menggunakan MongoDB dalam berbagai proyek dan berhasil mengintegrasikan layanan gateway pembayaran seperti Midtrans dan paydollar. Integrasi-integrasi ini sangat penting dalam memungkinkan klien kami untuk memproses transaksi secara aman dan meningkatkan pengalaman pengguna mereka secara keseluruhan.\\n\\nSaya terbuka untuk proyek apa pun sebagai pekerjaan sampingan dan selalu mencari tantangan baru dan menarik. Pekerjaan pertama saya di sebuah perusahaan adalah sebagai programmer untuk PT Qyta Trans, di mana saya bekerja dari 2014 hingga 2019. Setelah itu, saya bergabung dengan InsureDIY sebagai pengembang perangkat lunak dan bekerja di sana hingga saat ini. Saya memiliki rekam jejak yang stabil dalam bekerja untuk perusahaan dan selalu berusaha untuk memberikan kualitas kerja yang tinggi tepat waktu.\\n\\nTerima kasih telah mengunjungi situs web saya. Jika Anda memiliki pertanyaan atau ingin membahas proyek potensial, jangan ragu untuk menghubungi saya.",
          "contact_me_via": "Hubungi saya lewat",
          "find_me_on": "Terima kasih telah mengunjungi situs portofolio saya. Jika Anda memiliki pertanyaan, komentar, atau peluang untuk berkolaborasi, jangan ragu untuk menghubungi saya melalui salah satu tautan di bawah ini atau kirimkan email ke firmantr3[at]gmail.com. Saya tersedia untuk pekerjaan freelance dan terbuka untuk membicarakan proyek potensial.\\n\\nAnda juga dapat menemukan saya di LinkedIn, GitHub, GitLab, Twitter, WhatsApp, dan Facebook. Jangan ragu untuk terhubung dengan saya dan memulai percakapan.\\n\\nTerima kasih lagi atas minat Anda, dan saya berharap dapat mendengar kabar dari Anda!",
          "about": "Tentang",
          "contact": "Kontak",
          "screenshots": "Tangkapan Layar",
          "show_details": "Lihat Detail",
          "category": "Kategori",
          "close_window": "Tutup Jendela",
          "visit_link": "Kunjungi Link",

          "qytasik": {
            "title": "Sistem Informasi Kemitraan Qyta Trans",
            "intro": "Selama bekerja di PT Qyta Trans Group, saya memiliki kesempatan untuk berkontribusi pada sistem internal perusahaan dengan beberapa cara. Salah satu prestasi utama saya adalah pengembangan sistem pemesanan tiket yang mencakup fitur manajemen kendaraan yang canggih. Sistem ini dibuat dari awal menggunakan keterampilan pengembangan full-stack dan pemrograman PHP, dan memainkan peran penting dalam meningkatkan efisiensi dan kepuasan pelanggan di Qyta Trans.\\n\\nSebagai bagian dari pekerjaan ini, saya juga berkesempatan untuk menciptakan sebuah aplikasi yang memungkinkan pihak lain dengan kontrak bagi hasil untuk memantau unit mereka dalam armada kendaraan Qyta Trans. Karena banyak kendaraan ini tidak dimiliki langsung oleh Qyta Trans, aplikasi ini memberikan cara yang berharga bagi mitra untuk tetap terinformasi tentang status dan lokasi unit mereka. Dengan mengintegrasikan aplikasi ini dengan sistem pemesanan tiket yang lebih besar, kami dapat menciptakan solusi yang lebih komprehensif dan efisien untuk mengelola seluruh armada kendaraan Qyta Trans. Secara keseluruhan, proyek ini merupakan kontribusi penting bagi kesuksesan perusahaan, membantu meningkatkan operasi dan kepuasan pelanggan secara keseluruhan."
          },

          "mobiltravel": {
            "title": "Mobiltravel Mobile & Web App",
            "intro": "Saat saya bekerja di PT Qyta Trans Group, saya menciptakan sistem pemesanan tiket berbasis web yang hanya digunakan oleh internal perusahaan kami. Namun, saya menyadari bahwa kami dapat memperluas bisnis kami dengan menghubungkan sistem kami dengan berbagai penyedia tiket online.\\n\\nBersama dengan tim saya, saya membangun API bridge baru yang memungkinkan Qyta Trans untuk menjual tiket dari beberapa penyedia tiket online. Dengan menggunakan API ini, kami dapat memperluas jangkauan bisnis kami dan memberikan lebih banyak pilihan tiket bagi pelanggan kami.\\n\\nSelain itu, saya juga membuat API untuk provider kami sendiri, yaitu Mobiltravel, yang memungkinkan pelanggan kami menggunakan aplikasi seluler untuk memesan tiket, memperbarui detail pesanan, dan melacak jadwal perjalanan mereka dengan mudah. Dengan menggunakan teknologi ini, kami dapat memberikan pengalaman yang lebih baik bagi pelanggan kami dan memperkuat bisnis kami di pasar yang semakin kompetitif.\\n\\nSistem ini merupakan terobosan penting bagi PT Qyta Trans Group, memungkinkan kami untuk memperluas jangkauan bisnis kami dan memberikan layanan terbaik bagi pelanggan kami. Saya bangga bisa menjadi bagian dari proyek ini dan berkontribusi pada kesuksesan perusahaan kami."
          },

          "qytachecklist": {
            "title": "Qyta Trans Checklist Armada",
            "intro": "Sebagai bagian dari pekerjaan saya di PT Qyta Trans Group, saya mengembangkan sebuah modul untuk checklist kendaraan yang terintegrasi secara mulus dengan sistem pemesanan tiket perusahaan. Tujuan dari modul ini adalah untuk menyediakan cara yang efisien dan mudah untuk mengelola perawatan kendaraan dan pemeriksaan keselamatan, mengurangi risiko masalah dan meningkatkan efisiensi operasional secara keseluruhan. Melalui integrasi ini, karyawan dapat dengan mudah menjadwalkan dan melacak checklist kendaraan sebagai bagian dari alur kerja mereka, memastikan bahwa kendaraan selalu dalam kondisi terbaik dan siap digunakan. Secara keseluruhan, modul ini merupakan tambahan yang berharga untuk sistem internal perusahaan, membantu meningkatkan efisiensi dan keselamatan secara keseluruhan."
          },

          "qytahris": {
            "title": "Sistem Informasi Karyawan (HRIS) Qyta Trans",
            "intro": "Selama bekerja di PT Qyta Trans Group, saya memiliki kesempatan untuk berkontribusi pada sistem internal perusahaan dengan beberapa cara. Salah satu pencapaian utama saya adalah menciptakan sistem pemesanan tiket untuk membantu mengelola dan melacak permintaan pelanggan dan masalah dukungan. Sistem ini dibuat dari awal menggunakan keterampilan pengembangan full-stack dan pemrograman PHP, dan memainkan peran penting dalam meningkatkan efisiensi dan kepuasan pelanggan di Qyta Trans.\\n\\nSelain pekerjaan saya pada sistem pemesanan tiket, saya juga berkesempatan untuk berkolaborasi dengan seorang rekan kerja dalam pengembangan sistem HRIS perusahaan. Meskipun rekan saya bertanggung jawab atas pengembangan awal sistem ini, saya dapat berkontribusi dengan melakukan pembaruan dan perbaikan kecil untuk membantu memastikan sistem berjalan dengan lancar dan memenuhi kebutuhan karyawan Qyta Trans. Melalui kolaborasi ini, kami dapat menciptakan sistem HRIS yang lebih kuat dan efektif, membantu meningkatkan kepuasan dan retensi karyawan di perusahaan tersebut."
          },

          "smanusa": {
            "title": "Website Sekolah SMANUSA Kemranjen",
            "intro": "Salah satu proyek awal saya adalah mengembangkan situs web resmi sekolah untuk SMA NU 1 Kemranjen menggunakan PHP murni dan antarmuka pengguna bootstrap. Fokus saya adalah menciptakan antarmuka yang ramah pengguna yang memungkinkan siswa, guru, dan orang tua untuk dengan mudah mengakses informasi relevan dan tetap terbaru dengan berita dan acara terbaru.\\n\\nSelain pengembangan web, saya juga memiliki keahlian dalam manajemen database, integrasi API, dan sistem kontrol versi. Saya berdedikasi untuk memberikan hasil kerja berkualitas tinggi yang memenuhi kebutuhan klien dan melebihi harapan mereka."
          },

          "sum": {
            "title": "Syirkah Ummat Mobile Backend & Admin",
            "intro": "Saya telah mengerjakan proyek untuk Syirkah Ummat Cilacap, membuat platform crowdfunding yang berbasis pada hukum syariah. Saya terutama mengembangkan API backend untuk aplikasi seluler klien, dan fullstack pada panel admin. Proyek ini memungkinkan saya untuk memberikan kontribusi keahlian teknis saya sambil juga mendukung misi klien dalam mempromosikan praktik keuangan yang etis."
          },

          "qytaadmin": {
            "title": "Qyta Trans Travel Admin",
            "intro": "Selama bekerja di PT Qyta Trans Group dari tahun 2016 hingga 2019, saya menerima tantangan untuk membangun sistem tiket untuk perusahaan tersebut. Tanpa framework yang tersedia, saya menulis sistem tersebut dari awal menggunakan bahasa pemrograman PHP dan keterampilan pengembangan full-stack, serta bekerja secara mandiri untuk membuat solusi kustom yang disesuaikan dengan kebutuhan perusahaan. Sistem yang dihasilkan dirancang untuk digunakan secara internal oleh karyawan Qyta Trans, memberikan cara yang aman dan terpercaya untuk mengelola proses pemesanan tiket perusahaan."
          },

          "qytabot": {
            "title": "Telegram Bot Qyta Trans",
            "intro": "Saat saya bekerja di PT Qyta Trans Group, salah satu tantangan yang kami hadapi dengan sistem pemesanan tiket kami adalah bahwa sistemnya berbasis web, sehingga sulit diakses di daerah-daerah terpencil dengan sinyal internet yang lemah. Untuk mengatasi masalah ini, saya menciptakan Telegram Bot untuk karyawan operasi kami yang ditempatkan di daerah-daerah terpencil. Bot ini memungkinkan mereka untuk mengelola tugas mereka menggunakan perintah berbasis teks.\\n\\nTelegram Bot merupakan solusi sederhana dan efektif yang memungkinkan karyawan kami tetap terhubung meskipun mereka bekerja di daerah dengan sinyal internet yang lemah. Dengan alat ini, mereka dapat dengan mudah memeriksa dan memperbarui tugas mereka, mengakses informasi penting, dan berkomunikasi dengan tim pusat kami. Dengan mengimplementasikan solusi ini, kami dapat meningkatkan efisiensi kami secara keseluruhan dan memastikan bahwa karyawan kami dapat menjalankan pekerjaan mereka dengan efektif di lokasi mana pun.\\n\\nSelain Telegram Bot untuk operasi, saya juga membuat bot lain untuk pelanggan kami untuk memesan tiket. Bot ini memungkinkan pelanggan untuk memesan tiket mereka langsung melalui Telegram, dan tim layanan pelanggan kami kemudian akan menyetujui pemesanan dan mengirimkan informasi tiket kembali kepada pelanggan. Ini adalah cara yang nyaman dan mudah digunakan bagi pelanggan kami untuk memesan tiket mereka, dan membantu kami meningkatkan tingkat kepuasan pelanggan kami secara keseluruhan.\\n\\nSecara keseluruhan, Telegram Bots ini merupakan tambahan berharga untuk sistem pemesanan tiket kami, memungkinkan kami untuk mengatasi tantangan sinyal lemah di daerah terpencil dan memberikan karyawan dan pelanggan kami cara yang baru dan lebih efisien untuk mengelola tugas dan pemesanan mereka."
          },

          "idiymotor": {
            "title": "Asuransi Kendaraan InsureDIY Malaysia",
            "intro": "Memudahkan customer untuk membandingkan produk asuransi untuk kendaraan yang akan anda daftarkan dengan beberapa layanan asuransi sekaligus yang tersedia."
          },

          "jdihkemenpppa": {
            "title": "JDIH Kemen PPPA Mobile App",
            "intro": "Saya telah melakukan sebuah proyek untuk Kementerian Pemberdayaan Perempuan dan Perlindungan Anak untuk membuat versi aplikasi seluler dari situs web JDIH Kemenppa mereka. Aplikasi ini dibuat dengan menggunakan React Native, sebuah kerangka kerja yang handal untuk membuat aplikasi seluler yang berkualitas tinggi. Dengan aplikasi ini, pengguna dapat dengan mudah mengakses informasi dan sumber daya penting terkait pemberdayaan perempuan dan perlindungan anak, semua dari kenyamanan perangkat seluler mereka. Sebagai hasilnya, Kementerian menjadi lebih mampu untuk mencapai dan terlibat dengan audiens mereka, lebih lanjut memajukan misi mereka dalam mempromosikan kesetaraan gender dan melindungi populasi yang rentan."
          },

          "jdihkemenpppawebsite": {
            "title": "JDIH Kemen PPPA Website",
            "intro": "Saya diminta oleh Kementerian Pemberdayaan Perempuan dan Perlindungan Anak untuk menulis ulang situs web JDIH mereka dengan memperbarui antarmuka pengguna untuk menjadi bersih dan responsif, meningkatkan SEO, dan menambahkan beberapa fitur tambahan untuk memudahkan pengelolaan data. Dalam proyek ini, saya memastikan bahwa situs web tersebut tidak hanya memiliki tampilan yang menarik, tetapi juga mudah dinavigasi dan dapat ditemukan oleh mesin pencari. Dengan peningkatan ini, Kementerian dapat lebih mudah mempublikasikan informasi penting dan mengelola data dengan lebih efisien, membantu mereka mencapai tujuan mereka dalam mempromosikan kesetaraan gender dan perlindungan anak."
          },

          "insurediy": {
            "title": "InsureDIY V2",
            "intro": "Sebagai seorang pengembang full-stack di InsureDIY, saya berkesempatan untuk bekerja pada website dinamis yang memudahkan pelanggan dalam membeli produk keuangan. Dengan memanfaatkan teknologi web terbaru, termasuk Nuxt, VueJS, dan Laravel, saya dan tim berhasil membuat pengalaman pengguna yang lancar yang didukung oleh backend API yang kuat.\\n\\nFokus utama saya di InsureDIY adalah mengembangkan backend API yang fleksibel dan scalable yang memungkinkan administrator untuk mengelola formulir secara dinamis. Arsitektur ini memungkinkan kami untuk menawarkan berbagai produk keuangan, masing-masing dapat terhubung dengan formulir kustom dengan fungsi dan konfigurasi yang unik. Saya juga mengintegrasikan API pihak ketiga dan notifikasi email otomatis untuk mempercepat proses pembelian.\\n\\nSalah satu prestasi yang paling membanggakan saya di InsureDIY adalah mengembangkan fitur newsletter kustom yang terintegrasi dengan data pelanggan kami. Fitur ini memungkinkan kami untuk membuat kampanye pemasaran yang ditargetkan dan dapat dilacak dengan statistik yang canggih. Berkat fitur ini, kami telah berhasil meningkatkan keterlibatan pelanggan dan menghasilkan pertumbuhan penjualan.\\n\\nSelama bekerja di InsureDIY, saya telah mengasah keterampilan sebagai pengembang full-stack dengan fokus pada pengembangan backend API. Saya telah memainkan peran penting dalam mengembangkan arsitektur yang fleksibel dan dinamis yang memungkinkan kami untuk menawarkan berbagai produk keuangan kepada pelanggan kami. Selain itu, saya juga telah membangun fitur-fitur kustom, termasuk platform newsletter, yang telah berkontribusi pada kesuksesan perusahaan kami."
          }
        }
      }
    }
  }
}
