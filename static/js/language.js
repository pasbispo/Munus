// Alternar exibição do menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Alternar exibição do menu de idiomas
function toggleLanguageMenu() {
    var menu = document.getElementById("languageMenu");
    if (menu) {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    } else {
        console.error("Error: Element languageMenu not found!");
    }
}

// Define inglês como idioma inicial ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    changeLanguage("en");
});

// Função para trocar de idioma e atualizar frases
function changeLanguage(lang) {
    console.log("Idioma alterado para: " + lang);
    document.documentElement.lang = lang;

 const translations = {
    "en": {
        "siteName": "Munus",
        "whoWeAre": "Who We Are",
        "partners": "Partners",
        "donations": "Donations",
        "contact": "Contact",
        "project": "Project",
        "close": "❌ Close",
        "portuguese": "Portuguese",
        "english": "English",
        "spanish": "Spanish",
        "arabic": "Arabic",
        "support": "Support: Microsoft, Binance",
        "supporters": "Support: Pasbispo",
        "phrase1": "Sustainable farming",
        "phrase2": "Community income",
        "phrase3": "Innovative cultivation",
        "phrase4": "Agricultural education",
        "phrase5": "Urban gardens",
        "phrase6": "Ecological production",
        "phrase7": "Financial inclusion",
        "phrase8": "Accessible nutrition",
        "phrase9": "Medicinal herbs",
        "phrase10": "Sustainable development",
        "phrase11": "Contact",
        "phrase12": "Donations",
        "phrase13": "Partners",
        "phrase14": "Who We Are"

    },
    "pt": {
        "siteName": "Munus",
        "whoWeAre": "Quem Somos",
        "partners": "Parceiros",
        "donations": "Doações",
        "contact": "Contato",
        "project": "Projeto",
        "close": "❌ Fechar",
        "portuguese": "Português",
        "english": "Inglês",
        "spanish": "Espanhol",
        "arabic": "Árabe",
        "support": "Suporte: Microsoft, Binance",
        "supporters": "Apoio: Pasbispo",
        "phrase1": "Agricultura sustentável",
        "phrase2": "Renda comunitária",
        "phrase3": "Cultivo inovador",
        "phrase4": "Educação agrícola",
        "phrase5": "Hortas urbanas",
        "phrase6": "Produção ecológica",
        "phrase7": "Inclusão financeira",
        "phrase8": "Alimentação acessível",
        "phrase9": "Ervas medicinais",
        "phrase10": "Desenvolvimento sustentável",
        "phrase11": "Contato",
        "phrase12": "Donaação",
        "phrase13": "Parceiro",
        "phrase14": "Quem somos"

    },
    "es": {
        "siteName": "Munus",
        "whoWeAre": "Quiénes somos",
        "partners": "Socios",
        "donations": "Donaciones",
        "contact": "Contacto",
        "project": "Proyecto",
        "close": "❌ Cerrar",
        "portuguese": "Portugués",
        "english": "Inglés",
        "spanish": "Español",
        "arabic": "Árabe",
        "support": "Soporte: Microsoft, Binance",
        "supporters": "Apoyo: Pasbispo",
        "phrase1": "Agricultura sostenible",
        "phrase2": "Ingresos comunitarios",
        "phrase3": "Cultivo innovador",
        "phrase4": "Educación agrícola",
        "phrase5": "Huertos urbanos",
        "phrase6": "Producción ecológica",
        "phrase7": "Inclusión financiera",
        "phrase8": "Alimentación accesible",
        "phrase9": "Hierbas medicinales",
        "phrase10": "Desarrollo sostenible",
        "phrase11": "Contacto",
        "phrase12": "Donaciones",
        "phrase13": "Socios",
        "phrase14": "Quiénes somos"

    },
    "ar": {
        "siteName": "مونوس",
        "whoWeAre": "من نحن",
        "partners": "الشركاء",
        "donations": "التبرعات",
        "contact": "اتصل",
    "project": "المشروع",
        "close": "❌ إغلاق",
        "portuguese": "البرتغالية",
        "english": "الإنجليزية",
        "spanish": "الإسبانية",
        "arabic": "العربية",
        "support": "الدعم: مايكروسوفت، بينانس",
        "supporters": "الداعم: باسبيسبو",
        "phrase1": "العربية",
        "phrase2": "دخل المجتمع",
        "phrase3": "زراعة مبتكرة",
        "phrase4": "تعليم زراعي",
        "phrase5": "حدائق حضرية",
        "phrase6": "إنتاج بيئي",
        "phrase7": "الإدماج المالي",
        "phrase8": "تغذية متاحة",
        "phrase9": "أعشاب طبية",
        "phrase10": "تنمية مستدامة",
        "phrase11": "اتصل",
        "phrase12": "التبرعات",
        "phrase13": "الشركاء",
        "phrase14": "من نحن"

    }
};




    document.querySelectorAll("[data-lang]").forEach((el) => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";

    document.getElementById("languageMenu").style.display = "none";
}

// Fechar menus ao clicar fora
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var languageMenu = document.getElementById("languageMenu");
    var menuButton = document.querySelector(".menu-button");
    var languageButton = document.querySelector(".language-button");

    if (menu && menu.style.display === "block" && !menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = "none";
    }

    if (languageMenu && languageMenu.style.display === "block" && !languageMenu.contains(event.target) && event.target !== languageButton) {
        languageMenu.style.display = "none";
    }
});

// Função para sair dos menus
function exitMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("languageMenu").style.display = "none";
    
}


function changeLanguage(lang) {
    console.log("Idioma alterado para: " + lang);
    document.documentElement.lang = lang;

    const translations = {
        "en": {
            "phrase1": "Sustainable farming",
            "phrase2": "Community income",
            "phrase3": "Innovative cultivation",
            "phrase4": "Agricultural education",
            "phrase5": "Urban gardens",
            "phrase6": "Ecological production",
            "phrase7": "Financial inclusion",
            "phrase8": "Accessible nutrition",
            "phrase9": "Medicinal herbs",
            "phrase10": "Sustainable development",
            "phrase11": "Contact",
            "phrase12": "Donations",
            "phrase13": "Partners",
            "phrase14": "Who We Are"
        },
        "pt": {
            "phrase1": "Agricultura sustentável",
            "phrase2": "Renda comunitária",
            "phrase3": "Cultivo inovador",
            "phrase4": "Educação agrícola",
            "phrase5": "Hortas urbanas",
            "phrase6": "Produção ecológica",
            "phrase7": "Inclusão financeira",
            "phrase8": "Alimentação acessível",
            "phrase9": "Ervas medicinais",
            "phrase10": "Desenvolvimento sustentável",
            "phrase11": "Contato",
            "phrase12": "Donaação",
            "phrase13": "Parceiro",
            "phrase14": "Quem somos"
        },
        "es": {
            "phrase1": "Agricultura sostenible",
            "phrase2": "Ingresos comunitarios",
            "phrase3": "Cultivo innovador",
            "phrase4": "Educación agrícola",
            "phrase5": "Huertos urbanos",
            "phrase6": "Producción ecológica",
            "phrase7": "Inclusión financiera",
            "phrase8": "Alimentación accesible",
            "phrase9": "Hierbas medicinales",
            "phrase10": "Desarrollo sostenible",
            "phrase11": "Contacto",
            "phrase12": "Donaciones",
            "phrase13": "Socios",
            "phrase14": "Quiénes somos"
        },
        "ar": {
            "phrase1": "العربية",
                        "phrase2": "دخل المجتمع",
                        "phrase3": "زراعة مبتكرة",
                        "phrase4": "تعليم زراعي",
                        "phrase5": "حدائق حضرية",
                        "phrase6": "إنتاج بيئي",
                        "phrase7": "الإدماج المالي",
                        "phrase8": "تغذية متاحة",
                        "phrase9": "أعشاب طبية",
                        "phrase10": "تنمية مستدامة",
                        "phrase11": "اتصل",
                        "phrase12": "التبرعات",
                        "phrase13": "الشركاء",
                        "phrase14": "من نحن"

        }
    };

    document.querySelectorAll("[data-lang]").forEach((el) => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Ajustar direção do texto (RTL para árabe, LTR para outros idiomas)
    document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";

    // Esconder menu após seleção
    document.getElementById("languageMenu").style.display = "none";
}







function showWallet(wallet, cryptoName) {
    if (!wallet || wallet.trim() === "") {
        alert("Address not available for this cryptocurrency.");
        return;
    }

    const modal = document.getElementById("walletModal");
    const walletTitle = document.getElementById("walletTitle");
    const walletAddress = document.getElementById("walletAddress");

    walletTitle.textContent = `My wallet (${cryptoName})`;
    walletAddress.textContent = wallet; // ✅ Insere o endereço antes de exibir o modal
    modal.style.display = "block";

    setTimeout(() => {
        console.log("Address set:", walletAddress.textContent); // 🚀 Teste para verificar se está funcionando
    }, 100); // Espera 100ms para garantir que o valor foi atualizado
}











function copyWallet() {
    console.log("copyWallet foi chamado!");
    let walletText = document.getElementById("walletAddress").textContent;

    if (walletText.trim() !== "") {
        navigator.clipboard.writeText(walletText)
            .then(() => alert("Address copied!"))
            .catch(err => console.error("Erro ao copiar:", err));
    } else {
        alert("No address available to copy.");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");
    console.log(typeof copyWallet);
});



function closeModal() {
    console.log("Closing modal..."); // 🚀 Teste para ver se está funcionando
    document.getElementById('walletModal').style.display = 'none';
}


function closeModal() {
    var walletModal = document.getElementById("walletModal");
    walletModal.style.display = "none";
}











// Definição global das traduções (no início do arquivo!)
const translations = {
    "en": {
        "language": "Language",
        "menuButton": "☰ Menu",
        "phrase1": "Sustainable farming",
            "siteName": "Munus",
            "project": "Project",
            "phrase2": "Community income",
            "phrase3": "Innovative cultivation",
            "phrase4": "Agricultural education",
            "phrase5": "Urban gardens",
            "phrase6": "Ecological production",
            "phrase7": "Financial inclusion",
            "phrase8": "Accessible nutrition",
            "phrase9": "Medicinal herbs",
            "phrase10": "Sustainable development",
            "contact": "Contact",
            "donations": "Donations",
            "partners": "Partners",
            "whoWeAre": "Who We Are",
            "project": "Project",
            "portuguese": "Portuguese", 
            "english": "English",  
            "spanish": "Spanish",
            "arabic": "Arabic", 
            "close": "Close",
            "contactTitle": "Contact Us",
            "email": "Email: contato@munus.com",
            "phone": "Phone: +55 71 9999-9999",
            "address": "Address: Rua Exemplo, 123, Salvador, BA, Brasil",
            "partnersTitle": "Partners",
            "donationsTitle": "Donations",
            "Address not available for this cryptocurrency.": "Address Not Available For this Cryptocurrency." 
    },
    "pt": {
        "language": "Idioma",
        "menuButton": "☰ Menu",
        "phrase1": "Agricultura sustentável",
        "siteName": "Munus",
        "project": "Projeto",
        "phrase2": "Renda comunitária",
        "phrase3": "Cultivo inovador",
        "phrase4": "Educação agrícola",
        "phrase5": "Hortas urbanas",
        "phrase6": "Produção ecológica",
        "phrase7": "Inclusão financeira",
        "phrase8": "Alimentação acessível",
        "phrase9": "Ervas medicinais",
        "phrase10": "Desenvolvimento sustentável",
        "contact": "Contato",
        "donations": "Doação",
        "partners": "Parceiro",
        "whoWeAre": "Quem somos",
        "project": "Projeto",
        "portuguese": "Português",
        "english": "Inglês",
        "spanish":"Espanhou",
        "arabic": "Árabe",
        "close": "Fechar",
        "contactTitle": "Entre em Contato",
        "email": "Email: contato@munus.com",
        "phone": "Telefone: +55 71 9999-9999",
        "address": "Endereço: Rua Exemplo, 123, Salvador, BA, Brasil",
        "partnersTitle": "Parceiros",
        "donationsTitle": "Doações",
        "Address not available for this cryptocurrency.": "Endereço não disponível para esta criptomoeda."
    },
    "es": {
        "language": "Idioma",
        "menuButton": "☰ Menú",
         "phrase1": "Agricultura sostenible",
         "siteName": "Munus",
         "project": "Proyecto",
         "phrase2": "Ingresos comunitarios",
         "phrase3": "Cultivo innovador",
         "phrase4": "Educación agrícola",
         "phrase5": "Huertos urbanos",
         "phrase6": "Producción ecológica",
         "phrase7": "Inclusión financiera",
         "phrase8": "Alimentación accesible",
         "phrase9": "Hierbas medicinales",
         "phrase10": "Desarrollo sostenible",
         "contact": "Contacto",
         "donations": "Donaciones",
         "partners": "Socios",
         "whoWeAre": "Quiénes somos",
         "project": "Proyecto",
         "portuguese": "Portugués",
         "english": "Inglés",
         "spanish": "Espanhol",
         "arabic": "Árabe",
         "close": "Cerrar",
         "contactTitle": "Contáctenos",
         "email": "Correo electrónico: contato@munus.com",
         "phone": "Teléfono: +55 71 9999-9999",
         "address": "Dirección: Rua Exemplo, 123, Salvador, BA, Brasil",
         "partnersTitle": "Socios",
         "donationsTitle": "Donaciones",
         "Address not available for this cryptocurrency.": "Dirección no disponible para esta criptomoneda."
    },
    "ar": {
        "language": "اللغة",
                "menuButton": "☰ القائمة",
                "phrase1": "العربية",
                "siteName": "مونوس",
                "project": "المشروع",
                "phrase2": "دخل المجتمع",
                "phrase3": "زراعة مبتكرة",
                "phrase4": "تعليم زراعي",
                "phrase5": "حدائق حضرية",
                "phrase6": "إنتاج بيئي",
                "phrase7": "الإدماج المالي",
                "phrase8": "تغذية متاحة",
                "phrase9": "أعشاب طبية",
                "phrase10": "تنمية مستدامة",
                "contact": "اتصل",
                "donations": "التبرعات",
                "partners": "الشركاء",
                "whoWeAre": "من نحن",
        "project": "المشروع",
        "portuguese": "البرتغالية",
        "english": "الإنجليزية",
        "spanish": "الإسبانية",
        "arabic": "العربية",
        "close": "إغلاق",
    "contactTitle": "اتصل بنا",
        "email": "البريد الإلكتروني: contato@munus.com",
    "phone": "الهاتف: +55 71 9999-9999",
        "address": "العنوان: Rua Exemplo, 123, Salvador, BA, Brasil",
    "partnersTitle": "الشركاء",
    "donationsTitle": "التبرعات",
        "Address not available for this cryptocurrency.": "العنوان غير متاح لهذه العملة المشفرة."
    }
};

function changeLanguage(lang) {
    console.log("Idioma alterado para: " + lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach((el) => {
        const key = el.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key]; // ✅ Agora os textos do menu serão traduzidos!
        } else {
            console.warn("Chave de tradução não encontrada:", key);
        }
    });

    document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";
    document.getElementById("languageMenu").style.display = "none";
}




document.querySelectorAll('*').forEach(el => {
    if (getComputedStyle(el).display === 'none') {
        console.log("Elemento oculto encontrado:", el);
    }
});









document.addEventListener("DOMContentLoaded", function () {
    const btnProjeto = document.getElementById("btnProjeto");
    const modalProjeto = document.getElementById("modalProjeto");
    const textoProjeto = document.getElementById("textoProjeto");
    const closeBtn = document.querySelector(".close");

    const textos = {

         "en": `<strong>Dear collaborators,</strong><br><br>
The Shelf Plantation is a sustainable urban agriculture initiative focused on innovation in the cultivation of food and medicinal plants. Our goal is to transform domestic spaces into productive areas, especially in small spaces, promoting a natural garden at home.<br><br>

In our home, we can have cabinets with plants aimed at healthier eating. In many homes, there isn’t much space for planting tomatoes, bell peppers, onions, cilantro, mint, basil, and other viable crops. However, it’s possible to have a small shelf near the window or in the hall with plants that contribute to your diet. In other homes, with larger spaces, such as an unused rooftop, cabinets with multiple shelves and plants can be installed to supply the consumption needs of the residents. In case of surplus production, these can even be used to generate extra income.<br><br>

Our mission is to facilitate access to local food production, helping it thrive and creating sustainable food and economic opportunities. Furthermore, we aim to build a greener and more productive future, where every urban farmer has the necessary resources to cultivate their crops.<br><br>

We realize that our project is impactful and brings many benefits to society. As this is a social project with no sponsorship, we ask for your help with fundraising. Our primary method of fundraising is through cryptocurrencies, ensuring security, transparency, and financial efficiency. We also accept other forms of donation, allowing more people to contribute to the growth of the project.</strong>`,



        "pt": `<strong>Prezados colaboradores,</strong><br><br>
        A Plantação de Platileira é uma iniciativa de agricultura urbana sustentável, voltada para inovação no cultivo de alimentos e plantas medicinais. Nosso objetivo é transformar espaços dormésticos em áreas produtivas, principalmentes em pequenos espaços, promovendo uma horta natural em casa.<br><br>
         

       Na nossa casa, podemos ter armários com plantas voltadas para uma alimentação mais saudável. Em muitos lares, não há muito espaço para o plantio de tomates, pimentões, cebolas, coentro, hortelã, manjericão e outras culturas viáveis. Porém, é possível ter uma pequena prateleira perto da janela ou no hall, com plantas que contribuam para a alimentação. Em outras casas, com um espaço maior, como uma cobertura sem uso, podem ser instalados armários com várias prateleiras e plantas voltadas para o consumo dos moradores daquela residência. Em caso de sobras da produção, essas podem ser utilizadas até para gerar uma renda extra.<br><br>

        
       Nossa missão é facilitar o acesso à produção local de alimentos, ajudando a prosperar e criando oportunidades de alimentação e economia sustentáveis. Além disso, buscamos construir um futuro mais verde e produtivo, no qual cada agricultor urbano tenha os recursos necessários para cultivar suas plantações.<br><br>


        Percebemos que nosso projeto é comprometedor e traz muitos benefícios para a sociedade. Por ser um projeto social e sem patrocínio, pedimos a sua ajuda com a arrecadação. Nosso principal método de arrecadação é através de criptomoedas, garantindo segurança, transparência e eficiência financeira. Também aceitamos outras formas de doação, permitindo que mais pessoas contribuam para o crescimento do projeto.</strong>`,

 
        "es": `<strong>Estimados colaboradores,</strong><br><br>

La Plantación de Estantería es una iniciativa de agricultura urbana sostenible, enfocada en la innovación en el cultivo de alimentos y plantas medicinales. Nuestro objetivo es transformar espacios domésticos en áreas productivas, especialmente en pequeños espacios, promoviendo un huerto natural en casa.<br><br>

En nuestra casa, podemos tener armarios con plantas destinadas a una alimentación más saludable. En muchos hogares, no hay mucho espacio para cultivar tomates, pimientos, cebollas, cilantro, menta, albahaca y otros cultivos viables. Sin embargo, es posible tener una pequeña estantería cerca de la ventana o en el recibidor con plantas que contribuyan a la alimentación. En otras casas, con un espacio mayor, como una azotea sin uso, se pueden instalar armarios con varias estanterías y plantas destinadas al consumo de los residentes. En caso de excedente de producción, estos se pueden utilizar incluso para generar ingresos adicionales.<br><br>

Nuestra misión es facilitar el acceso a la producción local de alimentos, ayudando a que prospere y creando oportunidades de alimentación y economía sostenibles. Además, buscamos construir un futuro más verde y productivo, en el que cada agricultor urbano tenga los recursos necesarios para cultivar sus plantaciones.<br><br>

Nos damos cuenta de que nuestro proyecto es impactante y trae muchos beneficios a la sociedad. Como este es un proyecto social sin patrocinio, pedimos su ayuda con la recaudación. Nuestro principal método de recaudación es a través de criptomonedas, garantizando seguridad, transparencia y eficiencia financiera. También aceptamos otras formas de donación, permitiendo que más personas contribuyan al crecimiento del proyecto.</strong>`,



        "ar": `<strong>أعزائي المتعاونين،</strong><br><br>
        مشروع زراعة بلاتيليرا هو مبادرة للزراعة الحضرية المستدامة، تركز على الابتكار في زراعة الأغذية والأعشاب الطبية<strong>أعزائي المتعاونين،</strong><br><br>
"مشروع زراعة الأرفف" هو مبادرة للزراعة الحضرية المستدامة، تركز على الابتكار في زراعة الأغذية والنباتات الطبية. هدفنا هو تحويل المساحات المنزلية إلى مناطق إنتاجية، خاصة في المساحات الصغيرة، وتعزيز وجود حديقة طبيعية في المنزل.<br><br>

في منازلنا، يمكننا أن نستخدم الخزانات لزراعة النباتات التي تهدف إلى تناول غذاء أكثر صحة. في العديد من المنازل، لا توجد مساحة كافية لزراعة الطماطم، الفلفل، البصل، الكزبرة، النعناع، الريحان، والمحاصيل الأخرى القابلة للزراعة. ولكن، يمكن تخصيص رف صغير قرب النافذة أو في الممر لزراعة النباتات التي تدعم التغذية. أما في المنازل ذات المساحات الأكبر، مثل الأسطح غير المستغلة، يمكن تركيب خزانات تحتوي على عدة أرفف ونباتات مخصصة لتلبية احتياجات سكان المنزل. في حالة وجود فائض في الإنتاج، يمكن استخدامه حتى لتحقيق دخل إضافي.<br><br>

مهمتنا هي تسهيل الوصول إلى الإنتاج المحلي للأغذية، ومساعدته على الازدهار وخلق فرص اقتصادية وغذائية مستدامة. بالإضافة إلى ذلك، نسعى إلى بناء مستقبل أكثر خضرة وإنتاجية، حيث يتمكن كل مزارع حضري من الحصول على الموارد اللازمة لزراعة محاصيله.<br><br>

ندرك أن مشروعنا هو مشروع مؤثر ويجلب العديد من الفوائد للمجتمع. وباعتباره مشروعًا اجتماعيًا بدون رعاية، نطلب مساعدتكم في جمع التبرعات. طريقتنا الرئيسية لجمع التبرعات هي من خلال العملات المشفرة، مما يضمن الأمان والشفافية والكفاءة المالية. كما نقبل أشكالًا أخرى من التبرعات، مما يسمح لعدد أكبر من الناس بالمساهمة في نمو المشروع.</strong>`,


 
   };




    function obterTextoProjeto(lang) {
        return textos[lang] || textos["en"];
    }

    function atualizarTextoModal() {
        const langAtual = document.documentElement.lang || "en";
        textoProjeto.innerHTML = obterTextoProjeto(langAtual);
    }

    btnProjeto.addEventListener("click", function (event) {
        event.preventDefault();
        atualizarTextoModal(); // Atualiza o texto antes de abrir o modal
        modalProjeto.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        modalProjeto.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalProjeto) {
            modalProjeto.style.display = "none";
        }
    });

   document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.getAttribute("data-lang");
    if (translations[document.documentElement.lang] && translations[document.documentElement.lang][key]) {
        element.textContent = translations[document.documentElement.lang][key];
    } else {
        console.warn(`Chave de tradução não encontrada: ${key}`);
    }


    });
});






document.addEventListener("DOMContentLoaded", function () {
    const btnWhoWeAre = document.getElementById("btnWhoWeAre");
    const modalWhoWeAre = document.getElementById("whoWeAreModal");
    const textoWhoWeAre = document.getElementById("whoWeAreText");
    const closeBtnWhoWeAre = modalWhoWeAre.querySelector(".close");

    const textosWhoWeAre = {
        "en": `<strong>Our team is made up of professionals passionate about sustainability and innovation.</strong><br><br>
We are passionate about sustainability and innovation, and our purpose is to transform urban spaces into productive areas, promoting agricultural educational inclusion in urban settings. Through collective efforts, we aim not only to positively impact the environment but also to encourage agricultural practices in urban environments, contributing to awareness and the empowerment of local communities.<br><br>

My academic background is in Physics, a field entirely different from what we are discussing here. However, my passion for agriculture has always been present. In 2025, after joining the Brazilian Agricultural Research Corporation (Embrapa) and learning about the Embrapa Master Plan (2024–2030) during my studies, I realized the importance of finding alternatives to produce food sustainably. This realization was driven by challenges such as global warming, rising food costs, and the need to reduce the consumption of pesticides through healthier eating practices.<br><br>

Faced with this reality, the idea of initiating a project aimed at promoting urban and self-sustaining agricultural practices emerged. To make this project viable, I decided to create a website dedicated to fundraising. The innovation here lies in seeking resources primarily through cryptocurrencies, offering a different and modern way of financing capable of attracting supporters with an innovative profile.<br><br>

The project is inspired by a vision of transformation. We believe that by merging technology, sustainability, and urban agricultural practices, we can contribute to building a more balanced and resilient future, where every individual has the opportunity to produce their own food sustainably.`,




        "pt": `<strong>Nossa equipe é composta por profissionais apaixonados pela sustentabilidade e inovação.</strong><br><br>
Somos apaixonados pela sustentabilidade e inovação, e nosso propósito é transformar espaços urbanos em áreas produtivas, promovendo inclusão educacional agrícola urbana. Por meio de esforços conjuntos, buscamos não apenas impactar positivamente o meio ambiente, mas também incentivar práticas agrícolas em ambientes urbanos, contribuindo para a conscientização e formação de comunidades locais.<br><br>

Minha formação acadêmica é na área de Física, um campo distinto do que abordamos aqui. No entanto, minha paixão pela agricultura sempre esteve presente. Em 2025, após prestar concurso para a Empresa Brasileira de Pesquisa Agropecuária (Embrapa) e ter contato com o Plano Diretor da Embrapa (2024-2030) durante os estudos, percebi a importância de buscar alternativas para produzir alimentos de forma autossustentável. Esse despertar foi impulsionado pelos desafios impostos pelo aquecimento global, pelo aumento dos custos dos alimentos e pela necessidade de reduzir o consumo de agrotóxicos por meio de uma alimentação mais saudável.<br><br>

Diante dessa realidade, surgiu a ideia de iniciar um projeto voltado para incentivar práticas agrícolas urbanas e autossustentáveis. Para tornar esse projeto viável, decidi criar um site dedicado a arrecadar fundos. A inovação aqui é buscar recursos principalmente por meio de criptomoedas, oferecendo um formato de financiamento diferenciado e moderno, capaz de atrair apoiadores com perfil inovador.<br><br>

O projeto é motivado por um ideal de transformação. Acreditamos que, ao unir tecnologia, sustentabilidade e práticas agrícolas urbanas, podemos contribuir para a construção de um futuro mais equilibrado e resiliente, onde cada indivíduo tenha a oportunidade de produzir seu próprio alimento de maneira sustentável.`,


        "es": `<strong>Nuestro equipo está compuesto por profesionales apasionados por la sostenibilidad y la innovación.</strong><br><br>
Nos apasiona la sostenibilidad y la innovación, y nuestro propósito es transformar espacios urbanos en áreas productivas, promoviendo la inclusión educativa agrícola en entornos urbanos. A través de esfuerzos colectivos, buscamos no solo impactar positivamente el medio ambiente, sino también fomentar prácticas agrícolas en entornos urbanos, contribuyendo a la concienciación y la formación de las comunidades locales.<br><br>

Mi formación académica es en Física, un campo completamente distinto al que abordamos aquí. Sin embargo, siempre he sentido pasión por la agricultura. En 2025, después de unirme a la Empresa Brasileña de Investigación Agropecuaria (Embrapa) y al estudiar el Plan Maestro de Embrapa (2024-2030), comprendí la importancia de buscar alternativas para producir alimentos de manera autosostenible. Esta conciencia surgió debido a los desafíos impuestos por el calentamiento global, el aumento de los costos de los alimentos y la necesidad de reducir el consumo de pesticidas mediante prácticas alimentarias más saludables.<br><br>

Ante esta realidad, surgió la idea de comenzar un proyecto destinado a fomentar prácticas agrícolas urbanas y autosostenibles. Para hacer viable este proyecto, decidí crear un sitio web dedicado a recaudar fondos. La innovación aquí es buscar recursos principalmente a través de criptomonedas, ofreciendo un formato de financiamiento diferente y moderno capaz de atraer apoyos con perfil innovador.<br><br>

El proyecto está inspirado en un ideal de transformación. Creemos que, al combinar tecnología, sostenibilidad y prácticas agrícolas urbanas, podemos contribuir a la construcción de un futuro más equilibrado y resiliente, donde cada individuo tenga la oportunidad de producir sus propios alimentos de manera sostenible.`,

        "ar": `<strong>يتكون فريقنا من محترفين شغوفين بالاستدامة والابتكار.</strong><br><br>
نحن شغوفون بالاستدامة والابتكار، وهدفنا هو تحويل المساحات الحضرية إلى مناطق منتجة، وتعزيز الإدماج التعليمي الزراعي الحضري. من خلال الجهود المشتركة، نسعى ليس فقط للتأثير إيجابياً على البيئة، ولكن أيضاً لتشجيع الممارسات الزراعية في البيئات الحضرية، والمساهمة في تعزيز الوعي وتشكيل المجتمعات المحلية.<br><br>

تخصصي الأكاديمي هو في مجال الفيزياء، وهو مجال مختلف تماماً عما نتحدث عنه هنا. ومع ذلك، كان شغفي بالزراعة دائماً حاضراً. في عام 2025، وبعد أن تقدمت للانضمام إلى شركة أبحاث الزراعة البرازيلية (Embrapa)، واطلعت خلال الدراسة على الخطة الرئيسية لشركة Embrapa (2024-2030)، أدركت أهمية البحث عن بدائل لإنتاج الغذاء بشكل مستدام. هذا الإدراك جاء نتيجة التحديات التي يفرضها الاحترار العالمي، وزيادة تكاليف الغذاء، والحاجة إلى تقليل استهلاك المبيدات الكيميائية عبر التغذية الصحية.<br><br>

أمام هذه الحقيقة، ظهرت فكرة إنشاء مشروع يهدف إلى تشجيع الممارسات الزراعية الحضرية والمستدامة ذاتياً. ولجعل هذا المشروع قابلاً للتنفيذ، قررت إنشاء موقع إلكتروني مخصص لجمع الأموال. الفكرة المبتكرة هنا هي البحث عن الموارد بشكل رئيسي من خلال العملات الرقمية، مما يوفر طريقة تمويل مختلفة وحديثة، قادرة على جذب داعمين يتمتعون برؤية مبتكرة.<br><br>

المشروع مدفوع بفكرة التحول. نحن نعتقد أنه من خلال دمج التكنولوجيا والاستدامة والممارسات الزراعية الحضرية، يمكننا المساهمة في بناء مستقبل أكثر توازناً ومرونة، حيث يكون لكل فرد فرصة لإنتاج غذائه الخاص بطريقة مستدامة..`
    };

    function obterTextoWhoWeAre(lang) {
        return textosWhoWeAre[lang] || textosWhoWeAre["en"];
    }

    function atualizarTextoModalWhoWeAre() {
        const langAtual = document.documentElement.lang || "en";
        textoWhoWeAre.innerHTML = obterTextoWhoWeAre(langAtual);
    }

    btnWhoWeAre.addEventListener("click", function (event) {
        event.preventDefault();
        atualizarTextoModalWhoWeAre(); // Atualiza o texto antes de abrir o modal
        modalWhoWeAre.style.display = "flex";
    });

    closeBtnWhoWeAre.addEventListener("click", function () {
        modalWhoWeAre.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalWhoWeAre) {
            modalWhoWeAre.style.display = "none";
        }
    });

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (textosWhoWeAre[document.documentElement.lang] && textosWhoWeAre[document.documentElement.lang][key]) {
            element.textContent = textosWhoWeAre[document.documentElement.lang][key];
        } else {
            console.warn(`Chave de tradução não encontrada: ${key}`);
        }
    });
});










document.addEventListener("DOMContentLoaded", function () {
    const btnDonations = document.getElementById("btnDonations");
    const modalDonations = document.getElementById("donationsModal");
    const textoDonations = modalDonations.querySelector("ul");
    const closeBtnDonations = modalDonations.querySelector(".close");

    const textosDonations = {
        "en": `
        <li><strong>PayPal:</strong> your-paypal-email@email.com</li>
        <li><strong>MercadoPago:</strong> your-mercado-pago-key</li>
        <li><strong>Pix:</strong> your-pix-key</li>
        <li><strong>Bank:</strong> Example Bank, Branch: 1234, Account: 56789-0</li>
        <li><strong>Cryptocurrencies:</strong> BTC: 0xBitcoinAddress | ETH: 0xEthereumAddress</li>
        `,
        "pt": `
        <li><strong>PayPal:</strong> seu-email-paypal@email.com</li>
        <li><strong>MercadoPago:</strong> sua-chave-mercado-pago</li>
        <li><strong>Pix:</strong> sua-chave-pix</li>
        <li><strong>Banco:</strong> Banco Exemplo, Agência: 1234, Conta: 56789-0</li>
        <li><strong>Criptomoedas:</strong> BTC: 0xEndereçoBitcoin | ETH: 0xEndereçoEthereum</li>
        `,
        "es": `
        <li><strong>PayPal:</strong> su-email-paypal@email.com</li>
        <li><strong>MercadoPago:</strong> su-clave-mercado-pago</li>
        <li><strong>Pix:</strong> su-clave-pix</li>
        <li><strong>Banco:</strong> Banco Ejemplo, Sucursal: 1234, Cuenta: 56789-0</li>
        <li><strong>Criptomonedas:</strong> BTC: 0xDireccionBitcoin | ETH: 0xDireccionEthereum</li>
        `,
        "ar": `
        <li><strong>PayPal:</strong> بريدك الإلكتروني-لـPayPal@email.com</li>
        <li><strong>MercadoPago:</strong> مفتاح-سوق-مدفوعاتك</li>
        <li><strong>Pix:</strong> مفتاح Pix الخاص بك</li>
        <li><strong>البنك:</strong> بنك المثال، الفرع: 1234، الحساب: 56789-0</li>
        <li><strong>العملات المشفرة:</strong> BTC: 0xعنوانBitcoin | ETH: 0xعنوانEthereum</li>
        `
    };

    function obterTextoDonations(lang) {
        return textosDonations[lang] || textosDonations["en"];
    }

    function atualizarTextoModalDonations() {
        const langAtual = document.documentElement.lang || "en";
        textoDonations.innerHTML = obterTextoDonations(langAtual);
    }

    btnDonations.addEventListener("click", function (event) {
        event.preventDefault();
        atualizarTextoModalDonations(); // Atualiza o texto antes de abrir o modal
        modalDonations.style.display = "flex";
    });

    closeBtnDonations.addEventListener("click", function () {
        modalDonations.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalDonations) {
            modalDonations.style.display = "none";
        }
    });

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (textosDonations[document.documentElement.lang] && textosDonations[document.documentElement.lang][key]) {
            element.textContent = textosDonations[document.documentElement.lang][key];
        } else {
            console.warn(`Chave de tradução não encontrada: ${key}`);
        }
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const btnPartners = document.getElementById("btnPartners");
    const modalPartners = document.getElementById("partnersModal");
    const textoPartners = modalPartners.querySelector("ul");
    const closeBtnPartners = modalPartners.querySelector(".close");

    const textosPartners = {
        "en":`
        <li>John & Sons</li>
        <li>Green Earth Initiatives</li>
        <li>Urban Farmers United</li>
        <li>EcoFarm Association</li>
        `,
        "pt": `
        <li>John & Sons</li>
        <li>Iniciativas Terra Verde</li>
        <li>Agricultores Urbanos Unidos</li>
        <li>Associação EcoFarm</li>
        `,
        "es": `
        <li>John & Sons</li>
        <li>Iniciativas Tierra Verde</li>
        <li>Agricultores Urbanos Unidos</li>
        <li>Asociación EcoFarm</li>
        `,
        "ar": `
        <li>جون وأبناءه</li>
        <li>مبادرات الأرض الخضراء</li>
        <li>مزارعو المدن المتحدون</li>
        <li>جمعية إيكوفارم</li>
        `
    };

    function obterTextoPartners(lang) {
        return textosPartners[lang] || textosPartners["en"];
    }

    function atualizarTextoModalPartners() {
        const langAtual = document.documentElement.lang || "en";
        textoPartners.innerHTML = obterTextoPartners(langAtual);
    }

    btnPartners.addEventListener("click", function (event) {
        event.preventDefault();
        atualizarTextoModalPartners(); // Atualiza o texto antes de abrir o modal
        modalPartners.style.display = "flex";
    });

    closeBtnPartners.addEventListener("click", function () {
        modalPartners.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalPartners) {
            modalPartners.style.display = "none";
        }
    });

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (textosPartners[document.documentElement.lang] && textosPartners[document.documentElement.lang][key]) {
            element.textContent = textosPartners[document.documentElement.lang][key];
        } else {
            console.warn(`Chave de tradução não encontrada: ${key}`);
        }
    });
});











document.addEventListener("DOMContentLoaded", function () {
    const btnContact = document.getElementById("btnContact");
    const modalContact = document.getElementById("contactModal");
    const contactText = modalContact.querySelector("#contactText");
    const closeBtnContact = modalContact.querySelector(".close");

    const textosContact = {
        "en": `
        <p><strong>Email:</strong> contact@munus.com</p>
        <p><strong>Phone:</strong> +55 71 9999-9999</p>
        <p><strong>Address:</strong> Example Street, 123, Salvador, BA, Brazil</p>
        `,
        "pt": `
        <p><strong>Email:</strong> contato@munus.com</p>
        <p><strong>Telefone:</strong> +55 71 9999-9999</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123, Salvador, BA, Brasil</p>
        `,
        "es": `
        <p><strong>Correo Electrónico:</strong> contacto@munus.com</p>
        <p><strong>Teléfono:</strong> +55 71 9999-9999</p>
        <p><strong>Dirección:</strong> Calle Ejemplo, 123, Salvador, BA, Brasil</p>
        `,
        "ar": `
        <p><strong>البريد الإلكتروني:</strong> contact@munus.com</p>
        <p><strong>الهاتف:</strong> +55 71 9999-9999</p>
        <p><strong>العنوان:</strong> شارع إكزامبل، 123، سلفادور، باهيا، البرازيل</p>
        `
    };

    function obterTextoContact(lang) {
        return textosContact[lang] || textosContact["en"];
    }

    function atualizarTextoModalContact() {
        const langAtual = document.documentElement.lang || "en";
        contactText.innerHTML = obterTextoContact(langAtual);
    }

    btnContact.addEventListener("click", function (event) {
        event.preventDefault();
        atualizarTextoModalContact(); // Atualiza o texto antes de abrir o modal
        modalContact.style.display = "flex";
    });

    closeBtnContact.addEventListener("click", function () {
        modalContact.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalContact) {
            modalContact.style.display = "none";
        }
    });
});












// Função para abrir o modal de contato
function openContact() {
    const contactModal = document.getElementById("contactModal");
    contactModal.style.display = "block"; // Exibe o modal
}

// Função para fechar o modal de contato
function closeContact() {
    const contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none"; // Oculta o modal
}











document.addEventListener("DOMContentLoaded", function () {
    const btnPartners = document.getElementById("btnPartners");
    const partnersModal = document.getElementById("partnersModal");
    const closePartnersBtn = partnersModal.querySelector(".close");

    // Abrir o modal de parceiros
    btnPartners.addEventListener("click", function (event) {
        event.preventDefault();
        partnersModal.style.display = "block"; // Exibe o modal
    });

    // Fechar o modal de parceiros
    closePartnersBtn.addEventListener("click", function () {
        partnersModal.style.display = "none"; // Oculta o modal
    });

    // Fechar ao clicar fora do modal
    window.addEventListener("click", function (event) {
        if (event.target === partnersModal) {
            partnersModal.style.display = "none";
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const btnWhoWeAre = document.getElementById("btnWhoWeAre");
    const whoWeAreModal = document.getElementById("whoWeAreModal");
    const closeWhoWeAreBtn = whoWeAreModal.querySelector(".close");

    // Abrir o modal "Who We Are"
    btnWhoWeAre.addEventListener("click", function (event) {
        event.preventDefault();
        whoWeAreModal.style.display = "block"; // Exibe o modal
    });

    // Fechar o modal "Who We Are"
    closeWhoWeAreBtn.addEventListener("click", function () {
        whoWeAreModal.style.display = "none"; // Oculta o modal
    });

    // Fechar o modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === whoWeAreModal) {
            whoWeAreModal.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const btnDonations = document.getElementById("btnDonations");
    const donationsModal = document.getElementById("donationsModal");
    const closeDonationsBtn = donationsModal.querySelector(".close");

    // Abrir o modal Donations
    btnDonations.addEventListener("click", function (event) {
        event.preventDefault();
        donationsModal.style.display = "block"; // Exibe o modal
    });

    // Fechar o modal Donations
    closeDonationsBtn.addEventListener("click", function () {
        donationsModal.style.display = "none"; // Oculta o modal
    });

    // Fechar ao clicar fora do modal
    window.addEventListener("click", function (event) {
        if (event.target === donationsModal) {
            donationsModal.style.display = "none";
        }
    });
});

