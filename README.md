# 🎬 Netflix Clone

A modern, responsive Netflix Clone built with **React**, **Tailwind CSS**, **Firebase Authentication**, and the **TMDB API** for dynamic movie and TV content.

---

## 🚀 Features

- 🔐 **User Authentication** with Firebase (Sign Up / Sign In / Logout)
- 🎞️ **Hero Banner** with Random Trending
- 🔍 **Live Search** with smooth transitions and filtering
- 📺 **Browse by Category** (Trending, Top Rated, Now Playing, Upcoming, etc.)
- 🌐 **Search by Movie / TV / All Types**
- 🎥 **Individual Player Page** for content playback
- 📱 **Fully Responsive** (mobile to desktop)
- 🖼️ **Skeleton Loaders** for smooth UX
---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Auth](https://firebase.google.com/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## 🔧 Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/VicegetentPrince/netflix-clone.git
cd netflix-clone
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Firebase**

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a project → Enable Authentication → Email/Password
- Add your Firebase config in a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
...
```
4. **Set up TMDB**
- Get your token from [TMDB API](https://developer.themoviedb.org/).
- Add Your Bearer Token to `.env` file:

```env
VITE_TMDB_BEARER_TOKEN=your_tmdb_bearer_token
```

5. **Run locally**

```bash
npm run dev
```

---

## 📁 Folder Structure

```
src/
│
├── components/       # Reusable UI components (Navbar, Footer, etc.)
├── pages/            # Home, Login, Player, etc.
├── assets/           # Static assets and images
├── firebase.js       # Firebase config and auth functions
└── App.jsx           # App routing and structure
...
```

---

## 🪪 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## ✨ Acknowledgements

- [TMDB API](https://www.themoviedb.org/)
- [Firebase](https://firebase.google.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Inspired by the real Netflix UI.

---

## 👨‍💻 Author

 **Muhammad Muneeb Shahzad ([VicegerentPrince](https://github.com/VicegerentPrince))**

---

## ⭐️ Show your support

If you like this project, give it a ⭐ on GitHub!
