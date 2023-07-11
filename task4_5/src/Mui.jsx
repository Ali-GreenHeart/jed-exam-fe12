import { Badge, Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const MuiBadge = ({ }) => {
    return (
        <Box mt={5}>
            <Badge badgeContent={0} showZero color="secondary">
                <DeleteIcon />
            </Badge>

        </Box>
    )
}
export default MuiBadge
