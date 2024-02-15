import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import Layout from "./components/layout/Layout";
import SongsPage from "./pages/SongsPage";
import AlbumsPage from "./pages/AlbumsPage";
import ArtistPage from "./pages/ArtistPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Player from "./components/items/player/Player";


const App = () => {

  return (
    <Provider store={store}>
    <BrowserRouter>
        <Layout/>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="users" element={<UserPage/>}></Route>
            <Route path='songs' element={<SongsPage/>}></Route>
            <Route path='albums' element={<AlbumsPage/>}></Route>
            <Route path='artists' element={<ArtistPage/>}></Route>
            <Route path='*' element={<Navigate replace to='songs'/>}></Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
