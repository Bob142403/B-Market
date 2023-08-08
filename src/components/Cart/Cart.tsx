import {
  Badge,
  Button,
  Drawer,
  InputNumber,
  List,
  Typography,
  message,
} from "antd";
import Icon, { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cart-selector";
import {
  deleteFromCart,
  setCart,
  setQuantityById,
} from "../../store/cart/cart-reducer";

const { Text } = Typography;

function Cart() {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const total = useMemo(() => {
    return cart.reduce((sum, elem) => sum + elem.price * elem.quantity, 0);
  }, [cart]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteProduct = (id: number) => {
    dispatch(deleteFromCart(id));
  };
  const setCount = (id: number, value: number | null) => {
    dispatch(setQuantityById({ id, value }));
  };

  const buyAllInCart = () => {
    dispatch(setCart([]));
    messageApi.success({
      content: `You bought all these products for ${total}$`,
    });
    onClose();
  };

  return (
    <>
      {contextHolder}
      <Badge count={cart.length}>
        <Icon
          onClick={showDrawer}
          className="text-xl"
          component={
            ShoppingCartOutlined as React.ForwardRefExoticComponent<unknown>
          }
        />
      </Badge>
      <Drawer
        title="Cart"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
              <div className="flex justify-between items-center w-full">
                <div className="w-36">{item.title}</div>
                <span>{item.price}$</span>
                <InputNumber
                  min={1}
                  max={item.maxCount}
                  defaultValue={1}
                  onChange={(value) => setCount(item.id, value)}
                />
                <span>{item.price * item.quantity}$</span>
                <Icon
                  onClick={() => deleteProduct(item.id)}
                  className="cursor-pointer text-red-600 hover:text-red-500 text-xl"
                  component={
                    DeleteOutlined as React.ForwardRefExoticComponent<unknown>
                  }
                />
              </div>
            </List.Item>
          )}
        />
        {!total ? (
          <></>
        ) : (
          <div className="flex justify-between mt-3">
            <Text strong>Total: {total}$</Text>
            <Button type="dashed" onClick={buyAllInCart}>
              Buy
            </Button>
          </div>
        )}
      </Drawer>
    </>
  );
}

export default Cart;
