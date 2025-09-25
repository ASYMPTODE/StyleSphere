# StyleSphere

A modern, full-stack e-commerce platform built with React, Node.js, and MongoDB. StyleSphere provides a seamless shopping experience with features like user authentication, product management, shopping cart, and secure payment processing.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Product Catalog**: Browse and search through a comprehensive product collection
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Order Management**: Track your orders and order history
- **Payment Integration**: Secure payment processing with Stripe and Razorpay
- **Admin Panel**: Complete admin interface for managing products, orders, and users
- **Responsive Design**: Mobile-first design built with Tailwind CSS
- **Image Management**: Cloud-based image storage with Cloudinary
- **Email Notifications**: Automated email notifications for orders

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Image cloud storage
- **Nodemailer** - Email sending
- **Stripe & Razorpay** - Payment processing

## 📁 Project Structure

```
StyleSphere/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context providers
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── public/              # Public assets
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── config/             # Database and configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── server.js           # Server entry point
│   └── package.json
├── admin/                  # Admin panel (if separate)
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)
- Cloudinary account (for image storage)
- Stripe and/or Razorpay account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ASYMPTODE/StyleSphere.git
   cd StyleSphere
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   
   # Cloudinary Configuration
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   
   # Payment Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Email Configuration
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   ```

5. **Start the development servers**
   
   Backend server:
   ```bash
   cd backend
   npm run server
   ```
   
   Frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:4000`

## 📱 Usage

### For Customers
1. **Browse Products**: Explore the product catalog with filtering and search options
2. **Add to Cart**: Select products and add them to your shopping cart
3. **Checkout**: Proceed with secure payment using Stripe or Razorpay
4. **Track Orders**: Monitor your order status and history

### For Admins
1. **Product Management**: Add, edit, or remove products
2. **Order Management**: View and manage customer orders
3. **User Management**: Manage customer accounts and permissions

## 🔧 Configuration

### Payment Setup
- **Stripe**: Add your Stripe publishable and secret keys
- **Razorpay**: Configure Razorpay key ID and secret

### Email Setup
Configure SMTP settings for order confirmation emails and notifications.

### Image Storage
Set up Cloudinary for handling product images and user avatars.

## 🚀 Deployment

### Frontend (Vercel)
The frontend can be deployed to Vercel using the included `vercel.json` configuration.

### Backend (Vercel/Railway/Heroku)
The backend includes deployment configurations for various platforms.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Thanks to all contributors who helped shape this project
- Built with modern web technologies and best practices
- Designed for scalability and performance

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Made with ❤️ for the e-commerce community**
