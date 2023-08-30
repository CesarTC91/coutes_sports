import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { TextField, Card, CardContent, Grid } from "@mui/material"

const FilterDate = () => {
  const [dateForm, setDateForm] = useState({
    dateFrom: Date | null,
    dateTo: Date | null,
    selected: String | Number
  }, {
    dateFrom: new Date(),
    dateTo: new Date(),
    selected: -1
  })

  return (
    <>
      <Card elevation={15}>
        <CardContent>
          <Grid direction='row' container spacing={2} my={2.5}>
            <Grid item xs={12} sm={12} xl={12} lg={12}>
              <DatePicker
                disableFuture
                label='Date From'
                openTo='year'
                views={['day', 'month', 'year']}
                value={dateForm.dateFrom}
                onChange={(newValue) => setDateForm({ ...dateForm, dateFrom: newValue })}
                renderInput={(params) => <TextField  {...params} />}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )

}

export default FilterDate