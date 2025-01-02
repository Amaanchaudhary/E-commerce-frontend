import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import { useEffect } from "react";
import { findProducts } from "../../../state/product/Action";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const { product } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      maxPrice: 10000,
      minPrice: 0,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 100,
      stock: "",
    };
    dispatch(findProducts(data));
  }, []);

  const under599 = product.products?.content?.filter(
    (item) =>
      item?.discountedPrice <= "599" && item?.category.parentCategory == "clothing"
  );

  const footwear = product.products?.content?.filter(
    (item) => item?.category.parentCategory.name == "footwear"
  );

  const Kids = product.products?.content?.filter(
    (item) => item?.category.parentCategory.parentCategory.name == "kids"
  );

  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex-col justify-center px-5  lg:px-10">
        {under599?.length > 0 && (
          <HomeSectionCarousel
            data={under599}
            sectionName={"Clothing Under 599"}
          />
        )}
        {footwear?.length > 0 && (
          <HomeSectionCarousel
            data={footwear}
            sectionName={"Trending Footwears"}
          />
        )}

        {Kids?.length > 0 && (
          <HomeSectionCarousel data={Kids} sectionName={"Kids Wear"} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
