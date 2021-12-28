import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon" src={user.photoURL}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h4 className="headerOption_title">{title}</h4>
    </div>
  );
}

export default HeaderOption;
