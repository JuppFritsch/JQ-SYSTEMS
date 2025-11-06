// Shop JavaScript Funktionalität für JQ-SYSTEMS

// Product Database - Gaming PC Configurationen
const products = [
    {
        id: 1,
        name: "Gaming Beast RTX 4090",
        category: "High-End Gaming",
        price: 3299,
        image: "fas fa-desktop",
        badge: "Bestseller",
        specs: {
            cpu: "Intel i9-13900K",
            gpu: "RTX 4090 24GB",
            ram: "32GB DDR5-6000",
            storage: "2TB NVMe SSD"
        },
        performance: {
            "4K Ultra": "120+ FPS",
            "1440p Ultra": "165+ FPS",
            "Ray Tracing": "Excellent"
        },
        stock: true,
        featured: true
    },
    {
        id: 2,
        name: "Esports Champion RTX 4070",
        category: "Competitive Gaming",
        price: 1899,
        image: "fas fa-desktop",
        badge: "Pro Choice",
        specs: {
            cpu: "Intel i7-13700K",
            gpu: "RTX 4070 12GB",
            ram: "16GB DDR5-5600",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "1440p High": "144+ FPS",
            "1080p Ultra": "200+ FPS",
            "Competitive": "300+ FPS"
        },
        stock: true,
        featured: true
    },
    {
        id: 3,
        name: "Content Creator Pro RTX 4080",
        category: "Content Creation",
        price: 2799,
        image: "fas fa-desktop",
        badge: "Creator's Pick",
        specs: {
            cpu: "AMD Ryzen 9 7950X",
            gpu: "RTX 4080 16GB",
            ram: "64GB DDR5-5600",
            storage: "2TB NVMe SSD"
        },
        performance: {
            "4K Gaming": "90+ FPS",
            "Streaming": "Excellent",
            "Video Editing": "Ultra Fast"
        },
        stock: true,
        featured: true
    },
    {
        id: 4,
        name: "Budget Gamer GTX 1660 Super",
        category: "Entry Level",
        price: 899,
        image: "fas fa-desktop",
        badge: "Best Value",
        specs: {
            cpu: "AMD Ryzen 5 5600",
            gpu: "GTX 1660 Super 6GB",
            ram: "16GB DDR4-3200",
            storage: "512GB NVMe SSD"
        },
        performance: {
            "1080p Medium": "60+ FPS",
            "1080p High": "45+ FPS",
            "Esports": "100+ FPS"
        },
        stock: true,
        featured: false
    },
    {
        id: 5,
        name: "Workstation Beast RTX 4070 Ti",
        category: "Professional",
        price: 2299,
        image: "fas fa-desktop",
        badge: "Professional",
        specs: {
            cpu: "Intel i7-13700",
            gpu: "RTX 4070 Ti 12GB",
            ram: "32GB DDR5-5200",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "1440p Ultra": "100+ FPS",
            "Productivity": "Excellent",
            "CAD/3D": "Professional"
        },
        stock: true,
        featured: false
    },
    {
        id: 6,
        name: "Streaming Beast RTX 4060 Ti",
        category: "Streaming",
        price: 1599,
        image: "fas fa-desktop",
        badge: "Streamer's Choice",
        specs: {
            cpu: "AMD Ryzen 7 7700X",
            gpu: "RTX 4060 Ti 16GB",
            ram: "32GB DDR5-5200",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "1440p High": "80+ FPS",
            "Streaming": "Excellent",
            "Multi-tasking": "Perfect"
        },
        stock: true,
        featured: false
    }
];

// Shopping Cart System
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartDisplay();
    }

    addItem(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showCartNotification(product.name);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartDisplay() {
        this.updateCartCount();
        this.updateCartSidebar();
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        const totalItems = this.getTotalItems();
        
        if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }

    updateCartSidebar() {
        const cartContent = document.querySelector('.cart-content');
        const cartTotal = document.querySelector('.cart-total span:last-child');
        
        if (this.items.length === 0) {
            cartContent.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Ihr Warenkorb ist leer</p>
                    <p>Fügen Sie Gaming PCs hinzu um loszulegen!</p>
                </div>
            `;
            cartTotal.textContent = '0,00 €';
        } else {
            cartContent.innerHTML = this.items.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <i class="${item.image}"></i>
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${(item.price * item.quantity).toLocaleString('de-DE')} €</div>
                        <div class="cart-item-controls">
                            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            <button onclick="cart.removeItem(${item.id})" class="remove-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            cartTotal.textContent = `${this.getTotal().toLocaleString('de-DE')} €`;
        }
    }

    showCartNotification(productName) {
        // Simple notification system
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${productName} wurde zum Warenkorb hinzugefügt!</span>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: 'rgba(0, 255, 136, 0.9)',
            color: '#0f172a',
            padding: '15px 20px',
            borderRadius: '10px',
            zIndex: '3000',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '600',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Filter System
class ProductFilter {
    constructor() {
        this.filters = {
            priceMin: 0,
            priceMax: 5000,
            categories: [],
            gpus: [],
            usage: []
        };
        
        this.sortBy = 'featured';
        this.currentPage = 1;
        this.itemsPerPage = 6;
        
        this.initializeFilters();
    }

    initializeFilters() {
        // Price Range
        const priceRange = document.getElementById('priceRange');
        const priceDisplay = document.querySelector('.price-display');
        
        if (priceRange) {
            priceRange.addEventListener('input', (e) => {
                this.filters.priceMax = parseInt(e.target.value);
                priceDisplay.textContent = `Bis ${this.filters.priceMax.toLocaleString('de-DE')} €`;
                this.applyFilters();
            });
        }

        // Category Filters
        document.querySelectorAll('.category-filter').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.filters.categories.push(e.target.value);
                } else {
                    this.filters.categories = this.filters.categories.filter(cat => cat !== e.target.value);
                }
                this.applyFilters();
            });
        });

        // GPU Filters
        document.querySelectorAll('.gpu-filter').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.filters.gpus.push(e.target.value);
                } else {
                    this.filters.gpus = this.filters.gpus.filter(gpu => gpu !== e.target.value);
                }
                this.applyFilters();
            });
        });

        // Usage Filters
        document.querySelectorAll('.usage-filter').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.filters.usage.push(e.target.value);
                } else {
                    this.filters.usage = this.filters.usage.filter(usage => usage !== e.target.value);
                }
                this.applyFilters();
            });
        });

        // Sort Options
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                this.applyFilters();
            });
        }

        // Clear Filters Button
        document.querySelector('.clear-filters').addEventListener('click', () => {
            this.clearAllFilters();
        });
    }

    applyFilters() {
        let filteredProducts = products.filter(product => {
            // Price Filter
            if (product.price > this.filters.priceMax) return false;

            // Category Filter
            if (this.filters.categories.length > 0 && 
                !this.filters.categories.includes(product.category)) return false;

            // GPU Filter
            if (this.filters.gpus.length > 0) {
                const hasMatchingGPU = this.filters.gpus.some(gpu => 
                    product.specs.gpu.includes(gpu));
                if (!hasMatchingGPU) return false;
            }

            // Usage Filter (based on category mapping)
            if (this.filters.usage.length > 0) {
                const usageMapping = {
                    'gaming': ['High-End Gaming', 'Competitive Gaming'],
                    'streaming': ['Streaming', 'Content Creation'],
                    'work': ['Professional', 'Content Creation'],
                    'budget': ['Entry Level']
                };

                const hasMatchingUsage = this.filters.usage.some(usage => 
                    usageMapping[usage] && usageMapping[usage].includes(product.category));
                if (!hasMatchingUsage) return false;
            }

            return true;
        });

        // Apply Sorting
        filteredProducts = this.sortProducts(filteredProducts);

        // Update Display
        this.displayProducts(filteredProducts);
        this.updateResultsInfo(filteredProducts.length);
    }

    sortProducts(products) {
        switch (this.sortBy) {
            case 'price-low':
                return products.sort((a, b) => a.price - b.price);
            case 'price-high':
                return products.sort((a, b) => b.price - a.price);
            case 'name':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'featured':
            default:
                return products.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return 0;
                });
        }
    }

    displayProducts(products) {
        const productsGrid = document.querySelector('.products-grid');
        
        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>Keine Produkte gefunden</h3>
                    <p>Versuchen Sie es mit anderen Filtereinstellungen.</p>
                </div>
            `;
            return;
        }

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedProducts = products.slice(0, endIndex); // Show all up to current page

        productsGrid.innerHTML = paginatedProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <i class="${product.image}"></i>
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-specs">
                        <div class="spec-item">
                            <i class="fas fa-microchip"></i>
                            <span>${product.specs.cpu}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-tv"></i>
                            <span>${product.specs.gpu}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-memory"></i>
                            <span>${product.specs.ram}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-hdd"></i>
                            <span>${product.specs.storage}</span>
                        </div>
                    </div>
                    <div class="product-performance">
                        ${Object.entries(product.performance).slice(0, 2).map(([key, value]) => 
                            `<div class="perf-badge">${key}: ${value}</div>`
                        ).join('')}
                    </div>
                    <div class="product-footer">
                        <div class="product-price">${product.price.toLocaleString('de-DE')} €</div>
                        <button class="add-to-cart-btn" onclick="cart.addItem(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                            In den Warenkorb
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Show/Hide Load More Button
        const loadMoreContainer = document.querySelector('.load-more-container');
        if (endIndex < products.length) {
            loadMoreContainer.style.display = 'block';
        } else {
            loadMoreContainer.style.display = 'none';
        }
    }

    updateResultsInfo(count) {
        const resultsInfo = document.querySelector('.results-info');
        resultsInfo.textContent = `${count} Gaming PCs gefunden`;
    }

    clearAllFilters() {
        // Reset filters
        this.filters = {
            priceMin: 0,
            priceMax: 5000,
            categories: [],
            gpus: [],
            usage: []
        };

        // Reset UI elements
        document.getElementById('priceRange').value = 5000;
        document.querySelector('.price-display').textContent = 'Bis 5.000 €';
        
        document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
            checkbox.checked = false;
        });

        document.getElementById('sortSelect').value = 'featured';
        this.sortBy = 'featured';
        
        this.currentPage = 1;
        this.applyFilters();
    }

    loadMore() {
        this.currentPage++;
        this.applyFilters();
    }
}

// Search System
class SearchSystem {
    constructor() {
        this.searchOverlay = document.querySelector('.search-overlay');
        this.searchInput = document.querySelector('.search-input');
        
        this.initializeSearch();
    }

    initializeSearch() {
        // Open search
        document.querySelector('.search-btn').addEventListener('click', () => {
            this.openSearch();
        });

        // Close search
        document.querySelector('.search-close').addEventListener('click', () => {
            this.closeSearch();
        });

        // Close on overlay click
        this.searchOverlay.addEventListener('click', (e) => {
            if (e.target === this.searchOverlay) {
                this.closeSearch();
            }
        });

        // Search input
        this.searchInput.addEventListener('input', (e) => {
            this.performSearch(e.target.value);
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.searchOverlay.classList.contains('active')) {
                this.closeSearch();
            }
        });
    }

    openSearch() {
        this.searchOverlay.classList.add('active');
        this.searchInput.focus();
    }

    closeSearch() {
        this.searchOverlay.classList.remove('active');
        this.searchInput.value = '';
    }

    performSearch(query) {
        if (query.length < 2) return;

        const results = products.filter(product => {
            return product.name.toLowerCase().includes(query.toLowerCase()) ||
                   product.category.toLowerCase().includes(query.toLowerCase()) ||
                   product.specs.cpu.toLowerCase().includes(query.toLowerCase()) ||
                   product.specs.gpu.toLowerCase().includes(query.toLowerCase());
        });

        // Update product display with search results
        filter.displayProducts(results);
        filter.updateResultsInfo(results.length);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize global objects
    window.cart = new ShoppingCart();
    window.filter = new ProductFilter();
    window.search = new SearchSystem();

    // Cart Sidebar Controls
    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const cartClose = document.querySelector('.cart-close');

    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });

    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });

    // Load More Button
    document.querySelector('.load-more-btn').addEventListener('click', () => {
        filter.loadMore();
    });

    // Newsletter Form
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('.newsletter-input').value;
        
        if (email) {
            // Newsletter signup logic here
            alert('Vielen Dank für Ihre Anmeldung zum Newsletter!');
            document.querySelector('.newsletter-input').value = '';
        }
    });

    // Checkout Button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.items.length === 0) {
            alert('Ihr Warenkorb ist leer!');
            return;
        }

        // Simple checkout process
        const total = cart.getTotal();
        if (confirm(`Möchten Sie Ihre Bestellung über ${total.toLocaleString('de-DE')} € abschließen?`)) {
            // Redirect to checkout or show checkout form
            alert('Vielen Dank für Ihre Bestellung! Sie werden zur Zahlungsseite weitergeleitet.');
            
            // Clear cart after successful order
            cart.items = [];
            cart.saveCart();
            cart.updateCartDisplay();
            
            // Close cart
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    });

    // Mobile Menu (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Mobile menu toggle logic
            console.log('Mobile menu clicked');
        });
    }

    // Initialize with all products
    filter.applyFilters();

    console.log('JQ-SYSTEMS Shop initialized successfully!');
});

// Navigation Functions
function filterByCategory(category) {
    // Clear existing filters
    filter.clearAllFilters();
    
    // Apply category filter based on category mapping
    const categoryMapping = {
        'gaming': ['High-End Gaming', 'Competitive Gaming'],
        'streaming': ['Streaming', 'Content Creation'],
        'professional': ['Professional'],
        'budget': ['Entry Level']
    };
    
    if (categoryMapping[category]) {
        filter.filters.categories = categoryMapping[category];
        filter.applyFilters();
        
        // Scroll to products
        document.querySelector('.products-section').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update UI to show selected categories
        categoryMapping[category].forEach(cat => {
            const checkbox = document.querySelector(`input[value="${cat}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }
}

function openCustomConfigurator() {
    // Redirect to main page configurator
    window.location.href = 'index.html#configurator';
}

function openBuildAssistant() {
    // Simple build assistant modal
    const modal = document.createElement('div');
    modal.className = 'build-assistant-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this.parentElement)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3>Build Assistant</h3>
                    <button onclick="closeModal(this.closest('.build-assistant-modal'))" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Wofür benötigst du deinen Gaming PC?</h4>
                    <div class="assistant-options">
                        <button class="assistant-btn" onclick="assistantRecommend('gaming')">
                            <i class="fas fa-gamepad"></i>
                            Gaming (1080p - 4K)
                        </button>
                        <button class="assistant-btn" onclick="assistantRecommend('streaming')">
                            <i class="fas fa-video"></i>
                            Streaming & Content Creation
                        </button>
                        <button class="assistant-btn" onclick="assistantRecommend('professional')">
                            <i class="fas fa-briefcase"></i>
                            Professionelle Arbeit
                        </button>
                        <button class="assistant-btn" onclick="assistantRecommend('budget')">
                            <i class="fas fa-euro-sign"></i>
                            Budget Gaming
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    Object.assign(modal.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '3000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });
    
    document.body.appendChild(modal);
}

function assistantRecommend(type) {
    // Close modal and filter by recommendation
    const modal = document.querySelector('.build-assistant-modal');
    if (modal) modal.remove();
    
    filterByCategory(type);
    
    showNotification(`Empfohlene ${type.toUpperCase()} PCs werden angezeigt!`, 'success');
}

function closeModal(modal) {
    if (modal) modal.remove();
}

function toggleMobileMenu() {
    // Mobile menu functionality
    console.log('Mobile menu toggled');
    // TODO: Implement mobile menu if needed
}

// Utility Functions
function formatPrice(price) {
    return `${price.toLocaleString('de-DE')} €`;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        zIndex: '3000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });

    if (type === 'success') {
        notification.style.background = 'var(--accent-green)';
    } else if (type === 'error') {
        notification.style.background = 'var(--neon-pink)';
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}