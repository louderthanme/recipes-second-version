import { Chip, Box, TextField } from "@mui/material";
import { StyledTextField } from "../../../utils/styledComponents";
import { useEffect } from "react";

const TagForm = ({ tags, setTags, tagInput, setTagInput, handleAddTag, handleDeleteTag, existingTags }) => {

    useEffect(() => {
        if(existingTags.length > 0){
            setTags(existingTags)
        }
    }   , [existingTags])
    
    return(
        <Box>
            <StyledTextField
            label="Add Tags"
            variant="outlined"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            helperText="Press enter or comma to add tags."
            margin="normal"
        />
        <Box>
            {tags.map((tag) => (
                <Chip
                    key={tag}
                    label={tag}
                    onDelete={()=>handleDeleteTag(tag)}
                    style={{ margin: '4px' }}
                />
            ))}
        </Box>
        </Box>
    )
}

export default TagForm