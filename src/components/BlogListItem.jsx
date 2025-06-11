import React from "react";

export default function BlogListItem(props) {
  return (
    <div className="our-blogs-list-item row gap-2">
      <div className="our-blogs-list-item-img col-3">
        <img src={blogImg2} alt="Thubnail" />
      </div>
      <div className="our-blogs-list-item-content col-9">
        <div className="our-blogs-list-item-meta row gap-4">
          <div className="our-blogs-list-item-meta-author">Admin</div>
          <div className="our-blogs-list-item-meta-date">November 13, 2024</div>
        </div>
        <div className="our-blogs-list-item-link pt-1">
          <h5>Read More</h5>
        </div>
      </div>
    </div>
  );
}
