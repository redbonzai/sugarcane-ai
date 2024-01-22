import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { api } from "~/utils/api";
import toast from "react-hot-toast";

type DownloadButtonBase64Props = {
  base64image: string;
};

const DownloadButtonBase64: React.FC<DownloadButtonBase64Props> = ({
  base64image,
}) => {
  const handleDownload = () => {
    const dataUrl = base64image;
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "sugarcane-ai-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <IconButton
        onClick={handleDownload}
        sx={{
          margin: 1,
          borderRadius: 2,
        }}
      >
        <Tooltip title="Download Image">
          <DownloadForOfflineIcon
            sx={{ color: "var(--sugarhub-text-color)" }}
          />
        </Tooltip>
      </IconButton>
    </>
  );
};

export default DownloadButtonBase64;
