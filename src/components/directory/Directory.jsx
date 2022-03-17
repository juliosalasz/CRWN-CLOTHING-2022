import MenuItems from "../menuItem/menuItem";
import { DirectoryMenu } from "./directoryStyles";

const Directory = ({ categories }) => {
  return (
    <DirectoryMenu>
      {categories.section.map(({ id, title, imageUrl, size }) => (
        <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
