type MenuItemReturnProps = {
  category_id: string;
  sub_category_id: string;
};

export interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  sub_category_id: string;
  category_id: string;
  callback: (args: MenuItemReturnProps) => void;
  className?: string;
}
