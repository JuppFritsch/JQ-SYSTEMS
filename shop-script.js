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
    },
    {
        id: 7,
        name: "Gaming Elite RTX 4080 Super",
        category: "High-End Gaming",
        price: 2899,
        image: "fas fa-desktop",
        badge: "Gaming Elite",
        specs: {
            cpu: "Intel i7-13700K",
            gpu: "RTX 4080 Super 16GB",
            ram: "32GB DDR5-6000",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "4K High": "85+ FPS",
            "1440p Ultra": "140+ FPS",
            "Ray Tracing": "Excellent"
        },
        stock: true,
        featured: false
    },
    {
        id: 8,
        name: "Competitive Pro RTX 4060",
        category: "Competitive Gaming",
        price: 1399,
        image: "fas fa-desktop",
        badge: "Esports Ready",
        specs: {
            cpu: "Intel i5-13600K",
            gpu: "RTX 4060 8GB",
            ram: "16GB DDR5-5600",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "1080p Ultra": "120+ FPS",
            "1440p High": "80+ FPS",
            "Competitive": "240+ FPS"
        },
        stock: true,
        featured: false
    },
    {
        id: 9,
        name: "Content Creator Ultra",
        category: "Content Creation",
        price: 3599,
        image: "fas fa-desktop",
        badge: "Creator Pro",
        specs: {
            cpu: "AMD Ryzen 9 7950X3D",
            gpu: "RTX 4090 24GB",
            ram: "64GB DDR5-6000",
            storage: "2TB NVMe SSD"
        },
        performance: {
            "4K Video": "Real-time",
            "3D Rendering": "Ultra Fast",
            "Streaming": "Perfect"
        },
        stock: true,
        featured: false
    },
    {
        id: 10,
        name: "Office Pro Workstation",
        category: "Professional",
        price: 1899,
        image: "fas fa-desktop",
        badge: "Business",
        specs: {
            cpu: "Intel i7-13700",
            gpu: "RTX A2000 12GB",
            ram: "32GB DDR5-4800",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "CAD": "Professional",
            "Multi-tasking": "Excellent",
            "Productivity": "Optimized"
        },
        stock: true,
        featured: false
    },
    {
        id: 11,
        name: "Budget Gaming Starter",
        category: "Entry Level",
        price: 699,
        image: "fas fa-desktop",
        badge: "Starter",
        specs: {
            cpu: "AMD Ryzen 5 5500",
            gpu: "GTX 1650 4GB",
            ram: "16GB DDR4-3200",
            storage: "512GB SSD"
        },
        performance: {
            "1080p Medium": "50+ FPS",
            "Esports": "80+ FPS",
            "Entry Gaming": "Good"
        },
        stock: true,
        featured: false
    },
    {
        id: 12,
        name: "Stream Master Pro",
        category: "Streaming",
        price: 2199,
        image: "fas fa-desktop",
        badge: "Stream Pro",
        specs: {
            cpu: "AMD Ryzen 9 7900X",
            gpu: "RTX 4070 Super 12GB",
            ram: "32GB DDR5-5600",
            storage: "1TB NVMe SSD"
        },
        performance: {
            "1440p Gaming": "100+ FPS",
            "Streaming Quality": "4K60",
            "Multi-stream": "Perfect"
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
                    <div class="product-price">${product.price.toLocaleString('de-DE')} €</div>
                    <div class="product-actions-grid">
                        <button class="add-to-cart-btn" onclick="cart.addItem(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                            Warenkorb
                        </button>
                        <button class="view-details-btn" onclick="showProductDetails(${product.id})">
                            <i class="fas fa-eye"></i>
                            Details
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

    // Add event listeners for featured builds
    document.querySelectorAll('.featured-item').forEach(item => {
        item.addEventListener('click', () => {
            const productName = item.querySelector('h3').textContent;
            let productId = null;
            
            // Find product by name matching
            if (productName.includes('Gaming Beast')) productId = 1;
            else if (productName.includes('Esports Champion')) productId = 2;
            else if (productName.includes('Content Creator')) productId = 3;
            
            if (productId) {
                showProductDetails(productId);
            }
        });
    });

    // Add event listeners for category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            if (category) {
                filterByCategory(category);
            }
        });
    });

    // Add event listeners for custom build options
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', () => {
            const action = card.getAttribute('data-action');
            if (action === 'configurator') {
                openCustomConfigurator();
            } else if (action === 'assistant') {
                openBuildAssistant();
            }
        });
    });

    // Initialize with all products
    filter.applyFilters();

    console.log('JQ-SYSTEMS Shop initialized successfully!');
});

// Navigation Functions
function filterByCategory(category) {
    // Clear existing filters
    filter.clearAllFilters();
    
    // Apply category filter directly with the category name
    console.log('Filtering by category:', category);
    
    // Set the category filter directly
    filter.filters.categories = [category];
    filter.applyFilters();
    
    // Scroll to products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Update UI to show selected category checkbox
    const checkbox = document.querySelector(`input.category-filter[value="${category}"]`);
    if (checkbox) checkbox.checked = true;
}

function openCustomConfigurator() {
    // Open PC Konfigurator modal directly in shop
    const modal = document.createElement('div');
    modal.className = 'pc-configurator-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this.parentElement)">
            <div class="modal-content large-modal" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3><i class="fas fa-cogs"></i> PC Konfigurator</h3>
                    <button onclick="closeModal(this.closest('.pc-configurator-modal'))" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="configurator-content">
                        <div class="config-step active" data-step="1">
                            <h4>Wähle deine CPU</h4>
                            <div class="component-grid">
                                <div class="component-option" data-component="cpu" data-name="Intel i5-13600K" data-price="329">
                                    <div class="component-info">
                                        <h5>Intel i5-13600K</h5>
                                        <p>14 Kerne, bis 5.1 GHz</p>
                                        <span class="component-price">329€</span>
                                    </div>
                                </div>
                                <div class="component-option" data-component="cpu" data-name="Intel i7-13700K" data-price="429">
                                    <div class="component-info">
                                        <h5>Intel i7-13700K</h5>
                                        <p>16 Kerne, bis 5.4 GHz</p>
                                        <span class="component-price">429€</span>
                                    </div>
                                </div>
                                <div class="component-option" data-component="cpu" data-name="Intel i9-13900K" data-price="599">
                                    <div class="component-info">
                                        <h5>Intel i9-13900K</h5>
                                        <p>24 Kerne, bis 5.8 GHz</p>
                                        <span class="component-price">599€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="config-step" data-step="2">
                            <h4>Wähle deine Grafikkarte</h4>
                            <div class="component-grid">
                                <div class="component-option" data-component="gpu" data-name="RTX 4060 Ti" data-price="449">
                                    <div class="component-info">
                                        <h5>RTX 4060 Ti 16GB</h5>
                                        <p>1440p Gaming</p>
                                        <span class="component-price">449€</span>
                                    </div>
                                </div>
                                <div class="component-option" data-component="gpu" data-name="RTX 4070" data-price="649">
                                    <div class="component-info">
                                        <h5>RTX 4070 12GB</h5>
                                        <p>1440p High-End Gaming</p>
                                        <span class="component-price">649€</span>
                                    </div>
                                </div>
                                <div class="component-option" data-component="gpu" data-name="RTX 4090" data-price="1699">
                                    <div class="component-info">
                                        <h5>RTX 4090 24GB</h5>
                                        <p>4K Ultimate Gaming</p>
                                        <span class="component-price">1699€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="config-step" data-step="3">
                            <h4>Konfiguration abschließen</h4>
                            <div class="config-summary">
                                <h5>Deine Auswahl:</h5>
                                <div class="selected-components">
                                    <div class="selected-cpu">CPU: <span>Nicht ausgewählt</span></div>
                                    <div class="selected-gpu">GPU: <span>Nicht ausgewählt</span></div>
                                </div>
                                <div class="total-price">
                                    Gesamtpreis: <span class="price-value">0€</span>
                                </div>
                                <button class="add-custom-build" onclick="addCustomBuildToCart()">
                                    <i class="fas fa-cart-plus"></i>
                                    Custom Build in den Warenkorb
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="configurator-navigation">
                        <button class="nav-btn prev-btn" onclick="previousConfigStep()" disabled>
                            <i class="fas fa-arrow-left"></i> Zurück
                        </button>
                        <div class="step-indicators">
                            <span class="step-dot active" data-step="1"></span>
                            <span class="step-dot" data-step="2"></span>
                            <span class="step-dot" data-step="3"></span>
                        </div>
                        <button class="nav-btn next-btn" onclick="nextConfigStep()">
                            Weiter <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    initializeConfigurator();
}

function openBuildAssistant() {
    const modal = document.createElement('div');
    modal.className = 'build-assistant-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this.parentElement)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3><i class="fas fa-magic"></i> Build Assistant</h3>
                    <button onclick="closeModal(this.closest('.build-assistant-modal'))" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="assistant-intro">
                        <p>Lass mich dir helfen, den perfekten Gaming PC zu finden!</p>
                        <h4>Wofür benötigst du deinen Gaming PC?</h4>
                    </div>
                    <div class="assistant-options">
                        <button class="assistant-btn" onclick="assistantRecommend('gaming')">
                            <i class="fas fa-gamepad"></i>
                            <div class="btn-content">
                                <strong>Gaming (1080p - 4K)</strong>
                                <small>Für alle aktuellen Spiele</small>
                            </div>
                        </button>
                        <button class="assistant-btn" onclick="assistantRecommend('streaming')">
                            <i class="fas fa-video"></i>
                            <div class="btn-content">
                                <strong>Streaming & Content Creation</strong>
                                <small>Videos bearbeiten & streamen</small>
                            </div>
                        </button>
                        <button class="assistant-btn" onclick="assistantRecommend('professional')">
                            <i class="fas fa-briefcase"></i>
                            <div class="btn-content">
                                <strong>Professionelle Arbeit</strong>
                                <small>CAD, 3D-Rendering, Workstation</small>
                            </div>
                        </button>
                        <button class="assistant-btn" onclick="assistantRecommend('budget')">
                            <i class="fas fa-euro-sign"></i>
                            <div class="btn-content">
                                <strong>Budget Gaming</strong>
                                <small>Günstiger Einstieg ins PC Gaming</small>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function assistantRecommend(type) {
    // Close modal and filter by recommendation
    const modal = document.querySelector('.build-assistant-modal');
    if (modal) modal.remove();
    
    filterByCategory(type);
    
    showNotification(`Empfohlene ${type.toUpperCase()} PCs werden angezeigt!`, 'success');
}

// PC Configurator Functions
let currentConfigStep = 1;
let selectedComponents = {
    cpu: null,
    gpu: null
};

function initializeConfigurator() {
    // Add click handlers for component options
    document.querySelectorAll('.component-option').forEach(option => {
        option.addEventListener('click', () => {
            const component = option.dataset.component;
            const name = option.dataset.name;
            const price = parseInt(option.dataset.price);
            
            // Remove previous selection in this category
            document.querySelectorAll(`[data-component="${component}"]`).forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select this option
            option.classList.add('selected');
            selectedComponents[component] = { name, price };
            
            // Update summary
            updateConfigSummary();
            
            // Auto-advance to next step after selection
            setTimeout(() => {
                if (currentConfigStep < 3) {
                    nextConfigStep();
                }
            }, 500);
        });
    });
}

function nextConfigStep() {
    if (currentConfigStep < 3) {
        currentConfigStep++;
        updateConfigStep();
    }
}

function previousConfigStep() {
    if (currentConfigStep > 1) {
        currentConfigStep--;
        updateConfigStep();
    }
}

function updateConfigStep() {
    // Update step visibility
    document.querySelectorAll('.config-step').forEach((step, index) => {
        step.classList.toggle('active', index + 1 === currentConfigStep);
    });
    
    // Update step indicators
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 <= currentConfigStep);
    });
    
    // Update navigation buttons
    document.querySelector('.prev-btn').disabled = currentConfigStep === 1;
    document.querySelector('.next-btn').style.display = currentConfigStep === 3 ? 'none' : 'block';
}

function updateConfigSummary() {
    const cpuSpan = document.querySelector('.selected-cpu span');
    const gpuSpan = document.querySelector('.selected-gpu span');
    const priceSpan = document.querySelector('.price-value');
    
    cpuSpan.textContent = selectedComponents.cpu ? selectedComponents.cpu.name : 'Nicht ausgewählt';
    gpuSpan.textContent = selectedComponents.gpu ? selectedComponents.gpu.name : 'Nicht ausgewählt';
    
    const totalPrice = (selectedComponents.cpu?.price || 0) + (selectedComponents.gpu?.price || 0) + 800; // Base price
    priceSpan.textContent = `${totalPrice}€`;
}

function addCustomBuildToCart() {
    if (!selectedComponents.cpu || !selectedComponents.gpu) {
        showNotification('Bitte wähle CPU und GPU aus!', 'error');
        return;
    }
    
    const customBuild = {
        id: Date.now(), // Unique ID for custom builds
        name: `Custom Build - ${selectedComponents.cpu.name} + ${selectedComponents.gpu.name}`,
        category: 'Custom Build',
        price: (selectedComponents.cpu.price || 0) + (selectedComponents.gpu.price || 0) + 800,
        image: 'fas fa-desktop',
        specs: {
            cpu: selectedComponents.cpu.name,
            gpu: selectedComponents.gpu.name,
            ram: '16GB DDR5-5600',
            storage: '1TB NVMe SSD'
        },
        performance: {
            'Custom': 'Individuell',
            'Gaming': 'Optimiert'
        },
        stock: true,
        featured: false
    };
    
    cart.addItem(customBuild.id, 1);
    
    // Add to products array temporarily for cart functionality
    products.push(customBuild);
    
    closeModal(document.querySelector('.pc-configurator-modal'));
    showNotification('Custom Build wurde zum Warenkorb hinzugefügt!', 'success');
}

// Product Details Modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-details-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this.parentElement)">
            <div class="modal-content product-modal" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3><i class="fas fa-desktop"></i> ${product.name}</h3>
                    <button onclick="closeModal(this.closest('.product-details-modal'))" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="product-detail-content">
                        <div class="product-detail-left">
                            <div class="product-detail-image">
                                <i class="${product.image}"></i>
                                ${product.badge ? `<div class="detail-badge">${product.badge}</div>` : ''}
                            </div>
                            <div class="product-gallery">
                                <div class="gallery-thumb active">
                                    <i class="fas fa-desktop"></i>
                                </div>
                                <div class="gallery-thumb">
                                    <i class="fas fa-microchip"></i>
                                </div>
                                <div class="gallery-thumb">
                                    <i class="fas fa-tv"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div class="product-detail-right">
                            <div class="product-category-badge">${product.category}</div>
                            <h2 class="product-detail-title">${product.name}</h2>
                            
                            <div class="product-specs-detailed">
                                <h4><i class="fas fa-cogs"></i> Technische Spezifikationen</h4>
                                <div class="specs-grid">
                                    <div class="spec-row">
                                        <span class="spec-label"><i class="fas fa-microchip"></i> Prozessor:</span>
                                        <span class="spec-value">${product.specs.cpu}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span class="spec-label"><i class="fas fa-tv"></i> Grafikkarte:</span>
                                        <span class="spec-value">${product.specs.gpu}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span class="spec-label"><i class="fas fa-memory"></i> Arbeitsspeicher:</span>
                                        <span class="spec-value">${product.specs.ram}</span>
                                    </div>
                                    <div class="spec-row">
                                        <span class="spec-label"><i class="fas fa-hdd"></i> Speicher:</span>
                                        <span class="spec-value">${product.specs.storage}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="product-performance-detailed">
                                <h4><i class="fas fa-chart-line"></i> Gaming Performance</h4>
                                <div class="performance-grid">
                                    ${Object.entries(product.performance).map(([game, fps]) => `
                                        <div class="performance-item">
                                            <span class="game-name">${game}</span>
                                            <span class="fps-value">${fps}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="product-features">
                                <h4><i class="fas fa-star"></i> Highlights</h4>
                                <ul class="features-list">
                                    <li><i class="fas fa-check"></i> 3 Jahre Herstellergarantie</li>
                                    <li><i class="fas fa-check"></i> Windows 11 Pro vorinstalliert</li>
                                    <li><i class="fas fa-check"></i> Kostenloser 24h Stress-Test</li>
                                    <li><i class="fas fa-check"></i> Alle Treiber vorinstalliert</li>
                                    <li><i class="fas fa-check"></i> Kostenlose Lieferung</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="product-price-section">
                        <div class="price-info">
                            <span class="price-label">Preis:</span>
                            <span class="price-value">${product.price.toLocaleString('de-DE')} €</span>
                        </div>
                        <div class="price-note">inkl. MwSt. & kostenloser Versand</div>
                    </div>
                    <div class="product-actions">
                        <div class="quantity-selector">
                            <button class="qty-btn" onclick="changeQuantity(-1)">-</button>
                            <input type="number" class="qty-input" value="1" min="1" max="10">
                            <button class="qty-btn" onclick="changeQuantity(1)">+</button>
                        </div>
                        <button class="add-to-cart-detailed" onclick="addDetailedProductToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                            In den Warenkorb
                        </button>
                        <button class="buy-now-btn" onclick="buyNowProduct(${product.id})">
                            <i class="fas fa-bolt"></i>
                            Sofort kaufen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function changeQuantity(delta) {
    const input = document.querySelector('.qty-input');
    const currentValue = parseInt(input.value);
    const newValue = Math.max(1, Math.min(10, currentValue + delta));
    input.value = newValue;
}

function addDetailedProductToCart(productId) {
    const quantity = parseInt(document.querySelector('.qty-input').value);
    cart.addItem(productId, quantity);
    closeModal(document.querySelector('.product-details-modal'));
}

function buyNowProduct(productId) {
    const quantity = parseInt(document.querySelector('.qty-input').value);
    cart.addItem(productId, quantity);
    closeModal(document.querySelector('.product-details-modal'));
    
    // Open cart sidebar
    document.querySelector('.cart-sidebar').classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
    
    showNotification('Produkt hinzugefügt! Warenkorb geöffnet.', 'success');
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