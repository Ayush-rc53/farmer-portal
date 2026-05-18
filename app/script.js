// --- INDIAN PREMIUM PRODUCE DATABASE IN ₹ WITH 100% VERIFIED IMAGES ---
const productsData = [


    {
        id: 3,
        name: "Premium Devgad Alphonso Mangoes",
        category: "fruits",
        price: 1200,
        fresh: 95,
        source: "Sahyadri Permaculture",
        img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80" // Yellow mangoes
    },
    {
        id: 4,
        name: "Fresh Hydroponic Spinach Leaves",
        category: "vegetables",
        price: 90,
        fresh: 98,
        source: "Nilgiri Highlands",
        img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80" // Spinach leaves
    },
    {
        id: 5,
        name: "Fresh watermelon",
        category: "honey",
        price: 680,
        fresh: 100,
        source: "Sahyadri Permaculture",
        img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80" // Honey drip
    },

    {
        id: 8,
        name: "Heirloom Basmati Rice Grain (5kg)",
        category: "grains",
        price: 850,
        fresh: 99,
        source: "Golden Acres",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80" // Raw basmati rice
    },
    {
        id: 9,
        name: "Ooty English Baby Carrots (1kg)",
        category: "vegetables",
        price: 140,
        fresh: 96,
        source: "Nilgiri Highlands",
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80" // Orange carrots
    },
    {
        id: 10,
        name: "Organic Malabar Seedless Papaya",
        category: "fruits",
        price: 110,
        fresh: 94,
        source: "Sahyadri Permaculture",
        img: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=500&q=80" // Fresh sliced papaya (Fixed)
    },
    {
        id: 11,
        name: "A2 Organic Paneer Block (400g)",
        category: "dairy",
        price: 280,
        fresh: 99,
        source: "Sahyadri Permaculture",
        img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=500&q=80" // Raw white cheese cubes (Fixed)
    },

    {
        id: 13,
        name: "Fresh Hydroponic Salad Greens Box",
        category: "vegetables",
        price: 220,
        fresh: 99,
        source: "Nilgiri Highlands",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" // Mixed salad greens (Fixed)
    },
    {
        id: 14,
        name: "Coorg Hill Filter Coffee Beans",
        category: "grains",
        price: 420,
        fresh: 100,
        source: "Sahyadri Permaculture",
        img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80" // Roasted coffee beans
    },
    {
        id: 15,
        name: "Organic Lakadong Turmeric Powder",
        category: "herbs",
        price: 210,
        fresh: 99,
        source: "Sahyadri Permaculture",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80" // Turmeric powder (Fixed)
    },
    {
        id: 16,
        name: "Free Range Kadaknath Country Eggs",
        category: "dairy",
        price: 360,
        fresh: 98,
        source: "Golden Acres",
        img: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=500&q=80" // Brown eggs
    },
    {
        id: 17,
        name: "Natural Lychee Infused Honey",
        category: "honey",
        price: 540,
        fresh: 100,
        source: "Golden Acres",
        img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=500&q=80" // Honey jar 2
    },
    {
        id: 18,
        name: "Crisp Native Nagpur Oranges",
        category: "fruits",
        price: 190,
        fresh: 94,
        source: "Golden Acres",
        img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80" // Fresh Oranges
    },
    {
        id: 19,
        name: "Fresh Organic Ash Gourd Block",
        category: "vegetables",
        price: 85,
        fresh: 97,
        source: "Nilgiri Highlands",
        img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80" // Green gourd/melon
    },

];

let globalCart = [];

// --- INITIALIZER MAPS ---
document.addEventListener("DOMContentLoaded", () => {
    renderMarketplace(productsData);
    initNavbarScroll();
    initCartMechanics();
    initFarmerFilters();
    initSearchLogic();
});

// --- RENDER FUNCTION ---
function renderMarketplace(items) {
    const targetGrid = document.getElementById("productGrid");
    if (!targetGrid) return;

    if (items.length === 0) {
        targetGrid.innerHTML = `<div class="empty-cart-msg" style="grid-column: 1/-1">No luxury provisions match your filter parameters.</div>`;
        return;
    }

    targetGrid.innerHTML = items.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-img-holder">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
                <span class="freshness-tag"><i class="fa-solid fa-sparkles"></i> ${product.fresh}% Verified</span>
            </div>
            <div class="product-body">
                <span class="product-source">${product.source}</span>
                <h4>${product.name}</h4>
                <div class="product-action-row">
                    <span class="product-price">₹${product.price}</span>
                    <button class="btn-add-cart" onclick="appendToCart(${product.id})" aria-label="Add to basket">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// --- NAV INTERACTION CONTROL ---
function initNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let activeId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 160;
            if (window.scrollY >= sectionTop) {
                activeId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeId}`) {
                link.classList.add("active");
            }
        });
    });
}

// --- MICRO ENGINE CART FUNCTIONALITIES ---
function initCartMechanics() {
    const cartToggle = document.getElementById("cartToggle");
    const closeCart = document.getElementById("closeCart");
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("sidebarOverlay");

    const toggle = () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
    };

    if (cartToggle) cartToggle.addEventListener("click", toggle);
    if (closeCart) closeCart.addEventListener("click", toggle);
    if (overlay) overlay.addEventListener("click", toggle);
}

window.appendToCart = function (productId) {
    const structuralItem = productsData.find(p => p.id === productId);
    if (!structuralItem) return;

    const match = globalCart.find(item => item.id === productId);
    if (match) {
        match.qty += 1;
    } else {
        globalCart.push({ ...structuralItem, qty: 1 });
    }

    refreshBasketUI();
    triggerMiniToast(structuralItem.name);
};

window.removeFromCart = function (productId) {
    globalCart = globalCart.filter(item => item.id !== productId);
    refreshBasketUI();
}

function refreshBasketUI() {
    const cartCountLabel = document.querySelector(".cart-count");
    const container = document.getElementById("cartItemsContainer");
    const computationalTotal = document.getElementById("cartTotalValue");

    const totalCount = globalCart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = globalCart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCountLabel.textContent = totalCount;
    computationalTotal.textContent = `₹${totalPrice}`;

    if (globalCart.length === 0) {
        container.innerHTML = `<div class="empty-cart-msg">Your basket is currently empty.</div>`;
        return;
    }

    container.innerHTML = globalCart.map(item => `
        <div class="basket-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="basket-details">
                <h5>${item.name}</h5>
                <span>₹${item.price} x ${item.qty}</span>
            </div>
            <button class="basket-remove" onclick="removeFromCart(${item.id})"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `).join('');
}

// --- DYNAMIC LOCATION FILTERS FOR FARM CARDS ---
function initFarmerFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".farmer-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const selectedLocation = btn.getAttribute("data-location");

            cards.forEach(card => {
                if (selectedLocation === "all" || card.getAttribute("data-loc") === selectedLocation) {
                    card.style.display = "block";
                    setTimeout(() => card.style.opacity = "1", 50);
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => card.style.display = "none", 400);
                }
            });
        });
    });
}

// --- SEARCH COMPONENT ---
function initSearchLogic() {
    const heroSearchInput = document.getElementById("heroSearchInput");
    const heroSearchBtn = document.getElementById("heroSearchBtn");
    const marketSearch = document.getElementById("marketSearch");
    const categoryCards = document.querySelectorAll(".category-card");

    const processHeroSearch = () => {
        const query = heroSearchInput.value.toLowerCase().trim();
        if (query) {
            const filtered = productsData.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
            renderMarketplace(filtered);
            document.getElementById("marketplace").scrollIntoView({ behavior: "smooth" });
        }
    };

    if (heroSearchBtn) heroSearchBtn.addEventListener("click", processHeroSearch);

    if (marketSearch) {
        marketSearch.addEventListener("input", (e) => {
            const val = e.target.value.toLowerCase();
            const matchingData = productsData.filter(p => p.name.toLowerCase().includes(val) || p.source.toLowerCase().includes(val));
            renderMarketplace(matchingData);
        });
    }

    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const targetedCat = card.getAttribute("data-category");
            const isolatedSelection = productsData.filter(p => p.category === targetedCat);
            renderMarketplace(isolatedSelection);
            document.getElementById("marketplace").scrollIntoView({ behavior: "smooth" });
        });
    });
}

// --- REUSABLE MICRO INTERACTION ELEMENT ---
function triggerMiniToast(itemName) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "40px";
    toast.style.left = "40px";
    toast.style.background = "#0f2d24";
    toast.style.color = "white";
    toast.style.padding = "16px 28px";
    toast.style.borderRadius = "12px";
    toast.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    toast.style.zIndex = "2000";
    toast.style.fontSize = "14px";
    toast.style.fontWeight = "600";
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
    toast.style.transition = "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #dca353; margin-right: 10px;"></i> Added ${itemName} to basket.`;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        toast.style.transform = "translateY(30px)";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}