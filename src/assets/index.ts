import close from "./close.png";
import home from "./home.png";
import logout from "./logout.png";
import search from "./search.png";
import settings from "./settings.png";
import menu from "./menu.png"


export default [
    {
        id:5,
        src:close,
        alt:"close"
    },
  {
        id:3,
        src:home,
        alt:"home"
    },
   {
        id:6,
        src:logout,
        alt:"logout"
    },
    {
        id:4,
        src:search,
        alt:"search"
    },
    {
        id:1,
        src:settings,
        alt:"settings"
    },
    {
        id:2,
        src:menu,
        alt:"menu"
    }
].sort((a,b)=>a.id - b.id);