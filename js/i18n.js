// 讀畫樓 — Bilingual Toggle (中文/EN)
// Chinese is primary; English is secondary toggle option.
// Uses data-zh / data-en attributes on elements with class "i18n".
// Persists choice in localStorage.

(function () {
    'use strict';

    var STORAGE_KEY = 'duhuolou_lang';
    var currentLang = localStorage.getItem(STORAGE_KEY) || 'zh';

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);

        // Update all i18n elements
        document.querySelectorAll('.i18n').forEach(function (el) {
            var zh = el.getAttribute('data-zh');
            var en = el.getAttribute('data-en');
            if (lang === 'en' && en) {
                el.textContent = en;
            } else if (zh) {
                el.textContent = zh;
            }
        });

        // Update HTML elements that use innerHTML (for elements with child markup)
        document.querySelectorAll('.i18n-html').forEach(function (el) {
            var zh = el.getAttribute('data-zh-html');
            var en = el.getAttribute('data-en-html');
            if (lang === 'en' && en) {
                el.innerHTML = en;
            } else if (zh) {
                el.innerHTML = zh;
            }
        });

        // Toggle visibility blocks
        document.querySelectorAll('.lang-zh').forEach(function (el) {
            el.style.display = lang === 'zh' ? '' : 'none';
        });
        document.querySelectorAll('.lang-en').forEach(function (el) {
            el.style.display = lang === 'en' ? '' : 'none';
        });

        // Update placeholders
        document.querySelectorAll('.i18n-placeholder').forEach(function (el) {
            var zh = el.getAttribute('data-zh-placeholder');
            var en = el.getAttribute('data-en-placeholder');
            if (lang === 'en' && en) {
                el.placeholder = en;
            } else if (zh) {
                el.placeholder = zh;
            }
        });

        // Update toggle button text
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = lang === 'zh' ? 'EN' : '中文';
            btn.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换到中文');
        }

        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }

    function toggle() {
        applyLang(currentLang === 'zh' ? 'en' : 'zh');
    }

    // Inject toggle button into navbar
    function injectToggle() {
        var navLinks = document.querySelector('.nav-links');
        if (!navLinks) {
            // For pages without nav-links (calligraphy-painting), inject into nav-container
            var navContainer = document.querySelector('.nav-container');
            if (navContainer) {
                var btn = document.createElement('button');
                btn.id = 'lang-toggle';
                btn.className = 'lang-toggle-btn';
                btn.onclick = toggle;
                navContainer.appendChild(btn);
            }
            return;
        }

        // Check if already exists
        if (document.getElementById('lang-toggle')) return;

        var li = document.createElement('li');
        var btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle-btn';
        btn.onclick = toggle;
        li.appendChild(btn);
        navLinks.appendChild(li);
    }

    // Inject CSS for toggle button
    function injectStyles() {
        var style = document.createElement('style');
        style.textContent = [
            '.lang-toggle-btn {',
            '  background: transparent;',
            '  border: 1.5px solid var(--gallery-secondary, #b0b8d1);',
            '  color: var(--gallery-text, #f8f8ff);',
            '  font-family: var(--font-primary, serif);',
            '  font-size: 0.85rem;',
            '  padding: 4px 14px;',
            '  border-radius: 4px;',
            '  cursor: pointer;',
            '  letter-spacing: 1px;',
            '  transition: all 0.3s;',
            '  white-space: nowrap;',
            '}',
            '.lang-toggle-btn:hover {',
            '  background: rgba(255,255,255,0.1);',
            '  border-color: var(--gallery-text, #f8f8ff);',
            '}',
            '/* artwork detail page overrides */',
            'body[style*="--song-paper"] .lang-toggle-btn,',
            '.artwork-detail-container ~ .lang-toggle-btn {',
            '  color: var(--song-ink, #2c3e50);',
            '  border-color: var(--song-ink, #2c3e50);',
            '}',
        ].join('\n');
        document.head.appendChild(style);
    }

    // Init on DOM ready
    function init() {
        injectStyles();
        injectToggle();
        applyLang(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for external use
    window.I18n = { apply: applyLang, toggle: toggle, getLang: function () { return currentLang; } };
})();
