// components
import OrderItem from "./order-item";
// types
import { OrdersContentProps } from "@/data/types";

const OrdersContent = ({ orders }: OrdersContentProps) => {
  if (orders.length === 0)
    return (
      <div className="w-full border rounded-lg border-gray-100 p-4 flex flex-col items-center justify-center mt-4">
        No Orders Found
      </div>
    );

  return (
    <div className="w-full rounded-lg p-4 flex flex-col items-center justify-start gap-4 mt-4">
      {orders.map((o) => (
        <OrderItem order={o} key={o.id} />
      ))}
    </div>
  );
};

export default OrdersContent;
