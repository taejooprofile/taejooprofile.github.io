// ===== 전역 변수 =====
const bgMusic = document.getElementById('bgMusic');
const audioToggle = document.getElementById('audioToggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// ===== 갤러리 이미지 데이터 =====
const galleryData = {
    common: [
        { src: '태주 공용 에셋/affectionate_smile.jpg', title: '애정 어린 미소' },
        { src: '태주 공용 에셋/anguish_in_office.jpg', title: '사무실에서의 고뇌' },
        { src: '태주 공용 에셋/asleep_on_sofa.jpg', title: '소파에서 잠든 모습' },
        { src: '태주 공용 에셋/biting_nape.jpg', title: '목덜미를 무는 모습' },
        { src: '태주 공용 에셋/cold_gaze.jpg', title: '차가운 시선' },
        { src: '태주 공용 에셋/cold_glare.jpg', title: '차가운 노려봄' },
        { src: '태주 공용 에셋/comforting_bite_on_neck.jpg', title: '위로하는 목 깨물기' },
        { src: '태주 공용 에셋/condescending_smile.jpg', title: '경멸적인 미소' },
        { src: '태주 공용 에셋/confident_smile.jpg', title: '자신감 있는 미소' },
        { src: '태주 공용 에셋/contempt.jpg', title: '경멸' },
        { src: '태주 공용 에셋/contemptuous_gaze.jpg', title: '경멸적인 시선' },
        { src: '태주 공용 에셋/crying.jpg', title: '눈물' },
        { src: '태주 공용 에셋/drinking_alcohol.jpg', title: '음주' },
        { src: '태주 공용 에셋/drunk.jpg', title: '취한 모습' },
        { src: '태주 공용 에셋/drying_with_towel.jpg', title: '타월로 몸을 닦는 모습' },
        { src: '태주 공용 에셋/forced_kiss.jpg', title: '강제 키스' },
        { src: '태주 공용 에셋/gaze_while_driving.jpg', title: '운전 중 시선' },
        { src: '태주 공용 에셋/gentle_smile.jpg', title: '부드러운 미소' },
        { src: '태주 공용 에셋/hiding_together_nervous.jpg', title: '함께 숨어 긴장한 모습' },
        { src: '태주 공용 에셋/intense_gaze_kabedon.jpg', title: '강렬한 시선 벽돈' },
        { src: '태주 공용 에셋/jealousy.jpg', title: '질투' },
        { src: '태주 공용 에셋/kabedon.jpg', title: '벽돈' },
        { src: '태주 공용 에셋/kissing_nape_from_behind.jpg', title: '뒤에서 목덜미 키스' },
        { src: '태주 공용 에셋/licking_nape.jpg', title: '목덜미 핥기' },
        { src: '태주 공용 에셋/loosening_necktie.jpg', title: '넥타이 푸는 모습' },
        { src: '태주 공용 에셋/lying_on_sofa.jpg', title: '소파에 누운 모습' },
        { src: '태주 공용 에셋/nipple_tease_over_clothes.jpg', title: '옷 위로 애무' },
        { src: '태주 공용 에셋/NSFW_backhug_body_caress.jpg', title: 'NSFW - 백허그 애무' },
        { src: '태주 공용 에셋/NSFW_backhug_groping_chest.jpg', title: 'NSFW - 백허그 가슴 애무' },
        { src: '태주 공용 에셋/NSFW_deep_penetration_desk_sex.jpg', title: 'NSFW - 책상 위' },
        { src: '태주 공용 에셋/NSFW_desk_sex_bent_over.jpg', title: 'NSFW - 책상에 엎드린 자세' },
        { src: '태주 공용 에셋/NSFW_desk_sex_holding_waist.jpg', title: 'NSFW - 허리를 잡고' },
        { src: '태주 공용 에셋/NSFW_ecstasy_during_sex.jpg', title: 'NSFW - 황홀경' },
        { src: '태주 공용 에셋/NSFW_erotic_asphyxiation_orgasm_control.jpg', title: 'NSFW - 오르가즘 컨트롤' },
        { src: '태주 공용 에셋/NSFW_expressionless_after_sex.jpg', title: 'NSFW - 사후 무표정' },
        { src: '태주 공용 에셋/NSFW_forced_deepthroat.jpg', title: 'NSFW - 강제 딥스로트' },
        { src: '태주 공용 에셋/NSFW_forced_finger_in_mouth.jpg', title: 'NSFW - 입에 손가락' },
        { src: '태주 공용 에셋/NSFW_from_behind_deep_penetration.jpg', title: 'NSFW - 뒤에서' },
        { src: '태주 공용 에셋/NSFW_halfway_penetration.jpg', title: 'NSFW - 반만 삽입' },
        { src: '태주 공용 에셋/NSFW_kissing_and_groping.jpg', title: 'NSFW - 키스와 애무' },
        { src: '태주 공용 에셋/NSFW_nipple_twist.jpg', title: 'NSFW - 유두 비틀기' },
        { src: '태주 공용 에셋/NSFW_nude_leaning_over_bedroom.jpg', title: 'NSFW - 침실에서' },
        { src: '태주 공용 에셋/NSFW_oral_sex_start.jpg', title: 'NSFW - 오럴 시작' },
        { src: '태주 공용 에셋/NSFW_pinning_from_behind_sex.jpg', title: 'NSFW - 뒤에서 제압' },
        { src: '태주 공용 에셋/NSFW_rough_desk_sex.jpg', title: 'NSFW - 거친 책상 섹스' },
        { src: '태주 공용 에셋/NSFW_slow_penetration_bedroom.jpg', title: 'NSFW - 천천히 삽입' },
        { src: '태주 공용 에셋/NSFW_sucking_collarbone_caressing_chest.jpg', title: 'NSFW - 쇄골 애무' },
        { src: '태주 공용 에셋/NSFW_tip_only_penetration_bedroom.jpg', title: 'NSFW - 끝만 삽입' },
        { src: '태주 공용 에셋/NSFW_window_sex.jpg', title: 'NSFW - 창가에서' },
        { src: '태주 공용 에셋/pushing_against_wall.jpg', title: '벽으로 밀어붙임' },
        { src: '태주 공용 에셋/rage.jpg', title: '분노' },
        { src: '태주 공용 에셋/shirtless_leaning_in.jpg', title: '상의 탈의 후 기댄 모습' },
        { src: '태주 공용 에셋/shirtless_looking_down.jpg', title: '상의 탈의 후 내려다보는 모습' },
        { src: '태주 공용 에셋/showering.jpg', title: '샤워하는 모습' },
        { src: '태주 공용 에셋/sneer.jpg', title: '비웃음' },
        { src: '태주 공용 에셋/undressing.jpg', title: '옷을 벗는 모습' }
    ],
    bl: [
        { src: '태주 BL NSFW/NSFW_BL_behind_curtain_sex_abs.jpg', title: 'BL - 커튼 뒤에서' },
        { src: '태주 BL NSFW/NSFW_BL_creampie_from_behind_messy.jpg', title: 'BL - 뒤에서 크림파이' },
        { src: '태주 BL NSFW/NSFW_BL_desk_sex_submission_from_behind.jpg', title: 'BL - 책상 위 복종' },
        { src: '태주 BL NSFW/NSFW_BL_lap_anal_fingering_backhug.jpg', title: 'BL - 무릎 위 핑거링' },
        { src: '태주 BL NSFW/NSFW_BL_lap_caressing_back_torn_shirt.jpg', title: 'BL - 찢어진 셔츠' },
        { src: '태주 BL NSFW/NSFW_BL_lap_embrace_gentle.jpg', title: 'BL - 부드러운 포옹' },
        { src: '태주 BL NSFW/NSFW_BL_rough_sex_face_against_wall.jpg', title: 'BL - 벽에 얼굴을 대고' },
        { src: '태주 BL NSFW/NSFW_BL_spanking_handprint_shirtless_smirk.jpg', title: 'BL - 스팽킹 자국' },
        { src: '태주 BL NSFW/NSFW_BL_standing_sex_against_wall.jpg', title: 'BL - 벽에 기대어' },
        { src: '태주 BL NSFW/NSFW_BL_wall_sex_kissing_from_behind.jpg', title: 'BL - 벽에서 뒤에서 키스' },
        { src: '태주 BL NSFW/NSFW_BL_wet_body_fingering_smirk.jpg', title: 'BL - 젖은 몸' },
        { src: '태주 BL NSFW/year 2024, year 2025, 5.0__side view, cowboy shot, office interior __, cinematic s-293708866.jpg', title: 'BL - 사무실 인테리어' }
    ],
    hetero: [
        { src: '태주 헤테로 NSFW/aggressive_devouring_kiss_close_up.jpg', title: '헤테로 - 공격적인 키스' },
        { src: '태주 헤테로 NSFW/backhug_torn_shirt_conflicted.jpg', title: '헤테로 - 찢어진 셔츠 백허그' },
        { src: '태주 헤테로 NSFW/licking_tears_aggressive_intense.jpg', title: '헤테로 - 눈물 핥기' },
        { src: '태주 헤테로 NSFW/NSFW_desk_sex_on_papers_rough.jpg', title: '헤테로 - 서류 위에서' },
        { src: '태주 헤테로 NSFW/NSFW_hallway_sex_from_behind.jpg', title: '헤테로 - 복도에서' },
        { src: '태주 헤테로 NSFW/NSFW_lap_fingering_conqueror_smirk_low_angle.jpg', title: '헤테로 - 정복자의 미소' },
        { src: '태주 헤테로 NSFW/NSFW_lap_fingering_dominant_gaze.jpg', title: '헤테로 - 지배적인 시선' },
        { src: '태주 헤테로 NSFW/NSFW_lap_fingering_pleased_smirk.jpg', title: '헤테로 - 만족스러운 미소' },
        { src: '태주 헤테로 NSFW/NSFW_morning_sex_against_wall_sunlight.jpg', title: '헤테로 - 아침 햇살' },
        { src: '태주 헤테로 NSFW/NSFW_nude_window_sex_back_view_cityscape.jpg', title: '헤테로 - 도시 야경' },
        { src: '태주 헤테로 NSFW/NSFW_office_glass_wall_sex_cityscape.jpg', title: '헤테로 - 유리벽 사무실' },
        { src: '태주 헤테로 NSFW/NSFW_office_window_sex_daytime.jpg', title: '헤테로 - 낮의 사무실' },
        { src: '태주 헤테로 NSFW/NSFW_patterned_window_sex_from_behind.jpg', title: '헤테로 - 패턴 유리창' },
        { src: '태주 헤테로 NSFW/NSFW_shirtless_passionate_sex_night_view.jpg', title: '헤테로 - 야경과 함께' },
        { src: '태주 헤테로 NSFW/NSFW_spanking_desk_sex_handprint.jpg', title: '헤테로 - 스팽킹 자국' }
    ]
};

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    initializeAudio();
    initializeNavigation();
    initializeGallery();
    initializeLightbox();
    initializeScrollEffects();
});

// ===== 오디오 컨트롤 =====
function initializeAudio() {
    audioToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            audioToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            audioToggle.classList.remove('playing');
        }
    });
}

// ===== 네비게이션 =====
function initializeNavigation() {
    // 모바일 메뉴 토글
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 시 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 부드러운 스크롤
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 갤러리 =====
function initializeGallery() {
    // 갤러리 이미지 로드
    loadGalleryImages('common');
    loadGalleryImages('bl');
    loadGalleryImages('hetero');

    // 갤러리 탭 전환
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // 탭 활성화 상태 변경
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 갤러리 그리드 표시/숨김
            document.querySelectorAll('.gallery-grid').forEach(grid => {
                grid.classList.remove('active');
            });
            document.getElementById(`${category}-gallery`).classList.add('active');
        });
    });
}

function loadGalleryImages(category) {
    const galleryGrid = document.getElementById(`${category}-gallery`);
    const images = galleryData[category];
    
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-title">${image.title}</div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(image.src, image.title);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// ===== 라이트박스 =====
function initializeLightbox() {
    // 라이트박스 닫기 버튼
    lightboxClose.addEventListener('click', closeLightbox);
    
    // 라이트박스 배경 클릭 시 닫기
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // ESC 키로 라이트박스 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // 행동 특성 이미지들에도 라이트박스 적용
    document.querySelectorAll('.behavior-image, .timeline-image, .monologue-image, .understanding-image').forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img.src, img.alt);
        });
    });
}

function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== 스크롤 효과 =====
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const nav = document.querySelector('.main-nav');
    
    // 스크롤 시 네비게이션 숨김/표시
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 아래로 스크롤 - 네비게이션 숨김
            nav.style.transform = 'translateY(-100%)';
        } else {
            // 위로 스크롤 - 네비게이션 표시
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // 현재 섹션에 따른 네비게이션 활성화
        updateActiveNavLink();
    });
    
    // Intersection Observer를 사용한 페이드 인 효과
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 관찰할 요소들
    const elementsToObserve = document.querySelectorAll('.trait-card, .timeline-item, .stage-item, .behavior-item, .understanding-item, .narrative-item');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 현재 보이는 섹션에 따라 네비게이션 링크 활성화
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== 성능 최적화를 위한 디바운스 함수 =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트에 디바운스 적용
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 100)); 