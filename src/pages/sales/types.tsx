export type SalesData = {
  img_url: string;
  label: string;
  name: string;
  category_id: string;
  sub_category_id: string;
};

export type SalesOnClickProps = {
  category_id: string;
  sub_category_id: string;
};

export interface UseSales {
  isLoadingMenu: boolean;
  pageMenu: SalesData[] | null;
  onClickHandler: (arg: SalesOnClickProps) => void;
}
