import React from "react";
import ErrorPage from "../../pages/404";
import HomePage from "../../pages/HomePage";
import LikePage from "../../pages/LikePage";
import ShortsPage from "../../pages/ShortsPage";
import HistoryPage from "../../pages/HistoryPage";
import LibraryPage from "../../pages/LibraryPage";
import DownloadPage from "../../pages/DownloadPage";
import PlaylistPage from "../../pages/PlaylistPage";
import TrendingPage from "../../pages/TrendingPage";
import PlayVideoPage from "../../pages/PlayVideoPage";
import WatchLaterPage from "../../pages/WatchLaterPage";
import SubscriptionsPage from "../../pages/SubscriptionsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Main({ isHeader, currentTab, setCurrentTab }) {

  const obj = {
    isHeader, currentTab, setCurrentTab
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage {...obj} />} />
        <Route path="/shorts" element={<ShortsPage {...obj} />} />
        <Route path="/subscription" element={<SubscriptionsPage {...obj} />} />
        <Route path="/library" element={<LibraryPage {...obj} />} />
        <Route path="/history" element={<HistoryPage {...obj} />} />
        <Route path="/watchlater" element={<WatchLaterPage {...obj} />} />
        <Route path="/downloads" element={<DownloadPage {...obj} />} />
        <Route path="/like" element={<LikePage {...obj} />} />
        <Route path="/playlists" element={<PlaylistPage {...obj} />} />
        <Route path="/trending" element={<TrendingPage {...obj} />} />
        <Route path="/404" element={<ErrorPage {...obj} />} />
        <Route path="/video" element={<PlayVideoPage {...obj} />} />
      </Routes>
    </BrowserRouter>

  );
}