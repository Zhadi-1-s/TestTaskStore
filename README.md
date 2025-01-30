# TezAL - Online Clothing Store

TezAL is a modern e-commerce web application built with **Angular** and **Angular Material**. It allows users to browse luxury and affordable clothing products, add items to the cart, and manage orders.

---

## 📌 Features

- View a **list of products** (both expensive and affordable).
- View **detailed product information**.
- Add items to the **cart (order list)**.
- Remove items from the **cart**.
- Navigate between **Products, Product Details, and Orders**.
- **Minimalistic black & white theme** for a stylish shopping experience.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone <repository_url>
cd tezAL
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
ng serve
```
**Then open:** `http://localhost:4200/`

---

## 🏛️ Project Architecture

```
📦 tezAL
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📂 main         # Main page (Home)
 ┃ ┃ ┃ ┣ 📂 product      # Product details page
 ┃ ┃ ┃ ┣ 📂 orders       # Shopping cart / Orders page
 ┃ ┃ ┣ 📂 shared
 ┃ ┃ ┃ ┣ 📂 services    # Order service, Product service
 ┃ ┃ ┃ ┣ 📂 interfaces  # Product and Order interfaces
 ┃ ┃ ┣ 📜 app-routing.module.ts # Routes setup
 ┃ ┃ ┣ 📜 app.component.ts       # Root component
 ┃ ┣ 📂 assets        # Images and styles
 ┃ ┣ 📜 styles.css    # Global styles
 ┣ 📜 angular.json    # Angular configuration
 ┣ 📜 package.json    # Dependencies & Scripts
 ┣ 📜 README.md       # Project Documentation
```

---

## 🛤️ Navigation Flow

1️⃣ **Main Page (`/`)**
   - Displays store name & theme.
   - Shows featured expensive and affordable products.
   - Button to navigate to all products.

2️⃣ **Product List (`/products`)**
   - Grid layout (5 per row).
   - Click on a product to see details.

3️⃣ **Product Details (`/product/:id`)**
   - Shows product image, name, price.
   - "Add to Cart" button.
   - "Go to Orders" button.
   - "X" button to return to Products.

4️⃣ **Orders Page (`/orders`)**
   - Displays items added to the cart.
   - Remove individual items from the cart.
   - If the cart is empty, shows "Your cart is empty" message.

---

## 🎨 UI/UX Design

- **Black & white color theme** for a stylish look.
- **Material UI** for a sleek and modern interface.
- **Grid layout** for product display (5 items per row).
- **Minimalistic navigation** for ease of use.

---

## 🔥 Future Improvements

- Implement user authentication.
- Add a real checkout process.
- Fetch products from a backend API.

---

**🎉 Enjoy shopping on TezAL!**

