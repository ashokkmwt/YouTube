import Home from "../../../assets/icons/home.svg";
import Shorts from "../../../assets/icons/shorts.svg";
import Subscriptions from "../../../assets/icons/subscriptions.svg";
import Library from "../../../assets/icons/library.svg";
import History from "../../../assets/icons/history.svg";
import WatchLater from "../../../assets/icons/watchLater.svg";
import Downloads from "../../../assets/icons/downloads.svg";
import LikedVideos from "../../../assets/icons/likedVideos.svg";
import SavedPlaylist from "../../../assets/icons/savedPlaylist.svg";
import ShowMore from "../../../assets/icons/showMore.svg";
import YTMusic from "../../../assets/icons/ytMusic.svg";
import Trending from "../../../assets/icons/trending.svg";
import Music from "../../../assets/icons/music.svg";
import Films from "../../../assets/icons/films.svg";
import Live from "../../../assets/icons/live.svg";
import Gaming from "../../../assets/icons/gaming.svg";
import News from "../../../assets/icons/news.svg";
import Sport from "../../../assets/icons/sport.svg";
import Learning from "../../../assets/icons/learning.svg";
import Fashionandbeauty from "../../../assets/icons/fashionandbeauty.svg";
import YtPremium from "../../../assets/icons/ytPremium.svg";
import CreatorStudio from "../../../assets/icons/creatorStudio.svg";
import YTKids from "../../../assets/icons/ytKids.svg";
import YTTV from "../../../assets/icons/ytTV.svg";
import Settings from "../../../assets/icons/settings.svg";
import ReportHistory from "../../../assets/icons/reportHistory.svg";
import Help from "../../../assets/icons/help.svg";
import SendFeedback from "../../../assets/icons/sendFeedback.svg";

const topTabs = [
  { image: Home, tabName: "Home", },
  { image: Shorts, tabName: "Shorts", },
  { image: Subscriptions, tabName: "Subscriptions", },
  { image: Library, tabName: "Library", },
  { image: History, tabName: "History", },
  { image: WatchLater, tabName: "Watch Later", },
  { image: Downloads, tabName: "Downloads", },
  { image: LikedVideos, tabName: "Liked Videos", },
  { image: SavedPlaylist, tabName: "Saved Playlist", },
  { image: ShowMore, tabName: "Show More", },
  { image: Trending, tabName: "Trending", },
  { image: Music, tabName: "Music", },
  { image: Films, tabName: "Films", },
  { image: Live, tabName: "Live", },
  { image: Gaming, tabName: "Gaming", },
  { image: News, tabName: "News", },
  { image: Sport, tabName: "Sport", },
  { image: Learning, tabName: "Learning", },
  { image: Fashionandbeauty, tabName: "Fashion & beauty", },
  { image: YtPremium, tabName: "YouTube Premium" },
  { image: CreatorStudio, tabName: "Creator Studio", },
  { image: YTMusic, tabName: "YouTube Music", },
  { image: YTKids, tabName: "YouTube Kids", },
  { image: YTTV, tabName: "YouTube TV", },
  { image: Settings, tabName: "Settings", },
  { image: ReportHistory, tabName: "Report history", },
  { image: Help, tabName: "Help", },
  { image: SendFeedback, tabName: "Send feedback", },
];

const about = [
  {
    p1: "About Press Copyright",
    p2: "Contact Us Creator Advertise",
    p3: "Developers",
  },
  {
    p1: "Terms Privacy Policy & Safety",
    p2: "How YouTube Works",
    p3: "Test new features",
  },
];

export {
  topTabs,
  about,
};