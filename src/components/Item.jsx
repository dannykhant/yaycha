import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";

import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { formatRelative } from "date-fns";

export default function Item({ item, remove, primary, comment }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ mb: 2 }}>
      {primary && <Box sx={{ height: 50, bgcolor: green[500] }} />}
      <CardContent
        onClick={() => {
          if (comment) return false;
          navigate(`/comments/${item.id}`);
        }}
        sx={{ cursor: "pointer" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TimeIcon fontSize="10" color="success" />
            <Typography variant="caption" sx={{ color: green[500] }}>
              {formatRelative(item.created, new Date())}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={(e) => {
              remove(item.id);
              e.stopPropagation();
            }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>

        <Typography sx={{ my: 3 }}>{item.content}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <UserIcon fontSize="12" color="info" />
          <Typography variant="caption">{item.user.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
