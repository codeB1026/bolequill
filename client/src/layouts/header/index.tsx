import DarkMode from "../../components/dark_mode";
import Logo from "../../components/logo";




const Header:any  = () => (
  <div className="w-full flex items-center justify-between ">
        <Logo title="BoleQuill" />
        <DarkMode />
    </div>
  
);

export default Header;
