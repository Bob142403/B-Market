import { Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { ReactNode } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

interface Props {
  children: ReactNode;
}

function NavBar({ children }: Props) {
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
        <div className="site-layout-content my-[30px]">{children}</div>
      </Content>
    </Layout>
  );
}

export default NavBar;
