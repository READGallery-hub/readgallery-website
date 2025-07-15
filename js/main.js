// 读画楼 - 东方美韵艺术画廊主程序

// 藏品数据
const artworks = [
    {
        title: "《宋代白釉罐》",
        period: "宋代",
        material: "白釉刻花",
        size: "高28cm 口径12cm",
        description: "此罐为宋代白釉刻花瓷器，釉色温润，胎体坚致，罐身刻划花卉纹饰，线条流畅自然，体现了宋代瓷器工艺的高超水平，是宋瓷中的经典代表。",
        brief: "宋代白釉刻花瓷器，温润典雅，花卉纹饰流畅自然。",
        icon: "🏺",
        image: "assets/images/song-white-jar.JPG"
    },
    {
        title: "《新石器时代彩陶罐》",
        period: "新石器时代",
        material: "彩陶",
        size: "高32cm 口径18cm",
        description: "此罐为新石器时代彩陶器，器型饱满，肩部绘有旋涡纹与带状纹饰，色彩对比鲜明，展现了史前先民的艺术创造力。",
        brief: "史前彩陶，旋涡纹饰，造型饱满。",
        icon: "🏺",
        image: "assets/images/neolithic-pot.JPG"
    },
    {
        title: "《剔犀莲花纹大盘》",
        period: "元代",
        material: "剔犀漆器",
        size: "直径40cm",
        description: "此盘为元代剔犀工艺代表作，盘面雕刻莲花与缠枝纹饰，层次分明，工艺精湛，是元代漆器艺术的典范。",
        brief: "元代剔犀工艺，莲花缠枝，雕刻精美。",
        icon: "🍂",
        image: "assets/images/buddist-plate.JPG"
    },
    {
        title: "《唐三彩兽足罐》",
        period: "唐代",
        material: "三彩陶",
        size: "高28cm 口径20cm",
        description: "此罐为唐代三彩陶器，釉色斑斓，造型敦厚，兽足支撑，整体气势雄浑，是唐三彩的经典器型。",
        brief: "唐代三彩，釉色斑斓，兽足造型。",
        icon: "🐾",
        image: "assets/images/sancai-jar.JPG"
    },
    {
        title: "《黑釉玳瑁斑瓶》",
        period: "宋代",
        material: "黑釉瓷",
        size: "高22cm 口径7cm",
        description: "此瓶为宋代黑釉瓷器，瓶身施黑釉，釉面有玳瑁斑点，造型挺拔，釉色光亮，是宋瓷中的独特品种。",
        brief: "宋代黑釉，玳瑁斑点，造型挺拔。",
        icon: "🦚",
        image: "assets/images/black-glaze-vase.JPG"
    },
    {
        title: "《唐三彩骑马俑》",
        period: "唐代",
        material: "三彩陶",
        size: "高35cm 长30cm",
        description: "此俑为唐代三彩骑马俑，人物神态生动，马匹健硕，釉色丰富，是唐代墓葬艺术的代表作。",
        brief: "唐代三彩骑马俑，神态生动，釉色丰富。",
        icon: "🐎",
        image: "assets/images/pottery-horseman.JPG"
    },
    {
        title: "Black glazed carved chicken leg vase.JPG",
        image: "assets/images/Black glazed carved chicken leg vase.JPG"
    },
    {
        title: "black pottery with animal shape.JPG",
        image: "assets/images/black pottery with animal shape.JPG"
    },
    {
        title: "brush washer.JPG",
        image: "assets/images/brush washer.JPG"
    },
    {
        title: "burnace.JPG",
        image: "assets/images/burnace.JPG"
    },
    {
        title: "chizhouyao jar.JPG",
        image: "assets/images/chizhouyao jar.JPG"
    },
    {
        title: "cizhouyao-wrist-pillow.JPG",
        image: "assets/images/cizhouyao-wrist-pillow.JPG"
    },
    {
        title: "cow head miseci.JPG",
        image: "assets/images/cow head miseci.JPG"
    },
    {
        title: "ding kiln white case.JPG",
        image: "assets/images/ding kiln white case.JPG"
    },
    {
        title: "four-knots jar.JPG",
        image: "assets/images/four-knots jar.JPG"
    },
    {
        title: "Gilded bronze plum blossom belt hook.JPG",
        image: "assets/images/Gilded bronze plum blossom belt hook.JPG"
    },
    {
        title: "green glazed bottle.JPG",
        image: "assets/images/green glazed bottle.JPG"
    },
    {
        title: "neolithic pottery.JPG",
        image: "assets/images/neolithic pottery.JPG"
    },
    {
        title: "phonex head jade case.JPG",
        image: "assets/images/phonex head jade case.JPG"
    },
    {
        title: "Qin Dynasty Figurine.JPG",
        image: "assets/images/Qin Dynasty Figurine.JPG"
    },
    {
        title: "Silver statue of Guanyin riding a dragon with inscription.JPG",
        image: "assets/images/Silver statue of Guanyin riding a dragon with inscription.JPG"
    }
];

// 生成藏品卡片HTML
function createArtworkCard(artwork, idx) {
    // 标题去掉《》
    let title = artwork.title.replace(/[《》]/g, '');
    // 简短描述，限制18字
    let desc = artwork.brief ? artwork.brief : (artwork.description ? artwork.description : '');
    if (desc.length > 18) {
        desc = desc.slice(0, 18) + '...';
    }
    // 如果brief和标题重复，则只显示brief
    let showTitle = true;
    if (desc && (desc.includes(title) || title.includes(desc))) {
        showTitle = false;
    }
    return `
        <div class="artwork-card scroll-reveal" onclick="location.href='artwork/${idx+1}.html'">
            <div class="artwork-image">
                <img src="${artwork.image}" alt="${title}" class="artwork-img" loading="lazy">
            </div>
            <div class="artwork-info">
                ${showTitle ? `<h3 class="artwork-title">${title}</h3>` : ''}
                <p class="artwork-brief">${desc}</p>
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
        
        // 渲染完成后初始化懒加载
        setTimeout(() => {
            initLazyLoading();
        }, 100);
    }
}

// 搜索和筛选功能
function initSearchAndFilter() {
    // 这里可以添加搜索和筛选功能
    // 例如：按朝代筛选、按材质筛选等
    console.log('搜索和筛选功能已初始化');
}

// 图片懒加载功能
function initLazyLoading() {
    // 调用动画文件中的懒加载功能
    if (window.AnimationManager && window.AnimationManager.initLazyLoading) {
        window.AnimationManager.initLazyLoading();
    }
}

// 页面性能优化
function optimizePerformance() {
    // 预加载关键资源
    const preloadLinks = [
        { rel: 'preload', href: 'css/variables.css', as: 'style' },
        { rel: 'preload', href: 'css/components.css', as: 'style' }
    ];
    
    preloadLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
    });
}

// 错误处理
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('页面错误:', e.error);
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('未处理的Promise拒绝:', e.reason);
    });
}

// 页面加载状态管理
function initLoadingState() {
    // 页面加载完成后的处理
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // 隐藏加载动画（如果有的话）
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    });
}

// 主题切换功能（预留）
function initThemeToggle() {
    // 这里可以添加明暗主题切换功能
    console.log('主题切换功能已初始化');
}

// 多语言支持（预留）
function initLanguageSupport() {
    // 这里可以添加多语言支持功能
    console.log('多语言支持功能已初始化');
}

// 访问统计（预留）
function initAnalytics() {
    // 这里可以添加访问统计功能
    console.log('访问统计功能已初始化');
}

// 渲染极简风格主展区
function renderSimpleGallery() {
    const gallerySimple = document.querySelector('.gallery-simple');
    if (gallerySimple && artworks && artworks.length) {
        gallerySimple.innerHTML = artworks.map((art, idx) => {
            let title = art.title.replace(/[《》]/g, '');
            title = title.replace(/\.(jpg|jpeg|png)$/i, '');
            return `
                <div class="artwork-simple-card" onclick="location.href='artwork/${idx+1}.html'">
                    <img src="${art.image}" alt="${title}">
                    <div class="artwork-simple-title">${title}</div>
                    <div class="artwork-simple-brief">${art.brief || ''}</div>
                </div>
            `;
        }).join('');
    }
}

// 主要初始化函数
function init() {
    console.log('读画楼 - 东方美韵艺术画廊正在初始化...');
    
    // 性能优化
    optimizePerformance();
    
    // 错误处理
    handleErrors();
    
    // 加载状态管理
    initLoadingState();
    
    // 渲染藏品
    renderArtworks();
    
    // 初始化动画和交互
    if (window.AnimationManager) {
        window.AnimationManager.init();
    }
    
    // 初始化其他功能
    initSearchAndFilter();
    initLazyLoading();
    initThemeToggle();
    initLanguageSupport();
    initAnalytics();
    
    renderSimpleGallery();
    
    console.log('读画楼 - 东方美韵艺术画廊初始化完成！');
}

// DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// 导出主要功能供外部使用
window.DuhuaLou = {
    init: init,
    artworks: artworks,
    renderArtworks: renderArtworks
}; 