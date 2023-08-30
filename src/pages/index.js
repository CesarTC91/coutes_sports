import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import FilterDate from "@/components/Filter"

export default function Home() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FilterDate />
      </LocalizationProvider>
    </>
  )
}
