// 图片模态框功能 — with touch/swipe support
(function(){
    var touchStartY = 0;
    var touchStartX = 0;
    var isDragging = false;

    window.openImageModal = function(src, alt) {
        var modal = document.getElementById('imageModal');
        var modalImg = document.getElementById('modalImage');
        if (modal && modalImg) {
            modal.classList.remove('closing');
            modal.style.display = 'block';
            modalImg.src = src;
            modalImg.alt = alt || '';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeImageModal = function() {
        var modal = document.getElementById('imageModal');
        if (modal && modal.style.display !== 'none') {
            modal.classList.add('closing');
            setTimeout(function(){
                modal.style.display = 'none';
                modal.classList.remove('closing');
                document.body.style.overflow = 'auto';
                var img = document.getElementById('modalImage');
                if (img) img.style.transform = '';
            }, 250);
        }
    };

    // Click background to close
    document.addEventListener('click', function(e) {
        var modal = document.getElementById('imageModal');
        if (e.target === modal) closeImageModal();
    });

    // ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeImageModal();
    });

    // Touch: swipe down/up to close
    document.addEventListener('touchstart', function(e) {
        var modal = document.getElementById('imageModal');
        if (!modal || modal.style.display === 'none') return;
        if (e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
            isDragging = true;
        }
    }, { passive: true });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        var modal = document.getElementById('imageModal');
        if (!modal || modal.style.display === 'none') return;
        var dy = e.touches[0].clientY - touchStartY;
        var img = document.getElementById('modalImage');
        if (img && Math.abs(dy) > 10) {
            var opacity = Math.max(0, 1 - Math.abs(dy) / 300);
            img.style.transform = 'translate(-50%, calc(-50% + ' + dy + 'px))';
            modal.style.backgroundColor = 'rgba(0,0,0,' + (0.92 * opacity) + ')';
        }
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        var modal = document.getElementById('imageModal');
        if (!modal || modal.style.display === 'none') return;
        var dy = e.changedTouches[0].clientY - touchStartY;
        var img = document.getElementById('modalImage');
        if (Math.abs(dy) > 100) {
            closeImageModal();
        } else if (img) {
            img.style.transform = '';
            modal.style.backgroundColor = '';
        }
    }, { passive: true });
})();
