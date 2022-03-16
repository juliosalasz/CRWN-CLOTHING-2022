import {
  HomePages,
  DirectoryMenu,
  MenuItem,
  Content,
  Title,
  Subtitle,
} from "./homePageStyles";

const HomePage = () => {
  return (
    <HomePages>
      <DirectoryMenu>
        <MenuItem>
          <Content>
            <Title> HATS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title> JACKETS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title> SHOES</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>WOMENS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>MENS</Title>
            <Subtitle>SHOP NOW</Subtitle>
          </Content>
        </MenuItem>
      </DirectoryMenu>
    </HomePages>
  );
};

export default HomePage;
