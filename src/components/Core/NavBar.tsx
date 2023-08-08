import { Layout, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import Cart from "../Cart/Cart";

const { Header, Content } = Layout;
const { Title } = Typography;

function NavBar() {
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header className="flex items-center sticky top-0 z-[1]">
        <div className="flex justify-between w-full items-center">
          <Title
            className="cursor-pointer"
            level={4}
            onClick={() => navigate("/")}
          >
            B-Market
          </Title>
          <Cart />
        </div>
      </Header>
      <Content className="px-[30px]">
        <div className="site-layout-content my-[30px]">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}

export default NavBar;
