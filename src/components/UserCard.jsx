import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, firstName, lastName, photoURL, about, age, gender } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/send" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {age && gender && <p>{age + " " + gender}</p>}
        <div className="flex card-actions justify-between m-2">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("rejected", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("accepted", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
