import createClasses from "../utils/create-classes";
import ProfileImage from "../assets/profileImage.png";

export default function Avatar({
  src = ProfileImage,
  className = "h-11 w-11 ",
}) {
  const defaultClassName = "rounded-full ";
  const classes = createClasses(defaultClassName, className);
  return <img src={src || ProfileImage} alt="user" className={classes} />;
}
