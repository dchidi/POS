type ProductItemReturnProps = {
  category_id: string;
  sub_category_id: string;
  product_id: string;
};

export interface ProductItemProps {
  image_url: string;
  label: string;
  price: number;
  sub_category_id: string;
  category_id: string;
  callback?: (args: ProductItemReturnProps) => void;
  className?: string;
  quantity_left?: number;
  product_id: string;
}
