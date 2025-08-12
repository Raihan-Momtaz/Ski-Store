
import { Grid2 } from "@mui/material";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";
import Filters from "./FIlters";





export default function Catalog() {
 const {data, isLoading} = useFetchProductsQuery();
 if(isLoading || !data) return <div>Loading...</div>
  return (
    <Grid2 container spacing={4}>
        <Grid2 size={3}>
            <Filters/>
        </Grid2 >
        <Grid2 size={9}>
          <ProductList products={data}/>
        </Grid2>
    </Grid2>
  )
}
