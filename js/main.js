// 读画楼 - 东方美韵艺术画廊主程序

// 藏品数据 (bilingual)
const artworks = [
    {
        title: "宋代 白釉刻花莲纹罐",
        title_en: "Song White-Glazed Incised Lotus Jar",
        period: "宋代",
        period_en: "Song Dynasty",
        brief: "北宋白釉瓶，高浮雕牡丹纹，气象浑朴。",
        brief_en: "Northern Song white-glazed jar with high-relief carved peony scrolls.",
        image: "assets/images/song-white-jar.JPG"
    },
    {
        title: "马家窑 白胎黑彩漩涡纹双耳瓶",
        title_en: "Majiayao Swirl Pattern Two-Ear Vase",
        period: "新石器时代",
        period_en: "Neolithic",
        brief: "马家窑彩陶，漩涡纹饰，双耳造型。",
        brief_en: "Majiayao painted pottery with swirl patterns and twin lug handles.",
        image: "assets/images/neolithic-pot.JPG"
    },
    {
        title: "北魏 铜鎏金佛教供盘",
        title_en: "Northern Wei Gilt-Bronze Buddhist Offering Plate",
        period: "北魏",
        period_en: "Northern Wei",
        brief: "铜鎏金供盘，莲纹与龙门石窟相呼应。",
        brief_en: "Gilt-bronze plate with lotus motif echoing Longmen Grottoes.",
        image: "assets/images/buddist-plate.JPG"
    },
    {
        title: "唐代 褐釉镂空点彩行炉",
        title_en: "Tang Brown-Glazed Openwork Incense Burner",
        period: "唐代",
        period_en: "Tang Dynasty",
        brief: "褐釉镂空点彩行炉，气势雄浑。",
        brief_en: "Brown-glazed openwork portable incense burner, bold in character.",
        image: "assets/images/sancai-jar.JPG"
    },
    {
        title: "宋代 吉州窑玳瑁釉胆瓶",
        title_en: "Song Jizhou Kiln Tortoiseshell-Glazed Vase",
        period: "宋代",
        period_en: "Song Dynasty",
        brief: "吉州窑玳瑁釉，造型挺拔。",
        brief_en: "Jizhou kiln tortoiseshell glaze, elegant in form.",
        image: "assets/images/black-glaze-vase.JPG"
    },
    {
        title: "北魏 彩绘人马陶俑",
        title_en: "Northern Wei Painted Horse-and-Rider Figurine",
        period: "北魏",
        period_en: "Northern Wei",
        brief: "彩绘人马陶俑，皇家仪仗遗物。",
        brief_en: "Painted horse-and-rider figurine, royal ceremonial guard remnant.",
        image: "assets/images/pottery-horseman.JPG"
    },
    {
        title: "西夏 黑釉剔花鸡腿瓶",
        title_en: "Western Xia Black-Glazed Carved Chicken Leg Vase",
        period: "西夏",
        period_en: "Western Xia",
        brief: "黑釉剔花，西夏瓷器典型器形。",
        brief_en: "Black-glazed carved decoration, characteristic Western Xia form.",
        image: "assets/images/Black glazed carved chicken leg vase.JPG"
    },
    {
        title: "良渚文化 黑陶兽形觥",
        title_en: "Liangzhu Culture Black Pottery Animal Vessel",
        period: "良渚文化",
        period_en: "Liangzhu Culture",
        brief: "黑陶兽形觥，工艺精细。",
        brief_en: "Black pottery animal-shaped vessel, refined craftsmanship.",
        image: "assets/images/black pottery with animal shape.JPG"
    },
    {
        title: "唐/五代 白釉粉盒",
        title_en: "Tang/Five Dynasties White-Glazed Powder Box",
        period: "唐/五代",
        period_en: "Tang/Five Dynasties",
        brief: "白釉粉盒，文房系列。",
        brief_en: "White-glazed powder box, Scholar's Studio series.",
        image: "assets/images/brush washer.JPG"
    },
    {
        title: "唐代 黄绿釉莲花薰炉（邛窑）",
        title_en: "Tang Yellow-Green Glazed Lotus Incense Burner",
        period: "唐代",
        period_en: "Tang Dynasty",
        brief: "邛窑莲花薰炉，釉色温雅。",
        brief_en: "Qionglai kiln lotus incense burner, elegant warm glaze.",
        image: "assets/images/burnace.JPG"
    },
    {
        title: "宋/金 磁州窑凤鸟纹枕",
        title_en: "Song/Jin Cizhou Kiln Phoenix Pillow",
        period: "宋/金",
        period_en: "Song/Jin",
        brief: "磁州窑凤鸟纹枕，刻花精美。",
        brief_en: "Cizhou kiln phoenix pillow with fine incised decoration.",
        image: "assets/images/chizhouyao-jar-new.JPG"
    },
    {
        title: "宋代 磁州窑婴戏小瓷枕",
        title_en: "Song Cizhou Kiln Baby-Play Ceramic Pillow",
        period: "宋代",
        period_en: "Song Dynasty",
        brief: "婴戏小瓷枕，生动活泼。",
        brief_en: "Small ceramic pillow with lively baby-play motif.",
        image: "assets/images/cizhouyao-wrist-pillow-new.JPG"
    },
    {
        title: "唐 耀州窑青釉牛首杯",
        title_en: "Tang Yaozhou Kiln Celadon Ox-Head Cup",
        period: "唐代",
        period_en: "Tang Dynasty",
        brief: "耀州窑青釉牛首杯，器小巧。",
        brief_en: "Yaozhou kiln celadon ox-head cup, compact and fine.",
        image: "assets/images/cow head miseci.JPG"
    },
    {
        title: "唐/五代 白釉粉盒",
        title_en: "Tang/Five Dynasties White-Glazed Powder Box",
        period: "唐/五代",
        period_en: "Tang/Five Dynasties",
        brief: "白釉粉盒，釉面温润。",
        brief_en: "White-glazed powder box, warm lustrous glaze.",
        image: "assets/images/ding kiln white case.JPG"
    },
    {
        title: "西晋 德清窑四系三鸟盖罐",
        title_en: "Western Jin Deqing Kiln Three-Bird Lidded Jar",
        period: "西晋",
        period_en: "Western Jin",
        brief: "四系三鸟盖罐，古朴生动。",
        brief_en: "Four-lug jar with three sculpted birds, archaic yet vivid.",
        image: "assets/images/four-knots jar.JPG"
    },
    {
        title: "五代 铜鎏金梅花如意带钩",
        title_en: "Five Dynasties Gilt-Bronze Plum Blossom Belt Hook",
        period: "五代",
        period_en: "Five Dynasties",
        brief: "铜鎏金带钩，重要藏品。",
        brief_en: "Gilt-bronze belt hook, important collection piece.",
        image: "assets/images/Gilded bronze plum blossom belt hook.JPG"
    },
    {
        title: "辽 绿釉净水瓶",
        title_en: "Liao Green-Glazed Kundika",
        period: "辽代",
        period_en: "Liao Dynasty",
        brief: "色之雅淡，形之简静。",
        brief_en: "Elegant in color, tranquil in form.",
        image: "assets/images/green glazed bottle.JPG"
    },
    {
        title: "马家窑 彩陶器",
        title_en: "Majiayao Culture Painted Pottery",
        period: "新石器时代",
        period_en: "Neolithic",
        brief: "彩陶精品，纹饰流畅。",
        brief_en: "Fine painted pottery with flowing patterns.",
        image: "assets/images/neolithic pottery.JPG"
    },
    {
        title: "西汉 凤鸟玉盖盒",
        title_en: "Western Han Phoenix Jade Lidded Box",
        period: "西汉",
        period_en: "Western Han",
        brief: "凤鸟玉盖盒，玉质温润。",
        brief_en: "Phoenix jade lidded box, warm lustrous jade.",
        image: "assets/images/phonex head jade case.JPG"
    },
    {
        title: "西汉 青铜秦人俑",
        title_en: "Western Han Bronze Qin-Style Figurine",
        period: "西汉",
        period_en: "Western Han",
        brief: "青铜秦人俑，造型古朴。",
        brief_en: "Bronze Qin-style figurine, archaic in form.",
        image: "assets/images/Qin Dynasty Figurine.JPG"
    },
    {
        title: "银质龙驮观音像",
        title_en: "Silver Guanyin Riding a Dragon",
        period: "待考",
        period_en: "TBC",
        brief: "银质龙驮观音像，带铭文。",
        brief_en: "Silver Guanyin statue with dragon and inscription.",
        image: "assets/images/Silver statue of Guanyin riding a dragon with inscription.JPG"
    }
];

// 生成藏品卡片HTML (bilingual)
function createArtworkCard(artwork, idx) {
    var lang = (window.I18n && window.I18n.getLang) ? window.I18n.getLang() : 'zh';
    var title = lang === 'en' ? (artwork.title_en || artwork.title) : artwork.title;
    var brief = lang === 'en' ? (artwork.brief_en || artwork.brief || '') : (artwork.brief || '');
    if (brief.length > 22) brief = brief.slice(0, 22) + '...';

    return `
        <div class="artwork-card scroll-reveal" onclick="location.href='artwork/${idx+1}.html'">
            <div class="artwork-image">
                <img src="${artwork.image}" alt="${title}" class="artwork-img" loading="lazy">
            </div>
            <div class="artwork-info">
                <h3 class="artwork-title">${title}</h3>
                <p class="artwork-brief">${brief}</p>
            </div>
        </div>
    `;
}

// 渲染藏品展示
function renderArtworks() {
    const collectionGrid = document.querySelector('.collection-grid');
    if (collectionGrid) {
        const artworksHTML = artworks.map((artwork, idx) => createArtworkCard(artwork, idx)).join('');
        collectionGrid.innerHTML = artworksHTML;
        setTimeout(() => { initLazyLoading(); }, 100);
    }
}

// Re-render on language change
var _origApply = null;
function hookI18nForRerender() {
    if (window.I18n && window.I18n.apply && !_origApply) {
        _origApply = window.I18n.apply;
        window.I18n.apply = function(lang) {
            _origApply(lang);
            renderArtworks();
        };
    }
}

function initSearchAndFilter() {}
function initLazyLoading() {
    if (window.AnimationManager && window.AnimationManager.initLazyLoading) {
        window.AnimationManager.initLazyLoading();
    }
}
function optimizePerformance() {}
function handleErrors() {
    window.addEventListener('error', (e) => { console.error('Error:', e.error); });
}
function initLoadingState() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        var loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    });
}

function renderSimpleGallery() {
    const gallerySimple = document.querySelector('.gallery-simple');
    if (gallerySimple && artworks && artworks.length) {
        var lang = (window.I18n && window.I18n.getLang) ? window.I18n.getLang() : 'zh';
        gallerySimple.innerHTML = artworks.map((art, idx) => {
            var title = lang === 'en' ? (art.title_en || art.title) : art.title;
            return `
                <div class="artwork-simple-card" onclick="location.href='artwork/${idx+1}.html'">
                    <img src="${art.image}" alt="${title}">
                    <div class="artwork-simple-title">${title}</div>
                    <div class="artwork-simple-brief">${lang === 'en' ? (art.brief_en || '') : (art.brief || '')}</div>
                </div>
            `;
        }).join('');
    }
}

function init() {
    handleErrors();
    initLoadingState();
    renderArtworks();
    if (window.AnimationManager) window.AnimationManager.init();
    initLazyLoading();
    renderSimpleGallery();

    // Hook i18n after it loads
    setTimeout(hookI18nForRerender, 200);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.DuhuaLou = { init: init, artworks: artworks, renderArtworks: renderArtworks };
