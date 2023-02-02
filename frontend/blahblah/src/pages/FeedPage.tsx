import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import VideoCard from "../components/video/VideoCard";
import Grid from "@mui/material/Grid";
import FeedList from "../components/feed/FeedList";

import { useSelector, useDispatch } from "react-redux";
import { FeedStateType } from "../model/feed/feedStateType";
import { fetchFeedData } from "../redux/modules/feed/feed-action";
import { useEffect, useState } from "react";

import { AppDispatch } from "../redux/configStore";

import EditorModal from "../components/feed/EditorModal";

import Button from "@mui/material/Button";

import CreateIcon from "@mui/icons-material/Create";

import { RootState } from "../redux/configStore";

const drawerWidth = 300;
let isInitial = true;

export default function FeedPage() {
  const dispatch = useDispatch<AppDispatch>();
  const feed = useSelector((state: RootState) => state.feed);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchFeedData());
      return;
    }
  }, [feed, dispatch]);

  // 모달 조작
  const [openEditorModal, setOpenEditorModal] = useState<boolean>(false);
  const onClickEditor = () => {
    setOpenEditorModal((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* 메인 페이지 영역 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Button
          onClick={onClickEditor}
          variant="outlined"
          startIcon={<CreateIcon />}
        >
          새 피드
        </Button>

        <br />
        <br />
        <FeedList feeds={feed.feeds} />

        {openEditorModal && (
          <EditorModal
            open={openEditorModal}
            setOpen={setOpenEditorModal}
            feed={{ title: "", content: "", feedId: null }}
            isEdit={false}
          />
        )}
      </Box>

      {/* 우측 컴포넌트 */}

      <Box sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Paper
          // variant="permanent"
          sx={{
            display: { xs: "none", md: "flex" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            ml: 5,
            p: 2,
          }}
        >
          {/* 컨텐츠 내용 */}
          <Grid container rowSpacing={3}>
            <h3>Latest Video</h3>
            <Grid item width={"100%"}>
              <VideoCard />
            </Grid>
            <Grid item width={"100%"}>
              <VideoCard />
            </Grid>
            <Grid item width={"100%"}>
              <VideoCard />
            </Grid>
            <Grid item width={"100%"}>
              <VideoCard />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
