import React from "react";

const ReviewsRow = ({ review }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{review?.name}</div>
          </div>
        </div>
      </td>
      <td>{review?.email}</td>
      <td>
        <div style={{ overflowWrap: "break-word" }}>{review?.message}</div>
      </td>
      <td>{review?.ratings}</td>
    </tr>
  );
};

export default ReviewsRow;
