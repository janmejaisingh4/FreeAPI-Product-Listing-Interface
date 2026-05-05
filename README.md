# Product Listing Interface

A modern, clean, and responsive product listing interface built with React, TypeScript, and Vite. This application fetches product data from the FreeAPI endpoint and displays it in a beautiful grid layout with filtering capabilities.

## Features

✨ **Modern UI Design**
- Clean and intuitive product card layout
- Beautiful gradient background
- Smooth animations and hover effects
- Fully responsive design for mobile, tablet, and desktop

📱 **Responsive Design**
- Mobile-first approach
- Adaptive grid layout
- Touch-friendly buttons and interactions

🔍 **Product Filtering**
- Filter products by category
- View all products or specific categories
- Real-time filter updates

💰 **Product Information Display**
- Product image with zoom effect on hover
- Original and discounted prices
- Discount percentage badge
- Stock status indicator
- Star ratings
- Product brand and category tags
- Detailed product descriptions

🔄 **Data Management**
- Fetch products from FreeAPI
- Paginated data handling
- Loading states and error handling
- Refresh functionality

## Tech Stack

- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Modern styling with animations

## Project Structure

```
src/
├── components/
│   ├── ProductCard.tsx      # Individual product card component
│   └── ProductListing.tsx   # Main product listing container
├── styles/
│   ├── ProductCard.css      # Product card styling
│   └── ProductListing.css   # Listing layout styling
├── types.ts                 # TypeScript interfaces
├── App.tsx                  # Main app component
├── App.css                  # Global app styles
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## API Integration

This application uses the FreeAPI endpoint:
```
https://api.freeapi.app/api/v1/public/randomproducts
```

The API returns random products with the following structure:
- Product information (title, description, price)
- Discount and pricing details
- Stock information
- Rating and reviews
- Brand and category
- Product images

## Features in Detail

### Product Card Component
Each product is displayed in a card with:
- Product image with hover zoom effect
- Discount badge showing percentage off
- Stock status badge (In Stock, Low Stock, Out of Stock)
- Product title and description
- Star rating
- Original and discounted prices
- Add to Cart button

### Filtering System
- Filter by product categories
- All categories extracted from API data
- View product count for each filter
- Smooth category switching

### UI/UX Enhancements
- Loading spinner while fetching data
- Error message display
- Responsive grid that adapts to screen size
- Smooth transitions and animations
- Color-coded status indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with proper lazy loading potential
- Efficient state management
- Minimal re-renders
- CSS animations for smooth UX
- Fast build times with Vite

## Future Enhancements

- Shopping cart functionality
- Product detail view modal
- Advanced filtering options (price range, rating)
- Search functionality
- Local storage for favorites
- User authentication
- Payment integration

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

Built with ❤️ by the development team
