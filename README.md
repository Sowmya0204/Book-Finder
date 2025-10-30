<div align="center">

# 📚 Book Finder

### Your Personal Library Search Engine

A sleek and modern web application to discover books by title or author using the Open Library API.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://book-finder-avyfeyagb-loya-sowmyas-projects.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- 🔍 **Smart Search** - Search by book title or author name
- 🎨 **Modern UI** - Beautiful dark theme with cyan accents
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🌐 **Live Data** - Real-time results from Open Library API
- 🖼️ **Book Covers** - High-quality cover images for visual browsing

## 🚀 Live Demo

**[View Live App →](https://book-finder-avyfeyagb-loya-sowmyas-projects.vercel.app/)**

## 📸 Screenshots

![Book Finder Homepage](https://private-user-images.githubusercontent.com/204294972/507464844-66622df0-4fe8-4ce8-b591-cfb62056ffdb.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjE4MDU4ODAsIm5iZiI6MTc2MTgwNTU4MCwicGF0aCI6Ii8yMDQyOTQ5NzIvNTA3NDY0ODQ0LTY2NjIyZGYwLTRmZTgtNGNlOC1iNTkxLWNmYjYyMDU2ZmZkYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAzMFQwNjI2MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NGI3NWM2NTU2NjIyY2I1Mzg2MWMwZDU5MzNiZTIxZThhNDFjYzlkMGY1YzQzY2YyNTkxNTY1MzAxODdiNmM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GdT8v0Tl6ALyjyVjwPh5Pb0L6nzWLmDWjYgp64H25Wk)


## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling & Design |
| **Vite** | Build Tool & Dev Server |
| **Open Library API** | Book Data Source |
| **Vercel** | Hosting & Deployment |

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/Sowmya0204/Book-Finder.git
   cd Book-Finder
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production
```bash
npm run build
npm run preview
```

The optimized build will be in the `dist` folder.

## 📁 Project Structure
```
Book-Finder/
├── components/          # React components
│   ├── BookCard.tsx    # Individual book display
│   ├── BookList.tsx    # Grid of books
│   ├── SearchBar.tsx   # Search input & filters
│   ├── Loader.tsx      # Loading spinner
│   └── NoResults.tsx   # Empty state
├── services/           # API services
│   └── openLibraryService.ts
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── types.ts            # TypeScript definitions
└── index.css           # Global styles
```

## 🎯 Usage

1. **Search by Title**: Select "Title" and enter a book name (e.g., "Harry Potter")
2. **Search by Author**: Select "Author" and enter an author name (e.g., "J.K. Rowling")
3. **View Results**: Click on any book card to view more details on Open Library
4. **Browse**: Scroll through the responsive grid of results

## 🌟 Key Features Explained

### Search Functionality
- Toggle between title and author search
- Real-time API integration with Open Library
- Displays up to 20 results per search

### User Experience
- Smooth animations and transitions
- Hover effects on book cards
- Loading states during API calls
- Error handling with retry option

### Responsive Design
- Mobile-first approach
- Grid layout adapts from 2 to 6 columns
- Touch-friendly interface

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) for the comprehensive book database
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [Vercel](https://vercel.com/) for seamless deployment


<div align="center">

Made with ❤️ and ☕

⭐ Star this repo if you found it helpful!

</div>
