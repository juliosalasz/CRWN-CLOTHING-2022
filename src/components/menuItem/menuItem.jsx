import {
  MenuItem,
  Content,
  Title,
  Subtitle,
  BackgroundImage,
} from "./menuItemStyles";

const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <MenuItem size={size}>
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItem>
  );
};

export default MenuItems;
