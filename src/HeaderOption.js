import { Avatar } from "@material-ui/core";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h4 className="headerOption_title">{title}</h4>
    </div>
  );
}

export default HeaderOption;
