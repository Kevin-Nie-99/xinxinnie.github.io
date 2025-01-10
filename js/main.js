document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 研究成果过滤
    const filterBtns = document.querySelectorAll('.filter-btn');
    const researchItems = document.querySelectorAll('.research-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active类
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            researchItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为时间线项目添加动画
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.setProperty('--item-index', index);
        observer.observe(item);
    });

    // 为研究成果卡片添加动画
    document.querySelectorAll('.research-item').forEach(item => {
        observer.observe(item);
    });
}); 