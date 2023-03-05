require('dotenv').config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bio-src',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
  ],

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
            "intro": "Proprietary monitoring web based app for QytaTrans Travel's Investors internal use. I have develop this app fullstack from backend to frontend."
          },

          "mobiltravel": {
            "title": "Mobiltravel Mobile & Web App",
            "intro": "Seat reservation platform, book transport ticket on the go. I lead the backend team and contributed for the app architecture design principal. I also developed & documented most of the API."
          },

          "qytachecklist": {
            "title": "Qyta Trans Vehicle Checklist",
            "intro": "Proprietary vehicle checklist progressive web app (PWA) for QytaTrans Travel internal use. I'm the lead developer for this app development fullstack from backend to frontend."
          },

          "qytahris": {
            "title": "Human Resource Information System Qyta Trans",
            "intro": "A legacy human resource information system web based app for QytaTrans Travel internal use. I've made small updates and maintenance on this app."
          },

          "smanusa": {
            "title": "SMANUSA Kemranjen Highschool Website",
            "intro": "A SMA NU 1 Kemranjen's high school profile website. I have develop this website with PHP core without framework on my early career as web developer."
          },

          "sum": {
            "title": "Syirkah Ummat Backend & Admin",
            "intro": "A coop system that able to provide crowdfunding capability too. I have developed the backend mobile API that implements JWT authentication on top of PHP Laravel includiing the frontend for administrator and member each."
          },

          "qytaadmin": {
            "title": "Qyta Trans Travel Admin",
            "intro": "Proprietary web based app for QytaTrans Travel internal use. I have developed this app fullstack from backend to frontend."
          },

          "qytabot": {
            "title": "Qyta Trans Telegram Bot",
            "intro": "Telegram bot for quick reports, booking tickets for customer, and vehicle checking for checkers."
          },

          "idiymotor": {
            "title": "InsureDIY Malaysia's Car Insurance",
            "intro": "Makes it easy to buy & compare multiple insurance product for your car in Malaysia."
          },

          "jdihkemenpppa": {
            "title": "JDIH Kemen PPPA",
            "intro": "The JDIH Kemen PPPA is an android-based mobile application that contains Legislation and Legal Products issued by the Ministry of Women's Empowerment and Child Protection, and is a means of disseminating legal information related to women's empowerment and child protection."
          },

          "jdihkemenpppawebsite": {
            "title": "JDIH Kemen PPPA Website",
            "intro": "The website that contains Legislation and Legal Products issued by the Ministry of Women's Empowerment and Child Protection, and is a means of disseminating legal information related to women's empowerment and child protection."
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
            "intro": "Aplikasi monitoring berbasis web diperuntukkan bagi Investor QytaTrans Travel. Saya telah mengerjakan aplikasi ini fullstack dari backend hingga frontend."
          },

          "mobiltravel": {
            "title": "Mobiltravel Mobile & Web App",
            "intro": "Platform reservasi kursi, pesan tiket travel online kapan saja dan dimana saja. Saya bekerja sebagai lead programmer dan berkontribusi pada desain dan development arsitektur backend dari aplikasi ini."
          },

          "qytachecklist": {
            "title": "Qyta Trans Checklist Armada",
            "intro": "Aplikasi web progresif (PWA) checklist armada QytaTrans Travel intuk pemakaian internal. Saya memimpin pengerjaan aplikasi ini fullstack dari backend hingga frontend."
          },

          "qytahris": {
            "title": "Sistem Informasi Karyawan (HRIS) Qyta Trans",
            "intro": "Adalah sistem informasi karyawan berbasis web untuk internal QytaTrans Travel. Saya melakukan sedikit pembaruan dan perbaikan pada aplikasi ini."
          },

          "smanusa": {
            "title": "Website Sekolah SMANUSA Kemranjen",
            "intro": "Website profil dari SMA NU 1 Kemranjen. Saya membangun website ini menggunakan PHP core tanpa framework saat saya masih baru memulai karir sebagai web developer."
          },

          "sum": {
            "title": "Syirkah Ummat Mobile Backend & Admin",
            "intro": "Yaitu sistem koperasi dan platform crowdfunding. Saya develop backend mobile API dengan otentikasi JWT dengan PHP laravel beserta frontend admin & membernya."
          },

          "qytaadmin": {
            "title": "Qyta Trans Travel Admin",
            "intro": "Aplikasi utama QytaTrans Travel berbasis web intuk pemakaian internal termasuk reservasi kursi, setoran driver, hingga laporan keuangan. Saya telah mengerjakan aplikasi ini fullstack dari backend hingga frontend."
          },

          "qytabot": {
            "title": "Telegram Bot Qyta Trans",
            "intro": "Telegram untuk manajemen cepat operasional kantor, pesan tiket untuk customer, dan ceklis kendaraan."
          },

          "idiymotor": {
            "title": "Asuransi Kendaraan InsureDIY Malaysia",
            "intro": "Memudahkan customer untuk membandingkan produk asuransi untuk kendaraan yang akan anda daftarkan dengan beberapa layanan asuransi sekaligus yang tersedia."
          },

          "jdihkemenpppa": {
            "title": "JDIH Kemen PPPA",
            "intro": "JDIH Kemen PPPA merupakan aplikasi berbasis mobile android yang memuat Peraturan Perundang-undangan dan Produk Hukum yang diterbitkan oleh Kementerian Pemberdayaan Perempuan dan Perlindungan Anak, serta merupakan sarana penyerbarluasan informasi hukum terkait pemberdayaan perempuan dan perlindungan anak."
          },

          "jdihkemenpppawebsite": {
            "title": "JDIH Kemen PPPA Website",
            "intro": "Website yang memuat Peraturan Perundang-undangan dan Produk Hukum yang diterbitkan oleh Kementerian Pemberdayaan Perempuan dan Perlindungan Anak, serta merupakan sarana penyerbarluasan informasi hukum terkait pemberdayaan perempuan dan perlindungan anak."
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
