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

  const mens = product.products?.content?.filter(
    (item) => item?.category.parentCategory.parentCategory.name == "men"
  );

  const womens = product.products?.content?.filter(
    (item) => item?.category.parentCategory.parentCategory.name == "women"
  );

  console.log(mens, "mens");

  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex-col justify-center px-5  lg:px-10">
        <HomeSectionCarousel data={mens} sectionName={"Men's Clothing"} />
        <HomeSectionCarousel data={womens} sectionName={"Women's Clothing"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default Homepage;
