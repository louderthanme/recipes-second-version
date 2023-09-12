import { Typography, InputAdornment, Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchBar } from "../../../utils/styledComponents";

const SearchBarBox = ({ placeholder, handleChange }) => (
    <Box px={2} py={1}>
        <Typography variant="h4" fontWeight='bold' mt={2} sx={{ color: 'black' }}> Welcome to Recipe Book</Typography>
        <StyledSearchBar
            variant="filled"
            fullWidth
            placeholder="Search"
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ display: 'flex', alignItems: 'center' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
            }}
        />
    </Box>
);

export default SearchBarBox;