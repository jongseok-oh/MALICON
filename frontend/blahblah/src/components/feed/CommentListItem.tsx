import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CommentType } from "../../model/feed/commentType";
import { useEffect, useState } from "react";
import CommentRemoveDialog from "./CommentRemoveDialog";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentListItem: React.FC<{ comment: CommentType }> = (props) => {
  // 삭제 다이얼로그 조작
  const [openRemoveDialog, setopenRemoveDialog] = useState<boolean>(false);
  const handleClickOpen = () => {
    setopenRemoveDialog(true);
  };
  const handleCloseDialog = () => {
    setopenRemoveDialog(false);
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline", mr: 3 }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.comment.userId}
            </Typography>
            {props.comment.content}
          </React.Fragment>
        }
        secondary={props.comment.createDate}
      />
      <IconButton type="submit" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <CommentRemoveDialog
        open={openRemoveDialog}
        handleClose={handleCloseDialog}
        comment={props.comment}
      />
    </ListItem>
  );
};

export default CommentListItem;