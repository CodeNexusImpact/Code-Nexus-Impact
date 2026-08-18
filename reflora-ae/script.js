// 1. Endpoint do Google Apps Script (Planilha)
const scriptURL = 'https://script.google.com/macros/s/AKfycbzhrRrsBP_qQ4jw8OiEKxMr6MGUVyDeVKBsOZL2JIghe082qoAq6tcElDIkN5ZA4LleYg/exec';

const form = document.getElementById('reflora-form');
const btn = document.getElementById('submit-btn');
const msg = document.getElementById('form-message');
const btnText = btn ? btn.querySelector('span') : null;

if (form && btn && msg) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        // 1. Verificação Anti-Spam (Honeypot)
        const honeyField = form.querySelector('input[name="website"]');
        if (honeyField && honeyField.value.trim() !== '') {
            // Bot detectado: simula sucesso e descarta silenciosamente
            form.reset();
            msg.style.display = 'block';
            msg.className = 'block p-4 rounded-lg text-sm font-medium text-center mt-4 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700';
            msg.innerText = 'Sucesso! Recebemos sua mensagem e entraremos em contato.';
            setTimeout(() => { msg.style.display = 'none'; }, 5000);
            return;
        }

        // 2. Estado de Carregamento
        btn.disabled = true;
        btn.classList.add('opacity-70', 'cursor-not-allowed');
        if (btnText) {
            btnText.innerText = 'Enviando Dados...';
        } else {
            btn.innerText = 'Enviando Dados...';
        }
        msg.style.display = 'none';
        msg.className = 'hidden p-4 rounded-lg text-sm font-medium text-center mt-4';

        const data = new URLSearchParams(new FormData(form));

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: data
        })
            .then(() => {
                // Sucesso
                msg.style.display = 'block';
                msg.className = 'block p-4 rounded-lg text-sm font-medium text-center mt-4 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700';
                msg.innerText = 'Sucesso! Recebemos seus dados e entraremos em contato em breve.';

                form.reset();
                btn.disabled = false;
                btn.classList.remove('opacity-70', 'cursor-not-allowed');
                if (btnText) {
                    btnText.innerText = 'Enviar Mensagem';
                } else {
                    btn.innerText = 'Enviar Mensagem';
                }

                setTimeout(() => { msg.style.display = 'none'; }, 5000);
            })
            .catch(error => {
                // Erro
                console.error('Erro:', error);
                msg.style.display = 'block';
                msg.className = 'block p-4 rounded-lg text-sm font-medium text-center mt-4 bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700';
                msg.innerText = 'Erro ao conectar. Tente atualizar a página e enviar novamente.';

                btn.disabled = false;
                btn.classList.remove('opacity-70', 'cursor-not-allowed');
                if (btnText) {
                    btnText.innerText = 'Enviar Mensagem';
                } else {
                    btn.innerText = 'Enviar Mensagem';
                }
            });
    });
}

// 3. Menu Mobile Toggle
const mobileBtn = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    });
}

// 4. Efeito no Scroll da Navbar
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.remove('py-3.5');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.add('py-3.5');
            navbar.classList.remove('py-2');
        }
    });
}
