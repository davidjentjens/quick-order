import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DishCard from '../components/DishCard';
import { Dish } from '../interfaces/Dish';

interface DishListProps {
    dishes: Dish[];
}

export function DishList({ dishes }: DishListProps) {
    return (
        <div style={{ padding: '16px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container alignItems={'flex-start'} spacing={{ xs: 2, md: 3 }}>
                    {dishes.map((dish, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                            <DishCard {...dish} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )

}