        // 부드러운 스크롤
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 현재 섹션 하이라이트
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.sidebar a').forEach(link => {
                        link.style.fontWeight = '400';
                        link.style.color = '#666';
                        link.style.borderLeftColor = 'transparent';
                    });
                    const activeLink = document.querySelector(`.sidebar a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.style.fontWeight = '600';
                        activeLink.style.color = '#000';
                        activeLink.style.borderLeftColor = '#000';
                    }
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });
