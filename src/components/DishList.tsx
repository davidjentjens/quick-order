import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DishCard from '../components/DishCard';
import { Dish } from '../interfaces/Dish';
import { Typography, useMediaQuery } from '@mui/material';

interface DishListProps {
    dishes: Dish[];
}

// Function to shuffle an array randomly
function shuffleArray(array: any[]) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}


export function DishList({ dishes }: DishListProps) {
    // Shuffle the array of dishes to get a random order
    const shuffledDishes = shuffleArray(dishes);

    // Select the first two dishes from the shuffled array
    const featuredDish1 = shuffledDishes[0];
    const featuredDish2 = shuffledDishes[1];

    const isPhone = useMediaQuery('(max-width:800px)');

    return (
        <div style={{ padding: '16px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container alignItems={'flex-start'} spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12}>
                        {/* Conditionally render the banner only if it's not a phone */}
                        {!isPhone && (
                            <div style={{ padding: '16px', backgroundColor: '#ffd980' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="h4" style={{ padding: '16px' }}>
                                        Go ahead and try these together!
                                    </Typography>
                                    <div style={{ width: 64 }} />
                                    <DishCard {...featuredDish1} />
                                    <Typography variant="h1" style={{ padding: '16px' }}>
                                        +
                                    </Typography>
                                    <DishCard {...featuredDish2} />
                                </div>
                            </div>)
                        }
                    </Grid>
                </Grid>

                {/* List the other dishes */
                    <Grid container alignItems={'flex-start'} spacing={{ xs: 2, md: 3 }}>
                        {shuffledDishes
                            .slice(2) // Skip the first two dishes
                            .map((dish, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                                    <DishCard {...dish} />
                                </Grid>
                            ))}
                    </Grid>
                }
            </Box>
        </div>
    );
}
