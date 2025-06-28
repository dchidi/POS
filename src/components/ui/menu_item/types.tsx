import type { SalesData } from "../../../pages/sales/types";

type MenuItemReturnProps = {
  category_id: string;
  sub_category_id: string;
};

export interface MenuItemProps extends SalesData {
  isActive: boolean;
  callback: (args: MenuItemReturnProps) => void;
  className?: string;
  icon?: React.ReactNode;
}
