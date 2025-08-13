import { Box, FormControl, FormControlLabel, Paper,  Radio, FormGroup } from "@mui/material";
import { useFetchFiltersQuery } from "./catalogApi"
import { Checkbox } from "@mui/material";
import Search from "./Search";


const sortOptions = [
    {value:'name', label: 'Alphabetical'},
    {value:'priceDesc', label: 'Price: High to low'},
    {value: 'price', label: 'Price: Low to high'},
]

export default function Filters() {
    const {data} = useFetchFiltersQuery();

  return (
    <Box display='flex' flexDirection='column' gap={3}>
        <Paper>
            <Search/>
        </Paper>
        <Paper sx={{p:3}}>
            <FormControl>
                {sortOptions.map(({value,label}) => (
                <FormControlLabel
                key={label}
                control={<Radio sx={{py: 0.7}}/>}
                label={label}
                value={value}
                />
            ))}
            </FormControl>
        </Paper>
        <Paper sx={{p:3}}>
            <FormGroup>
            {data && data.brands.map(item => (
                <FormControlLabel
                    key={item}
                    control={<Checkbox color='secondary' sx={{py: 0.7, fontSize: 40}}/>}
                    label={item}
                />
            ))}
            </FormGroup>
        </Paper>
                <Paper sx={{p:3}}>
                <FormGroup>
                    {data && data.types.map(item => (
                <FormControlLabel
                    key={item}
                    control={<Checkbox color='secondary' sx={{py: 0.7, fontSize: 40}}/>}
                    label={item}
                />
            ))}
            </FormGroup>
        </Paper>
    </Box>
  )
}
