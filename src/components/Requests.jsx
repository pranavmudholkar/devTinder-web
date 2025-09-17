import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "./userCard";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  console.log("requests", requests);
  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);
  if (!requests) return;

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 font-bold text-xl">
        No Connection Requests found
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoURL, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="m-4 p-4 justify-between items-center bg-base-300 flex w-1/2 mx-auto"
          >
            <div>
              <img
                alt="user-photo"
                className="w-20 h-20 rounded-full"
                src={photoURL}
              />
            </div>
            <div className="text-left mx-4 my-2 ">
              <h1 className="font-boldtext-xl">{firstName + " " + lastName}</h1>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex card-actions justify-between m-2">
              <button className="btn btn-primary">Reject</button>
              <button className="btn btn-secondary">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
