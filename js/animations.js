// 动画和交互效果管理

// 滚动显现效果
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
}

// 平滑滚动导航
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70; // 减去导航栏高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 导航链接点击事件
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
            }
            // 其他情况（如 index.html#about）不阻止默认跳转
        });
    });
}

// CTA按钮点击事件
function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            smoothScrollTo('#collection');
        });
    }
}

// 表单提交处理
function initFormSubmission() {
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const message = form.querySelector('textarea').value;
            
            // 简单的表单验证
            if (!name || !email || !phone) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 模拟表单提交
            alert('预约提交成功！我们会尽快与您联系。');
            form.reset();
        });
    }
}

// 浮动动画效果
function initFloatAnimation() {
    const floatElements = document.querySelectorAll('.feature-icon');
    
    floatElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.style.animation = 'float 3s ease-in-out infinite';
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 添加背景透明度
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(245, 242, 232, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(44, 36, 22, 0.1)';
        } else {
            navbar.style.background = 'rgba(245, 242, 232, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 藏品卡片悬停效果增强
function initArtworkCards() {
    const artworkCards = document.querySelectorAll('.artwork-card');
    
    artworkCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 8px 32px rgba(44, 36, 22, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 2px 8px rgba(44, 36, 22, 0.1)';
        });
    });
}

// 特色功能卡片悬停效果
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 4px 16px rgba(44, 36, 22, 0.15)';
            card.style.borderColor = 'var(--song-jade)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 8px rgba(44, 36, 22, 0.1)';
            card.style.borderColor = 'var(--song-mist)';
        });
    });
}

// 按钮悬停效果
function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .submit-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 8px 32px rgba(44, 36, 22, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 16px rgba(44, 36, 22, 0.15)';
        });
    });
}

// 页面加载动画
function initPageLoadAnimation() {
    // 页面加载完成后触发初始动画
    window.addEventListener('load', () => {
        // 延迟显示滚动显现元素
        setTimeout(() => {
            revealOnScroll();
        }, 500);
        
        // 初始化浮动动画
        initFloatAnimation();
    });
}

// 性能优化的滚动事件处理
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 初始化所有动画和交互
function initAnimations() {
    // 绑定滚动事件（使用节流优化性能）
    window.addEventListener('scroll', throttle(revealOnScroll, 100));
    
    // 初始化各种交互效果
    initNavigation();
    initCTAButton();
    initFormSubmission();
    initNavbarScroll();
    initArtworkCards();
    initFeatureCards();
    initButtonEffects();
    initPageLoadAnimation();
    
    // 初始触发一次滚动检查
    revealOnScroll();
}

// 图片懒加载功能
function initLazyLoading() {
    const images = document.querySelectorAll('.artwork-img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 降级处理：直接加载所有图片
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// 导出函数供主文件使用
window.AnimationManager = {
    init: initAnimations,
    revealOnScroll: revealOnScroll,
    smoothScrollTo: smoothScrollTo,
    initLazyLoading: initLazyLoading
}; 