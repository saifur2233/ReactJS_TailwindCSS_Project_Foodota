import React from "react";
import { FaTrashAlt, FaPenSquare } from "react-icons/fa";
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
      <td
        style={{
          width: "500px",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          wordBreak: "break-all",
        }}
      >
        {review?.message}
      </td>
      <td>{review?.ratings}</td>
      <td className="flex">
        <FaPenSquare className="text-accent" size="md"></FaPenSquare>
        <FaTrashAlt className="text-secondary" size="md"></FaTrashAlt>
      </td>
    </tr>
  );
};

export default ReviewsRow;
