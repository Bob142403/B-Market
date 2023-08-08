import { useMemo } from "react";
import { InputNumber, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import useGetCategories from "@/hooks/api/categories/use-get-categories";
import {
  setSelectedBrands,
  setSelectedCategories,
  setMaxPrice,
  setMinPrice,
} from "@/store/filters/filters-reducer";
import {
  getSelectedBrands,
  getSelectedCategories,
  getMaxPrice,
  getMinPrice,
} from "@/store/filters/filters-selector";
import { getBrands } from "@/store/brand/brand-selector";

function FilterProduct() {
  const categories = useGetCategories();
  const dispatch = useDispatch();

  const selectedCategories = useSelector(getSelectedCategories);
  const selectedBrands = useSelector(getSelectedBrands);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const brands = useSelector(getBrands);

  const categoriesFilter = useMemo(
    () =>
      categories.data?.map((elem: string) => ({
        label: elem,
        value: elem,
      })),
    [categories.data]
  );
  const brandsFilter = useMemo(
    () =>
      brands?.map((elem: string) => ({
        label: elem,
        value: elem,
      })),
    [brands]
  );

  return (
    <div className="w-1/6 min-w-[16%]">
      <Select
        allowClear
        mode="multiple"
        className="w-full"
        placeholder="Please select Categories"
        defaultValue={selectedCategories}
        options={categoriesFilter}
        onChange={(value) => {
          dispatch(setSelectedCategories(value));
        }}
      />
      <div className="flex justify-between mt-5">
        <InputNumber
          min={0}
          max={100000}
          placeholder="От 0"
          defaultValue={minPrice}
          onChange={(value) => dispatch(setMinPrice(value))}
        />
        <InputNumber
          min={0}
          max={100000}
          defaultValue={maxPrice}
          placeholder="До 100000"
          onChange={(value) => dispatch(setMaxPrice(value))}
        />
      </div>
      <Select
        allowClear
        className="w-full mt-5"
        mode="multiple"
        placeholder="Please select Brands"
        defaultValue={selectedBrands}
        options={brandsFilter}
        onChange={(value) => {
          dispatch(setSelectedBrands(value));
        }}
      />
    </div>
  );
}

export default FilterProduct;
