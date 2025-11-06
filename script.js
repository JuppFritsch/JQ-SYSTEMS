// Global Variables
let currentSection = 'intro';
let currentBuildIndex = 0;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    console.log('JQ-SYSTEMS Website wird geladen...');
    
    try {
        initializeNavigation();
        initializeAnimations();
        initializeBuildCarousel();
        initializeFormInteractions();
        initializeCounters();
        initializeMobileMenu();
        initializeScrollAnimations();
        
        // Initialize Simple Performance Calculator
        initSimplePerformanceCalculator();
        
        // Initialize Build Configurator
        window.buildConfigurator = new BuildConfigurator();
        
        // Initialize Service Manager
        window.serviceManager = new ServiceManager();
        
        // Initialize Contact Modal Manager
        window.contactModalManager = new ContactModalManager();
        
        // Initialize CTA Button
        initializeCTAButton();
        
        // Initialize Animation Observer
        initializeAnimationObserver();
        
        // Initialize Typing Effect
        initializeTypingEffect();
        
        // Set first nav item as active on load
        const firstNavItem = document.querySelector('.nav-item[data-section="intro"]');
        if (firstNavItem) {
            firstNavItem.classList.add('active');
        }
        
        console.log('✅ Alle Komponenten erfolgreich geladen');
        
        // Show success notification after everything is loaded
        setTimeout(() => {
            showFuturisticNotification('JQ-SYSTEMS System online! Bereit für Gaming-Builds.', 'success');
        }, 1000);
        
    } catch (error) {
        console.error('❌ Fehler beim Laden der Komponenten:', error);
        showFuturisticNotification('Fehler beim Laden. Bitte Seite neu laden.', 'error');
    }
});

// Navigation System mit Smooth Scrolling
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = item.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                // Update navigation active state
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Smooth scroll to section mit Offset für Navigation
                const offsetTop = targetElement.offsetTop - 50;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                currentSection = targetSection;
            }
        });
    });
    
    // Update active navigation based on scroll position
    window.addEventListener('scroll', updateActiveNavigation);
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentActiveSection = null;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Check if section is in viewport
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            currentActiveSection = section.id;
        }
    });
    
    // Update navigation
    if (currentActiveSection) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === currentActiveSection) {
                item.classList.add('active');
            }
        });
        currentSection = currentActiveSection;
    }
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sideNav = document.querySelector('.side-nav');
    
    if (mobileToggle && sideNav) {
        mobileToggle.addEventListener('click', () => {
            sideNav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!sideNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                sideNav.classList.remove('active');
            }
        });
    }
}

// Build Carousel
function initializeBuildCarousel() {
    const buildCards = document.querySelectorAll('.build-card');
    const prevBtn = document.querySelector('.control-btn.prev');
    const nextBtn = document.querySelector('.control-btn.next');
    
    if (buildCards.length > 0) {
        // Set first card as active
        buildCards[0].classList.add('active');
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentBuildIndex = (currentBuildIndex - 1 + buildCards.length) % buildCards.length;
                updateBuildDisplay();
            });
            
            nextBtn.addEventListener('click', () => {
                currentBuildIndex = (currentBuildIndex + 1) % buildCards.length;
                updateBuildDisplay();
            });
        }
    }
}

function updateBuildDisplay() {
    const buildCards = document.querySelectorAll('.build-card');
    buildCards.forEach((card, index) => {
        card.classList.toggle('active', index === currentBuildIndex);
    });
}

// Counter Animations
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Trigger counters when intro section is active
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    if (!counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter);
                    }
                });
            }
        });
    });
    
    const introSection = document.getElementById('intro');
    if (introSection) {
        observer.observe(introSection);
    }
}

// Form Interactions
function initializeFormInteractions() {
    // Budget slider
    const budgetSlider = document.querySelector('.slider');
    const budgetValue = document.querySelector('.budget-value');
    
    if (budgetSlider && budgetValue) {
        budgetSlider.addEventListener('input', (e) => {
            budgetValue.textContent = `€${parseInt(e.target.value).toLocaleString()}`;
        });
    }
    
    // Form submission
    const projectForm = document.querySelector('.futuristic-form');
    if (projectForm) {
        projectForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Terminal typing effect
    setTimeout(() => {
        startTypingEffect();
    }, 1000);
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    // Create success notification
    showFuturisticNotification('Projekt erfolgreich gestartet! Wir melden uns in Kürze bei dir.', 'success');
    
    // Reset form
    e.target.reset();
    
    // Reset budget slider display
    const budgetValue = document.querySelector('.budget-value');
    if (budgetValue) {
        budgetValue.textContent = '€2.500';
    }
}

// Typing Effect for Terminal
function startTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const text = 'Lass uns deinen Gaming-Traum verwirklichen';
    let i = 0;
    
    typingText.textContent = '';
    
    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    typeWriter();
}

// Scroll-based Animations mit Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                switch (sectionId) {
                    case 'builds':
                        animatePerformanceBars();
                        break;
                    case 'process':
                        animateTimeline();
                        break;
                    case 'founders':
                        animateSkillBars();
                        break;
                    case 'connect':
                        resetTypingEffect();
                        break;
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

function animatePerformanceBars() {
    const perfBars = document.querySelectorAll('.performance-bars .fill');
    perfBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.width || '0%';
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        }, index * 200);
    });
}

function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar .fill');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 100);
        }, index * 300);
    });
}

function resetTypingEffect() {
    setTimeout(() => {
        startTypingEffect();
    }, 500);
}

// Animation Systems (Clean Version)
function initializeAnimations() {
    // Subtle fade-in animations only
    const elements = document.querySelectorAll('.intro-text, .intro-visual');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Notification System
function showFuturisticNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'futuristic-notification';
    
    const colors = {
        success: 'var(--primary-neon)',
        error: 'var(--secondary-neon)',
        info: 'var(--accent-purple)'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                ${type === 'success' ? '<i class="fas fa-check"></i>' : 
                  type === 'error' ? '<i class="fas fa-exclamation"></i>' : 
                  '<i class="fas fa-info"></i>'}
            </div>
            <div class="notification-message">${message}</div>
            <div class="notification-close">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="notification-progress"></div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(26, 26, 46, 0.95);
        border: 1px solid ${colors[type]};
        border-radius: 10px;
        padding: 20px;
        max-width: 400px;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        backdrop-filter: blur(20px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    // Style the content
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 15px;
        color: var(--text-primary);
    `;
    
    const icon = notification.querySelector('.notification-icon');
    icon.style.cssText = `
        color: ${colors[type]};
        font-size: 1.2rem;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        color: var(--text-secondary);
        cursor: pointer;
        font-size: 0.9rem;
        margin-left: auto;
    `;
    
    const progress = notification.querySelector('.notification-progress');
    progress.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: ${colors[type]};
        width: 100%;
        transform-origin: left;
        animation: notificationProgress 5s linear forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto remove
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 500);
}

// Schnellkontakt Widget - Komplett Neu
function openContactModal() {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.style.display = 'flex';
    }
}

// Quick Contact Widget Interaktionen
document.addEventListener('DOMContentLoaded', function() {
    const quickContactTrigger = document.querySelector('.quick-contact-trigger');
    const quickContactWidget = document.querySelector('.quick-contact-widget');
    
    if (quickContactTrigger && quickContactWidget) {
        // Click auf Trigger öffnet auch das Kontakt-Modal
        quickContactTrigger.addEventListener('click', () => {
            openContactModal();
        });
        
        // Menu schließen wenn man außerhalb klickt
        document.addEventListener('click', (e) => {
            if (!quickContactWidget.contains(e.target)) {
                quickContactWidget.classList.remove('active');
            }
        });
    }
});

// 3D PC Visualizer Class
class PCVisualizer {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.pcGroup = null;
        this.components = {};
        this.currentRGBColor = 0x00ffaa;
        this.init();
    }

    init() {
        const container = document.getElementById('pcVisualizerContainer');
        if (!container) {
            console.error('❌ PC Visualizer Container nicht gefunden!');
            return;
        }

        // Check if Three.js is available
        if (typeof THREE === 'undefined') {
            console.error('❌ Three.js nicht geladen! Fallback zu 2D Visualizer...');
            this.initFallbackVisualizer(container);
            return;
        }

        try {
            // Scene Setup
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            this.renderer.setClearColor(0x000000, 0);
            
            // Remove loading and add renderer
            container.innerHTML = '';
            container.appendChild(this.renderer.domElement);
        } catch (error) {
            console.error('❌ 3D Visualizer Init Fehler:', error);
            this.initFallbackVisualizer(container);
            return;
        }

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0x00ffaa, 1, 100);
        pointLight.position.set(10, 10, 10);
        this.scene.add(pointLight);

        // Create PC Group
        this.pcGroup = new THREE.Group();
        this.scene.add(this.pcGroup);

        // Build PC Components
        this.buildPC();

        // Camera Position
        this.camera.position.set(5, 3, 5);
        this.camera.lookAt(0, 0, 0);

        // Animation Loop
        this.animate();

        // Controls
        this.initControls();
    }

    buildPC() {
        // Case (Main Body)
        const caseGeometry = new THREE.BoxGeometry(2, 3, 1.5);
        const caseMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x1a1a1a,
            transparent: true,
            opacity: 0.8
        });
        this.components.case = new THREE.Mesh(caseGeometry, caseMaterial);
        this.pcGroup.add(this.components.case);

        // Motherboard
        const mbGeometry = new THREE.BoxGeometry(1.8, 0.1, 1.3);
        const mbMaterial = new THREE.MeshPhongMaterial({ color: 0x2d5016 });
        this.components.motherboard = new THREE.Mesh(mbGeometry, mbMaterial);
        this.components.motherboard.position.set(0, -1, 0);
        this.pcGroup.add(this.components.motherboard);

        // CPU
        const cpuGeometry = new THREE.BoxGeometry(0.4, 0.15, 0.4);
        const cpuMaterial = new THREE.MeshPhongMaterial({ color: 0x404040 });
        this.components.cpu = new THREE.Mesh(cpuGeometry, cpuMaterial);
        this.components.cpu.position.set(0, -0.9, 0);
        this.pcGroup.add(this.components.cpu);

        // GPU
        const gpuGeometry = new THREE.BoxGeometry(1.2, 0.3, 0.6);
        const gpuMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
        this.components.gpu = new THREE.Mesh(gpuGeometry, gpuMaterial);
        this.components.gpu.position.set(0, -0.5, 0.3);
        this.pcGroup.add(this.components.gpu);

        // RAM Sticks
        for (let i = 0; i < 4; i++) {
            const ramGeometry = new THREE.BoxGeometry(0.15, 0.8, 0.05);
            const ramMaterial = new THREE.MeshPhongMaterial({ color: this.currentRGBColor });
            const ram = new THREE.Mesh(ramGeometry, ramMaterial);
            ram.position.set(-0.6 + i * 0.2, -0.5, -0.4);
            this.components[`ram${i}`] = ram;
            this.pcGroup.add(ram);
        }

        // RGB Strips
        this.addRGBLighting();
    }

    addRGBLighting() {
        const stripGeometry = new THREE.BoxGeometry(1.8, 0.05, 0.05);
        const rgbMaterial = new THREE.MeshPhongMaterial({ 
            color: this.currentRGBColor,
            emissive: this.currentRGBColor,
            emissiveIntensity: 0.3
        });
        
        // Top strip
        const topStrip = new THREE.Mesh(stripGeometry, rgbMaterial);
        topStrip.position.set(0, 1.3, 0.6);
        this.components.rgbTop = topStrip;
        this.pcGroup.add(topStrip);

        // Bottom strip  
        const bottomStrip = new THREE.Mesh(stripGeometry, rgbMaterial);
        bottomStrip.position.set(0, -1.3, 0.6);
        this.components.rgbBottom = bottomStrip;
        this.pcGroup.add(bottomStrip);
    }

    updateRGBColor(color) {
        this.currentRGBColor = color;
        
        // Update all RGB components
        Object.keys(this.components).forEach(key => {
            if (key.includes('ram') || key.includes('rgb')) {
                this.components[key].material.color.setHex(color);
                if (this.components[key].material.emissive) {
                    this.components[key].material.emissive.setHex(color);
                }
            }
        });

        // Update preview indicator
        const rgbPreview = document.getElementById('rgbPreview');
        if (rgbPreview) {
            rgbPreview.style.background = `#${color.toString(16).padStart(6, '0')}`;
        }
    }

    updateComponent(type, specs) {
        // Update 3D model or fallback 2D display
        if (this.components && this.components.gpu) {
            // 3D Model update
            switch(type) {
                case 'gpu':
                    if (specs.includes('RTX 4090')) {
                        this.components.gpu.scale.set(1.5, 1.2, 1);
                        this.components.gpu.material.color.setHex(0x00ff00);
                    } else if (specs.includes('RTX 4070')) {
                        this.components.gpu.scale.set(1.2, 1, 1);
                        this.components.gpu.material.color.setHex(0x0080ff);
                    } else {
                        this.components.gpu.scale.set(1, 1, 1);
                        this.components.gpu.material.color.setHex(0x666666);
                    }
                    break;
                case 'cpu':
                    if (specs.includes('i9')) {
                        this.components.cpu.material.color.setHex(0x0080ff);
                    } else if (specs.includes('AMD')) {
                        this.components.cpu.material.color.setHex(0xff4444);
                    } else {
                        this.components.cpu.material.color.setHex(0x404040);
                    }
                    break;
            }
        } else {
            // 2D Fallback update
            this.update2DComponent(type, specs);
        }
    }

    update2DComponent(type, specs) {
        if (type === 'gpu') {
            const gpuElement = document.getElementById('gpuName2D');
            if (gpuElement) {
                gpuElement.textContent = specs;
                // Add color based on GPU power
                const gpuDiv = document.getElementById('gpu2D');
                if (gpuDiv) {
                    if (specs.includes('4090')) {
                        gpuDiv.style.borderColor = '#00ff00';
                    } else if (specs.includes('4070')) {
                        gpuDiv.style.borderColor = '#0080ff';
                    } else {
                        gpuDiv.style.borderColor = '#00ffaa';
                    }
                }
            }
        } else if (type === 'cpu') {
            const cpuElement = document.getElementById('cpuName2D');
            if (cpuElement) {
                cpuElement.textContent = specs;
                const cpuDiv = document.getElementById('cpu2D');
                if (cpuDiv) {
                    if (specs.includes('AMD')) {
                        cpuDiv.style.borderColor = '#ff4444';
                    } else {
                        cpuDiv.style.borderColor = '#0080ff';
                    }
                }
            }
        }
    }

    initControls() {
        document.getElementById('rotateLeft')?.addEventListener('click', () => {
            this.pcGroup.rotation.y -= Math.PI / 4;
        });
        
        document.getElementById('rotateRight')?.addEventListener('click', () => {
            this.pcGroup.rotation.y += Math.PI / 4;
        });
        
        document.getElementById('resetView')?.addEventListener('click', () => {
            this.pcGroup.rotation.set(0, 0, 0);
            this.camera.position.set(5, 3, 5);
            this.camera.lookAt(0, 0, 0);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Subtle rotation
        this.pcGroup.rotation.y += 0.005;
        
        // RGB Animation
        const time = Date.now() * 0.001;
        const hue = (Math.sin(time * 0.5) + 1) * 0.5;
        
        this.renderer.render(this.scene, this.camera);
    }

    initFallbackVisualizer(container) {
        console.log('🔄 Initialisiere 2D Fallback Visualizer...');
        
        container.innerHTML = `
            <div class="fallback-visualizer">
                <div class="pc-components-2d">
                    <div class="component-2d case-2d">
                        <i class="fas fa-desktop"></i>
                        <span>Gaming Case</span>
                    </div>
                    <div class="component-2d gpu-2d" id="gpu2D">
                        <i class="fas fa-microchip"></i>
                        <span id="gpuName2D">RTX 4070</span>
                    </div>
                    <div class="component-2d cpu-2d" id="cpu2D">
                        <i class="fas fa-brain"></i>
                        <span id="cpuName2D">Intel i7</span>
                    </div>
                    <div class="component-2d rgb-2d" id="rgb2D">
                        <i class="fas fa-palette"></i>
                        <span>RGB Beleuchtung</span>
                    </div>
                </div>
            </div>
        `;
    }

    resize() {
        const container = document.getElementById('pcVisualizerContainer');
        if (!container) return;
        
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }
}

// Gaming Performance Calculator
class PerformanceCalculator {
    constructor() {
        this.gameDatabase = {
            'CS2': { base: 400, gpu_weight: 0.6, cpu_weight: 0.4 },
            'Cyberpunk 2077': { base: 60, gpu_weight: 0.8, cpu_weight: 0.2 },
            'Call of Duty': { base: 144, gpu_weight: 0.7, cpu_weight: 0.3 },
            'Valorant': { base: 300, gpu_weight: 0.5, cpu_weight: 0.5 },
            'Fortnite': { base: 200, gpu_weight: 0.6, cpu_weight: 0.4 },
            'Apex Legends': { base: 180, gpu_weight: 0.7, cpu_weight: 0.3 }
        };
        
        this.componentScores = {
            gpu: {
                'RTX 4090': 100,
                'RTX 4080': 85,
                'RTX 4070 Ti': 75,
                'RTX 4070': 65,
                'RTX 4060 Ti': 55,
                'RTX 4060': 45,
                'RX 7900 XTX': 95,
                'RX 7900 XT': 80,
                'RX 7700 XT': 60,
                'RX 6700 XT': 50
            },
            cpu: {
                'i9-13900K': 100,
                'i7-13700K': 85,
                'i5-13600K': 70,
                'AMD 7950X': 95,
                'AMD 7900X': 80,
                'AMD 7700X': 65
            }
        };
    }

    calculateFPS(selectedComponents) {
        const gpuScore = this.componentScores.gpu[selectedComponents.gpu] || 50;
        const cpuScore = this.componentScores.cpu[selectedComponents.cpu] || 50;
        
        // Average FPS across popular games
        let totalFPS = 0;
        let gameCount = 0;
        
        Object.keys(this.gameDatabase).forEach(game => {
            const gameData = this.gameDatabase[game];
            const fps = gameData.base * 
                ((gpuScore * gameData.gpu_weight + cpuScore * gameData.cpu_weight) / 100);
            totalFPS += fps;
            gameCount++;
        });
        
        return Math.round(totalFPS / gameCount);
    }

    getBenchmarkScore(selectedComponents) {
        const gpuScore = this.componentScores.gpu[selectedComponents.gpu] || 50;
        const cpuScore = this.componentScores.cpu[selectedComponents.cpu] || 50;
        
        return Math.round((gpuScore + cpuScore) * 50); // Scale to realistic benchmark numbers
    }

    getGameSpecificFPS(game, selectedComponents) {
        const gpuScore = this.componentScores.gpu[selectedComponents.gpu] || 50;
        const cpuScore = this.componentScores.cpu[selectedComponents.cpu] || 50;
        const gameData = this.gameDatabase[game];
        
        if (!gameData) return 0;
        
        return Math.round(gameData.base * 
            ((gpuScore * gameData.gpu_weight + cpuScore * gameData.cpu_weight) / 100));
    }
}

// Initialize 3D Visualizer and Performance Calculator
window.pcVisualizer = null;
window.performanceCalculator = null;

// Simple Performance Calculator (Fallback)
function initSimplePerformanceCalculator() {
    if (!window.performanceCalculator) {
        window.performanceCalculator = {
            calculateFPS: function(components) {
                // Simple FPS calculation
                let baseFPS = 60;
                
                if (components.gpu) {
                    if (components.gpu.includes('4090')) baseFPS = 200;
                    else if (components.gpu.includes('4080')) baseFPS = 180;
                    else if (components.gpu.includes('4070')) baseFPS = 144;
                    else if (components.gpu.includes('4060')) baseFPS = 100;
                }
                
                return baseFPS;
            },
            
            getBenchmarkScore: function(components) {
                return this.calculateFPS(components) * 50;
            },
            
            getGameSpecificFPS: function(game, components) {
                const baseFPS = this.calculateFPS(components);
                const gameMultipliers = {
                    'CS2': 1.5,
                    'Valorant': 1.8,
                    'Fortnite': 1.2,
                    'Cyberpunk 2077': 0.4,
                    'Call of Duty': 1.0,
                    'Apex Legends': 0.9
                };
                
                return Math.round(baseFPS * (gameMultipliers[game] || 1.0));
            }
        };
        console.log('✅ Simple Performance Calculator initialisiert');
    }
}

// Skip 3D Loading Function
function skip3DLoading() {
    console.log('⏭️ 3D Loading übersprungen, lade 2D Fallback...');
    
    if (window.buildConfigurator) {
        window.buildConfigurator.init2DVisualizer();
    }
    
    // Setup mock 3D visualizer
    window.pcVisualizer = {
        updateComponent: function(type, specs) {
            console.log(`🔄 2D Update: ${type} → ${specs}`);
            if (window.buildConfigurator) {
                window.buildConfigurator.update2DComponent(type, specs);
            }
        },
        updateRGBColor: function(color) {
            console.log(`🌈 RGB Update: ${color}`);
            const rgbPreview = document.getElementById('rgbPreview');
            if (rgbPreview) {
                rgbPreview.style.background = `#${color.toString(16).padStart(6, '0')}`;
            }
        }
    };
}

// Show skip button after 3 seconds of loading
setTimeout(() => {
    const skipBtn = document.getElementById('skip3DBtn');
    const loading3D = document.getElementById('loading3D');
    
    if (skipBtn && loading3D && loading3D.style.display !== 'none') {
        skipBtn.style.display = 'block';
        console.log('⏰ Skip 3D Button angezeigt');
    }
}, 3000);

// Debug Functions
function forceFinishButton() {
    console.log('🔧 Force Finish Button aktiviert');
    
    const nextBtn = document.getElementById('nextStep');
    const finishBtn = document.getElementById('finishConfig');
    
    if (nextBtn) nextBtn.style.setProperty('display', 'none', 'important');
    if (finishBtn) {
        finishBtn.style.setProperty('display', 'flex', 'important');
        finishBtn.disabled = false;
        finishBtn.style.setProperty('opacity', '1', 'important');
        finishBtn.style.setProperty('pointer-events', 'auto', 'important');
        console.log('✅ Fertig-Button forciert!');
    }
}

function debugCurrentStep() {
    const configurator = window.buildConfigurator;
    if (configurator) {
        console.log('📊 Debug Info:');
        console.log(`Current Step: ${configurator.currentStep}`);
        console.log(`Max Steps: ${configurator.maxSteps}`);
        console.log(`Selections:`, configurator.selections);
        
        const nextBtn = document.getElementById('nextStep');
        const finishBtn = document.getElementById('finishConfig');
        
        console.log(`Next Button Display: ${nextBtn?.style.display}`);
        console.log(`Finish Button Display: ${finishBtn?.style.display}`);
        console.log(`Finish Button Disabled: ${finishBtn?.disabled}`);
        
        alert(`Debug Info:\nStep: ${configurator.currentStep}/${configurator.maxSteps}\nNext Button: ${nextBtn?.style.display}\nFinish Button: ${finishBtn?.style.display}`);
    }
}

// Add CSS animation for notification progress
const style = document.createElement('style');
style.textContent = `
    @keyframes notificationProgress {
        from { transform: scaleX(1); }
        to { transform: scaleX(0); }
    }
`;
document.head.appendChild(style);

// Smooth scroll behavior and section switching
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// CTA Button functionality
function initializeCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Scroll to connect section
            const connectSection = document.getElementById('connect');
            if (connectSection) {
                connectSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Enhanced error handling and debugging
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart);
        }
    }
});

if ('PerformanceObserver' in window) {
    perfObserver.observe({ entryTypes: ['navigation'] });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#00ff88' : '#ff4757'};
        color: ${type === 'success' ? '#0f172a' : '#fff'};
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 500;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Intersection Observer for animations
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

// Initialize Animation Observer
function initializeAnimationObserver() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .team-member');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize Typing Effect
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the next line if you want the typing effect
        // typeWriter(heroTitle, originalText, 80);
    }
}

// Portfolio price animation on hover
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const price = this.querySelector('.price');
        if (price) {
            price.style.transform = 'scale(1.1)';
            price.style.transition = 'transform 0.3s ease';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const price = this.querySelector('.price');
        if (price) {
            price.style.transform = 'scale(1)';
        }
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Typing effect wird im Haupt-DOMContentLoaded initialisiert

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Performance optimization: throttle scroll events
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

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
}, 16)); // ~60fps

// Build Konfigurator System
class BuildConfigurator {
    constructor() {
        this.currentStep = 1;
        this.maxSteps = 9; // Keep at 9, performance is integrated into step 9
        this.selections = {};
        // Initialize performance calculator when needed
        this.performanceCalculator = null;
        this.basePrices = {
            design: { white: 100, black: 0 },
            case: { 'mini-itx': 0, 'mid-tower': 100, 'full-tower': 200 },
            cpu: { intel: 300, amd: 280 },
            gpu: { 
                'expert-amd': 500, 'expert-nvidia': 550,
                'rx6600': 300, 'rx6700': 450, 'rx7600': 350, 'rx7700': 500, 'rx7800': 650,
                'rtx4060': 400, 'rtx4060ti': 500, 'rtx4070': 700, 'rtx4070ti': 850, 'rtx4080': 1200, 'rtx4090': 1800 
            },
            ram: { '16gb': 150, '32gb': 350, '64gb': 800 },
            storage: { 
                '500gb-ssd': 80, '1tb-ssd': 120, '2tb-ssd': 250, 
                '1tb-hdd': 50, '2tb-hdd': 80, '4tb-hdd': 120,
                '500gb-ssd-1tb-hdd': 130, '1tb-ssd-2tb-hdd': 200, '2tb-ssd-4tb-hdd': 370
            }
        };
        this.init();
    }

    init() {
        this.modal = document.getElementById('buildConfiguratorModal');
        this.bindEvents();
    }

    bindEvents() {
        // Open configurator buttons
        document.getElementById('openConfigurator')?.addEventListener('click', () => this.openModal());
        document.getElementById('openConfiguratorForm')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal();
        });

        // Close modal
        document.getElementById('closeConfigurator')?.addEventListener('click', () => this.closeModal());
        
        // Close modal when clicking overlay (specific to build configurator)
        const modalOverlay = this.modal?.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeModal());
        }

        // Navigation buttons
        document.getElementById('nextStep')?.addEventListener('click', () => this.nextStep());
        document.getElementById('prevStep')?.addEventListener('click', () => this.prevStep());
        document.getElementById('finishConfig')?.addEventListener('click', () => this.finishConfiguration());

        // Option selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.config-option')) {
                this.selectOption(e.target.closest('.config-option'));
            }
            if (e.target.closest('.usage-option')) {
                this.selectUsageOption(e.target.closest('.usage-option'));
            }
            if (e.target.closest('.extra-option')) {
                this.toggleExtra(e.target.closest('.extra-option'));
            }
            if (e.target.closest('.budget-preset')) {
                this.selectBudgetPreset(e.target.closest('.budget-preset'));
            }
        });

        // Budget slider
        const budgetSlider = document.getElementById('budgetSlider');
        if (budgetSlider) {
            budgetSlider.addEventListener('input', (e) => {
                this.updateBudgetDisplay(e.target.value);
                this.setBudget(e.target.value);
            });
        }

        // RGB Theme Selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.rgb-theme')) {
                this.selectRGBTheme(e.target.closest('.rgb-theme'));
            }
        });

        // Textarea character counter
        const customWishesTextarea = document.getElementById('customWishes');
        if (customWishesTextarea) {
            customWishesTextarea.addEventListener('input', (e) => {
                const count = e.target.value.length;
                document.getElementById('charCount').textContent = count;
                if (count > 500) {
                    e.target.value = e.target.value.substring(0, 500);
                    document.getElementById('charCount').textContent = 500;
                }
                
                // Enable next/finish button if we're on step 8
                if (this.currentStep === 8) {
                    document.getElementById('finishConfig').disabled = false;
                }
            });
        }

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.updatePrice();
        showFuturisticNotification('Build Konfigurator geöffnet', 'info');
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    selectOption(option) {
        const step = option.closest('.config-step');
        const stepNumber = parseInt(step.dataset.step);
        const value = option.dataset.value;
        const stepType = this.getStepType(stepNumber);
        
        // Prüfen ob das eine neue Selektion ist oder eine bestehende
        const isNewSelection = !this.selections[stepType] || this.selections[stepType] !== value;

        // Remove previous selection
        step.querySelectorAll('.config-option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection
        option.classList.add('selected');
        
        // Store selection
        this.selections[stepType] = value;
        
        // Enable next button
        document.getElementById('nextStep').disabled = false;
        if (this.currentStep === this.maxSteps) {
            document.getElementById('finishConfig').disabled = false;
        }
        
        // Update price
        this.updatePrice();
        
        // Auto-advance nur bei neuer Selektion und wenn nicht letzter Step
        if (isNewSelection && this.currentStep < this.maxSteps) {
            setTimeout(() => {
                this.nextStep();
            }, 800);
        }
    }

    selectUsageOption(option) {
        const step = option.closest('.config-step');
        const stepNumber = parseInt(step.dataset.step);
        const value = option.dataset.usage;
        const stepType = this.getStepType(stepNumber);
        
        // Prüfen ob das eine neue Selektion ist oder eine bestehende
        const isNewSelection = !this.selections[stepType] || this.selections[stepType] !== value;

        // Remove previous selection
        step.querySelectorAll('.usage-option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection
        option.classList.add('selected');
        
        // Store selection
        this.selections[stepType] = value;
        
        // Enable next button
        document.getElementById('nextStep').disabled = false;
        
        // Auto-advance nur bei neuer Selektion
        if (isNewSelection) {
            setTimeout(() => {
                this.nextStep();
            }, 800);
        }
    }

    getStepType(stepNumber) {
        const stepTypes = ['design', 'budget', 'usage', 'case', 'cpu', 'gpu', 'ram', 'storage', 'extras'];
        return stepTypes[stepNumber - 1];
    }

    selectRGBTheme(themeElement) {
        // Remove active class from all themes
        document.querySelectorAll('.rgb-theme').forEach(theme => {
            theme.classList.remove('active');
        });
        
        // Add active class to selected theme
        themeElement.classList.add('active');
        
        // Get color value
        const colorHex = themeElement.dataset.color;
        const color = parseInt(colorHex);
        
        // Update 3D visualizer if available
        if (window.pcVisualizer) {
            window.pcVisualizer.updateRGBColor(color);
        }
        
        // Store selection
        this.selections.rgbTheme = colorHex;
    }

    updatePerformanceAnalysis() {
        console.log('🎮 Performance Analysis wird geladen...');
        
        // Initialize performance calculator
        if (!this.performanceCalculator) {
            this.performanceCalculator = window.performanceCalculator || new PerformanceCalculator();
        }
        
        // Initialize 3D visualizer if not exists
        if (!window.pcVisualizer) {
            console.log('🔄 3D Visualizer wird initialisiert...');
            try {
                // Schnellere Initialisierung
                if (typeof THREE !== 'undefined') {
                    setTimeout(() => {
                        window.pcVisualizer = new PCVisualizer();
                        console.log('✅ 3D Visualizer erfolgreich geladen!');
                    }, 200);
                } else {
                    // Sofortiger Fallback zu 2D
                    console.log('⚠️ Three.js nicht verfügbar, verwende 2D Fallback');
                    window.pcVisualizer = {
                        updateComponent: function(type, specs) {
                            console.log(`🔄 2D Update: ${type} → ${specs}`);
                        },
                        updateRGBColor: function(color) {
                            console.log(`🌈 RGB Update: ${color}`);
                        }
                    };
                    // Lade 2D Visualizer sofort
                    this.init2DVisualizer();
                }
            } catch (error) {
                console.error('❌ 3D Visualizer Fehler:', error);
                this.init2DVisualizer();
            }
        }

        // Calculate performance based on selections
        const selectedComponents = {
            gpu: this.getSelectedGPU(),
            cpu: this.getSelectedCPU()
        };
        
        console.log('📊 Berechnete Komponenten:', selectedComponents);

        // Update FPS predictions
        try {
            this.updateFPSPredictions(selectedComponents);
            console.log('✅ FPS Predictions aktualisiert');
        } catch (error) {
            console.error('❌ FPS Update Fehler:', error);
        }
        
        // Update benchmark scores
        try {
            this.updateBenchmarkScores(selectedComponents);
            console.log('✅ Benchmark Scores aktualisiert');
        } catch (error) {
            console.error('❌ Benchmark Update Fehler:', error);
        }
        
        // Update performance rating
        try {
            this.updatePerformanceRating(selectedComponents);
            console.log('✅ Performance Rating aktualisiert');
        } catch (error) {
            console.error('❌ Performance Rating Fehler:', error);
        }
        
        // Update 3D model based on components
        setTimeout(() => {
            if (window.pcVisualizer) {
                try {
                    if (selectedComponents.gpu) {
                        window.pcVisualizer.updateComponent('gpu', selectedComponents.gpu);
                    }
                    if (selectedComponents.cpu) {
                        window.pcVisualizer.updateComponent('cpu', selectedComponents.cpu);
                    }
                    console.log('✅ 3D Modell aktualisiert');
                } catch (error) {
                    console.error('❌ 3D Modell Update Fehler:', error);
                }
            }
        }, 1000);
    }

    getSelectedGPU() {
        const gpuSelection = this.selections.gpu;
        const gpuMap = {
            'rtx4090': 'RTX 4090',
            'rtx4080': 'RTX 4080', 
            'rtx4070ti': 'RTX 4070 Ti',
            'rtx4070': 'RTX 4070',
            'rtx4060ti': 'RTX 4060 Ti',
            'rtx4060': 'RTX 4060',
            'rx7900xtx': 'RX 7900 XTX',
            'rx7900xt': 'RX 7900 XT',
            'rx7700xt': 'RX 7700 XT',
            'rx6700xt': 'RX 6700 XT'
        };
        return gpuMap[gpuSelection] || 'RTX 4070';
    }

    getSelectedCPU() {
        const cpuSelection = this.selections.cpu;
        if (cpuSelection === 'intel') {
            return 'i7-13700K'; // Default Intel
        } else if (cpuSelection === 'amd') {
            return 'AMD 7700X'; // Default AMD
        }
        return 'i7-13700K';
    }

    updateFPSPredictions(components) {
        const fpsContainer = document.getElementById('fpsPredicitions');
        if (!fpsContainer) return;

        const games = ['CS2', 'Cyberpunk 2077', 'Call of Duty', 'Valorant', 'Fortnite', 'Apex Legends'];
        let totalFPS = 0;
        
        fpsContainer.innerHTML = '';
        
        games.forEach(game => {
            const fps = this.performanceCalculator.getGameSpecificFPS(game, components);
            totalFPS += fps;
            
            const gameElement = document.createElement('div');
            gameElement.className = 'fps-game';
            gameElement.innerHTML = `
                <span class="game-name">${game}</span>
                <span class="fps-value">${fps} FPS</span>
            `;
            fpsContainer.appendChild(gameElement);
        });

        // Update average FPS
        const avgFPS = Math.round(totalFPS / games.length);
        const avgElement = document.getElementById('avgFPS');
        if (avgElement) {
            avgElement.textContent = `${avgFPS} FPS`;
        }
    }

    updateBenchmarkScores(components) {
        const timeSpy = document.getElementById('timeSpy');
        const cinebench = document.getElementById('cinebench');
        const userBench = document.getElementById('userBench');

        const benchmarkScore = this.performanceCalculator.getBenchmarkScore(components);
        
        if (timeSpy) timeSpy.textContent = (benchmarkScore * 0.8).toFixed(0);
        if (cinebench) cinebench.textContent = (benchmarkScore * 120).toFixed(0);
        if (userBench) userBench.textContent = `${(benchmarkScore * 0.6).toFixed(0)}%`;
    }

    updatePerformanceRating(components) {
        const ratingElement = document.getElementById('performanceRating');
        if (!ratingElement) return;

        const avgFPS = this.performanceCalculator.calculateFPS(components);
        let rating = '';
        
        if (avgFPS >= 180) {
            rating = '🔥 Extreme Gaming Beast - Ultra Settings bei 4K!';
        } else if (avgFPS >= 144) {
            rating = '⚡ High-End Gaming Maschine - Perfekt für 1440p Ultra!';
        } else if (avgFPS >= 100) {
            rating = '🎮 Solid Gaming Build - Starke 1440p Performance!';
        } else if (avgFPS >= 60) {
            rating = '✅ Entry Gaming PC - Zuverlässig für 1080p Gaming!';
        } else {
            rating = '📚 Office/Multimedia PC - Für Gaming eher schwach.';
        }
        
        ratingElement.textContent = rating;
    }

    init2DVisualizer() {
        const container = document.getElementById('pcVisualizerContainer');
        if (container) {
            container.innerHTML = `
                <div class="fallback-visualizer">
                    <div class="pc-components-2d">
                        <div class="component-2d case-2d">
                            <i class="fas fa-desktop"></i>
                            <span>Gaming Case</span>
                        </div>
                        <div class="component-2d gpu-2d" id="gpu2D">
                            <i class="fas fa-microchip"></i>
                            <span id="gpuName2D">${this.getSelectedGPU()}</span>
                        </div>
                        <div class="component-2d cpu-2d" id="cpu2D">
                            <i class="fas fa-brain"></i>
                            <span id="cpuName2D">${this.getSelectedCPU()}</span>
                        </div>
                        <div class="component-2d rgb-2d" id="rgb2D">
                            <i class="fas fa-palette"></i>
                            <span>RGB Beleuchtung</span>
                        </div>
                    </div>
                </div>
            `;
            console.log('✅ 2D Visualizer geladen!');
        }
    }

    nextStep() {
        if (this.currentStep < this.maxSteps) {
            this.currentStep++;
            this.updateStepDisplay();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStepDisplay();
        }
    }

    updateStepDisplay() {
        // Hide all steps
        document.querySelectorAll('.config-step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        let currentStepElement = document.querySelector(`.config-step[data-step="${this.currentStep}"]`);
        
        // Special handling: Show performance analysis when on step 9 (extras)
        if (this.currentStep === 9) {
            // Also show performance step
            const performanceStep = document.querySelector(`[data-step="performance"]`);
            if (performanceStep) {
                performanceStep.classList.add('active');
                setTimeout(() => {
                    this.updatePerformanceAnalysis();
                }, 300);
            }
        }
        
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }

        // Update progress bar
        const progressFill = document.querySelector('.progress-fill');
        const progressPercentage = (this.currentStep / this.maxSteps) * 100;
        progressFill.style.width = `${progressPercentage}%`;

        // Update step indicators
        document.querySelectorAll('.progress-steps .step').forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                step.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                step.classList.add('active');
            }
        });

        // Update buttons
        document.getElementById('prevStep').disabled = this.currentStep === 1;
        
        const currentStepType = this.getStepType(this.currentStep);
        const hasSelection = this.selections[currentStepType];
        
        // Special handling for extras step (no selection needed)
        if (this.currentStep === 9) {
            document.getElementById('nextStep').disabled = false;
        } else {
            document.getElementById('nextStep').disabled = !hasSelection;
        }

        // Show finish button on last step (Performance Analysis)
        const nextBtn = document.getElementById('nextStep');
        const finishBtn = document.getElementById('finishConfig');
        
        console.log(`🔍 Button Debug: Step ${this.currentStep}/${this.maxSteps}`);
        
        if (this.currentStep === this.maxSteps) {
            console.log('✅ Zeige Fertig Button');
            nextBtn.style.setProperty('display', 'none', 'important');
            finishBtn.style.setProperty('display', 'flex', 'important');
            finishBtn.disabled = false;
            finishBtn.style.setProperty('opacity', '1', 'important');
            finishBtn.style.setProperty('pointer-events', 'auto', 'important');
        } else {
            console.log('⏭️ Zeige Weiter Button');
            nextBtn.style.setProperty('display', 'flex', 'important');
            finishBtn.style.setProperty('display', 'none', 'important');
        }

        // Restore selection if exists - WICHTIGER FIX
        setTimeout(() => {
            if (hasSelection) {
                // Erst alle Selectionen im aktuellen Step entfernen
                const currentStep = document.querySelector(`.config-step[data-step="${this.currentStep}"]`);
                if (currentStep) {
                    currentStep.querySelectorAll('.config-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Dann die richtige Option selektieren
                    const selectedOption = currentStep.querySelector(`[data-value="${hasSelection}"]`);
                    if (selectedOption) {
                        selectedOption.classList.add('selected');
                    }
                }
            }
        }, 50); // Kleiner Delay um sicherzustellen dass DOM update complete ist
    }

    updatePrice() {
        let totalPrice = 800; // Base price
        
        Object.keys(this.selections).forEach(category => {
            const selection = this.selections[category];
            if (this.basePrices[category] && this.basePrices[category][selection]) {
                totalPrice += this.basePrices[category][selection];
            }
        });

        document.getElementById('estimatedPrice').textContent = totalPrice.toLocaleString();
    }

    selectBudgetPreset(presetOption) {
        const budget = presetOption.dataset.budget;
        
        // Remove previous selection
        document.querySelectorAll('.budget-preset').forEach(preset => preset.classList.remove('selected'));
        
        // Add selection
        presetOption.classList.add('selected');
        
        // Update slider and display
        if (budget !== 'unlimited') {
            document.getElementById('budgetSlider').value = budget;
            this.updateBudgetDisplay(budget);
        } else {
            document.getElementById('budgetSlider').value = 6000;
            this.updateBudgetDisplay('unlimited');
        }
        
        this.setBudget(budget);
    }

    setBudget(budget) {
        this.selections.budget = budget;
        
        // Enable next button for step 2
        if (this.currentStep === 2) {
            document.getElementById('nextStep').disabled = false;
        }
        
        // Update recommendation
        this.updateBudgetRecommendation(budget);
        
        // Auto-advance
        setTimeout(() => {
            if (this.currentStep === 2) {
                this.nextStep();
            }
        }, 800);
    }

    updateBudgetDisplay(value) {
        const budgetValueElement = document.getElementById('budgetValue');
        if (value === 'unlimited') {
            budgetValueElement.textContent = '∞';
        } else {
            const formattedValue = parseInt(value).toLocaleString();
            budgetValueElement.textContent = formattedValue;
        }
        
        // Remove preset selections when using slider
        if (value !== this.selections.budget) {
            document.querySelectorAll('.budget-preset').forEach(preset => preset.classList.remove('selected'));
        }
    }

    updateBudgetRecommendation(budget) {
        const recommendationElement = document.getElementById('budgetRecommendation');
        let text = '';
        
        if (budget === 'unlimited' || budget >= 4000) {
            text = 'Mit diesem Budget können wir euch eine absolute High-End Maschine bauen! Keine Kompromisse bei Performance oder Features.';
        } else if (budget >= 2500) {
            text = 'Perfektes Budget für High-End Gaming! Ihr bekommt Top-Performance in allen aktuellen Spielen.';
        } else if (budget >= 1500) {
            text = 'Solides Budget für ein ausgewogenes Gaming-Setup. Gute Performance mit Upgrade-Potenzial.';
        } else {
            text = 'Mit diesem Budget fokussieren wir auf das Wesentliche für ein funktionales Gaming-System.';
        }
        
        recommendationElement.textContent = text;
    }

    toggleExtra(extraOption) {
        extraOption.classList.toggle('selected');
        
        // Collect all selected extras
        const selectedExtras = Array.from(document.querySelectorAll('.extra-option.selected'))
            .map(option => option.dataset.extra);
        
        // Store in selections
        this.selections.selectedExtras = selectedExtras;
        
        console.log('Selected Extras:', selectedExtras);
    }

    finishConfiguration() {
        // Open contact modal with build summary
        this.openContactModal();
    }

    openContactModal() {
        const contactModal = document.getElementById('contactModal');
        const buildSummary = document.getElementById('buildSummary');
        const summaryPrice = document.getElementById('summaryPrice');
        
        // Populate build summary
        buildSummary.innerHTML = this.generateBuildSummaryHTML();
        
        // Update price
        const estimatedPrice = document.getElementById('estimatedPrice').textContent;
        summaryPrice.textContent = estimatedPrice;
        
        // Show contact modal
        contactModal.classList.add('active');
        contactModal.style.display = 'flex';
        
        // Close build configurator modal
        this.closeModal();
    }

    generateBuildSummaryHTML() {
        const summaryItems = [];
        
        if (this.selections.design) {
            summaryItems.push({
                label: 'Design',
                value: this.selections.design === 'white' ? 'White Build' : 'Black Build'
            });
        }
        
        if (this.selections.budget) {
            summaryItems.push({
                label: 'Budget',
                value: `€${parseInt(this.selections.budget).toLocaleString()}`
            });
        }
        
        if (this.selections.usage) {
            const usageNames = {
                'fps-gaming': 'FPS Gaming',
                'video-editing': 'Videoschnitt',
                'streaming': 'Streaming',
                'casual-gaming': 'Casual Gaming',
                'workstation': 'Workstation',
                'all-around': 'Allrounder'
            };
            summaryItems.push({
                label: 'Verwendung',
                value: usageNames[this.selections.usage] || this.selections.usage
            });
        }
        
        if (this.selections.case) {
            const caseNames = {
                'mini-itx': 'Mini ITX',
                'mid-tower': 'Mid Tower',
                'full-tower': 'Full Tower'
            };
            summaryItems.push({
                label: 'Gehäuse',
                value: caseNames[this.selections.case] || this.selections.case
            });
        }
        
        if (this.selections.cpu) {
            summaryItems.push({
                label: 'CPU',
                value: this.selections.cpu.toUpperCase()
            });
        }
        
        if (this.selections.gpu) {
            const gpuNames = {
                'expert-amd': 'AMD GPU (von uns ausgewählt)',
                'expert-nvidia': 'NVIDIA GPU (von uns ausgewählt)',
                'rx6600': 'AMD RX 6600',
                'rx6700': 'AMD RX 6700 XT',
                'rx7600': 'AMD RX 7600',
                'rx7700': 'AMD RX 7700 XT',
                'rx7800': 'AMD RX 7800 XT',
                'rtx4060': 'NVIDIA RTX 4060',
                'rtx4060ti': 'NVIDIA RTX 4060 Ti',
                'rtx4070': 'NVIDIA RTX 4070',
                'rtx4070ti': 'NVIDIA RTX 4070 Ti',
                'rtx4080': 'NVIDIA RTX 4080',
                'rtx4090': 'NVIDIA RTX 4090'
            };
            summaryItems.push({
                label: 'GPU',
                value: gpuNames[this.selections.gpu] || this.selections.gpu
            });
        }
        
        if (this.selections.ram) {
            summaryItems.push({
                label: 'RAM',
                value: this.selections.ram.toUpperCase()
            });
        }
        
        if (this.selections.storage) {
            const storageNames = {
                '500gb-ssd': '500GB SSD',
                '1tb-ssd': '1TB SSD',
                '2tb-ssd': '2TB SSD',
                '1tb-hdd': '1TB HDD',
                '2tb-hdd': '2TB HDD',
                '4tb-hdd': '4TB HDD',
                '500gb-ssd-1tb-hdd': '500GB SSD + 1TB HDD',
                '1tb-ssd-2tb-hdd': '1TB SSD + 2TB HDD',
                '2tb-ssd-4tb-hdd': '2TB SSD + 4TB HDD'
            };
            summaryItems.push({
                label: 'Storage',
                value: storageNames[this.selections.storage] || this.selections.storage
            });
        }
        
        return summaryItems.map(item => `
            <div class="summary-item">
                <span class="summary-label">${item.label}:</span>
                <span class="summary-value">${item.value}</span>
            </div>
        `).join('');
    }

    reset() {
        this.currentStep = 1;
        this.selections = {};
        document.querySelectorAll('.config-option').forEach(option => {
            option.classList.remove('selected');
        });
        this.updateStepDisplay();
        this.updatePrice();
    }
}

// Build Configurator wird im Haupt-DOMContentLoaded initialisiert

// Service Selection System
class ServiceManager {
    constructor() {
        this.selectedServices = [];
        this.serviceModal = document.getElementById('serviceModal');
        this.servicesList = document.getElementById('servicesList');
        this.costBreakdown = document.getElementById('costBreakdown');
        this.totalAmount = document.getElementById('totalAmount');
        
        this.services = {
            assembly: { name: 'PC Assembly', price: 50, period: 'einmalig', type: 'service' },
            care: { name: 'Care Package', price: 50, period: 'pro Jahr', type: 'subscription' },
            thermal: { name: 'Thermal Service', price: 25, period: 'pro Jahr', type: 'subscription' },
            upgrade: { name: 'Upgrade Service', price: 25, period: 'pro Upgrade', type: 'service' },
            basicPackage: { name: 'Basic Package', price: 65, period: 'pro Jahr', type: 'subscription' },
            premiumPackage: { name: 'Premium Package', price: 90, period: 'pro Jahr', type: 'subscription' }
        };
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Service buttons
        document.querySelectorAll('.service-btn, .package-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const serviceId = e.currentTarget.dataset.service;
                if (serviceId) {
                    this.addService(serviceId);
                }
            });
        });
        
        // Modal controls
        document.getElementById('closeServiceModal').addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('clearServices').addEventListener('click', () => {
            this.clearAllServices();
        });
        
        document.getElementById('requestQuote').addEventListener('click', () => {
            this.requestQuote();
        });
        
        // Auto close modal if clicked outside (specific to service modal)
        if (this.serviceModal) {
            const modalOverlay = this.serviceModal.querySelector('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.addEventListener('click', () => {
                    this.closeModal();
                });
            }
        }
    }
    
    addService(serviceId) {
        const service = this.services[serviceId];
        if (!service) return;
        
        // Check if service already exists
        const existingIndex = this.selectedServices.findIndex(s => s.id === serviceId);
        if (existingIndex >= 0) {
            // Update quantity if it's a service that can have multiple instances
            if (service.type === 'service') {
                this.selectedServices[existingIndex].quantity += 1;
            }
        } else {
            // Add new service
            this.selectedServices.push({
                id: serviceId,
                name: service.name,
                price: service.price,
                period: service.period,
                type: service.type,
                quantity: 1
            });
        }
        
        this.openModal();
        this.updateDisplay();
    }
    
    removeService(serviceId) {
        this.selectedServices = this.selectedServices.filter(s => s.id !== serviceId);
        this.updateDisplay();
    }
    
    clearAllServices() {
        this.selectedServices = [];
        this.updateDisplay();
    }
    
    updateDisplay() {
        this.updateServicesList();
        this.updateCostBreakdown();
    }
    
    updateServicesList() {
        if (this.selectedServices.length === 0) {
            this.servicesList.innerHTML = `
                <div class="empty-selection">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Keine Services ausgewählt</span>
                    <small>Klicke auf einen Service-Button um zu beginnen</small>
                </div>
            `;
            return;
        }
        
        this.servicesList.innerHTML = this.selectedServices.map(service => `
            <div class="selected-service-item">
                <div class="service-info">
                    <span class="service-name">${service.name}</span>
                    <span class="service-details">€${service.price} ${service.period}</span>
                    ${service.quantity > 1 ? `<span class="service-quantity">Anzahl: ${service.quantity}</span>` : ''}
                </div>
                <button class="remove-service-btn" onclick="serviceManager.removeService('${service.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }
    
    updateCostBreakdown() {
        const oneTime = [];
        const yearly = [];
        const perUpgrade = [];
        
        this.selectedServices.forEach(service => {
            const totalPrice = service.price * service.quantity;
            
            if (service.period === 'einmalig') {
                oneTime.push({ name: service.name, price: totalPrice, quantity: service.quantity });
            } else if (service.period === 'pro Jahr') {
                yearly.push({ name: service.name, price: totalPrice, quantity: service.quantity });
            } else if (service.period === 'pro Upgrade') {
                perUpgrade.push({ name: service.name, price: totalPrice, quantity: service.quantity });
            }
        });
        
        let breakdown = '';
        
        if (oneTime.length > 0) {
            breakdown += '<h4 style="color: var(--text-primary); font-family: Orbitron; margin-bottom: 10px;">Einmalige Kosten</h4>';
            oneTime.forEach(item => {
                breakdown += `<div class="cost-item"><span>${item.name}${item.quantity > 1 ? ` (${item.quantity}x)` : ''}</span><span>€${item.price}</span></div>`;
            });
        }
        
        if (yearly.length > 0) {
            breakdown += '<h4 style="color: var(--text-primary); font-family: Orbitron; margin: 20px 0 10px 0;">Jährliche Kosten</h4>';
            yearly.forEach(item => {
                breakdown += `<div class="cost-item"><span>${item.name}${item.quantity > 1 ? ` (${item.quantity}x)` : ''}</span><span>€${item.price}/Jahr</span></div>`;
            });
        }
        
        if (perUpgrade.length > 0) {
            breakdown += '<h4 style="color: var(--text-primary); font-family: Orbitron; margin: 20px 0 10px 0;">Pro Upgrade</h4>';
            perUpgrade.forEach(item => {
                breakdown += `<div class="cost-item"><span>${item.name}${item.quantity > 1 ? ` (${item.quantity}x)` : ''}</span><span>€${item.price}/Upgrade</span></div>`;
            });
        }
        
        this.costBreakdown.innerHTML = breakdown;
        
        // Calculate total for first year
        const oneTimeTotal = oneTime.reduce((sum, item) => sum + item.price, 0);
        const yearlyTotal = yearly.reduce((sum, item) => sum + item.price, 0);
        const firstYearTotal = oneTimeTotal + yearlyTotal;
        
        this.totalAmount.textContent = firstYearTotal > 0 ? `€${firstYearTotal}` : '€0';
    }
    
    openModal() {
        this.serviceModal.classList.add('active');
        this.serviceModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.serviceModal.classList.remove('active');
        setTimeout(() => {
            this.serviceModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    requestQuote() {
        if (this.selectedServices.length === 0) {
            alert('Bitte wähle mindestens einen Service aus!');
            return;
        }
        
        // Create quote summary
        const quoteDetails = this.selectedServices.map(service => 
            `${service.name}: €${service.price * service.quantity} ${service.period}${service.quantity > 1 ? ` (${service.quantity}x)` : ''}`
        ).join('\n');
        
        const oneTime = this.selectedServices.filter(s => s.period === 'einmalig')
            .reduce((sum, s) => sum + (s.price * s.quantity), 0);
        const yearly = this.selectedServices.filter(s => s.period === 'pro Jahr')
            .reduce((sum, s) => sum + (s.price * s.quantity), 0);
        
        const message = `Service-Anfrage von JQ-SYSTEMS Website:

Gewählte Services:
${quoteDetails}

Kostensummary:
${oneTime > 0 ? `Einmalig: €${oneTime}\n` : ''}${yearly > 0 ? `Jährlich: €${yearly}\n` : ''}${oneTime + yearly > 0 ? `Erstes Jahr Total: €${oneTime + yearly}` : ''}

Bitte kontaktiert mich für ein individuelles Angebot!`;
        
        // You can integrate with a contact form or email service here
        alert('Vielen Dank für deine Anfrage!\n\nWir melden uns schnellstmöglich bei dir mit einem individuellen Angebot.\n\nService-Details:\n' + message);
        
        // Optional: Copy to clipboard
        navigator.clipboard.writeText(message).then(() => {
            console.log('Quote details copied to clipboard');
        });
        
        this.closeModal();
    }
}

// Service Manager wird im Haupt-DOMContentLoaded initialisiert

// Contact Modal Management
class ContactModalManager {
    constructor() {
        this.modal = document.getElementById('contactModal');
        this.form = document.getElementById('projectForm');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Close modal buttons
        document.getElementById('closeContactModal')?.addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('cancelContact')?.addEventListener('click', () => {
            this.closeModal();
        });
        
        // Form submission
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitProject();
        });
        
        // Auto close modal if clicked outside (specific to contact modal)
        if (this.modal) {
            const modalOverlay = this.modal.querySelector('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.addEventListener('click', () => {
                    this.closeModal();
                });
            }
        }
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        setTimeout(() => {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    submitProject() {
        // Collect form data
        const formData = new FormData(this.form);
        const projectData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            deadline: formData.get('deadline'),
            notes: formData.get('notes'),
            buildConfig: this.getBuildConfigFromSummary(),
            timestamp: new Date().toISOString()
        };
        
        // Create email content
        const emailContent = this.generateEmailContent(projectData);
        
        // Show success message
        showFuturisticNotification(
            'Projektanfrage erfolgreich! Wir melden uns schnellstmöglich bei euch.', 
            'success'
        );
        
        // Copy to clipboard for easy sharing
        navigator.clipboard.writeText(emailContent).then(() => {
            console.log('Project details copied to clipboard');
        });
        
        // Close modal and reset
        this.closeModal();
        
        // Optional: You can integrate with email services here
        console.log('Project Data:', projectData);
        console.log('Email Content:', emailContent);
    }
    
    getBuildConfigFromSummary() {
        const summaryItems = document.querySelectorAll('.summary-item');
        const config = {};
        
        summaryItems.forEach(item => {
            const label = item.querySelector('.summary-label')?.textContent?.replace(':', '');
            const value = item.querySelector('.summary-value')?.textContent;
            if (label && value) {
                config[label] = value;
            }
        });
        
        return config;
    }
    
    generateEmailContent(data) {
        const configText = Object.entries(data.buildConfig)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
            
        return `Projektanfrage von JQ-SYSTEMS Website

Kundendaten:
Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone || 'Nicht angegeben'}
Gewünschter Termin: ${data.deadline || 'Flexibel'}

Build-Konfiguration:
${configText}

Zusätzliche Wünsche:
${data.notes || 'Keine'}

Eingegangen am: ${new Date(data.timestamp).toLocaleString('de-DE')}

---
Automatisch generiert von der JQ-SYSTEMS Website`;
    }
}

// Contact Modal Manager wird im Haupt-DOMContentLoaded initialisiert