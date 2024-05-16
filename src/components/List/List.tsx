import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

function List(){
    return(
        <div className={"classes.container"}>
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>
            {true ? (
                <div className={"classes.loading"}>
                    <CircularProgress size="5rem"/>
                </div>
            ) :
            (
                <FormControl>
                    <InputLabel>
                        type
                    </InputLabel>
                </FormControl>
            )
        }
        </div>
    )
}

export default List;