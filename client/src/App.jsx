import { Routes, Route, Navigate } from "react-router-dom";
import { Auth, Chat, WalletPage, Home } from "./pages";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chats" element={<Chat />} />
        <Route path='/wallet' element={<WalletPage/>} />
        <Route path='/home' element={<Home/>} />
        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
