import { Typography, InputAdornment, Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchBar } from "../../../utils/styledComponents";

const SearchBarBox = ({ placeholder, handleChange }) => (
    <Box px={4} py={2}>
        <Typography variant="h3" fontWeight='bold' mt={2} mb={1}  sx={{ color: 'black' }}> Welcome to Recipe Book</Typography>
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