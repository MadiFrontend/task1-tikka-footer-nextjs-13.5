import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { Item } from "@/constant/items";

interface TagListProps {
  tags: Item[];
  limit: number;
  moreLink: string;
}

const CategoriesList: React.FC<TagListProps> = ({ tags, limit, moreLink }) => {
  const displayedTags = tags.slice(0, limit);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {displayedTags.map((tag, index) => (
        <Box
          key={index}
          sx={{
            padding: "12px",
            backgroundColor: "rgba(0, 89, 98, 0.3)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {tag.title}
          </Typography>
        </Box>
      ))}
      
      {/* check the limit of showing tags  */}
      {tags.length > limit && (
        <Link href={moreLink} underline="none" sx={{ ml: 2 }}>
          <Button
            variant="text"
            size="small"
            sx={{ color: "#008C95", fontSize: "16px" }}
          >
            بیشتر...
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default CategoriesList;
