import type { SalesData, SalesOnClickProps, UseSales } from "./types";
import { useState } from "react";

const dummyData: SalesData[] = [
  {
    img_url: "",
    label: "All Menu",
    name: "all",
    category_id: "1",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Bread",
    name: "bread",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Pizza",
    name: "pizza",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Pastries",
    name: "pastries",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Cake",
    name: "cake",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Burger",
    name: "burger",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "All Menu",
    name: "all",
    category_id: "1",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Bread",
    name: "bread",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Pizza",
    name: "pizza",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Pastries",
    name: "pastries",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Cake22",
    name: "cake",
    category_id: "2",
    sub_category_id: "1",
  },
  {
    img_url: "",
    label: "Burger22",
    name: "burger",
    category_id: "2",
    sub_category_id: "1",
  },
];

const useSales = (): UseSales => {
  const [pageMenu, setPageMenu] = useState<SalesData[] | null>(dummyData);
  const [isLoadingMenu, setLoadingMenu] = useState(false);

  const onClickHandler = async (args: SalesOnClickProps) => {
    setLoadingMenu(true);
    setTimeout(() => {
      // Simulate API call
      console.log(args);
      setPageMenu(dummyData);
      setLoadingMenu(false);
    }, 300);
  };

  return { pageMenu, isLoadingMenu, onClickHandler };
};

// // When endpoint is ready, change the implementation to
// const useSales = (params): UseSales => {
//   const { data, isLoading, refetch } = useQuery(["sales", params], () =>
//     fetchSales(params)
//   );

//   const onClickHandler = (args: SalesOnClickProps) => {
//     refetch({ queryKey: ["sales", args] });
//   };

//   return { pageMenu: data, loading: isLoading, onClickHandler };
// };

export default useSales;
