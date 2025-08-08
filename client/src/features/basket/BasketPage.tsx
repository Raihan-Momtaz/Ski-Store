import { Grid2, Typography } from "@mui/material";
import { useFetchBasketQuery } from "./basketApi"
import BasketItem from "./BasketItem";

export default function BasketPage() {


    const {data, isLoading} = useFetchBasketQuery();

    if (isLoading) return <Typography> Loading basket...</Typography>

    if (!data) return <Typography variant="h3">Your basket is empty</Typography>
  return (
    <Grid2>
        <Grid2>
            {data.items.map(item => (
                <BasketItem item={item} key={item.productId}/>
            ))}
        </Grid2>
    </Grid2>
  )
}
